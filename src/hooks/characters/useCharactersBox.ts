import { useCallback, useEffect, useRef, useState } from "react";

import getVisibleCharacterList from "src/helper/getVisibleCharacterList";
import { LocalCharacter } from "src/types/character";
import { useFilteredCharactersSelector } from "src/store/selector/characterSelectors";

import "./charactersBox.css";

type UseCharactersBoxReturned = {
  ref: React.MutableRefObject<undefined>;
  visibleCharacters: LocalCharacter[];
  filteredCharactersLength: number;
  handleScroll: React.UIEventHandler<HTMLDivElement>;
};

export default function useCharactersBox(): UseCharactersBoxReturned {
  const filteredCharacters = useFilteredCharactersSelector();

  const ref = useRef();

  const [visibleCharacters, setVisibleCharacters] = useState([]);

  useEffect(() => {
    const visible = getVisibleCharacterList(filteredCharacters, ref.current);

    setVisibleCharacters(visible);
  }, [filteredCharacters]);

  const handleScroll: React.UIEventHandler<HTMLDivElement> = (event) => {
    const visible = getVisibleCharacterList(filteredCharacters, event.target);

    setVisibleCharacters(visible);
  };

  const handleScrollCallback = useCallback(handleScroll, [
    filteredCharacters,
    setVisibleCharacters,
  ]);

  return {
    ref,
    visibleCharacters,
    filteredCharactersLength: filteredCharacters.length,
    handleScroll: handleScrollCallback
  };
}
