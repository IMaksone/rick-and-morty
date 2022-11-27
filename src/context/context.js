import { createContext, useContext } from "react";

export const MyContext = createContext({
  characters: [],
  filters: {},
  isLoad: false,
  modal: undefined,
  setModal: () => {},
  setIsLoad: () => {},
  setFilters: () => {},
});

export function useMyContext() {
  const data = useContext(MyContext);

  return data;
}
