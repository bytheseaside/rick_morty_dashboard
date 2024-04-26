import { Character, Episode, Response } from './rickMortyApi';

type QueryProps = {
  char1?: string;
  char2?: string;
};

export const createQueryString = ({ char1, char2 }: QueryProps): string => {
  const params = new URLSearchParams();

  if (char1) {
    params.set('char1', String(char1));
  }
  if (char2) {
    params.set('char2', String(char2));
  }

  return params.toString();
};

export const makeRequest = async (endpoint: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`);
  const data = await response.json();

  return data;
};

export const getAllCharacters = async (): Promise<Response<Character>> => {
  const characters = await makeRequest('character');
  // while (characters.info.next) {
  //   // eslint-disable-next-line no-await-in-loop
  //   const nextCharacters = await makeRequest(
  //     characters.info.next.split(process.env.NEXT_PUBLIC_API_URL)[1],
  //   );
  //   characters.results.push(...nextCharacters.results);
  //   characters.info = nextCharacters.info;
  // }
  return characters;
};

export const getCharacter = async (id: string): Promise<Character> => {
  const character = await makeRequest(`character/${id}`);
  return character;
};

export const getEpisode = async (id: string): Promise<Episode> => {
  const episode = await makeRequest(`episode/${id}`);
  return episode;
};
