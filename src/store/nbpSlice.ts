import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ExchangeRate {
  currency: string;
  code: string;
  mid: number;
  [key: string]: string | number; // Dodaj sygnaturę indeksu
}

interface HistoricalRate {
  effectiveDate: string;
  mid: number;
}

interface NbpState {
  exchangeRates: ExchangeRate[];
  historicalRates: HistoricalRate[];
  loading: boolean;
  historicalLoading: boolean;
  error: string | null;
  historicalError: string | null;
}

const initialState: NbpState = {
  exchangeRates: [],
  historicalRates: [],
  loading: false,
  historicalLoading: false,
  error: null,
  historicalError: null,
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

export const fetchHistoricalRates = createAsyncThunk(
  "nbp/fetchHistoricalRates",
  async ({ currencyCode, days }: { currencyCode: string; days: number }) => {
    const response = await fetch(
      `https://api.nbp.pl/api/exchangerates/rates/A/${currencyCode}/last/${days}?format=json`,
    );
    const data = await response.json();
    return data.rates;
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
      })
      .addCase(fetchHistoricalRates.pending, (state) => {
        state.historicalLoading = true;
        state.historicalError = null;
      })
      .addCase(fetchHistoricalRates.fulfilled, (state, action) => {
        state.historicalLoading = false;
        state.historicalRates = action.payload;
      })
      .addCase(fetchHistoricalRates.rejected, (state, action) => {
        state.historicalLoading = false;
        state.historicalError =
          action.error.message || "Failed to fetch historical rates";
      });
  },
});

export default nbpSlice.reducer;
