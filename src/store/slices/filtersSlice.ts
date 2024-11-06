import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAMES } from "./common/enums";
import createSeter from "./common/createSeter";
import { FiltersState } from "../types";

const initialState: FiltersState = {
  name: {
    type: "input",
    value: "",
  },
  type: { type: "input", value: "" },
  status: { type: "checkbox", valuesObject: {} },
  species: { type: "checkbox", valuesObject: {} },
  gender: { type: "checkbox", valuesObject: {} },
};

const filtersSlice = createSlice({
  name: SLICE_NAMES.FILTERS,
  initialState,
  reducers: {
    setNameFilter: createSeter<FiltersState>("name"),
    setTypeFilter: createSeter<FiltersState>("type"),
    setStatusFilter: createSeter<FiltersState>("status"),
    setSpeciesFilter: createSeter<FiltersState>("species"),
    setGenderFilter: createSeter<FiltersState>("gender"),
  },
});

export default filtersSlice;
