import { createContext, useContext } from "react";

import { ApiCharacter } from "src/types/character";

type ContextProps = {
  characters: ApiCharacter[];
};

const contextProps: ContextProps = {
  characters: [],
};

const CharactersContext = createContext(contextProps);
export default CharactersContext;

export const useCharactersContext = () => {
  const data = useContext(CharactersContext);

  return data;
};
