import charactersSlice from "../slices/charactersSlice";
import createUseStoreDispatch from "./common/createUseStoreDispatch";
import { CharactersState } from "../types";

const { setApiCharacters, setLocalCharacters } = charactersSlice.actions;

const useDispatchApiCharacters =
  createUseStoreDispatch<CharactersState>(setApiCharacters);

const useDispatchLocalCharacters =
  createUseStoreDispatch<CharactersState>(setLocalCharacters);

export { useDispatchApiCharacters, useDispatchLocalCharacters };
