'use client';
import { Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import Link from '../../ui/Link';
import { Colors } from '../../theme/Colors';
import theme from '../../theme/theme';

interface IMenu {
  title: string;
  href: string;
}
const menu: IMenu[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Club Directory',
    href: '/club-directory',
  },
  {
    title: 'Pages',
    href: '/pages',
  },
  {
    title: 'Results',
    href: '/results',
  },
  {
    title: 'Point Table',
    href: '/point-table',
  },
  {
    title: 'News',
    href: '/news',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export const ListMenu = () => {
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack
      display={matches ? 'none' : 'flex'}
      height={1}
      flexDirection="row"
      alignItems="center"
      gap={1}
    >
      {menu.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          underline="none"
          component={Typography}
          sx={{
            color: Colors.white,
            '&:hover, &.active': {
              color: Colors.yellow,
            },
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
          padding={2}
        >
          {item.title}
        </Link>
      ))}
    </Stack>
  );
};
