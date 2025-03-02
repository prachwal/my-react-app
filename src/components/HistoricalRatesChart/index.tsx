import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchHistoricalRates } from "../../slices/historicalSlice";
import { useTranslation } from "react-i18next";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { format } from "d3-format";
import "./style.scss";

interface HistoricalRatesChartProps {
  currencyCode: string;
  days: number;
}

const HistoricalRatesChart: React.FC<HistoricalRatesChartProps> = ({
  currencyCode,
  days,
}) => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const { historicalRates, loading, error } = useSelector(
    (state: RootState) => ({
      historicalRates: state.historicalRates.historicalRates,
      loading: state.historicalRates.loading,
      error: state.historicalRates.error,
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(fetchHistoricalRates({ currencyCode, days }));
  }, [dispatch, currencyCode, days]);

  if (loading) {
    return <div>{t("Loading")}</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const minRate = Math.min(
    ...historicalRates.map((rate: { mid: number }) => rate.mid),
  );
  const maxRate = Math.max(
    ...historicalRates.map((rate: { mid: number }) => rate.mid),
  );
  const margin = (maxRate - minRate) * 0.1;

  const formatYAxis = format(".3f");

  return (
    <div className="historical-rates-chart">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={historicalRates}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="effectiveDate" />
          <YAxis
            domain={[minRate - margin, maxRate + margin]}
            tickFormatter={formatYAxis}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="mid"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HistoricalRatesChart;
