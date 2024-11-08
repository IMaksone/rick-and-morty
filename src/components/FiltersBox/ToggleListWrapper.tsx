import { Filter, FilterKey } from "src/types/filters";
import Toggle from "./Toggle";

interface ToggleListWrapperProps {
  filter: Filter;
  filterKey: FilterKey;
}

export default function ToggleListWrapper({
  filter,
  filterKey,
}: ToggleListWrapperProps) {
  const filterKeyList = Object.keys(filter.valuesObject);

  const renderCheckboxes = filterKeyList.map((key) => (
    <Toggle key={key} filterKey={filterKey} toggleKey={key} />
  ));

  return (
    <div className="toggle-list-wr">
      <span className="filter-title text-light">{filterKey}</span>
      {renderCheckboxes}
    </div>
  );
}
