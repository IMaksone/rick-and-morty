import { useCallback, useEffect, useState } from "react";

import getVisibleCharacterList from "src/helper/getVisibleCharacterList";
import { LocalCharacter } from "src/types/character";
import { useFilteredCharactersSelector } from "src/store/selector/characterSelectors";
import usePullNextApiCharacters from "src/api/usePullNextApiCharacters";
import { PULL_NEXT_CHARACTERS_HEIGHT } from "src/constants/characterVirtualListParams";
import createNotCalledManyTimesFunction from "src/helper/getNotCalledManyTimesFunction";

type UseCharactersBoxReturned = {
  visibleCharacters: LocalCharacter[];
  handleScroll: React.UIEventHandler<HTMLDivElement>;
};

export default function useCharactersBox(
  virtualBoxElement: HTMLDivElement
): UseCharactersBoxReturned {
  const filteredCharacters = useFilteredCharactersSelector();

  const pullCharacters = usePullCharacters();

  const [visibleCharacters, setVisibleCharacters] = useState([]);

  const handleScrollCallback = useCallback(handleScroll, [
    virtualBoxElement,
    filteredCharacters,
    setVisibleCharacters,
  ]);

  useEffect(() => {
    handleScrollCallback();
  }, [filteredCharacters, handleScrollCallback]);

  function handleScroll() {
    const visible = getVisibleCharacterList(
      filteredCharacters,
      virtualBoxElement
    );

    setVisibleCharacters(visible);

    virtualBoxElement && pullCharacters(virtualBoxElement);
  }

  return {
    visibleCharacters,
    handleScroll: handleScrollCallback,
  };
}

function usePullCharacters() {
  const pullNextApiCharacters = usePullNextApiCharacters();

  const notCalledManyTimes = createNotCalledManyTimesFunction(
    pullNextApiCharacters,
    2000
  );

  const pull = ({ scrollHeight, offsetHeight, scrollTop }: HTMLDivElement) => {
    const scrolled = offsetHeight + scrollTop;

    if (scrollHeight - scrolled < PULL_NEXT_CHARACTERS_HEIGHT) {
      notCalledManyTimes();
    }
  };

  const callback = useCallback(pull, [pullNextApiCharacters]);

  return callback;
}
