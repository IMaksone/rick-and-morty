import { CharactersState } from "src/store/types";
import { SliceSeter } from "../types";
import { Filter, FilterKey } from "src/types/filters";
import filterLocalCharactersIfNeed from "src/helper/characters/filterLocalCharactersIfNeed";

type Seter = SliceSeter<CharactersState, Filter>;

export default function createFilterSeter(key: FilterKey) {
  const seter: Seter = (state, { payload }) => {
    const newFiltersData = {
      ...state.filtersData,
      [key]: payload,
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

  return seter;
}
