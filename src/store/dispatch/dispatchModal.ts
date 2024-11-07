import { ApiCharacter } from "src/types/character";
import modalSlice from "../slices/modalSlice";
import createUseStoreDispatch from "./common/createUseStoreDispatch";

const { setCharacterForModal, hideModal } = modalSlice.actions;

const useDispatchCharacterForModal =
  createUseStoreDispatch<ApiCharacter>(setCharacterForModal);

const useHideModal = createUseStoreDispatch<undefined>(hideModal);

export { useDispatchCharacterForModal, useHideModal };