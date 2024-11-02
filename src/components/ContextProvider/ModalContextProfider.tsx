import { useState } from "react";

import { ApiCharacterType } from "src/types/character";
import ModalContext from "src/context/ModalContext";
import { ContextProviderProps } from "./types";

export default function ModalContextProvider({
  children,
}: ContextProviderProps) {
  const { characterForModal, setCharacterForModal, hideModal } =
    useCharacterForModal();

  return (
    <ModalContext.Provider
      value={{
        characterForModal,
        setCharacterForModal,
        hideModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

const useCharacterForModal = () => {
  const [characterForModal, setCharacterForModal] =
    useState<ApiCharacterType>(null);

  const hideModal = () => setCharacterForModal(null);

  return {
    characterForModal,
    setCharacterForModal,
    hideModal,
  };
};
