import { useEffect, useRef, useState } from "react";

import { useMyContext } from "src/context/useMyContext";
import getFilteredLocalCharacterList from "src/helper/getFilteredLocalCharacterList";
import getVisibleCharacterList from "src/helper/getVisibleCharacterList";
import { LocalCharacterType } from "src/types/character";

import "./charactersBox.css";

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
    handleScroll
  };
};

export default useCharactersBox;
