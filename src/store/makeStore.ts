import {
  combineReducers,
  configureStore,
  UnknownAction,
} from "@reduxjs/toolkit";
import charactersSlice from "./slices/charactersSlice";
import modalSlice from "./slices/modalSlice";

type MyStore = ReturnType<typeof makeStore>;
type StoreDispatch = MyStore["dispatch"];
type StoreState = ReturnType<MyStore["getState"]>;
type InitialState = Partial<StoreState>;

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

const rootReducer = (state: any, action: UnknownAction) =>
  combinedReducer(state, action);

const combinedReducer = combineReducers({
  [charactersSlice.name]: charactersSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
});

export default makeStore;

export type { MyStore, StoreDispatch, StoreState, InitialState };
