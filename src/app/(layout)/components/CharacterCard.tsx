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
  const char1 = searchParams.get('char1') || '';
  const char2 = searchParams.get('char2') || '';

  const onPick = useCallback((id: string) => {
    if (searchParams.get(param) === id) {
      return;
    }
    const url = `${pathname}?${createQueryString({ char1, char2, [param]: id })}`;
    router.push(url, { scroll: false });
  }, [searchParams]);

  return (
    <Card
      sx={[
        {
          display:
            ((param === 'char1' && char2 === character.id.toString()) || (param === 'char2' && char1 === character.id.toString()))
              ? 'none' : 'block',
          borderRadius: 2,
          minWidth: 200,
          width: '100%',
          maxWidth: { xxs: '100%', sm: 275 },
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
            width: 60,
            height: 60,
            borderRadius: '50%',
            mr: 3,
            overflow: 'hidden',
            backgroundColor: 'primary.main',
          }}
        >
          {character.image ? (
            <Image
              src={character.image}
              alt={character.name}
              fill
              sizes="60px"
            />
          ) : null}
        </Box>
        <Box
          sx={{ textTransform: 'capitalize' }}
        >
          <Typography
            component="div"
            variant="body1"
          >
            {character.name}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
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
                backgroundColor: character.status === 'Alive' ? 'green' : character.status === 'Dead' ? 'red' : 'primary.main',
                ml: 2,
              }}
            />
            <Typography
              variant="subtitle2"
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
