'use client';
import { Stack } from '@mui/material';
import dynamic from 'next/dynamic';
import React from 'react';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export const Highlight = () => {
  return (
    <Stack width={1} position={'relative'}>
      <ReactPlayer
        width={'100%'}
        url="https://www.youtube.com/watch?v=t17O6JoU2Ew"
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
          },
        }}
      />
    </Stack>
  );
};
