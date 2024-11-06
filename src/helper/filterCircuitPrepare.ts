import {
  FILTER_CIRCUIT,
  FilterCircuitType,
  FilterKeyType,
} from "src/constants/filtersShema";
import { ApiCharacter } from "src/types/character";

type FiltersPrepare = (characters: ApiCharacter[]) => FilterCircuitType;

const filterCircuitPrepare: FiltersPrepare = (characters) => {
  const filters = FILTER_CIRCUIT;

  characters.forEach((character) => {
    Object.keys(filters).forEach((filterKey: FilterKeyType) => {
      if (filters[filterKey].valuesObject) {
        filters[filterKey].valuesObject[character[filterKey]] = false;
      }
    });
  });

  return filters;
};

export default filterCircuitPrepare;
