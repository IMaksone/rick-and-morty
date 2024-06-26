import { createContext } from "react";

import { ApiCharacterType } from "src/types/character";
import { FILTER_CIRCUIT, FilterCircuitType } from "src/constants/filtersShema";

type MyContextPropsType = {
  characters: ApiCharacterType[];
  filterCircuit: FilterCircuitType;
  modal: ApiCharacterType | null;
  setModal: (character: ApiCharacterType) => void;
  setFilterCircuit: (filterCircuit: FilterCircuitType) => void;
};

const myContextProps: MyContextPropsType = {
  characters: [],
  filterCircuit: FILTER_CIRCUIT,
  modal: null,
  setModal: () => {},
  setFilterCircuit: () => {}
};

export const MyContext = createContext(myContextProps);

export default MyContext;
