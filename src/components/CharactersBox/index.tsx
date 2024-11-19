import { useRef } from "react";

import CharacterList from "./CharacterList";
import useCharactersBox from "./useCharactersBox";
import Loader from "../Loader";
import { useNextApiCharactersEndpointSelector } from "src/store/selector/characterSelectors";

import "./charactersBox.css";

export default function CharactersBox() {
  const nextApiCharactersEndpoint = useNextApiCharactersEndpointSelector();

  const ref = useRef<HTMLDivElement>(null);

  const { visibleCharacters, handleScroll } = useCharactersBox(ref?.current);

  return (
    <div className="characters-box" ref={ref} onScroll={handleScroll}>
      <CharacterList visibleCharacters={visibleCharacters} />
      {nextApiCharactersEndpoint && <Loader />}
    </div>
  );
}
