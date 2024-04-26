import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';

import Container from '@/shared/components/Container';
import { Character } from '@/shared/rickMortyApi';

type Props = {
  char1?: Character;
  char2?: Character;
  sx?: SxProps<Theme>;
};

const ListEspisodes: React.FC<Props> = async ({ char1, char2, sx }) => {
  if (!char1 || !char2) { return null; }

  return (
    <Container
      sx={[
        {
          display: 'flex',
          flexDirection: { xxs: 'column', sm: 'row' },
          gap: 2,
        },
        ...Array.isArray(sx) ? sx : [sx],
      ]}
    >

      <Box
        sx={{
          flexBasis: '100%',
          bgcolor: 'secondary.light',
          padding: 1,
          color: 'secondary.contrastText',
        }}
      >
        <Typography variant="overline" sx={{ mb: 3 }}>
          Episodes for
          {' '}
          {char1.name}
          {' '}
          only
        </Typography>
      </Box>
      <Box
        sx={{
          flexBasis: '100%',
          bgcolor: 'secondary.light',
          padding: 1,
          color: 'secondary.contrastText',
        }}
      >
        <Typography variant="overline" sx={{ mb: 3 }}>

          Episodes for
          {' '}
          {char1.name}
          {' '}
          and
          {' '}
          {char2.name}
        </Typography>
      </Box>
      <Box
        sx={{
          flexBasis: '100%',
          bgcolor: 'secondary.light',
          padding: 1,
          color: 'secondary.contrastText',
        }}
      >
        <Typography variant="overline" sx={{ mb: 3 }}>
          Episodes for
          {' '}
          {char2.name}
          {' '}
          only
        </Typography>
      </Box>
    </Container>
  );
};

export default ListEspisodes;
