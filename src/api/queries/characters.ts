const CHARACTER_ENDPOINT = "https://rickandmortyapi.com/api/character?page=1";

export default async function fetchCharacters(nextEndpoint?: string) {
  const endpoint = nextEndpoint || CHARACTER_ENDPOINT;

  try {
    const data = await fetch(endpoint).then((response) => response.json());

    return {
      characters: data.results,
      next: data.info.next,
    };
  } catch (err) {
    console.error("***character getting ERROR***", err);
  }

  return {};
}
