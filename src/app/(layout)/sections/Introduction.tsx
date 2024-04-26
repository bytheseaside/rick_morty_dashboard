import React from 'react';

import Container from "@/shared/components/Container";

import { SxProps, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

type Props = {
  sx?: SxProps<Theme>;
};

const Introduction = ({ sx }: Props) => (
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
      variant='h3'
      color="primary"
      sx={{ mb: 2 }}
    >
      Rick and Morty
      {' '}
      <Typography
        component="span"
        variant='inherit'
        color="secondary"
      >
        API
      </Typography>
    </Typography>
    <Typography
      component="div"
      variant="body1"
    >
      Find information about your favorite characters and episodes from the Rick and Morty TV show.
    </Typography>
  </Container>
);

export default Introduction;
