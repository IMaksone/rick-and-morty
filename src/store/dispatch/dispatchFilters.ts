import { FiltersState } from "../types";
import filtersSlice from "../slices/filtersSlice";
import createUseStoreDispatch from "./common/createUseStoreDispatch";

const {
  setGenderFilter,
  setNameFilter,
  setSpeciesFilter,
  setStatusFilter,
  setTypeFilter,
} = filtersSlice.actions;

const useDispatchGenderFilter =
  createUseStoreDispatch<FiltersState>(setGenderFilter);

const useDispatchNameFilter =
  createUseStoreDispatch<FiltersState>(setNameFilter);

const useDispatchSpeciesFilter =
  createUseStoreDispatch<FiltersState>(setSpeciesFilter);

const useDispatchStatusFilter =
  createUseStoreDispatch<FiltersState>(setStatusFilter);

const useDispatchTypeFilter =
  createUseStoreDispatch<FiltersState>(setTypeFilter);

export {
  useDispatchGenderFilter,
  useDispatchNameFilter,
  useDispatchSpeciesFilter,
  useDispatchStatusFilter,
  useDispatchTypeFilter,
};
