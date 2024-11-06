import { ReactNode } from "react";

import CHARACTER_VIRTUAL_LIST_PARAMS from "src/constants/characterVirtualListParams";

interface CharacterListWrapperProps {
  count: number;
  children: ReactNode;
}

export default function CharacterListWrapper({
  count,
  children,
}: CharacterListWrapperProps) {
  return (
    <div
      className="character-list"
      style={{
        height: CHARACTER_VIRTUAL_LIST_PARAMS.elHeight * count,
      }}
    >
      {children}
    </div>
  );
}
