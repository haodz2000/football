'use client';
import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Colors } from '../../theme/Colors';
import Image from 'next/image';

export const PlayerOfWeek = () => {
  return (
    <Stack width={1} gap={2}>
      <Stack width={1} flexDirection="row" alignItems="center" gap={1} ml={-1}>
        <PlayArrowIcon htmlColor={Colors.yellow} fontSize="large" />
        <Typography
          variant="h2"
          fontSize={22}
          fontWeight={600}
          textTransform={'uppercase'}
        >
          Player of the week
        </Typography>
      </Stack>
      <Stack
        width={1}
        maxWidth={430}
        height={540}
        gap={2}
        bgcolor={Colors.secondBackground}
        borderRadius={1}
        position={'relative'}
      >
        <Image
          src={
            'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2019/11/team_6.jpg'
          }
          alt=""
          unoptimized
          fill
        />
        <Stack
          position={'absolute'}
          bottom={0}
          height={80}
          width={1}
          bgcolor="rgba(17, 17, 17, 0.4)"
          zIndex={999}
          px={2}
        >
          <Stack
            height={1}
            flexDirection={'row'}
            alignContent="flex-start"
            gap={3}
          >
            <Stack height={1} justifyContent={'center'} alignItems={'center'}>
              <Typography fontSize={40} fontWeight={700} color={Colors.yellow}>
                07
              </Typography>
            </Stack>
            <Stack
              height={1}
              justifyContent={'center'}
              alignItems={'flex-start'}
            >
              <Typography color={Colors.white} fontSize={22} fontWeight={700}>
                Ronaldo
              </Typography>
              <Typography fontSize={14} color={Colors.white}>
                Real Madrid
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
