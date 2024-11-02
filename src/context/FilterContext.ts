import { createContext, useContext } from "react";

import { FILTER_CIRCUIT, FilterCircuitType } from "src/constants/filtersShema";

type ContextProps = {
  filterCircuit: FilterCircuitType;
  setFilterCircuit: (filterCircuit: FilterCircuitType) => void;
};

const contextProps: ContextProps = {
  filterCircuit: FILTER_CIRCUIT,
  setFilterCircuit: () => {},
};

const FilterContext = createContext(contextProps);
export default FilterContext;

export const useFilterContext = () => {
  const data = useContext(FilterContext);

  return data;
};
