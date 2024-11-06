import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ActionCreatorWithOptionalPayload } from "@reduxjs/toolkit";

import { StoreDispatch } from "src/store/makeStore";

const useStoreDispatch = () => useDispatch<StoreDispatch>();

export default function createUseStoreDispatch<State>(
  seter: ActionCreatorWithOptionalPayload<State[keyof State]>
) {
  return () => {
    const dispatch = useStoreDispatch();

    const callback = (value: State[keyof State]) => dispatch(seter(value));

    const dispatchFieldValue = useCallback(callback, [dispatch]);

    return dispatchFieldValue;
  };
}
