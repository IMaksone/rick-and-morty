import { useState, useEffect } from "react";

const characterFields = ["name", "status", "species", "gender", "type", "created", "location", "origin", "episode", "url", "id", "image"]

async function* fetchCharacters() {
  let url = "https://rickandmortyapi.com/api/character?page=1";

  while (url) {
    const data = await fetch(url)
      .then((response) => response.json())
      .catch((err) => console.error("***character getting ERROR***", err));

    url = data.info.next;

    for (let character of data.results) {
      yield character;
    }
  }
}

export function useCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      const _characters = [];

      for await (const character of fetchCharacters()) {
        _characters.push(character);
      }

      setCharacters(_characters);
    })();
  }, []);

  console.log(characters[0])

  if(characters[0] && Object.keys(characters[0]).find(key => !characterFields.find((el) => el === key) || characters[0][key] === undefined)) {
    console.error("ERROR: received unexpected data from https://rickandmortyapi.com/")
    return []
  }

  return characters;
}