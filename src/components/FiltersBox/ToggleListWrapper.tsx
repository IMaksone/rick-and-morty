import { FilterType, FilterKeyType } from "src/constants/filtersShema";
import Toggle from "./Toggle";

interface ToggleListWrapperInterface {
  filter: FilterType;
  filterKey: FilterKeyType;
}

export const ToggleListWrapper = ({
  filter,
  filterKey
}: ToggleListWrapperInterface) => {
  const filterKeyList = Object.keys(filter.valuesObject);

  const renderCheckboxes = filterKeyList.map((key, i) => (
    // key ???
    <Toggle key={i} filterKey={filterKey} toggleKey={key} />
  ));

  return (
    <div className="toggle-list-wr">
      <span className="filter-title text-light">{filterKey}</span>
      {renderCheckboxes}
    </div>
  );
};

export default ToggleListWrapper;
