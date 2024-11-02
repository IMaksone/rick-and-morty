import { ReactNode } from "react";

import Filter from "./Filter";
import { FilterKeyType } from "src/constants/filtersShema";

import "./filtersBox.css";
import { useFilterContext } from "src/context/FilterContext";

type UseFiltersBoxType = () => ReactNode;

export const useFiltersBox: UseFiltersBoxType = () => {
  const { filterCircuit } = useFilterContext();

  const filterCircuitKeys = Object.keys(filterCircuit);

  const renderFilterList = filterCircuitKeys.map((key, i) => (
    // key ???
    <div key={i} className="filter">
      <Filter filter={filterCircuit[key]} filterKey={key as FilterKeyType} />
    </div>
  ));

  return renderFilterList;
};

export default useFiltersBox;
