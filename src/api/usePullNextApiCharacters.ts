import { useCallback } from "react";

import fetchCharacters from "./characters";
import { useDispatchAddApiCharacters } from "src/store/dispatch/dispatchCharacters";
import { useNextApiCharactersEndpointSelector } from "src/store/selector/characterSelectors";

export default function usePullNextApiCharacters() {
  const nextApiCharacterEndpoint = useNextApiCharactersEndpointSelector();
  const dispatchAddApiCharacters = useDispatchAddApiCharacters();

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

  const callback = useCallback(pullNextApiCharacters, [
    nextApiCharacterEndpoint,
    dispatchAddApiCharacters,
  ]);

  return callback;
}
