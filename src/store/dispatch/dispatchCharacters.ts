import { Filter } from "src/types/filters";
import charactersSlice from "../slices/charactersSlice";
import createUseStoreDispatch from "./common/createUseStoreDispatch";
import { ApiCharacter } from "src/types/character";

const {
  setApiCharacters,
  setGenderFilter,
  setNameFilter,
  setSpeciesFilter,
  setStatusFilter,
  setTypeFilter,
} = charactersSlice.actions;

const useDispatchApiCharacters =
  createUseStoreDispatch<ApiCharacter[]>(setApiCharacters);

const useDispatchGenderFilter = createUseStoreDispatch<Filter>(setGenderFilter);

const useDispatchNameFilter = createUseStoreDispatch<Filter>(setNameFilter);

const useDispatchSpeciesFilter =
  createUseStoreDispatch<Filter>(setSpeciesFilter);

const useDispatchStatusFilter = createUseStoreDispatch<Filter>(setStatusFilter);

const useDispatchTypeFilter = createUseStoreDispatch<Filter>(setTypeFilter);

export {
  useDispatchApiCharacters,
  useDispatchGenderFilter,
  useDispatchNameFilter,
  useDispatchSpeciesFilter,
  useDispatchStatusFilter,
  useDispatchTypeFilter,
};
