import { Filter, FilterKey } from "src/types/filters";
import Input from "./Input";
import ToggleListWrapper from "./ToggleListWrapper";

interface FilterProps {
  filter: Filter;
  filterKey: FilterKey;
}

export default function FilterComponent({ filter, filterKey }: FilterProps) {
  if (filter.type === "input") {
    return <Input filterKey={filterKey} />;
  } else {
    return <ToggleListWrapper filter={filter} filterKey={filterKey} />;
  }
}
