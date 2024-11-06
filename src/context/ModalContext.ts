import { createContext, useContext } from "react";

import { ApiCharacter } from "src/types/character";

type ContextProps = {
  characterForModal: ApiCharacter | null;
  setCharacterForModal: (character: ApiCharacter) => void;
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
