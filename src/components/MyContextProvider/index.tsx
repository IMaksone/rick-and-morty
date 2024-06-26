import { ReactNode, useEffect, useState } from "react";

import { MyContext } from "src/context";
import { useCharacters } from "src/api";
import filterCircuitPrepare from "src/helper/filterCircuitPrepare";
import { FilterCircuitType } from "src/constants";
import { ApiCharacterType } from "src/types/character";

interface MyContextProviderInterface {
  children: ReactNode
}

const MyContextProvider = ({ children }: MyContextProviderInterface) => {
  const characters = useCharacters();

  const [filterCircuit, setFilterCircuit] = useState<FilterCircuitType>({});
  const [modal, setModal] = useState<ApiCharacterType>(null);

  useEffect(() => {
    if (characters.length) {
      const filterCircuitPrepared = filterCircuitPrepare(characters)

      setFilterCircuit(filterCircuitPrepared);
    }
  }, [characters]);

  return (
    <MyContext.Provider
      value={{
        characters,
        filterCircuit,
        modal,
        setModal,
        setFilterCircuit
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyContextProvider;
