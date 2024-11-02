export default async function* fetchCharacters() {
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
