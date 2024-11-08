import { ApiCharacter, LocalCharacter } from "src/types/character";
import { Filter, FilterKey, FiltersData } from "src/types/filters";

export type CharactersState = {
  nextApiCharacterEndpoint: string;
  apiCharacters: ApiCharacter[];
  localCharacters: LocalCharacter[];
  filteredCharacters: LocalCharacter[];
  filtersData: FiltersData;
};

export type FiltersState = {
  [key in FilterKey]?: Filter;
};

export type ModalState = {
  character: ApiCharacter | null;
};
