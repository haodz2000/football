'use client';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Colors } from '../../theme/Colors';
import Link from '../../ui/Link';

const date = new Date();

export const FeedSmall = () => {
  const [isHovering, setIsHovered] = useState<boolean>(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <Stack
      component={Link}
      href={'#'}
      underline="none"
      width={1}
      height={265}
      position={'relative'}
      borderRadius={3}
      justifyContent={'flex-end'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovering ? (
        <Image
          src={
            'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2020/11/1-980x500.jpg'
          }
          alt="feed"
          fill
          unoptimized
          style={{
            transform: 'scale(1.02)',
            transition: 'all .3s ease-in-out',
          }}
        />
      ) : (
        <Image
          src={
            'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2020/11/1-980x500.jpg'
          }
          alt="feed"
          fill
          unoptimized
        />
      )}
      <Stack zIndex={1} width={1} paddingX={4} height={100} gap={1}>
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
            fontSize={16}
            fontWeight={700}
            sx={{ ':hover': { color: Colors.yellow } }}
          >
            The Award Winning Trishal FC Blog and News
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
