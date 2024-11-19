import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAMES } from "../enums";
import { CharactersState } from "src/store/types";
import { setApiCharacters, addApiCharacters, setFilterByKey } from "./seters";
import { initialFiltersData } from "src/constants/filtersData";

const initialState: CharactersState = {
  nextApiCharacterEndpoint: "",
  apiCharacters: [],
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
