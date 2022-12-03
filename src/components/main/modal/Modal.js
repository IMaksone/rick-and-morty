import { useEffect } from "react";

import { useMyContext } from "../../../context";
import { characterFields } from "./characterFields";

import "./modal.css";

export const Modal = () => {
  const { modal, setModal } = useMyContext();
  if (!modal) return "";

  const clearModal = () => {
    setModal(undefined);
  };

  const handleEscape = (e) => {
    if (e.keyCode === 27) clearModal();
  };

  const characterDesc = (
    <div className="modal-character-desc">
      {characterFields(modal).map((el, i) => (
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
    <div className="modal" tabIndex={0} onKeyDown={handleEscape}>
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
