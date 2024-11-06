import modalSlice from "../slices/modalSlice";
import { ModalState } from "../types";
import createUseStoreDispatch from "./common/createUseStoreDispatch";

const { setCharacterForModal } = modalSlice.actions;

const useDispatchCharacterForModal =
  createUseStoreDispatch<ModalState>(setCharacterForModal);

export { useDispatchCharacterForModal };
