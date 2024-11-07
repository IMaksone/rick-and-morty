import { ApiCharacter } from "src/types/character";

export default function getLocalCharacters(
  apiCharacterList: ApiCharacter[]
) {
  return apiCharacterList.map((character, index) => ({
    index: index,
    data: character,
  }));
}
