import { PayloadAction } from "@reduxjs/toolkit";

export type SliceSeter<State, Payload> = (
  state: State,
  { payload }: PayloadAction<Payload>
) => State;
