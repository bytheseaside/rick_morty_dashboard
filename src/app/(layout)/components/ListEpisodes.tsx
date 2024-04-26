import React from 'react';

import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Container from '@/shared/components/Container';
import { Character } from '@/shared/rickMortyApi';
import { getEpisode } from '@/shared/utils';

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
          p: 1,
          color: 'secondary.contrastText',
          maxHeight: 400,
          overflowY: 'scroll',
        }}
      >
        <Typography variant="overline" sx={{ mb: 3, px: 2 }}>
          Episodes for
          {' '}
          <strong>
            {char1.name}
          </strong>
          {' '}
          only
        </Typography>
        <Box
          component="ul"
        >
          {char1.episode.map(async (episode) => {
            const episodeId = episode.split('/').pop();
            const episodeInfo = await getEpisode(episodeId as string);
            return (
              <Box
                component="li"
                sx={{
                  listStyleType: 'none',
                  typography: 'body2',
                  pl: 2,
                  '&:before': {
                    content: '"🎬"',
                    display: 'inline',
                    width: 1,
                    pr: 1,
                  },
                }}
              >
                {episodeInfo.name}
                {' '}
                -
                {' '}
                {episodeInfo.episode}
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box
        sx={{
          flexBasis: '100%',
          bgcolor: 'secondary.light',
          padding: 1,
          color: 'secondary.contrastText',
          maxHeight: 400,
          overflowY: 'scroll',
        }}
      >
        <Typography variant="overline" sx={{ mb: 3, px: 2 }}>
          Episodes for
          {' '}
          <strong>
            {char1.name}
          </strong>
          {' '}
          and
          {' '}
          <strong>
            {' '}
            {char2.name}
          </strong>
        </Typography>
        <Box
          component="ul"
        >
          {char2.episode.map(async (episode) => {
            if (char1.episode.includes(episode)) {
              const episodeId = episode.split('/').pop();
              const episodeInfo = await getEpisode(episodeId as string);
              return (
                <Box
                  component="li"
                  sx={{
                    listStyleType: 'none',
                    typography: 'body2',
                    pl: 2,
                    '&:before': {
                      content: '"🎬"',
                      display: 'inline',
                      width: 1,
                      pr: 1,
                    },
                  }}
                >
                  {episodeInfo.name}
                  {' '}
                  -
                  {' '}
                  {episodeInfo.episode}
                </Box>
              );
            }
            return null;
          })}
        </Box>
      </Box>
      <Box
        sx={{
          flexBasis: '100%',
          bgcolor: 'secondary.light',
          padding: 1,
          color: 'secondary.contrastText',
          maxHeight: 400,
          overflowY: 'scroll',
        }}
      >
        <Typography variant="overline" sx={{ mb: 3, px: 2 }}>
          Episodes for
          {' '}
          <strong>
            {char2.name}
          </strong>
          {' '}
          only
        </Typography>
        <Box
          component="ul"
        >
          {char2.episode.map(async (episode) => {
            const episodeId = episode.split('/').pop();
            const episodeInfo = await getEpisode(episodeId as string);
            return (
              <Box
                component="li"
                sx={{
                  listStyleType: 'none',
                  typography: 'body2',
                  pl: 2,
                  '&:before': {
                    content: '"🎬"',
                    display: 'inline',
                    width: 1,
                    pr: 1,
                  },

                }}
              >
                {episodeInfo.name}
                {' '}
                -
                {' '}
                {episodeInfo.episode}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default ListEspisodes;
