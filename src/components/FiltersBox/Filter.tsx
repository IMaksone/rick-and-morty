import Input from "./Input";
import ToggleListWrapper from "./ToggleListWrapper";
import { FilterKeyType, FilterType } from "src/constants/filtersShema";

interface FilterProps {
  filter: FilterType;
  filterKey: FilterKeyType;
}

export default function Filter({ filter, filterKey }: FilterProps) {
  if (filter.type === "input") {
    return <Input filterKey={filterKey} />;
  } else {
    return <ToggleListWrapper filter={filter} filterKey={filterKey} />;
  }
}
