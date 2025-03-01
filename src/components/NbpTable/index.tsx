import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { RootState } from "../../store";
import { fetchExchangeRates } from "./nbpSlice";
import DynamicTable from "../DynamicTable";
import "./NbpTable.css";

const NbpTable: React.FC = () => {
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
    return <div>Loading...</div>;
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
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default NbpTable;
