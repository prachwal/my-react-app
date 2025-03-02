import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { fetchHistoricalRates } from "../../slices/historicalSlice";
import { useTranslation } from "react-i18next";
import "./style.scss";

interface HistoricalRatesTableProps {
  currencyCode: string;
  days: number;
}

const HistoricalRatesTable: React.FC<HistoricalRatesTableProps> = ({
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

  return (
    <div className="historical-rates-table-container">
      <table className="historical-rates-table">
        <thead>
          <tr>
            <th>{t("Date")}</th>
            <th>{t("Exchange Rate")}</th>
          </tr>
        </thead>
        <tbody>
          {historicalRates.map((rate) => (
            <tr key={rate.effectiveDate}>
              <td>{rate.effectiveDate}</td>
              <td>{rate.mid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricalRatesTable;
