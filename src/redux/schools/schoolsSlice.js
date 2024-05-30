import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const schoolsAPIUrl = `https://mock-server-k755.onrender.com/schools`;

const initialState = {
  schools: [],
  loading: false,
  error: null,
};

export const fetchSchools = createAsyncThunk(
  "schools/fetchSchools",
  async () => {
    const response = await axios.get(schoolsAPIUrl);
    return response.data;
  }
);

const schoolsSlice = createSlice({
  name: "schools",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchools.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSchools.fulfilled, (state, action) => {
        state.loading = false;
        state.schools = action.payload;
      })
      .addCase(fetchSchools.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default schoolsSlice.reducer;
