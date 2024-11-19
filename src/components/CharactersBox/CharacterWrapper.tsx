import { ReactNode } from "react";

import { CHARACTER_VIRTUAL_LIST_PARAMS } from "src/constants/characterVirtualListParams";

interface CharacterWrapperProps {
  characterIndex: number;
  children: ReactNode;
}

export default function CharacterWrapper({
  characterIndex,
  children,
}: CharacterWrapperProps) {
  const styles = {
    height: CHARACTER_VIRTUAL_LIST_PARAMS.elHeight,
    top: characterIndex * CHARACTER_VIRTUAL_LIST_PARAMS.elFullHeight,
  };

  return (
    <div className="character-wr" style={styles}>
      {children}
    </div>
  );
}
