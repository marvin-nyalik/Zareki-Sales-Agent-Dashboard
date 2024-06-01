import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { deleteCollectionByInvoiceNumber } from "../collections/collectionSlice";

const invoiceAPIUrl = `https://mock-server-k755.onrender.com/invoices`;

const initialState = {
  invoices: [],
  loading: false,
  error: null,
};

export const fetchInvoices = createAsyncThunk(
  "invoices/fetchInvoices",
  async () => {
    const response = await axios.get(invoiceAPIUrl);
    return response.data;
  }
);

export const addInvoice = createAsyncThunk(
  "invoices/createInvoice",
  async (newInvoice) => {
    const response = await axios.post(invoiceAPIUrl, newInvoice);
    return response.data;
  }
);

export const updateInvoice = createAsyncThunk(
  "invoices/updateInvoice",
  async (updatedInvoice) => {
    const { id, ...fields } = updatedInvoice;
    const response = await axios.patch(`${invoiceAPIUrl}/${id}`, fields);
    return response.data;
  }
);

export const deleteInvoice = createAsyncThunk(
  "invoices/deleteInvoice",
  async (invoiceId, { dispatch, getState }) => {
    const state = getState();
    const invoiceToDelete = state.invoices.invoices.find(
      (invoice) => invoice.id === invoiceId
    );
    if (!invoiceToDelete) {
      throw new Error("Invoice not found");
    }

    await dispatch(
      deleteCollectionByInvoiceNumber(invoiceToDelete.invoiceNumber)
    );
    await axios.delete(`${invoiceAPIUrl}/${invoiceId}`);
    return invoiceId;
  }
);

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.loading = false;
        state.invoices = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addInvoice.fulfilled, (state, action) => {
        state.invoices.push(action.payload);
      })
      .addCase(updateInvoice.fulfilled, (state, action) => {
        const index = state.invoices.findIndex(
          (invoice) => invoice.id === action.payload.id
        );
        state.invoices[index] = action.payload;
      })
      .addCase(deleteInvoice.fulfilled, (state, action) => {
        state.invoices = state.invoices.filter(
          (invoice) => invoice.id !== action.payload
        );
      });
  },
});

export default invoicesSlice.reducer;
