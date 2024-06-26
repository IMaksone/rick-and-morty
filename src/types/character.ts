import PropTypes from "prop-types";

export type ApiCharacterType = {
  id: number;
  name: string;
  status: string;
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
  episode: string[];
  url: string;
  created: string;
};

export type LocalCharacterType = {
  index: number;
  data: ApiCharacterType;
};

export const characterType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  origin: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  image: PropTypes.string.isRequired,
  episode: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  url: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired
});

export const myCharacterType = PropTypes.shape({
  index: PropTypes.number.isRequired,
  data: characterType
});
