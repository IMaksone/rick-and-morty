import { FilterCircuitType, FilterType } from "src/constants/filtersShema";
import { ApiCharacter } from "src/types/character";
import filterByValuesObject from "./filterByValuesObject";
import filterByValue from "./filterByValue";

export default function getMatchedFilter(
  apiCharacter: ApiCharacter,
  activeFilterCircuit: FilterCircuitType
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
  activeFilter: FilterType
) => {
  const isFilterValuesObject = !!activeFilter.valuesObject;

  if (isFilterValuesObject) {
    return filterByValuesObject(characterParam, activeFilter.valuesObject);
  } else {
    return filterByValue(characterParam, activeFilter.value);
  }
};
