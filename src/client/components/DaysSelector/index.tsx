import React from "react";
import { useTranslation } from "react-i18next";
import "./style.scss";

interface DaysSelectorProps {
  days: number;
  onDaysChange: (days: number) => void;
}

const DaysSelector: React.FC<DaysSelectorProps> = ({ days, onDaysChange }) => {
  const { t } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onDaysChange(Number(event.target.value));
  };

  return (
    <div className="days-selector">
      <label htmlFor="days-select">{t("Choose days")}:</label>
      <select id="days-select" value={days} onChange={handleChange}>
        {[3, 10, 17, 24, 31, 38, 45, 52, 59, 66, 73, 80, 87, 94, 101].map(
          (d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ),
        )}
      </select>
    </div>
  );
};

export default DaysSelector;
