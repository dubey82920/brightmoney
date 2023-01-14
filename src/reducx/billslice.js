import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deletBill = createAsyncThunk(
  "billing/delete",
  async ({ id }, { rejectWithValue }) => {
    try {
      console.log(id);
      const response = await axios.delete(`http://localhost:5000/bills/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const loadAllData = createAsyncThunk(
  "billing/alldata",
  async ({}, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/bills");
      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const searchCategorie = createAsyncThunk(
  "billing/search",
  async ({ Value }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/bills?q=${Value}`
      );
      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateBill = createAsyncThunk(
  "billing/search",
  async ({ formdata }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/bills/${formdata.id}`,
        formdata
      );
      return formdata;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const addBill = createAsyncThunk(
  "billing/search",
  async ({ formdata }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/bills`,
        formdata
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const billing = createSlice({
  name: "billing",
  initialState: {
    bills: null,
    error: "",
    loading: false,
  },
  extraReducers: {
    [loadAllData.pending]: (state, action) => {
      state.loading = true;
    },
    [loadAllData.fulfilled]: (state, action) => {
      state.loading = false;
      state.bills = action.payload;
    },
    [loadAllData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    [deletBill.pending]: (state, action) => {
      state.loading = true;
    },
    [deletBill.fulfilled]: (state, action) => {
      state.loading = false;
      const q = state.bills.filter((item) => item.id !== action.payload);
      state.bills = q;
    },
    [deletBill.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    [searchCategorie.pending]: (state, action) => {
      state.loading = true;
    },
    [searchCategorie.fulfilled]: (state, action) => {
      state.loading = false;
      state.bills = action.payload;
    },
    [searchCategorie.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    [updateBill.pending]: (state, action) => {
      state.loading = true;
    },
    [updateBill.fulfilled]: (state, action) => {
      state.loading = false;
      const p = state.bills.map((item,index) => (item.id === action.payload.id ? action.payload : item))
      console.log("kuh")
      state.bills = p;
    },
    [updateBill.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    [addBill.pending]: (state, action) => {
      state.loading = true;
    },
    [addBill.fulfilled]: (state, action) => {
      state.loading = false;
      state.bills.push(action.payload);
    },
    [addBill.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export default billing.reducer;
