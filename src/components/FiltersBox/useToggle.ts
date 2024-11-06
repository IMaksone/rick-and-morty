import { useState } from "react";

import { FilterKeyType } from "src/constants/filtersShema";
import { useFilterContext } from "src/context/FilterContext";

type UseFilterCheckboxReturned = {
  isChecked: boolean;
  handleClick: () => void;
};

export default function useFilterCheckbox(
  filterKey: FilterKeyType,
  checkboxKey: string
): UseFilterCheckboxReturned {
  const { filterCircuit, setFilterCircuit } = useFilterContext();

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
}
