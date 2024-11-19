import { ReactNode } from "react";

import { CHARACTER_VIRTUAL_LIST_PARAMS } from "src/constants/characterVirtualListParams";
import { useFilteredCharactersSelector } from "src/store/selector/characterSelectors";

interface CharacterListWrapperProps {
  children: ReactNode;
}

export default function CharacterListWrapper({
  children,
}: CharacterListWrapperProps) {
  const filteredCharacters = useFilteredCharactersSelector();

  const count = filteredCharacters.length;

  return (
    <div
      className="character-list"
      style={{
        height: CHARACTER_VIRTUAL_LIST_PARAMS.elFullHeight * count,
      }}
    >
      {children}
    </div>
  );
}
