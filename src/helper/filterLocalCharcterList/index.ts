import { FilterCircuitType } from "src/constants/filtersShema";
import { ApiCharacter } from "src/types/character";
import filterApiCharacterList from "./filterApiCharacterList";
import getActiveFilterCircuit from "./getActiveFilterCircuit";

const FilteredLocalCharacterList = (
  apiCharacterList: ApiCharacter[],
  filterCircuit: FilterCircuitType
) => {
  const activeFilterCircuit = getActiveFilterCircuit(filterCircuit);

  let filtered: ApiCharacter[] = apiCharacterList;

  if (isNeedFiltering(activeFilterCircuit)) {
    filtered = filterApiCharacterList(apiCharacterList, activeFilterCircuit);
  }

  return createLocalCharacterList(filtered);
};

export default FilteredLocalCharacterList;

const isNeedFiltering = (activeFilterCircuit: FilterCircuitType) => {
  const activeFilterCircuitKeys = Object.keys(activeFilterCircuit);

  return !!activeFilterCircuitKeys.length;
};

const createLocalCharacterList = (apiCharacterList: ApiCharacter[]) => {
  return apiCharacterList.map((character, index) => ({
    index: index,
    data: character,
  }));
};
