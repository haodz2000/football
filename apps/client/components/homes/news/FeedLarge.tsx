'use client';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Colors } from '../../theme/Colors';
import Link from '../../ui/Link';

const date = new Date();

export const FeedLarge = () => {
  return (
    <Stack
      component={Link}
      href={'#'}
      underline="none"
      width={1}
      maxWidth={900}
      height={500}
      position={'relative'}
      borderRadius={3}
      justifyContent={'flex-end'}
    >
      <Image
        src={
          'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2020/11/1-980x500.jpg'
        }
        alt="feed"
        fill
        unoptimized
      />
      <Stack zIndex={1} width={1} paddingX={8} height={143} gap={2}>
        <Stack flexDirection="row" alignItems="center" gap={1}>
          <EventAvailableIcon htmlColor={Colors.yellow} />
          <Typography fontWeight={600} variant="body2" color={Colors.yellow}>
            {date.toDateString()}
          </Typography>
        </Stack>
        <Stack>
          <Typography
            variant="h1"
            color={Colors.white}
            fontSize={28}
            fontWeight={700}
            sx={{ ':hover': { color: Colors.yellow } }}
          >
            The Award Winning Trishal FC Blog and News
          </Typography>
        </Stack>
        <Stack>
          <Typography
            variant="h3"
            color={Colors.white}
            fontSize={16}
            fontWeight={600}
            sx={{ ':hover': { color: Colors.yellow } }}
          >
            The snatch is a wide-grip, one-move lift. The clean and jerk is a
            close-grip,...
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
