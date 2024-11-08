import { Filter, FilterKey } from "src/types/filters";
import charactersSlice from "../slices/charactersSlice";
import createUseStoreDispatch from "./common/createUseStoreDispatch";
import { ApiCharacter } from "src/types/character";

const { setApiCharacters, setFilterByKey } = charactersSlice.actions;

const useDispatchApiCharacters =
  createUseStoreDispatch<ApiCharacter[]>(setApiCharacters);

const useDispatchFilterByKey = createUseStoreDispatch<{
  key: FilterKey;
  value: Filter;
}>(setFilterByKey);

export { useDispatchApiCharacters, useDispatchFilterByKey };
