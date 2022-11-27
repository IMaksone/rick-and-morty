import { useMyContext } from "../../../context";

import "./modal.css";

export const Modal = () => {
  const { modal, setModal } = useMyContext();

  const clearModal = () => {
    setModal(undefined);
  };

  console.log(modal);

  const getCreated = () => {
    const date = new Date(modal.created);

    return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  };

  return modal ? (
    <div className="modal">
      <div className="modal-character">
        <div className="close-modal-button" onClick={clearModal}>
          Esc
        </div>
        <img
          alt="character_image"
          className="modal-character-img"
          src={modal.image}
        />
        <div className="modal-character-desc">
          <div>
            <h3 className="modal-character-name text-light">{modal.name}</h3>
            <p
              className={`character-text text-dark character-indicator ${
                modal.status === "Alive"
                  ? "character-indicator-alive"
                  : "character-indicator-dead"
              }`}
            >
              {modal.status.toLowerCase()}
            </p>
          </div>
          <div>
            <span className="character-text text-light margin-r-5">
              Species:
            </span>
            <span className="character-text text-dark">{modal.species}</span>
          </div>
          <div>
            <span className="character-text text-light margin-r-5">
              Gender:
            </span>
            <span className="character-text text-dark">{modal.gender}</span>
          </div>
          <div>
            <span className="character-text text-light margin-r-5">Type:</span>
            <span className="character-text text-dark">
              {modal.type || "unknown"}
            </span>
          </div>
          <div>
            <span className="character-text text-light margin-r-5">
              Created:
            </span>
            <span className="character-text text-dark">{getCreated()}</span>
          </div>
          <div>
            <span className="character-text text-light margin-r-5">
              Location:
            </span>
            <a className="character-link text-dark" href={modal.location.url}>
              {modal.location.name}
            </a>
          </div>
          <div>
            <span className="character-text text-light margin-r-5">
              Origin:
            </span>
            {modal.origin.url ? (
              <a className="character-link text-dark" href={modal.origin.url}>
                {modal.origin.name}
              </a>
            ) : (
              <span className="character-text text-dark">
                {modal.origin.name}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="modal-back" onClick={clearModal}></div>
    </div>
  ) : (
    ""
  );
};
