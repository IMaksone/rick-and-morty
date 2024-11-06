import useStoreSelector from ".";
import { CharactersState } from "../types";

export function useCharactersByKeySelector(key: keyof CharactersState) {
  return useStoreSelector((state) => state.filters[key]);
}
