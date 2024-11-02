import { useEffect, useState } from "react";

import { FILTER_CIRCUIT, FilterCircuitType } from "src/constants/filtersShema";
import filterCircuitPrepare from "src/helper/filterCircuitPrepare";
import FilterContext from "src/context/FilterContext";
import { ContextProviderProps } from "./types";
import CharactersContext, {
  useCharactersContext,
} from "src/context/CharactersContext";
import { useCharacters } from "src/api/characters";

export default function CharactersAndFilterContextProvider({
  children,
}: ContextProviderProps) {
  return (
    <CharactersContextProvider>
      <FilterContextProvider>{children}</FilterContextProvider>
    </CharactersContextProvider>
  );
}

function FilterContextProvider({ children }: ContextProviderProps) {
  const { filterCircuit, setFilterCircuit } = useFilterCircuit();

  return (
    <FilterContext.Provider
      value={{
        filterCircuit,
        setFilterCircuit,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

function CharactersContextProvider({ children }: ContextProviderProps) {
  const characters = useCharacters();

  return (
    <CharactersContext.Provider
      value={{
        characters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
}

function useFilterCircuit() {
  const { characters } = useCharactersContext();

  const [filterCircuit, setFilterCircuit] =
    useState<FilterCircuitType>(FILTER_CIRCUIT);

  useEffect(() => {
    if (characters.length) {
      const filterCircuitPrepared = filterCircuitPrepare(characters);

      setFilterCircuit(filterCircuitPrepared);
    }
  }, [characters]);

  return { filterCircuit, setFilterCircuit };
}
