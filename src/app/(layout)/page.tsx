/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAllCharacters, getCharacter } from '@/shared/utils';

import Footer from './sections/Footer';
import Introduction from './sections/Introduction';
import ListEspisodes from './sections/ListEpisodes';
import PickerScreens from './sections/PickerScreens';

export default async function Page({
  searchParams,
}: {
  searchParams: {
    char1?: any;
    char2?: any;
  };
}) {
  const characters = await getAllCharacters();

  const char1 = searchParams.char1 !== undefined
    ? await getCharacter(searchParams.char1 as string) : undefined;
  const char2 = searchParams.char2 !== undefined
    ? await getCharacter(searchParams.char2 as string) : undefined;

  return (
    <>
      <Introduction />
      <PickerScreens characters={characters} />
      <ListEspisodes char1={char1} char2={char2} />
      <Footer />
    </>
  );
}
