import { useState } from "react";

import { FilterKeyType } from "src/constants/filtersShema";
import { useFilterContext } from "src/context/FilterContext";
import { getThrottledFunction } from "src/helper/throttle";

type UseInputType = (filterKey: FilterKeyType) => {
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const useInput: UseInputType = (filterKey) => {
  const { filterCircuit, setFilterCircuit } = useFilterContext();
  const throttled = getThrottledFunction(setFilterCircuit);

  const [value, setValue] = useState(filterCircuit[filterKey].value);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const targetValue = event.target.value

    setValue(targetValue);

    const newFilters = { ...filterCircuit };
    newFilters[filterKey].value = targetValue;

    throttled(newFilters);
  };

  return {
    value,
    handleChange
  };
};

export default useInput;
