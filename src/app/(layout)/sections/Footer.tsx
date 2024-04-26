import React from 'react';

import GitHubIcon from '@mui/icons-material/GitHub';
import { SxProps, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import Container from '@/shared/components/Container';

type Props = {
  sx?: SxProps<Theme>;
};

const Footer: React.FC<Props> = ({ sx }) => (
  <Container
    sx={[
      {
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        p: 4,
        borderTop: 1,
        borderColor: 'divider',
      },
      ...Array.isArray(sx) ? sx : [sx],
    ]}
  >
    <Typography
      component="h5"
      color="primary"
      variant="body1"
    >
      Brisa Rojas
    </Typography>
    |
    <Typography
      component={Link}
      href="https://github.com/bytheseaside"
      target="_blank"
      color="secondary"
      variant="body1"
      sx={{
        textDecoration: 'none',
        display: 'flex',
        gap: 2,
        alignItems: 'center',
      }}
    >
      <GitHubIcon sx={{ fontSize: 20 }} />
      GitHub  /bytheseaside
    </Typography>
  </Container>
);

export default Footer;
