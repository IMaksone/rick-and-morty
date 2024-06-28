export type CharacterStatusType = "Alive" | "Dead"

export type ApiCharacterType = {
  id: number;
  name: string;
  status: CharacterStatusType;
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
  episode: ApiCharacterEpisodeType;
  url: string;
  created: string;
};

export type LocalCharacterType = {
  index: number;
  data: ApiCharacterType;
};

export type ApiCharacterEpisodeType = string[] | string