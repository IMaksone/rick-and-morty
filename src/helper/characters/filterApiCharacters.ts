import { ApiCharacter } from "src/types/character";
import getMatchedFilter from "./getMatchedFilter";
import { FiltersData } from "src/types/filters";

export default function filterApiCharacters(
  apiCharacters: ApiCharacter[],
  activeFiltersData: FiltersData
) {
  const filtered = apiCharacters.filter((apiCharacter) => {
    return getMatchedFilter(apiCharacter, activeFiltersData);
  });

  return filtered;
}
