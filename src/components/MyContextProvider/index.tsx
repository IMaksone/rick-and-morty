import { ReactNode, useEffect, useState } from "react";

import { MyContext } from "src/context";
import { useCharacters } from "src/api";
import filterCircuitPrepare from "src/helper/filterCircuitPrepare";
import { FILTER_CIRCUIT, FilterCircuitType } from "src/constants/filtersShema";
import { ApiCharacterType } from "src/types/character";

interface MyContextProviderInterface {
  children: ReactNode;
}

const MyContextProvider = ({ children }: MyContextProviderInterface) => {
  const characters = useCharacters();

  const { characterForModal, setCharacterForModal, hideModal } =
    useCharacterForModalMyContextProvider();

  const { filterCircuit, setFilterCircuit } =
    useFilterCircuitMyContextProvider();

  return (
    <MyContext.Provider
      value={{
        characters,
        filterCircuit,
        characterForModal,
        setCharacterForModal,
        hideModal,
        setFilterCircuit
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;

const useCharacterForModalMyContextProvider = () => {
  const [characterForModal, setCharacterForModal] =
    useState<ApiCharacterType>(null);

  const hideModal = () => setCharacterForModal(null);

  return {
    characterForModal,
    setCharacterForModal,
    hideModal
  };
};

const useFilterCircuitMyContextProvider = () => {
  const characters = useCharacters();

  const [filterCircuit, setFilterCircuit] = useState<FilterCircuitType>(FILTER_CIRCUIT);

  useEffect(() => {
    if (characters.length) {
      const filterCircuitPrepared = filterCircuitPrepare(characters);

      setFilterCircuit(filterCircuitPrepared);
    }
  }, [characters]);

  return { filterCircuit, setFilterCircuit };
};
