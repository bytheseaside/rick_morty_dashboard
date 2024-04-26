import React, { useState } from 'react';

import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import Container from '@/shared/components/Container';

import CharacterPicker from '../components/CharacterPicker';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type Props = {
  sx?: SxProps<Theme>;
};

const PickerScreen: React.FC<Props> = ({ sx }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container
      sx={[
        { width: '100%' },
        ...Array.isArray(sx) ? sx : [sx],
      ]}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Choose character tabs">
          <Tab label="Choose character 1" {...a11yProps(0)} />
          <Tab label="Choose character 2" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CharacterPicker
        value={value}
        characters={
          [
            {
              id: 1,
              name: 'Rick Sanchez',
              status: 'dead',
              species: 'Human',
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            },
            {
              id: 2,
              name: 'Morty Smith',
              status: 'alive',
              species: 'Human',
              image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            },
          ]
        }
        sectionTitle="Character 1"
        param="char1"
      />
      <CharacterPicker
        value={value}
        characters={
          [
            {
              id: 1,
              name: 'Rick Sanchez',
              status: 'dead',
              species: 'Human',
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            },
            {
              id: 2,
              name: 'Morty Smith',
              status: 'alive',
              species: 'Human',
              image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            },
          ]
        }
        sectionTitle="Character 2"
        param="char2"
      />
    </Container>
  );
};

export default PickerScreen;
