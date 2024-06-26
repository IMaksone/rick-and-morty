import { useEffect, useRef, useState } from "react";

import { useMyContext } from "src/context/useMyContext";
import { filterCharacters, getVisibleCharacters } from "src/helper";

import "./charactersBox.css";
import { LocalCharacterType } from "src/types/character";

type UseCharactersBoxType = () => {
  ref: React.MutableRefObject<undefined>;
  visibleCharacters: LocalCharacterType[];
  filteredCharactersLength: number;
  handleScroll: React.UIEventHandler<HTMLDivElement>;
};

export const useCharactersBox: UseCharactersBoxType = () => {
  const { characters, filterCircuit } = useMyContext();

  const ref = useRef();

  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [visibleCharacters, setVisibleCharacters] = useState([]);

  useEffect(() => {
    const visible = getVisibleCharacters(filteredCharacters, ref.current);

    setVisibleCharacters(visible);
  }, [filteredCharacters]);

  useEffect(() => {
    const filtered = filterCharacters(characters, filterCircuit);

    setFilteredCharacters(filtered);
  }, [characters, filterCircuit]);

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (event) => {
    const visible = getVisibleCharacters(filteredCharacters, event.target);

    setVisibleCharacters(visible);
  };

  return {
    ref,
    visibleCharacters,
    filteredCharactersLength: filteredCharacters.length,
    handleScroll
  };
};

export default useCharactersBox;
