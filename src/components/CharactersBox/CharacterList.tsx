import { Character } from "./Character";
import { LocalCharacterType } from "src/types/character";
import CharacterListWrapper from "./CharacterListWrapper";

interface CharacterListInterface {
  visibleCharacters: LocalCharacterType[];
  count: number;
}

export const CharacterList = ({
  visibleCharacters,
  count
}: CharacterListInterface) => {

  // key надо пересмотреть, лучше использовать id
  const render = visibleCharacters.map((character) => (
    <Character key={character.index} character={character} />
  ));

  return <CharacterListWrapper count={count}>{render}</CharacterListWrapper>;
};
