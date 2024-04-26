import { Base } from './utils';

type Episode = Base & {
  air_date: string;
  episode: string;
  characters: string[];
};

export default Episode;
