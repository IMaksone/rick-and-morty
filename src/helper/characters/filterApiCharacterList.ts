import { LocalCharacter } from "src/types/character";
import getMatchedFilter from "./getMatchedFilter";
import { FiltersData } from "src/types/filters";

export default function filterLocalCharacters(
  localCharacters: LocalCharacter[],
  activeFiltersData: FiltersData
) {
  const filtered = localCharacters.filter((localCharacter) => {
    return getMatchedFilter(localCharacter.data, activeFiltersData);
  });

  return filtered;
}
