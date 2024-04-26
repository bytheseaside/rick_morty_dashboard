'use client';

import { PropsWithChildren } from 'react';

import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

import { THEME } from '../../shared/theme';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={THEME}>
      <Box
        sx={{
          m: 0,
          p: 0,
          width: '100vw',
          minHeight: '100vh',
          height: '100%',
          backgroundColor: 'background.default',
          color: 'text.primary',
          display: 'flex',
          flexDirection: 'column',
          rowGap: { xxs: 15, md: 20 },
          py: 10,
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
}
