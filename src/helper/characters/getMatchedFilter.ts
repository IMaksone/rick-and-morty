import { ApiCharacter } from "src/types/character";
import filterByValue from "./filterByValue";
import { Filter, FiltersData } from "src/types/filters";
import filterByValuesObject from "./filterByValuesObject";

export default function getMatchedFilter(
  apiCharacter: ApiCharacter,
  activeFilterCircuit: FiltersData
) {
  const activeFilterCircuitKeys = Object.keys(activeFilterCircuit);

  const searchForMatchesCallback = (filterKey: string) => {
    const characterParam = apiCharacter[filterKey];
    const activeFilter = activeFilterCircuit[filterKey];

    return !!chooseFilteringType(characterParam, activeFilter);
  };

  return !!activeFilterCircuitKeys.find(searchForMatchesCallback);
}

const chooseFilteringType = (
  characterParam: string,
  activeFilter: Filter
) => {
  const isFilterValuesObject = !!activeFilter.valuesObject;

  if (isFilterValuesObject) {
    return filterByValuesObject(characterParam, activeFilter.valuesObject);
  } else {
    return filterByValue(characterParam, activeFilter.value);
  }
};
