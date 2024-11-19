import { SliceSeter } from "../types";
import { CharactersState } from "src/store/types";
import { ApiCharacter } from "src/types/character";
import { Filter, FilterKey } from "src/types/filters";
import getNewFilteredCharacters from "./getNewFilteredCharacters";
import mutateState from "../mutateState";
import filterApiCharactersIfNeed from "src/helper/characters/filterApiCharactersIfNeed";

type SetApiCharactersPayload = {
  nextApiCharacterEndpoint: string;
  apiCharacters: ApiCharacter[];
};
type SetApiCharacters = SliceSeter<CharactersState, SetApiCharactersPayload>;

const setApiCharacters: SetApiCharacters = (state, { payload }) => {
  const filteredCharacters = getNewFilteredCharacters(
    payload.apiCharacters,
    state.filtersData
  );

  const newState = {
    filteredCharacters,
    apiCharacters: payload.apiCharacters,
    nextApiCharacterEndpoint: payload.nextApiCharacterEndpoint,
  };

  mutateState(state, newState);

  return state;
};

const addApiCharacters: SetApiCharacters = (state, { payload }) => {
  const newApiCharacters = [...state.apiCharacters, ...payload.apiCharacters];

  const filteredCharacters = getNewFilteredCharacters(
    newApiCharacters,
    state.filtersData
  );

  const newState = {
    filteredCharacters,
    nextApiCharacterEndpoint: payload.nextApiCharacterEndpoint,
    apiCharacters: newApiCharacters,
  };

  mutateState(state, newState);

  return state;
};

type SetFilterByKey = SliceSeter<
  CharactersState,
  { key: FilterKey; value: Filter }
>;

const setFilterByKey: SetFilterByKey = (state, { payload }) => {
  const newFiltersData = {
    ...state.filtersData,
    [payload.key]: payload.value,
  };

  const filteredCharacters = filterApiCharactersIfNeed(
    state.apiCharacters,
    newFiltersData
  );

  const newState = {
    filteredCharacters,
    filtersData: newFiltersData,
  };

  mutateState(state, newState);

  return state;
};

export { setApiCharacters, addApiCharacters, setFilterByKey };
