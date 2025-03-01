import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { AppDispatch } from "../store";
import { RootState } from "../store";
import { fetchExchangeRates } from "../store/nbpSlice";
import DynamicTable from "./DynamicTable";
import "../styles/NbpTable.css";

const NbpTable: React.FC = () => {
  const { t } = useTranslation();
  const dispatch: AppDispatch = useDispatch();
  const { exchangeRates, loading, error } = useSelector(
    (state: RootState) => state.nbp,
  );
  const [currentPage, setCurrentPage] = useState(1);
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
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div>
      <DynamicTable
        data={exchangeRates}
        className="nbp-table"
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
      />
      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          {t("Previous")}
        </button>
        <span>
          {t("Page")} {currentPage} {t("of")} {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          {t("Next")}
        </button>
      </div>
    </div>
  );
};

export default NbpTable;
