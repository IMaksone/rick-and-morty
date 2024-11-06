import { ApiCharacter, LocalCharacter } from "src/types/character";
import { Filter, FilterKey } from "src/types/filters";

export type CharactersState = {
  apiChracters: ApiCharacter[];
  localCharacters: LocalCharacter[];
};

export type FiltersState = {
  [key in FilterKey]?: Filter;
};

export type ModalState = {
  character: ApiCharacter | null;
};
