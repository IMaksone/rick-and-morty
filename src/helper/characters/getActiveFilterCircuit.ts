import { Filter, FiltersData } from "src/types/filters";

export default function getActiveFiltersData(filterCircuit: FiltersData) {
  let activeFilterCircuit: FiltersData = {};

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

const isFilterActive = (filter: Filter) => {
  if (filter.valuesObject) {
    const valuesKeys = Object.keys(filter.valuesObject);

    return (
      filter.valuesObject && valuesKeys.find((k) => filter.valuesObject[k])
    );
  }
  return false;
};
