import { FILTER_CIRCUIT, FilterCircuitType, FilterKeyType } from "src/constants/filtersShema";
import { ApiCharacterType } from "src/types/character";

type FiltersPrepareType = (characters: ApiCharacterType[]) => FilterCircuitType;

export const filterCircuitPrepare: FiltersPrepareType = (characters) => {
  const filters = FILTER_CIRCUIT;

  characters.forEach((character) => {
    Object.keys(filters).forEach((filterKey: FilterKeyType) => {
      if (filters[filterKey].values) {
        filters[filterKey].values[character[filterKey]] = false;
      }
    });
  });

  return filters;
};

export default filterCircuitPrepare;
