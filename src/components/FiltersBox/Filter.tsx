import Input from "./Input";
import ToggleListWrapper from "./ToggleListWrapper";
import { FilterKeyType, FilterType } from "src/constants/filtersShema";

interface FilterInterface {
  filter: FilterType;
  filterKey: FilterKeyType;
}

export const Filter = ({ filter, filterKey }: FilterInterface) => {
  if (filter.type === "input") {
    return <Input filterKey={filterKey} />;
  } else {
    return <ToggleListWrapper filter={filter} filterKey={filterKey} />;
  }
};

export default Filter;
