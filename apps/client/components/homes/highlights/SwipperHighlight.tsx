import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Colors } from '../../theme/Colors';
import { Highlight } from './Highlight';

export const SwipperHighlight = () => {
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
          Highlights
        </Typography>
      </Stack>
      <Stack
        width={1}
        padding={2}
        gap={2}
        bgcolor={Colors.secondBackground}
        sx={{
          backgroundImage:
            'url("https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2020/11/fixture.png")',
        }}
        borderRadius={1}
      >
        <Highlight />
        <Stack
          flexDirection={'row'}
          alignItems="center"
          justifyContent="center"
        >
          <Button
            sx={{
              color: Colors.yellow,
              px: 3,
              py: 1,
              bgcolor: 'transparent',
              border: `1px solid ${Colors.yellow}`,
              borderRadius: 0,
              ':hover': {
                bgcolor: Colors.yellow,
                color: Colors.white,
              },
            }}
          >
            View All Highlights
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
