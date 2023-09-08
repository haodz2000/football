'use client';
import { Grid, Stack, StackProps, Typography } from '@mui/material';
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Colors } from '../../theme/Colors';
import { FeedLarge } from './FeedLarge';
import { FeedSmall } from './FeedSmall';

interface Props extends StackProps {
  title: string;
  posts: any[];
}
export const ListFeed = ({ title, posts, ...props }: Props) => {
  return (
    <Stack width={1} gap={2} {...props}>
      <Stack flexDirection="row" alignItems={'center'} gap={1}>
        <PlayArrowIcon
          htmlColor={Colors.yellow}
          fontSize="large"
          sx={{ marginLeft: -1 }}
        />
        <Typography variant="h2" fontSize={24} fontWeight={700}>
          {title}
        </Typography>
      </Stack>
      <Stack width={1}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FeedLarge />
          </Grid>
        </Grid>
      </Stack>
      <Stack
        width={1}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack width={1} flexDirection={'row'} gap={2}>
          <FeedSmall />
          <FeedSmall />
        </Stack>
      </Stack>
    </Stack>
  );
};
