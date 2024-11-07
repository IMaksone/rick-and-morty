import useStoreSelector from "./common/useStoreSelector";
import { CharactersState } from "../types";
import { FilterKey } from "src/types/filters";

const useApiCharactersSelector = () => useCharactersByKey("apiChracters");

const useLocalCharactersSelector = () => useCharactersByKey("localCharacters");

const useFilteredCharactersSelector = () =>
  useCharactersByKey("filteredCharacters");

const useFiltersDataSelector = () => useCharactersByKey("filtersData");

const useFilterByKeySelector = (key: FilterKey) =>
  useStoreSelector((state) => state.characters.filtersData[key]);

export {
  useApiCharactersSelector,
  useLocalCharactersSelector,
  useFilteredCharactersSelector,
  useFiltersDataSelector,
  useFilterByKeySelector,
};

function useCharactersByKey(key: keyof CharactersState) {
  return useStoreSelector((state) => state.characters[key]);
}
