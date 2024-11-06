import { useEffect, useRef, useState } from "react";

import getFilteredLocalCharacterList from "src/helper/filterLocalCharcterList";
import getVisibleCharacterList from "src/helper/getVisibleCharacterList";
import { LocalCharacter } from "src/types/character";
import { useCharactersContext } from "src/context/CharactersContext";
import { useFilterContext } from "src/context/FilterContext";

import "./charactersBox.css";

type UseCharactersBoxReturned = {
  ref: React.MutableRefObject<undefined>;
  visibleCharacters: LocalCharacter[];
  filteredCharactersLength: number;
  handleScroll: React.UIEventHandler<HTMLDivElement>;
};

export default function useCharactersBox(): UseCharactersBoxReturned {
  const { characters } = useCharactersContext();
  const { filterCircuit } = useFilterContext();

  const ref = useRef();

  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [visibleCharacters, setVisibleCharacters] = useState([]);

  useEffect(() => {
    const visible = getVisibleCharacterList(filteredCharacters, ref.current);

    setVisibleCharacters(visible);
  }, [filteredCharacters]);

  useEffect(() => {
    const filtered = getFilteredLocalCharacterList(characters, filterCircuit);

    setFilteredCharacters(filtered);
  }, [characters, filterCircuit]);

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (event) => {
    const visible = getVisibleCharacterList(filteredCharacters, event.target);

    setVisibleCharacters(visible);
  };

  return {
    ref,
    visibleCharacters,
    filteredCharactersLength: filteredCharacters.length,
    handleScroll,
  };
}
