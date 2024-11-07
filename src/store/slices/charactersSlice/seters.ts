import { SliceSeter } from "../types";
import { CharactersState } from "src/store/types";
import { ApiCharacter } from "src/types/character";
import getLocalCharacters from "src/helper/characters/getLocalCharacters";
import filterLocalCharactersIfNeed from "src/helper/characters/filterLocalCharactersIfNeed";
import createFilterSeter from "./createFilterSeter";

const setApiCharacters: SliceSeter<CharactersState, ApiCharacter[]> = (
  state,
  { payload }
) => {
  const localCharacters = getLocalCharacters(payload);
  const filteredCharacters = filterLocalCharactersIfNeed(
    localCharacters,
    state.filtersData
  );

  return {
    ...state,
    localCharacters,
    filteredCharacters,
  };
};

const setNameFilter = createFilterSeter("name");
const setTypeFilter = createFilterSeter("type");
const setStatusFilter = createFilterSeter("status");
const setSpeciesFilter = createFilterSeter("species");
const setGenderFilter = createFilterSeter("gender");

export {
  setApiCharacters,
  setNameFilter,
  setTypeFilter,
  setStatusFilter,
  setSpeciesFilter,
  setGenderFilter,
};
