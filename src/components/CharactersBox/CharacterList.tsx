import Character from "./Character";
import { LocalCharacter } from "src/types/character";
import CharacterListWrapper from "./CharacterListWrapper";

interface CharacterListProps {
  visibleCharacters: LocalCharacter[];
}

export default function CharacterList({
  visibleCharacters,
}: CharacterListProps) {

  const render = visibleCharacters.map((character) => (
    <Character key={character.data.id} character={character} />
  ));

  return (
    <CharacterListWrapper>
      {render}
    </CharacterListWrapper>
  );
}
