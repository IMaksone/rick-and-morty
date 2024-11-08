import { SliceSeter } from "../types";
import { CharactersState } from "src/store/types";
import { ApiCharacter } from "src/types/character";
import getLocalCharacters from "src/helper/characters/getLocalCharacters";
import filterLocalCharactersIfNeed from "src/helper/characters/filterLocalCharactersIfNeed";
import getFiltersData from "src/helper/filters/getFiltersData";
import { Filter, FilterKey } from "src/types/filters";

const setApiCharacters: SliceSeter<CharactersState, ApiCharacter[]> = (
  state,
  { payload }
) => {
  const localCharacters = getLocalCharacters(payload);
  const filteredCharacters = filterLocalCharactersIfNeed(
    localCharacters,
    state.filtersData
  );

  const filtersData = getFiltersData(payload, state.filtersData);

  return {
    ...state,
    localCharacters,
    filteredCharacters,
    filtersData,
  };
};

type SetFilterByKey = SliceSeter<CharactersState, { key: FilterKey; value: Filter }>;

const setFilterByKey: SetFilterByKey = (state, { payload }) => {
  const newFiltersData = {
    ...state.filtersData,
    [payload.key]: payload.value,
  };

  const filteredCharacters = filterLocalCharactersIfNeed(
    state.localCharacters,
    newFiltersData
  );

  return {
    ...state,
    filteredCharacters,
    filtersData: newFiltersData,
  };
};

export {
  setApiCharacters,
  setFilterByKey,
};
