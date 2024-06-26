import { CharacterList } from "./CharacterList";
import useCharactersBox from "./useCharactersBox";

import "./charactersBox.css";

export const CharactersBox = () => {
  const { ref, visibleCharacters, filteredCharactersLength, handleScroll } =
    useCharactersBox();

  return (
    <div className="characters-box" ref={ref} onScroll={handleScroll}>
      <CharacterList
        visibleCharacters={visibleCharacters}
        count={filteredCharactersLength}
      />
    </div>
  );
};
