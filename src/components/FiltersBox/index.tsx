import useFiltersBox from "./useFiltersBox";

import "./filtersBox.css";

export default function FiltersBox() {
  const renderFilterList = useFiltersBox();

  return (
    <div className="filters-box">
      <div className="filter-list">{renderFilterList}</div>
    </div>
  );
}
