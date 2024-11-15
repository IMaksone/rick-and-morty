import { ReactNode } from "react";
import getCreatedDate from "src/helper/getCreatedDate";
import { useModalCharacterSelector } from "src/store/selector/modalSelector";
import { CharacterStatus } from "src/types/character";

type GetModalCharacterFieldListType = () => ModalCharacterFieldType[];

export type ModalCharacterFieldType = {
  title?: string;
  name?: string;
  render?: ReactNode;
  text?: string;
};

export const useModalCharacterFieldList: GetModalCharacterFieldListType =
  () => {
    const characterForModal = useModalCharacterSelector();

    const { name, status, species, gender, type, created, location, origin } =
      characterForModal;

    return [
      getName(name, status),
      getSpecies(species),
      getGender(gender),
      getType(type),
      getCreated(created),
      getLocationOrOrigin(location.name, location.url),
      getLocationOrOrigin(origin.name, origin.url),
    ];
  };

export default useModalCharacterFieldList;

const getName = (characterName: string, characterStatus: CharacterStatus) => {
  const statusClassName =
    characterStatus === "Alive"
      ? "character-indicator-alive"
      : "character-indicator-dead";

  const className =
    "character-text text-dark character-indicator " + statusClassName;

  const characterStatusLowerCase = characterStatus.toLowerCase();

  const render = <p className={className}>{characterStatusLowerCase}</p>;

  return {
    title: characterName,
    render,
  };
};

const getSpecies = (characterSpecies: string) => ({
  name: "Species",
  text: characterSpecies,
});

const getGender = (characterGender: string) => ({
  name: "Gender",
  text: characterGender,
});

const getType = (characterType: string) => ({
  name: "Type",
  text: characterType,
});

const getCreated = (characterCreated: string) => ({
  name: "Species",
  text: getCreatedDate(characterCreated),
});

const getLocationOrOrigin = (
  characterLocationOrOriginName: string,
  characterLocationOrOriginUrl: string
) => {
  const renderLink = (
    <a className="character-link text-dark" href={characterLocationOrOriginUrl}>
      {characterLocationOrOriginName}
    </a>
  );

  const renderText = (
    <span className="character-text text-dark">
      {characterLocationOrOriginName}
    </span>
  );

  const render = characterLocationOrOriginUrl ? renderLink : renderText;

  return {
    name: "Location",
    render,
  };
};
