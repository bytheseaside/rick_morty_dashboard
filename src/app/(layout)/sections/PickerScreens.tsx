'use client';

import React, { useState } from 'react';

import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import Container from '@/shared/components/Container';
import { Character, Response } from '@/shared/rickMortyApi';

import CharacterPicker from '../components/CharacterPicker';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type Props = {
  characters: Response<Character>;
  sx?: SxProps<Theme>;
};

const PickerScreen: React.FC<Props> = ({ characters, sx }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container
      sx={[
        { width: '80%', borderLeft: 1, borderRight: 1, borderColor: 'common.white', px: 1 },
        ...Array.isArray(sx) ? sx : [sx],
      ]}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="Choose character tabs">
          <Tab label="Character 1" {...a11yProps(0)} />
          <Tab label="Character 2" {...a11yProps(1)} />
        </Tabs>
        <CharacterPicker
          value={value}
          characters={characters.results}
          param="char1"
        />
        <CharacterPicker
          value={value}
          characters={characters.results}
          param="char2"
        />
      </Box>
    </Container>
  );
};

export default PickerScreen;
