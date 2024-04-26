'use client';

import Footer from './sections/Footer';
import Introduction from './sections/Introduction';
import PickerScreens from './sections/PickerScreens';

export default function Home() {
  return (
    <>
      <Introduction />
      <PickerScreens />
      <Footer />
    </>
  );
}
