'use client';
import React from 'react';
import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Colors } from '../theme/Colors';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

export const Blog = () => {
  return (
    <Stack width={1} bgcolor={Colors.white}>
      <Stack width={1} height={690} position={'relative'}>
        <Image
          src={
            'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2020/11/1.jpg'
          }
          alt="blog"
          fill
          unoptimized
        />
      </Stack>
      <Stack flexDirection={'row'} alignItems="center" gap={5} px={4} py={1}>
        <Stack mt={-4} zIndex={1}>
          <Stack
            alignItems={'center'}
            justifyContent={'center'}
            width={80}
            bgcolor={Colors.yellow}
            borderRadius={1}
          >
            <Typography
              variant="h3"
              fontSize={25}
              fontWeight={600}
              color={Colors.black}
            >
              25
            </Typography>
            <Typography
              variant="h3"
              fontSize={22}
              fontWeight={600}
              color={Colors.black}
            >
              Nov
            </Typography>
          </Stack>
        </Stack>
        <Stack flexDirection={'row'} alignItems="center" gap={1}>
          <PersonOutlineOutlinedIcon htmlColor={Colors.textGray} />
          <Typography fontWeight={300} color={Colors.textGray}>
            Admin
          </Typography>
        </Stack>
        <Stack flexDirection={'row'} alignItems="center" gap={1}>
          <FolderOutlinedIcon htmlColor={Colors.textGray} />
          <Typography fontWeight={300} color={Colors.textGray}>
            Champions League
          </Typography>
        </Stack>
      </Stack>
      <Stack padding={4} gap={3}>
        <Typography variant="h1" fontSize={28} fontWeight={600}>
          The Award Winning Trishal FC Blog and News
        </Typography>
        <Typography
          color={Colors.textBlack}
          variant="h3"
          fontSize={16}
          lineHeight={1.7}
        >
          The snatch is a wide-grip, one-move lift. The clean and jerk is a
          close-grip, two-move lift. Each weightlifter receives three attempts
          in each, and the combined total of the highest two successful lifts
          determines the overall result within a bodyweight category. Bodyweight
          categories are different for male and female competitors. A lifter who
          fails to…
        </Typography>
        <Stack flexDirection={'row'}>
          <Button
            endIcon={<ArrowForwardOutlinedIcon />}
            sx={{ color: Colors.black, ':hover': { color: Colors.yellow } }}
          >
            Continue reading
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
