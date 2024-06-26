import { Character } from "./Character";
import { charactersBoxParams } from "src/constants";
import { LocalCharacterType } from "src/types/character";

interface CharacterListInterface {
  characterList: LocalCharacterType[],
  count: number
}

export const CharacterList = ({ characterList, count }: CharacterListInterface) => {
  return (
    <div
      className="character-list"
      style={{
        height: charactersBoxParams.elHeight * count,
      }}
    >
      {characterList.map((ch, i) => (
        <Character key={i} character={ch} />
      ))}
    </div>
  );
};

