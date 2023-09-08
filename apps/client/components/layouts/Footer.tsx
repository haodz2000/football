'use client';
import { Grid, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { Colors } from '../theme/Colors';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import Image from 'next/image';
import { Size } from '../theme/Size';

interface Sponser {
  link: string;
  image: string;
  width: number;
  height: number;
}
const sponsers: Sponser[] = [
  {
    link: '#',
    image:
      'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2019/05/sponsor_8.png',
    width: 100,
    height: 61,
  },
  {
    link: '#',
    image:
      'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2019/05/sponsor_7.png',
    width: 100,
    height: 61,
  },
  {
    link: '#',
    image:
      'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2019/05/sponsor_6.png',
    width: 100,
    height: 61,
  },
  {
    link: '#',
    image:
      'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2019/05/sponsor_5.png',
    width: 100,
    height: 61,
  },
  {
    link: '#',
    image:
      'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2019/05/sponsor_4.png',
    width: 100,
    height: 61,
  },
  {
    link: '#',
    image:
      'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2019/05/sponsor_3.png',
    width: 100,
    height: 61,
  },
  {
    link: '#',
    image:
      'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2019/05/sponsor_2.png',
    width: 100,
    height: 61,
  },
  {
    link: '#',
    image:
      'https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2019/05/sponsor_1.png',
    width: 100,
    height: 61,
  },
];

export const Footer = () => {
  return (
    <Stack width={1} height={Size.footer}>
      <Stack px={2} width={1} bgcolor={Colors.secondBackground}>
        <Stack
          width={1}
          maxWidth={Size.maxWith}
          margin="0 auto"
          height={355}
          justifyContent={'center'}
        >
          <Stack width={1} maxWidth={1000} margin="0 auto">
            <Grid
              width={1}
              container
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              {sponsers.map((i, index) => (
                <Grid
                  component={Stack}
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  key={index}
                  item
                  position={'relative'}
                  flexDirection={'row'}
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <Image
                    src={i.image}
                    alt={i.link}
                    width={i.width}
                    height={i.width}
                    unoptimized
                  />
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        px={2}
        boxSizing="border-box"
        width={1}
        bgcolor={Colors.background}
      >
        <Stack
          margin="0 auto"
          width={1}
          maxWidth={Size.maxWith}
          height={60}
          bgcolor={Colors.background}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack flexDirection="row" alignItems="center" gap={1}>
            <Typography variant="body1" color={Colors.white} fontWeight={500}>
              © 2023 TiTi. Designed By
            </Typography>
            <Typography variant="body1" color={Colors.yellow} fontWeight={500}>
              TiTi.
            </Typography>
          </Stack>
          <Stack
            flexDirection="row"
            alignItems="center"
            gap={1}
            justifyContent="right"
          >
            <Link target="_blannk" href={'#'}>
              <FacebookIcon htmlColor={Colors.white} />
            </Link>
            <Link target="_blannk" href={'#'}>
              <TwitterIcon htmlColor={Colors.white} />
            </Link>
            <Link target="_blannk" href={'#'}>
              <LinkedInIcon htmlColor={Colors.white} />
            </Link>
            <Link target="_blannk" href={'#'}>
              <GoogleIcon htmlColor={Colors.white} />
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
