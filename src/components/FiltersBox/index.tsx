import useFiltersBox from "./useFiltersBox";

import "./filtersBox.css";

export const FiltersBox = () => {
  const renderFilterList = useFiltersBox();

  return (
    <div className="filters-box">
      <div className="filter-list">{renderFilterList}</div>
    </div>
  );
};

export default FiltersBox;
