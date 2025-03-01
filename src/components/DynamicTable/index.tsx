import React from "react";
import { useTranslation } from "react-i18next";
import "./DynamicTable.css";

interface DynamicTableProps {
  data: { [key: string]: string | number }[];
  className?: string;
  itemsPerPage?: number;
  currentPage: number;
  onRowClick?: (currencyCode: string) => void;
  selectedCurrency?: string | null; // Dodaj właściwość selectedCurrency
}

const DynamicTable: React.FC<DynamicTableProps> = ({
  data,
  className,
  itemsPerPage = 10,
  currentPage,
  onRowClick,
  selectedCurrency,
}) => {
  const { t } = useTranslation();

  if (data.length === 0) {
    return <div>{t("No data available")}</div>;
  }

  const headers = Object.keys(data[0]);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <table className={className}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{t(header)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {paginatedData.map((item, index) => (
          <tr
            key={index}
            onClick={() =>
              onRowClick &&
              typeof item.code === "string" &&
              onRowClick(item.code)
            }
            className={`${onRowClick ? "pointer" : "default"} ${
              selectedCurrency === item.code ? "selected" : "transparent"
            }`}
          >
            {headers.map((header) => (
              <td key={header}>{item[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
