import { LocalCharacter } from "src/types/character";
import { FiltersData } from "src/types/filters";
import filterLocalCharacters from "./filterApiCharacterList";
import getActiveFiltersData from "./getActiveFilterCircuit";

export default function filterLocalCharactersIfNeed(
  localCharacters: LocalCharacter[],
  filtersData: FiltersData
) {
  const activeFiltersData = getActiveFiltersData(filtersData);

  let filtered: LocalCharacter[] = localCharacters;

  if (isNeedFiltering(activeFiltersData)) {
    filtered = filterLocalCharacters(localCharacters, activeFiltersData);
  }

  return filtered;
}

const isNeedFiltering = (activeFiltersData: FiltersData) => {
  const activeFiltersDataKeys = Object.keys(activeFiltersData);

  return !!activeFiltersDataKeys.length;
};
