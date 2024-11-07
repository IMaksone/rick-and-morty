import useStoreSelector from "./common/useStoreSelector";

export const useModalCharacterSelector = () =>
  useStoreSelector((state) => state.modal.character);
