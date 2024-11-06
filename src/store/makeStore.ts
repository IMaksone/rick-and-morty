import {
  combineReducers,
  configureStore,
  UnknownAction,
} from "@reduxjs/toolkit";
import charactersSlice from "./slices/charactersSlice";
import filtersSlice from "./slices/filtersSlice";
import modalSlice from "./slices/modalSlice";

type Store = ReturnType<typeof makeStore>;
type StoreDispatch = Store["dispatch"];
type StoreState = ReturnType<Store["getState"]>;
type InitialState = Partial<StoreState>;

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

const rootReducer = (state: any, action: UnknownAction) =>
  combinedReducer(state, action);

const combinedReducer = combineReducers({
  [charactersSlice.name]: charactersSlice.reducer,
  [filtersSlice.name]: filtersSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
});

export default makeStore;

export type { Store, StoreDispatch, StoreState, InitialState };
