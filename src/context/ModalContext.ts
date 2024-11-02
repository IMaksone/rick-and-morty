import { createContext, useContext } from "react";

import { ApiCharacterType } from "src/types/character";

type ContextProps = {
  characterForModal: ApiCharacterType | null;
  setCharacterForModal: (character: ApiCharacterType) => void;
  hideModal: () => void;
};

const contextProps: ContextProps = {
  characterForModal: null,
  setCharacterForModal: () => {},
  hideModal: () => {},
};

const ModalContext = createContext(contextProps);
export default ModalContext;

export const useModalContext = () => {
  const data = useContext(ModalContext);

  return data;
};
