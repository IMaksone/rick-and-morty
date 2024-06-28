import { createContext } from "react";

import { ApiCharacterType } from "src/types/character";
import { FILTER_CIRCUIT, FilterCircuitType } from "src/constants/filtersShema";

type MyContextPropsType = {
  characters: ApiCharacterType[];
  filterCircuit: FilterCircuitType;
  characterForModal: ApiCharacterType | null;
  setCharacterForModal: (character: ApiCharacterType) => void;
  hideModal: () => void;
  setFilterCircuit: (filterCircuit: FilterCircuitType) => void;
};

const myContextProps: MyContextPropsType = {
  characters: [],
  filterCircuit: FILTER_CIRCUIT,
  characterForModal: null,
  setCharacterForModal: () => {},
  hideModal: () => {},
  setFilterCircuit: () => {}
};

export const MyContext = createContext(myContextProps);

export default MyContext;
