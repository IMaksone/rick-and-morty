import { useState } from "react";
import PropTypes from 'prop-types'

import { useMyContext } from "../../../context";
import { throttle } from "../../../scripts";

export const Input = ({ filterId }) => {
  const { filters, setFilters } = useMyContext();
  const throttled = throttle(setFilters);

  const [value, setValue] = useState(filters[filterId].value);

  const handleChange = (e) => {
    setValue(e.target.value);

    const newFilters = { ...filters };
    newFilters[filterId].value = e.target.value;

    throttled(newFilters);
  };

  return (
    <div className="input-box">
      <span className="filter-title text-light">{filterId}</span>
      <input className="input" value={value} onChange={handleChange} />
    </div>
  );
};

Input.propTypes = {
  filterId: PropTypes.string.isRequired
}
