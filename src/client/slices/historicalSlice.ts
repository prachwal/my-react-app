import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface HistoricalRate {
  effectiveDate: string;
  mid: number;
}

interface HistoricalRatesState {
  historicalRates: HistoricalRate[];
  loading: boolean;
  error: string | null;
}

const initialState: HistoricalRatesState = {
  historicalRates: [],
  loading: false,
  error: null,
};

export const fetchHistoricalRates = createAsyncThunk(
  "historicalRates/fetchHistoricalRates",
  async ({ currencyCode, days }: { currencyCode: string; days: number }) => {
    const response = await fetch(
      `https://api.nbp.pl/api/exchangerates/rates/A/${currencyCode}/last/${days}?format=json`,
    );
    const data = await response.json();
    return data.rates;
  },
);

const historicalRatesSlice = createSlice({
  name: "historicalRates",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistoricalRates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHistoricalRates.fulfilled, (state, action) => {
        state.loading = false;
        state.historicalRates = action.payload;
      })
      .addCase(fetchHistoricalRates.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Failed to fetch historical rates";
      });
  },
});

export default historicalRatesSlice.reducer;
