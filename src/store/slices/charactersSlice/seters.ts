import { SliceSeter } from "../types";
import { CharactersState } from "src/store/types";
import { ApiCharacter } from "src/types/character";
import filterLocalCharactersIfNeed from "src/helper/characters/filterLocalCharactersIfNeed";
import { Filter, FilterKey } from "src/types/filters";
import getParamsForNewApiCharacters from "./getParamsForNewApiCharacters";
import mutateState from "../mutateState";

type SetApiCharactersPayload = {
  nextApiCharacterEndpoint: string;
  apiCharacters: ApiCharacter[];
};
type SetApiCharacters = SliceSeter<CharactersState, SetApiCharactersPayload>;

const setApiCharacters: SetApiCharacters = (state, { payload }) => {
  const params = getParamsForNewApiCharacters(
    payload.apiCharacters,
    state.filtersData
  );

  const newState = {
    ...params,
    apiCharacters: payload.apiCharacters,
    nextApiCharacterEndpoint: payload.nextApiCharacterEndpoint,
  };

  mutateState(state, newState);

  return state;
};

const addApiCharacters: SetApiCharacters = (state, { payload }) => {
  const newApiCharacters = [...state.apiCharacters, ...payload.apiCharacters];

  const params = getParamsForNewApiCharacters(
    newApiCharacters,
    state.filtersData
  );

  const newState = {
    ...params,
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

  const filteredCharacters = filterLocalCharactersIfNeed(
    state.localCharacters,
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
