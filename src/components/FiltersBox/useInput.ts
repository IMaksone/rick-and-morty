import { useState } from "react";

import { useDispatchFilterByKey } from "src/store/dispatch/dispatchCharacters";
import { useFilterByKeySelector } from "src/store/selector/characterSelectors";
import { FilterKey } from "src/types/filters";

type UseInputReturned = {
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function useInput(filterKey: FilterKey): UseInputReturned {
  const filterByKey = useFilterByKeySelector(filterKey);
  const dispatchFilterByKey = useDispatchFilterByKey();

  const [value, setValue] = useState(filterByKey.value);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const targetValue = event.target.value;

    setValue(targetValue);

    const newFilter = { ...filterByKey, value: targetValue };

    dispatchFilterByKey({ key: filterKey, value: newFilter });
  };

  return {
    value,
    handleChange,
  };
}
