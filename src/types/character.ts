export type CharacterStatus = "Alive" | "Dead";

export type ApiCharacter = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: ApiCharacterEpisode;
  url: string;
  created: string;
};

export type LocalCharacter = {
  index: number;
  data: ApiCharacter;
};

export type ApiCharacterEpisode = string[] | string;
