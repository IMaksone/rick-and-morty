import { useState } from "react";
import PropTypes from "prop-types";

import { useMyContext } from "../../../context";

export const Checkbox = ({ filterId, checkboxId }) => {
  const { filters, setFilters } = useMyContext();

  const [isChecked, setIsChecked] = useState(
    filters[filterId].values[checkboxId]
  );

  const handleClick = (e) => {
    setIsChecked(!isChecked);

    const newFilters = { ...filters };
    newFilters[filterId].values[checkboxId] = !isChecked;

    setFilters(newFilters);
  };

  return (
    <div
      className={`checkbox ${isChecked ? "checkbox-checked" : ""}`}
      onClick={handleClick}
    >
      <span className="checkbox-title">{checkboxId}</span>
    </div>
  );
};

Checkbox.propTypes = {
  filterId: PropTypes.string.isRequired,
  checkboxId: PropTypes.string.isRequired
} 
