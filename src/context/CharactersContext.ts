import { createContext, useContext } from "react";

import { ApiCharacterType } from "src/types/character";

type ContextProps = {
  characters: ApiCharacterType[];
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
