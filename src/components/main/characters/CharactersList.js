import { CharactersListEl } from "./CharactersListEl";
import { charactersBoxParams } from "../../../constatnts";

export const CharactersList = ({ listRef, render, length }) => {
  return (
    <div
      className="characters-list"
      ref={listRef}
      style={{
        height: charactersBoxParams.elHeight * length,
      }}
    >
      {render.map((ch, i) => (
        <CharactersListEl key={i} character={ch} />
      ))}
    </div>
  );
};
