import { createContext, useContext } from "react";

export const MyContext = createContext({
  characters: [],
  filters: {},
  modal: undefined,
  setModal: () => {},
  setFilters: () => {},
});

export function useMyContext() {
  const data = useContext(MyContext);

  return data;
}
