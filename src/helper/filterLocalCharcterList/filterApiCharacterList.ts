import { FilterCircuitType } from "src/constants/filtersShema";
import { ApiCharacterType } from "src/types/character";
import getMatchedFilter from "./getMatchedFilter";

export default function filterApiCharacterList(
  apiCharacterList: ApiCharacterType[],
  activeFilterCircuit: FilterCircuitType
) {
  const filtered = apiCharacterList.filter((apiCharacter) => {
    return getMatchedFilter(apiCharacter, activeFilterCircuit);
  });

  return filtered;
}
