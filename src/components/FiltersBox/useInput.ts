import { useState } from "react";

import { FilterKeyType } from "src/constants/filtersShema";
import { useMyContext } from "src/context/useMyContext";
import { throttle } from "src/helper";

type UseInputType = (filterKey: FilterKeyType) => {
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const useInput: UseInputType = (filterKey) => {
  const { filterCircuit, setFilterCircuit } = useMyContext();
  const throttled = throttle(setFilterCircuit);

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
