import { useEffect, useRef, useState } from "react";

import { useMyContext } from "../../../context";
import { CharactersList } from "./CharacterList";
import { charactersPrepare, renderPreparation } from "../../../scripts";

import "./charactersBox.css";

export const CharactersBox = () => {
  const { characters, filters } = useMyContext();

  const ref = useRef({ current: undefined });

  const [prepared, setPrepared] = useState([]);
  const [render, setRender] = useState([]);

  useEffect(() => {
    setRender(renderPreparation(prepared, ref.current));
  }, [prepared]);

  useEffect(() => {
    setPrepared(charactersPrepare(characters, filters));
  }, [characters, filters]);

  const handleScroll = (e) => {
    setRender(renderPreparation(prepared, e.target));
  };

  return (
    <div className="characters-box" ref={ref} onScroll={handleScroll}>
      <CharactersList render={render} length={prepared.length} />
    </div>
  );
};
