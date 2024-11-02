import { useState, useEffect } from "react";

import fetchCharacters from "../queries/characters";

export default function useApiCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      const newCharacters = [];

      for await (const character of fetchCharacters()) {
        newCharacters.push(character);
      }

      setCharacters(newCharacters);
    })();
  }, []);

  return characters;
}
