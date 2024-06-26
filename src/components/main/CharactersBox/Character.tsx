import { charactersBoxParams } from "src/constants";
import { useMyContext } from "src/context";
import { LocalCharacterType } from "src/types/character";

interface CharacterInterface {
  character: LocalCharacterType;
}

export const Character = ({ character }: CharacterInterface) => {
  const { setModal } = useMyContext();

  const addModal = () => {
    setModal(character.data);
  };

  return (
    <div
      className="character-wr"
      style={{
        height: charactersBoxParams.elHeight,
        top: character.index * charactersBoxParams.elFullHeight
      }}
    >
      <div className="character">
        <img
          alt="character_image"
          className="character-img"
          src={character.data.image}
          onClick={addModal}
        />
        <div className="character-desc">
          <div>
            <h3 className="character-name text-light" onClick={addModal}>
              {character.data.name}
            </h3>
            <p
              className={`character-text text-dark character-indicator ${
                character.data.status === "Alive"
                  ? "character-indicator-alive"
                  : "character-indicator-dead"
              }`}
            >
              {character.data.status.toLowerCase()}
            </p>
          </div>
          <p className="character-text text-dark">{character.data.species}</p>
        </div>
      </div>
    </div>
  );
};
