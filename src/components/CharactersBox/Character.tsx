import useMyContext from "src/context/useMyContext";
import { CharacterStatusType, LocalCharacterType } from "src/types/character";
import CharacterWrapper from "./CharacterWrapper";

interface CharacterInterface {
  character: LocalCharacterType;
}

const getIndicatorClassName = (characterStatus: CharacterStatusType) =>
  characterStatus === "Alive"
    ? "character-indicator-alive"
    : "character-indicator-dead";

export const Character = ({ character }: CharacterInterface) => {
  const { index, data } = character;

  const { setModal } = useMyContext();

  const addModal = () => {
    setModal(data);
  };

  const characterStatusClassName =
    "character-text text-dark character-indicator " +
    getIndicatorClassName(data.status);

  return (
    <CharacterWrapper characterIndex={index}>
      <div className="character">
        <img
          alt="character_image"
          className="character-img"
          src={data.image}
          onClick={addModal}
        />
        <div className="character-desc">
          <div>
            <h3 className="character-name text-light" onClick={addModal}>
              {data.name}
            </h3>
            <p className={characterStatusClassName}>
              {data.status.toLowerCase()}
            </p>
          </div>
          <p className="character-text text-dark">{data.species}</p>
        </div>
      </div>
    </CharacterWrapper>
  );
};
