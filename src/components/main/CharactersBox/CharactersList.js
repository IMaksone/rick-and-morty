import PropTypes from "prop-types";

import { CharactersListEl } from "./CharactersListEl";
import { charactersBoxParams } from "../../../constatnts";
import { myCharacterType } from "../../../types/character";

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

CharactersList.propTypes = {
  listRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.object }),
  ]),
  render: PropTypes.arrayOf(myCharacterType).isRequired,
  length: PropTypes.number.isRequired,
};
