import { ApiCharacter } from "src/types/character";
import getLocalCharacters from "src/helper/characters/getLocalCharacters";
import filterApiCharactersIfNeed from "src/helper/characters/filterApiCharactersIfNeed";
import { FiltersData } from "src/types/filters";

export default function getNewFilteredCharacters(
  apiCharacters: ApiCharacter[],
  filtersData: FiltersData
) {
  const filteredCharacters = filterApiCharactersIfNeed(
    apiCharacters,
    filtersData
  );

  return filteredCharacters;
}
