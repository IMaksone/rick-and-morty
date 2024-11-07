import { ApiCharacter } from "src/types/character";
import { SliceSeter } from "../types";
import { ModalState } from "src/store/types";

const setCharacterForModal: SliceSeter<ModalState, ApiCharacter> = (
  state,
  { payload }
) => {
  state.character = payload;

  return state;
};

const hideModal: SliceSeter<ModalState, undefined> = (state) => {
  state.character = null;

  return state;
};
export { setCharacterForModal, hideModal };
