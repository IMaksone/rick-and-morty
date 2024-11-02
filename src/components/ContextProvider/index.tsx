import CharactersAndFilterContextProvider from "./CharactersAndFilterContextProvider";
import ModalContextProvider from "./ModalContextProfider";
import { ContextProviderProps } from "./types";

export default function ContextProvider({ children }: ContextProviderProps) {
  return (
    <CharactersAndFilterContextProvider>
      <ModalContextProvider>{children}</ModalContextProvider>
    </CharactersAndFilterContextProvider>
  );
}
