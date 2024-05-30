import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { updateInvoice } from "../invoices/invoiceSlice";

const collectionApiUrl = "https://mock-server-k755.onrender.com/collections";

export const fetchCollections = createAsyncThunk(
  "collections/fetchCollections",
  async () => {
    const response = await axios.get(collectionApiUrl);
    return response.data;
  }
);

export const deleteCollectionByInvoiceNumber = createAsyncThunk(
  "collections/deleteCollectionByInvoiceNumber",
  async (invoiceNumber, { getState, dispatch }) => {
    const state = getState();
    const collectionsToDelete = state.collections.collections.filter(
      (collection) => collection.invoiceNumber === invoiceNumber
    );

    await Promise.all(
      collectionsToDelete.map((collection) =>
        dispatch(deleteCollection(collection.id)).unwrap()
      )
    );

    return collectionsToDelete.map((collection) => collection.id);
  }
);

export const createCollection = createAsyncThunk(
  "collections/createCollection",
  async (collection) => {
    const response = await axios.post(collectionApiUrl, collection);
    return response.data;
  }
);

export const updateCollection = createAsyncThunk(
  "collections/updateCollection",
  async ({ id, updatedData }) => {
    const response = await axios.patch(
      `${collectionApiUrl}/${id}`,
      updatedData
    );
    const updatedCollection = response.data;

    return updatedCollection;
  }
);

export const deleteCollection = createAsyncThunk(
  "collections/deleteCollection",
  async (id) => {
    await axios.delete(`${collectionApiUrl}/${id}`);
    return id;
  }
);

const collectionsSlice = createSlice({
  name: "collections",
  initialState: {
    collections: [],
    loading: false,
    error: null,
  },
  reducers: {
    updateInvoiceAmountPaid(state, action) {
      const { invoiceNumber } = action.payload;
      const invoiceToUpdate = state.invoices.find(
        (invoice) => invoice.invoiceNumber === invoiceNumber
      );
      if (invoiceToUpdate) {
        const collectionsTotal = state.collections.reduce(
          (total, collection) => {
            if (collection.invoiceNumber === invoiceNumber) {
              return total + collection.amount;
            }
            return total;
          },
          0
        );
        invoiceToUpdate.amountPaid = collectionsTotal;
        invoiceToUpdate.completionStatus = invoiceToUpdate.amountPaid <= 0;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCollections.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCollections.fulfilled, (state, action) => {
        state.loading = false;
        state.collections = action.payload;
      })
      .addCase(fetchCollections.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createCollection.fulfilled, (state, action) => {
        state.collections.push(action.payload);
      })
      .addCase(updateCollection.fulfilled, (state, action) => {
        const index = state.collections.findIndex(
          (collection) => collection.id === action.payload.id
        );
        if (index !== -1) {
          state.collections[index] = action.payload;
        }
      })
      .addCase(deleteCollection.fulfilled, (state, action) => {
        state.collections = state.collections.filter(
          (collection) => collection.id !== action.payload
        );
      })
      .addCase(deleteCollectionByInvoiceNumber.fulfilled, (state, action) => {
        state.collections = state.collections.filter(
          (collection) => !action.payload.includes(collection.id)
        );
      });
  },
});

export default collectionsSlice.reducer;
