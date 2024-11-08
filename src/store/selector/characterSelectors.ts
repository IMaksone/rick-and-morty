import useStoreSelector from "./common/useStoreSelector";
import { FilterKey } from "src/types/filters";

const useNextApiCharactersEndpointSelector = () =>
  useStoreSelector((state) => state.characters.nextApiCharacterEndpoint);

const useApiCharactersSelector = () =>
  useStoreSelector((state) => state.characters.apiCharacters);

const useLocalCharactersSelector = () =>
  useStoreSelector((state) => state.characters.localCharacters);

const useFilteredCharactersSelector = () =>
  useStoreSelector((state) => state.characters.filteredCharacters);

const useFiltersDataSelector = () =>
  useStoreSelector((state) => state.characters.filtersData);

const useFilterByKeySelector = (key: FilterKey) =>
  useStoreSelector((state) => state.characters.filtersData[key]);

export {
  useNextApiCharactersEndpointSelector,
  useApiCharactersSelector,
  useLocalCharactersSelector,
  useFilteredCharactersSelector,
  useFiltersDataSelector,
  useFilterByKeySelector,
};
