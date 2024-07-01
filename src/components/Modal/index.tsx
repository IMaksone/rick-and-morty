import useModalCharacterFieldList, {
  ModalCharacterFieldType
} from "./useModalCharacterFieldList";
import { ApiCharacterEpisodeType } from "src/types/character";
import { useModal } from "./useModal";

import "./modal.css";

export const Modal = () => {
  const { characterForModal, handleEscape, hideModal } = useModal();

  if (!characterForModal) return <></>;

  return (
    <div className="modal" tabIndex={0} onKeyDown={handleEscape}>
      <div className="modal-character">
        <div className="close-modal-button" onClick={hideModal}>
          Esc
        </div>
        <div className="modal-character-body">
          <img
            alt="character_image"
            className="modal-character-img"
            src={characterForModal.image}
          />
          <CharacterModalDescription />
        </div>
        <CharacterModalEpisodes episode={characterForModal.episode} />
      </div>
      <div className="modal-back" onClick={hideModal}></div>
    </div>
  );
};

export default Modal;

const CharacterModalDescription = () => {
  const fiedList = useModalCharacterFieldList();

  const renderList = fiedList.map((field, i) => (
    //key ???
    <CharacterModalField field={field} />
  ));

  return <div className="modal-character-desc">{renderList}</div>;
};

interface CharacterModalEpisodesInterface {
  episode: ApiCharacterEpisodeType;
}

const CharacterModalEpisodes = ({
  episode
}: CharacterModalEpisodesInterface) => {
  const renderEpisodeArrayElement = (element: string, index: number) => (
    //key ???
    <a
      key={index}
      className="character-link text-dark text-ellipsis"
      href={element}
    >
      {element}
    </a>
  );

  const renderEpisode =
    typeof episode !== "string"
      ? episode.map(renderEpisodeArrayElement)
      : episode;

  return (
    <div className="episodes-box">
      <span className="character-text text-light">Episodes: </span>
      <div className="episodes">{renderEpisode}</div>
    </div>
  );
};

interface CharacterModalFieldInterface {
  field: ModalCharacterFieldType;
}

const CharacterModalField = ({ field }: CharacterModalFieldInterface) => {
  const title = field.title && (
    <h3 className="modal-character-name text-light">{field.title}</h3>
  );

  const name = field.name && (
    <span className="character-text text-light margin-5">{field.name}</span>
  );

  const render = field.render || <></>;

  const text = field.text && (
    <span className="character-text text-dark">{field.text}</span>
  );

  return (
    <div>
      {title}
      {name}
      {render}
      {text}
    </div>
  );
};
