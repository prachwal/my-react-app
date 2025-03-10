import React from "react";
import { useTranslation } from "react-i18next";
import "./style.scss";

interface CurrencyFilterProps {
  filterText: string;
  onFilterTextChange: (text: string) => void;
}

const CurrencyFilter: React.FC<CurrencyFilterProps> = ({
  filterText,
  onFilterTextChange,
}) => {
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onFilterTextChange(event.target.value);
  };

  return (
    <div className="currency-filter">
      <label htmlFor="currency-filter-input">{t("Filter currencies")}:</label>
      <input
        id="currency-filter-input"
        type="text"
        value={filterText}
        onChange={handleChange}
        placeholder={t("Enter currency name or code") || ""}
      />
    </div>
  );
};

export default CurrencyFilter;
