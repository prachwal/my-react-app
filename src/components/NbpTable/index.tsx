import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { RootState } from "../../app/store";
import { fetchExchangeRates } from "../../store/nbpSlice";
import DynamicTable from "../DynamicTable";
import HistoricalRatesChart from "../HistoricalRatesChart";
import HistoricalRatesTable from "../HistoricalRatesTable";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useTranslation } from "react-i18next";
import "react-tabs/style/react-tabs.css";
import "./style.css";

interface NbpTableProps {
  days: number;
}

const NbpTable: React.FC<NbpTableProps> = ({ days }) => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const { exchangeRates, loading, error } = useSelector(
    (state: RootState) => state.nbp,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchExchangeRates());
  }, [dispatch]);

  if (loading) {
    return <div>{t("Loading")}</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const totalPages = Math.ceil(exchangeRates.length / itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    setSelectedCurrency(null); // Usuń zaznaczenie i tabelkę z danymi historycznymi
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    setSelectedCurrency(null); // Usuń zaznaczenie i tabelkę z danymi historycznymi
  };

  const handleRowClick = (currencyCode: string) => {
    setSelectedCurrency(currencyCode);
  };

  return (
    <div>
      <div className="nbp-table-container">
        <div className="nbp-table">
          <DynamicTable
            data={exchangeRates}
            className="nbp-table"
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onRowClick={handleRowClick}
            selectedCurrency={selectedCurrency} // Przekaż wybraną walutę do DynamicTable
            totalPages={totalPages}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
          />
        </div>
        {selectedCurrency && (
          <div className="historical-rates-container">
            <Tabs>
              <TabList>
                <Tab>{t("Chart")}</Tab>
                <Tab>{t("Table")}</Tab>
              </TabList>

              <TabPanel>
                <HistoricalRatesChart
                  currencyCode={selectedCurrency}
                  days={days}
                />
              </TabPanel>
              <TabPanel>
                <HistoricalRatesTable
                  currencyCode={selectedCurrency}
                  days={days}
                />
              </TabPanel>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
};

export default NbpTable;
