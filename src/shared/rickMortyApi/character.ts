import { Base } from './utils';

type Character = Base & {
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'female' | 'male' | 'genderless' | 'unknown';
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
};

export default Character;
