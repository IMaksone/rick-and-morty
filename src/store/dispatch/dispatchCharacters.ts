import charactersSlice from "../slices/charactersSlice";
import createUseStoreDispatch from "./common/createUseStoreDispatch";

const { setApiCharacters, addApiCharacters, setFilterByKey } =
  charactersSlice.actions;

const useDispatchApiCharacters = createUseStoreDispatch(setApiCharacters);

const useDispatchAddApiCharacters = createUseStoreDispatch(addApiCharacters);

const useDispatchFilterByKey = createUseStoreDispatch(setFilterByKey);

export {
  useDispatchApiCharacters,
  useDispatchAddApiCharacters,
  useDispatchFilterByKey,
};
