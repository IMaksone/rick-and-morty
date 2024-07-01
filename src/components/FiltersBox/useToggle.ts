import { useState } from "react";

import { FilterKeyType } from "src/constants/filtersShema";
import { useMyContext } from "src/context/useMyContext";

type UseFilterCheckboxType = (
  filterKey: FilterKeyType,
  checkboxKey: string
) => { isChecked: boolean; handleClick: () => void };

export const useFilterCheckbox: UseFilterCheckboxType = (
  filterKey,
  checkboxKey
) => {
  const { filterCircuit, setFilterCircuit } = useMyContext();

  const [isChecked, setIsChecked] = useState(
    filterCircuit[filterKey].valuesObject[checkboxKey]
  );

  const handleClick = () => {
    setIsChecked(!isChecked);

    const newFilters = { ...filterCircuit };
    newFilters[filterKey].valuesObject[checkboxKey] = !isChecked;

    setFilterCircuit(newFilters);
  };

  return { isChecked, handleClick };
};

export default useFilterCheckbox;
