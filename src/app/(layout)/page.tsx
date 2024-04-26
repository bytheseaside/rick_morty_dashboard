import { getAllCharacters, getCharacter } from '@/shared/utils';

import Footer from './sections/Footer';
import Introduction from './sections/Introduction';
import ListEspisodes from './sections/ListEpisodes';
import PickerScreens from './sections/PickerScreens';

export default async function Page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined;
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
