import useStoreSelector from "./common/useStoreSelector";

const useModalCharacterSelector = () =>
  useStoreSelector((state) => state.modal.character);

const useVisibleModalSelector = () =>
  useStoreSelector((state) => !!state.modal.character);

export { useModalCharacterSelector, useVisibleModalSelector };
