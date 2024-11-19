import { useState } from "react";

import { useDispatchFilterByKey } from "src/store/dispatch/dispatchCharacters";
import { useFilterByKeySelector } from "src/store/selector/characterSelectors";
import { FilterKey } from "src/types/filters";

type UseFilterCheckboxReturned = {
  isChecked: boolean;
  handleClick: () => void;
};

export default function useFilterCheckbox(
  filterKey: FilterKey,
  checkboxKey: string
): UseFilterCheckboxReturned {
  const filter = useFilterByKeySelector(filterKey);
  const dispatchFilterByKey = useDispatchFilterByKey();

  const [isChecked, setIsChecked] = useState(filter.valuesObject[checkboxKey]);

  const handleClick = () => {
    setIsChecked(!isChecked);

    const newFilter = {
      ...filter,
      valuesObject: { ...filter.valuesObject, [checkboxKey]: !isChecked },
    };

    dispatchFilterByKey({ key: filterKey, value: newFilter });
  };

  return { isChecked, handleClick };
}
