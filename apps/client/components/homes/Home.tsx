import { Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { ListFeed } from './news/ListFeed';
import { Colors } from '../theme/Colors';
import { TableListMatchs } from './schedules/TableListMatchs';
import { PointTable } from './points/PointTable';
import { SwipperHighlight } from './highlights/SwipperHighlight';
import { SwipperResult } from './results/SwipperResult';

export const Home = () => {
  return (
    <Stack width={1} py={4}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} lg={3}>
          <Stack gap={3}>
            <TableListMatchs title="CHAMPION LEAGUE FIXTURES" matches={[]} />
            <TableListMatchs title="PREMIER LEAGUE FIXTURES" matches={[]} />
            <SwipperHighlight />
            <SwipperResult />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Stack gap={4}>
            <ListFeed title="FEATURED NEWS" posts={[]} />
            <ListFeed title="CHAMPION LEAGUE" posts={[]} />
            <ListFeed title="PREMIER LEAGUE" posts={[]} />
            <Stack
              flexDirection={'row'}
              width={1}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <Button sx={{ bgcolor: Colors.yellow, padding: 2 }}>
                <Typography
                  variant="body1"
                  color={Colors.white}
                  fontWeight={700}
                >
                  View more News
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Stack gap={3}>
            <PointTable />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
