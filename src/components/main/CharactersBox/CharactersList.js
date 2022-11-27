import PropTypes from "prop-types";

import { CharactersListEl } from "./CharactersListEl";
import { charactersBoxParams } from "../../../constants";
import { myCharacterType } from "../../../types/character";

export const CharactersList = ({ render, length }) => {
  return (
    <div
      className="characters-list"
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
  render: PropTypes.arrayOf(myCharacterType).isRequired,
  length: PropTypes.number.isRequired,
};

