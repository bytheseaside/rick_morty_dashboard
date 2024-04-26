import React from 'react';

import Box from '@mui/material/Box';

import { Character } from '@/shared/rickMortyApi';

import CharacterCard from './CharacterCard';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      sx={{
        py: 3,
        maxHeight: '65vh',
        overflow: 'scroll',
      }}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </Box>
  );
}

type Props = {
  param: 'char1' | 'char2';
  characters: Pick<Character, 'id' | 'name' | 'status' | 'species' | 'image'>[];
  value: number;
};

const CharacterPicker: React.FC<Props> = ({ characters, param, value }) => (
  <CustomTabPanel
    index={param === 'char1' ? 0 : 1}
    value={value}
  >
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 2,
      }}
    >
      {
        characters.length > 0 && characters.map(({ id, name, status, species, image }) => (
          <CharacterCard
            key={id}
            character={{
              id,
              name,
              status,
              species,
              image,
            }}
            param={param}
          />
        ))
      }
    </Box>
  </CustomTabPanel>
);

export default CharacterPicker;
