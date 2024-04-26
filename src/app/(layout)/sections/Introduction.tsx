import React from 'react';

import { SxProps, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Container from '@/shared/components/Container';

type Props = {
  sx?: SxProps<Theme>;
};

const Introduction: React.FC<Props> = ({ sx }) => (
  <Container
    sx={[
      {
        justifyContent: 'center',
      },
      ...Array.isArray(sx) ? sx : [sx],
    ]}
  >
    <Typography
      component="h1"
      color="primary"
      sx={{
        mb: 2,
        typography: { xxs: 'h5', sm: 'h3' },
      }}
    >
      Rick and Morty
      {' '}
      <Typography
        component="span"
        variant="inherit"
        color="secondary"
      >
        API
      </Typography>
    </Typography>
    <Typography
      component="div"
      sx={{
        typography: { xxs: 'body2', sm: 'body1' },
      }}
    >
      Find information about your favorite characters and episodes from the Rick and Morty TV show.
    </Typography>
  </Container>
);

export default Introduction;
