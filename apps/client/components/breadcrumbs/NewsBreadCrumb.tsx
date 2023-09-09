'use client';
import { Stack, Typography } from '@mui/material';
import React from 'react';
import LinkIcon from '@mui/icons-material/Link';
import { Colors } from '../theme/Colors';
import Link from '../ui/Link';

export const NewsBreadCrumb = () => {
  return (
    <Stack height={1} justifyContent={'center'} alignItems={'center'} gap={3}>
      <Typography
        fontSize={40}
        variant="h1"
        fontWeight={700}
        color={Colors.white}
      >
        Blog
      </Typography>
      <Stack flexDirection="row" alignItems="center" gap={2}>
        <Typography
          color={Colors.white}
          component={Link}
          href={'/'}
          underline="none"
          sx={{
            color: Colors.white,
            '&:hover, &.active': {
              color: Colors.yellow,
            },
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Home
        </Typography>
        <LinkIcon htmlColor={Colors.white} />
        <Typography
          color={Colors.white}
          component={Link}
          href={'/news'}
          underline="none"
          sx={{
            color: Colors.white,
            '&:hover, &.active': {
              color: Colors.yellow,
            },
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          News
        </Typography>
      </Stack>
    </Stack>
  );
};
