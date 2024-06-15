import React, { Suspense } from 'react';

import { getAllCharacters, getCharacter } from '@/shared/utils';

import Footer from './sections/Footer';
import Introduction from './sections/Introduction';
import ListEspisodes from './sections/ListEpisodes';
import PickerScreens from './sections/PickerScreens';

export default async function Page({
  searchParams,
}: {
  searchParams: {
    char1?: string;
    char2?: string;
  };
}) {
  const characters = await getAllCharacters();

  let char1;
  let char2;

  if (searchParams.char1 !== undefined && searchParams.char2 !== undefined) {
    char1 = await getCharacter(searchParams.char1 as string);
    char2 = await getCharacter(searchParams.char2 as string);
  }
  return (
    <>
      <Introduction />
      <Suspense fallback={null}>
        <PickerScreens characters={characters} />
        {char1 && char2 && <ListEspisodes char1={char1} char2={char2} />}
      </Suspense>
      <Footer />
    </>
  );
}
