import { ReactNode } from "react";

import Filter from "./Filter";
import useMyContext from "src/context/useMyContext";
import { FilterKeyType } from "src/constants/filtersShema";

import "./filtersBox.css";

type UseFiltersBoxType = () => ReactNode;

export const useFiltersBox: UseFiltersBoxType = () => {
  const { filterCircuit } = useMyContext();

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
