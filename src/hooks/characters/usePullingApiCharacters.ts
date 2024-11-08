import { useEffect } from "react";

import fetchCharacters from "src/api/queries/characters";
import { useDispatchApiCharacters } from "src/store/dispatch/dispatchCharacters";

export default function usePullingApiCharacters() {
  const dispatchApiCharacters = useDispatchApiCharacters();

  useEffect(() => {
    pullApiCharacters.call({ dispatchApiCharacters });
  }, [dispatchApiCharacters]);
}

async function pullApiCharacters() {
  const data = await fetchCharacters();

  if (data.characters) {
    this.dispatchApiCharacters({
      apiCharacters: data.characters,
      nextApiCharacterEndpoint: data.next,
    });
  }
}
