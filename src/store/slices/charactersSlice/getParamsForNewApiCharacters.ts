import { ApiCharacter } from "src/types/character";
import getLocalCharacters from "src/helper/characters/getLocalCharacters";
import filterLocalCharactersIfNeed from "src/helper/characters/filterLocalCharactersIfNeed";
import getFiltersData from "src/helper/filters/getFiltersData";
import { FiltersData } from "src/types/filters";

export default function getParamsForNewApiCharacters(
  apiCharacters: ApiCharacter[],
  filtersData: FiltersData
) {
  const localCharacters = getLocalCharacters(apiCharacters);
  const filteredCharacters = filterLocalCharactersIfNeed(
    localCharacters,
    filtersData
  );

  const newFiltersData = getFiltersData(apiCharacters, filtersData);

  return {
    localCharacters,
    filteredCharacters,
    filtersData: newFiltersData,
  };
}
