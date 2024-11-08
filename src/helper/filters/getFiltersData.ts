import { ApiCharacter } from "src/types/character";
import { FiltersData } from "src/types/filters";

export default function getFiltersData(
  characters: ApiCharacter[],
  initFiltersData: FiltersData
): FiltersData {
  const filtersData = initFiltersData;

  const characterCallback = (character: ApiCharacter) => {
    for (const filterKey in filtersData) {
      if (filtersData[filterKey].valuesObject) {
        const filter = filtersData[filterKey];

        filter.valuesObject[character[filterKey]] = false;
      }
    }
  };

  characters.forEach(characterCallback);

  return filtersData;
}
