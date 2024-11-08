import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAMES } from "../enums";
import { CharactersState } from "src/store/types";
import { FiltersData } from "src/types/filters";
import { setApiCharacters, addApiCharacters, setFilterByKey } from "./seters";

const initialFiltersData: FiltersData = {
  name: {
    type: "input",
    value: "",
  },
  type: { type: "input", value: "" },
  status: { type: "checkbox", valuesObject: {} },
  species: { type: "checkbox", valuesObject: {} },
  gender: { type: "checkbox", valuesObject: {} },
};

const initialState: CharactersState = {
  nextApiCharacterEndpoint: "",
  apiCharacters: [],
  localCharacters: [],
  filteredCharacters: [],
  filtersData: initialFiltersData,
};

const charactersSlice = createSlice({
  name: SLICE_NAMES.CHARACTERS,
  initialState,
  reducers: {
    setApiCharacters,
    addApiCharacters,
    setFilterByKey,
  },
});

export default charactersSlice;
