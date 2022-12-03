import {getCreatedDate} from '../../../scripts'

export const characterFields = (modal) => [
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