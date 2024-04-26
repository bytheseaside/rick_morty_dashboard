'use client';

import React, { useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { SxProps, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Character } from '@/shared/rickMortyApi';
import { createQueryString } from '@/shared/utils';

type Props = {
  character: Pick<Character, 'id' | 'name' | 'status' | 'species' | 'image'>;
  param: 'char1' | 'char2';
  sx?: SxProps<Theme>;
};

const CharacterCard: React.FC<Props> = ({ character, param, sx }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onPick = useCallback((id: string) => {
    if (searchParams.get(param) === id) {
      return;
    }

    const char1 = searchParams.get('char1') || '';
    const char2 = searchParams.get('char2') || '';

    const url = `${pathname}?${createQueryString({ char1, char2, [param]: id })}`;
    router.push(url, { scroll: false });
  }, [searchParams]);

  return (
    <Card
      sx={[
        {
          borderRadius: 2,
          minWidth: 275,
          maxWidth: 400,
          backgroundColor: 'transparent',
          mx: { xxs: 2 },
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
          transition: 'all 0.3s cubic-bezier(.25, .8, .25, 1)',
          '&:hover': {
            boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
          },
          ...(searchParams.get(param) === String(character.id) && {
            outline: '2px solid',
            outlineColor: 'primary.light',
          }),
        },
        ...Array.isArray(sx) ? sx : [sx],
      ]}
    >
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: 100,
            height: 100,
            borderRadius: '50%',
            mr: 3,
            overflow: 'hidden',
          }}
        >
          <Image
            src={character.image}
            alt={character.name}
            fill
            sizes="100px"
          />
        </Box>
        <Box
          sx={{ textTransform: 'capitalize' }}
        >
          <Typography
            component="div"
            variant="h5"
          >
            {character.name}
          </Typography>
          <Typography sx={{ mb: 1 }}>
            Species:
            {' '}
            {character.species}
          </Typography>
          <Box
            sx={{ display: 'flex', gap: 2, justifyContent: 'flex-start', alignItems: 'center' }}
          >
            <Box
              sx={{
                width: 15,
                height: 15,
                borderRadius: '50%',
                backgroundColor: character.status === 'alive' ? 'green' : character.status === 'dead' ? 'red' : 'primary.main',
                ml: 2,
              }}
            />
            <Typography
              variant="body2"
            >
              Status:
              {' '}
              {character.status}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          sx={{
            ml: 'auto',
          }}
          size="small"
          onClick={() => onPick(character.id.toString())}
        >
          Pick me! 🚀
        </Button>
      </CardActions>
    </Card>
  );
};

export default CharacterCard;
