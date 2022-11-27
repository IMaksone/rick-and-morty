import { useMyContext } from "../../../context";

import "./modal.css";

const getCreatedDate = (modal) => {
  const date = new Date(modal.created);

  return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};

const characterDescFields = (modal) => [
  {
    title: modal.name,
    body: (
      <p
        className={`character-text text-dark character-indicator ${
          modal.status === "Alive"
            ? "character-indicator-alive"
            : "character-indicator-dead"
        }`}
      >
        {modal.status.toLowerCase()}
      </p>
    ),
  },
  {
    name: "Species",
    text: modal.species,
  },
  {
    name: "Gender",
    text: modal.gender,
  },
  {
    name: "Type",
    text: modal.type || "unknown",
  },
  {
    name: "Created",
    text: getCreatedDate(modal),
  },
  {
    name: "Location",
    body: modal.location.url ? (
      <a className="character-link text-dark" href={modal.location.url}>
        {modal.location.name}
      </a>
    ) : (
      <span className="character-text text-dark">{modal.location.name}</span>
    ),
  },
  {
    name: "Origin",
    body: modal.origin.url ? (
      <a className="character-link text-dark" href={modal.origin.url}>
        {modal.origin.name}
      </a>
    ) : (
      <span className="character-text text-dark">{modal.origin.name}</span>
    ),
  },
];

export const Modal = () => {
  const { modal, setModal } = useMyContext();
  if (!modal) return "";

  const clearModal = () => {
    setModal(undefined);
  };

  const characterDesc = (
    <div className="modal-character-desc">
      {characterDescFields(modal).map((el, i) => (
        <div key={i}>
          {el.title ? (
            <h3 className="modal-character-name text-light">{el.title}</h3>
          ) : (
            ""
          )}
          {el.name ? (
            <span className="character-text text-light margin-5">
              {el.name}
            </span>
          ) : (
            ""
          )}
          {el.body ? el.body : ""}
          {el.text ? (
            <span className="character-text text-dark">{el.text}</span>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );

  const episodes = (
    <div className="episodes-box">
      <span className="character-text text-light">Episodes: </span>
      <div className="episodes">
        {modal.episode.length
          ? modal.episode.map((el, i) => (
              <a
                key={i}
                className="character-link text-dark text-ellipsis"
                href={el}
              >
                {el}
              </a>
            ))
          : modal.episode}
      </div>
    </div>
  );

  return (
    <div className="modal">
      <div className="modal-character">
        <div className="close-modal-button" onClick={clearModal}>
          Esc
        </div>
        <div className="modal-character-body">
          <img
            alt="character_image"
            className="modal-character-img"
            src={modal.image}
          />
          {characterDesc}
        </div>
        {episodes}
      </div>
      <div className="modal-back" onClick={clearModal}></div>
    </div>
  );
};
