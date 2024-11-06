import { createSlice } from "@reduxjs/toolkit";

import { SLICE_NAMES } from "./common/enums";
import createSeter from "./common/createSeter";
import { ModalState } from "../types";

const initialState: ModalState = {
  character: null,
};

const modalSlice = createSlice({
  name: SLICE_NAMES.MODAL,
  initialState,
  reducers: {
    setCharacterForModal: createSeter<ModalState>("character"),
  },
});

export default modalSlice;
