import { useCallback } from "react";

import fetchCharacters from "src/api/queries/characters";
import { useDispatchAddApiCharacters } from "src/store/dispatch/dispatchCharacters";
import { useNextApiCharactersEndpointSelector } from "src/store/selector/characterSelectors";

export default function usePullNextApiCharacters() {
  const nextApiCharacterEndpoint = useNextApiCharactersEndpointSelector();
  const dispatchAddApiCharacters = useDispatchAddApiCharacters();

  const pullNextApiCharacters = createPullNextApiCharacters(
    nextApiCharacterEndpoint,
    dispatchAddApiCharacters
  );

  const callback = useCallback(pullNextApiCharacters, [
    nextApiCharacterEndpoint,
    dispatchAddApiCharacters,
  ]);

  return callback;
}

function createPullNextApiCharacters(
  nextApiCharacterEndpoint: string,
  dispatchAddApiCharacters
) {
  const pullNextApiCharacters = async () => {
    if (!nextApiCharacterEndpoint) return;

    const data = await fetchCharacters(nextApiCharacterEndpoint);

    if (data.characters) {
      dispatchAddApiCharacters({
        apiCharacters: data.characters,
        nextApiCharacterEndpoint: data.next,
      });
    }
  };

  return pullNextApiCharacters;
}
