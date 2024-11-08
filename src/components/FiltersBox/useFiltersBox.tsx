import { ReactNode } from "react";

import Filter from "./Filter";
import { useFiltersDataSelector } from "src/store/selector/characterSelectors";
import { FilterKey } from "src/types/filters";

import "./filtersBox.css";

export default function useFiltersBox(): ReactNode {
  const filtersData = useFiltersDataSelector();

  const filterCircuitKeys = Object.keys(filtersData);

  const renderFilterList = filterCircuitKeys.map((key) => (
    <div key={key} className="filter">
      <Filter filter={filtersData[key]} filterKey={key as FilterKey} />
    </div>
  ));

  return renderFilterList;
}
