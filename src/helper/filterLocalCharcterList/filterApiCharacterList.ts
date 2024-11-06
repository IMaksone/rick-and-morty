import { FilterCircuitType } from "src/constants/filtersShema";
import { ApiCharacter } from "src/types/character";
import getMatchedFilter from "./getMatchedFilter";

export default function filterApiCharacterList(
  apiCharacterList: ApiCharacter[],
  activeFilterCircuit: FilterCircuitType
) {
  const filtered = apiCharacterList.filter((apiCharacter) => {
    return getMatchedFilter(apiCharacter, activeFilterCircuit);
  });

  return filtered;
}
