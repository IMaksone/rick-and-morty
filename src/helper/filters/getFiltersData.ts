import { ApiCharacter } from "src/types/character";
import { FiltersData } from "src/types/filters";

export default function getFiltersData(
  characters: ApiCharacter[],
  initFiltersData: FiltersData
): FiltersData {
  const filtersData = initFiltersData;

  const filterCallback = (character: ApiCharacter, filterKey: string) => {
    if (filtersData[filterKey].valuesObject) {
      const filter = filtersData[filterKey];

      filter.valuesObject[character[filterKey]] = false;
    }
  };

  const characterCallback = (character: ApiCharacter) => {
    for (const filterKey in filtersData) {
      filterCallback(character, filterKey);
    }
  };

  characters.forEach(characterCallback);

  return filtersData;
}
