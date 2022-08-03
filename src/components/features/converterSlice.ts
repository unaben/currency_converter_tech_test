import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataSlice } from "../../interface/converter";

interface ConverterSliceState {
  currenciesData: DataSlice[];
  base: string;
  amount: number;
  convertTo: string;
  result: number;
  date: Date | null;
  pending: boolean;
  error: boolean;
}

const initialState: ConverterSliceState = {
  currenciesData: [],
  base: "USD",
  amount: 0,
  convertTo: "GBP",
  result: 0,
  date: null,
  pending: false,
  error: false,
};

const baseURL = `http://www.floatrates.com/daily/${initialState[
  "base"
].toLowerCase()}.json`;

export const getCurrency = createAsyncThunk<DataSlice[]>(
  "options/getCurrencyData",
  async () => {
    try {
      const response = await fetch(baseURL);
      const resData = response.json();
      return resData;
    } catch (error) {
      console.error(error);
    }
  }
);

export const converterSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<ConverterSliceState>) => {
      state.base = action.payload.base;
      state.amount = action.payload.amount;
      state.convertTo = action.payload.convertTo;
      state.result = action.payload.result;
      state.date = action.payload.date;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrency.pending, (state) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(getCurrency.fulfilled, (state, action) => {
      state.currenciesData = action.payload;
      state.pending = false;
    });
    builder.addCase(getCurrency.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
  },
});

export const { update } = converterSlice.actions;
export default converterSlice.reducer;
