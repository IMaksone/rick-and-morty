import { ApiCharacter } from "src/types/character";
import { FilterKey, FiltersData } from "src/types/filters";

export default function getFiltersData(
  characters: ApiCharacter[],
  initFiltersData: FiltersData
): FiltersData {
  const filters = initFiltersData;
  const filterKeys = Object.keys(filters);

  forEachCharacterCallback.bind({ filterKeys });

  characters.forEach(forEachCharacterCallback);

  return filters;
}

function forEachFilterCallback(filterKey: FilterKey) {
  const { filters, character } = this;

  if (filters[filterKey].valuesObject) {
    filters[filterKey].valuesObject[character[filterKey]] = false;
  }
}

function forEachCharacterCallback(character: ApiCharacter) {
  forEachFilterCallback.bind({ character });

  this.filterKeys.forEach(forEachFilterCallback);
}
