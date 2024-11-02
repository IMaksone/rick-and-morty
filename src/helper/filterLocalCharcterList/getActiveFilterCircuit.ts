import { FilterCircuitType, FilterType } from "src/constants/filtersShema";

export default function getActiveFilterCircuit(
  filterCircuit: FilterCircuitType
) {
  let activeFilterCircuit: FilterCircuitType = {};

  const filterCircuitKeys = Object.keys(filterCircuit);

  filterCircuitKeys.forEach((key) => {
    const filter = filterCircuit[key];

    if (isFilterActive(filter)) {
      activeFilterCircuit[key] = filter;
    } else if (filter.value) {
      activeFilterCircuit[key] = filter;
    }
  });

  return activeFilterCircuit;
}

const isFilterActive = (filter: FilterType) => {
  if (filter.valuesObject) {
    const valuesKeys = Object.keys(filter.valuesObject);

    return (
      filter.valuesObject && valuesKeys.find((k) => filter.valuesObject[k])
    );
  }
  return false;
};
