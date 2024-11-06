import Character from "./Character";
import { LocalCharacter } from "src/types/character";
import CharacterListWrapper from "./CharacterListWrapper";

interface CharacterListProps {
  visibleCharacters: LocalCharacter[];
  count: number;
}

export default function CharacterList({
  visibleCharacters,
  count,
}: CharacterListProps) {
  const render = visibleCharacters.map((character) => (
    <Character key={character.data.id} character={character} />
  ));

  return <CharacterListWrapper count={count}>{render}</CharacterListWrapper>;
}
