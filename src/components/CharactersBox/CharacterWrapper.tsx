import { ReactNode } from "react";
import CHARACTER_VIRTUAL_LIST_PARAMS from "src/constants/characterVirtualListParams";

import { LocalCharacterType } from "src/types/character";

interface CharacterWrapperInterface {
  characterIndex: number
  children: ReactNode;
}

export const CharacterWrapper = ({
  characterIndex,
  children
}: CharacterWrapperInterface) => (
  <div
    className="character-wr"
    style={{
      height: CHARACTER_VIRTUAL_LIST_PARAMS.elHeight,
      top: characterIndex * CHARACTER_VIRTUAL_LIST_PARAMS.elFullHeight
    }}
  >
    {children}
  </div>
);

export default CharacterWrapper;
