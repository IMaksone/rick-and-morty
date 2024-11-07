import { CharacterStatus, LocalCharacter } from "src/types/character";
import CharacterWrapper from "./CharacterWrapper";
import { useDispatchCharacterForModal } from "src/store/dispatch/dispatchModal";

interface CharacterProps {
  character: LocalCharacter;
}

const getIndicatorClassName = (characterStatus: CharacterStatus) =>
  characterStatus === "Alive"
    ? "character-indicator-alive"
    : "character-indicator-dead";

export default function Character({ character }: CharacterProps) {
  const { index, data } = character;

  const dispatchCharacterForModal = useDispatchCharacterForModal();

  const addModal = () => {
    dispatchCharacterForModal(data);
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
}
