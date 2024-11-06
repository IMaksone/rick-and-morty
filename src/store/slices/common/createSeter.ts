import { PayloadAction } from "@reduxjs/toolkit";

type Callback<State> = (
  state: State,
  { payload }: PayloadAction<State[keyof State]>
) => State;

export default function createSeter<State>(stateKey: keyof State) {
  const callback: Callback<State> = (state, { payload }) => {
    state[stateKey] = payload;

    return state;
  };

  return callback;
}
