import { ReactNode } from "react";

import CHARACTER_VIRTUAL_LIST_PARAMS from "src/constants/characterVirtualListParams";

interface CharacterListWrapperInterface {
  count: number;
  children: ReactNode;
}

export const CharacterListWrapper = ({
  count,
  children
}: CharacterListWrapperInterface) => (
  <div
    className="character-list"
    style={{
      height: CHARACTER_VIRTUAL_LIST_PARAMS.elHeight * count
    }}
  >
    {children}
  </div>
);

export default CharacterListWrapper;
