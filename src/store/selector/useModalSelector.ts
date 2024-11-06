import useStoreSelector from ".";

export const useModalCharacterSelector = () =>
  useStoreSelector((state) => state.modal.character);
