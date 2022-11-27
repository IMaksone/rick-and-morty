import { useEffect, useRef, useState } from "react";
import { useMyContext } from "../../../context";

import { CharactersList } from "./CharactersList";
import { charactersPrepare, renderPreparation } from "../../../scripts";

import "./charactersBox.css";

export const CharactersBox = () => {
  const { characters, filters } = useMyContext();

  const listRef = useRef({ current: undefined });

  const [prepared, setPrepared] = useState(
    charactersPrepare(characters, filters)
  );
  const [render, setRender] = useState(prepared);

  useEffect(() => {
    setRender(renderPreparation(prepared, listRef.current));
  }, [prepared]);

  useEffect(() => {
    setPrepared(charactersPrepare(characters, filters));
  }, [characters, filters]);

  const handleScroll = (e) => {
    setRender(renderPreparation(prepared, e.target));
  };

  return (
    <div className="characters-box" onScroll={handleScroll}>
      <CharactersList
        listRef={listRef}
        render={render}
        length={prepared.length}
      />
    </div>
  );
};
