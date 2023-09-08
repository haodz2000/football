import { Avatar, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { Colors } from '../../theme/Colors';

export const Match = () => {
  return (
    <Stack
      width={1}
      px={1}
      py={2}
      flexDirection="row"
      alignItems="center"
      borderBottom={1}
      borderColor={Colors.lightGray}
    >
      <Grid
        component={Stack}
        container
        justifyContent={'flex-start'}
        alignItems={'center'}
      >
        <Grid item xs={3}>
          <Stack alignItems={'center'} justifyContent={'center'} gap={1}>
            <Avatar
              src="https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2019/04/5.png"
              alt="logo"
            />
            <Typography variant="body1" color={Colors.white} align="center">
              Real Madrid
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack justifyContent={'center'} alignItems={'center'} gap={1}>
            <Typography fontSize={13} color={Colors.white}>
              April 04 2024
            </Typography>
            <Typography color={Colors.yellow}>00:00</Typography>
            <Typography fontSize={13} color={Colors.white}>
              Old Trafford Stadium
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack alignItems={'center'} justifyContent={'center'} gap={1}>
            <Avatar
              src="https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2019/04/5.png"
              alt="logo"
            />
            <Typography variant="body1" color={Colors.white} align="center">
              Real Madrid
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
