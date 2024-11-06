import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAMES } from "./common/enums";
import createSeter from "./common/createSeter";
import { CharactersState } from "../types";

const initialState: CharactersState = {
  apiChracters: [],
  localCharacters: [],
};

const charactersSlice = createSlice({
  name: SLICE_NAMES.CHARACTERS,
  initialState,
  reducers: {
    setApiCharacters: createSeter<CharactersState>("apiChracters"),
    setLocalCharacters: createSeter<CharactersState>("localCharacters"),
  },
});

export default charactersSlice;
