import { getAllCharacters } from '@/shared/utils';

import Footer from './sections/Footer';
import Introduction from './sections/Introduction';
import PickerScreens from './sections/PickerScreens';

export default async function Home() {
  const characters = await getAllCharacters();

  return (
    <>
      <Introduction />
      <PickerScreens characters={characters} />
      <Footer />
    </>
  );
}
