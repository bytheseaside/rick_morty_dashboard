import React from 'react';

import { SxProps, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Container from '@/shared/components/Container';
import { Character } from '@/shared/rickMortyApi';

import CharacterCard from './CharacterCard';

type Props = {
  sectionTitle: string;
  param: 'char1' | 'char2';
  characters: Pick<Character, 'id' | 'name' | 'status' | 'species' | 'image'>[];
  sx?: SxProps<Theme>;
};

const CharacterPicker: React.FC<Props> = ({ characters, param, sectionTitle, sx }) => (
  <Container
    sx={[
      {},
      ...Array.isArray(sx) ? sx : [sx],
    ]}
  >
    <Typography
      variant="h5"
      component="h2"
      color="secondary"
      sx={{
        textTransform: 'uppercase',
        mb: 2,
      }}
    >
      {sectionTitle}
    </Typography>
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
  </Container>
);

export default CharacterPicker;
