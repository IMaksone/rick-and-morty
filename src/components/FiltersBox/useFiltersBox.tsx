import { ReactNode } from "react";

import Filter from "./Filter";
import { FilterKeyType } from "src/constants/filtersShema";
import { useFilterContext } from "src/context/FilterContext";

import "./filtersBox.css";

export default function useFiltersBox(): ReactNode {
  const { filterCircuit } = useFilterContext();

  const filterCircuitKeys = Object.keys(filterCircuit);

  const renderFilterList = filterCircuitKeys.map((key) => (
    <div key={key} className="filter">
      <Filter filter={filterCircuit[key]} filterKey={key as FilterKeyType} />
    </div>
  ));

  return renderFilterList;
}
