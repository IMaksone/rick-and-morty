import { createSlice } from "@reduxjs/toolkit";

import { setCharacterForModal, hideModal } from "./seters";
import { ModalState } from "src/store/types";
import { SLICE_NAMES } from "../enums";

const initialState: ModalState = {
  character: null,
};

const modalSlice = createSlice({
  name: SLICE_NAMES.MODAL,
  initialState,
  reducers: {
    setCharacterForModal,
    hideModal,
  },
});

export default modalSlice;
