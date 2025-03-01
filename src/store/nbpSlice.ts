import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ExchangeRate {
  currency: string;
  code: string;
  mid: number;
}

interface NbpState {
  exchangeRates: ExchangeRate[];
  loading: boolean;
  error: string | null;
}

const initialState: NbpState = {
  exchangeRates: [],
  loading: false,
  error: null,
};

export const fetchExchangeRates = createAsyncThunk(
  "nbp/fetchExchangeRates",
  async () => {
    const response = await fetch(
      "https://api.nbp.pl/api/exchangerates/tables/A?format=json",
    );
    const data = await response.json();
    return data[0].rates;
  },
);

const nbpSlice = createSlice({
  name: "nbp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeRates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExchangeRates.fulfilled, (state, action) => {
        state.loading = false;
        state.exchangeRates = action.payload;
      })
      .addCase(fetchExchangeRates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch exchange rates";
      });
  },
});

export default nbpSlice.reducer;
