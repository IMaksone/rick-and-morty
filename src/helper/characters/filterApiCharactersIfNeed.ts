import { ApiCharacter, LocalCharacter } from "src/types/character";
import { FiltersData } from "src/types/filters";
import filterApiCharacters from "./filterApiCharacters";
import getActiveFiltersData from "./getActiveFilterCircuit";
import getLocalCharacters from "./getLocalCharacters";

export default function filterApiCharactersIfNeed(
  apiCharacters: ApiCharacter[],
  filtersData: FiltersData
) {
  const localCharacters = getLocalCharacters(apiCharacters);

  const activeFiltersData = getActiveFiltersData(filtersData);

  let filtered: LocalCharacter[] = localCharacters;
  
  if (isNeedFiltering(activeFiltersData)) {
    const filteredApiCharacters = filterApiCharacters(
      apiCharacters,
      activeFiltersData
    );
    filtered = getLocalCharacters(filteredApiCharacters);

  }

  return filtered;
}

const isNeedFiltering = (activeFiltersData: FiltersData) => {
  const activeFiltersDataKeys = Object.keys(activeFiltersData);

  return !!activeFiltersDataKeys.length;
};
