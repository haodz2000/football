'use client';
import {
  Grid,
  Stack,
  Typography,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import { Colors } from '../../theme/Colors';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import Link from '../../ui/Link';
import { ListMenu } from './ListMenu';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../../theme/theme';
import { Size } from '../../theme/Size';

export const Header = () => {
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [date] = useState<Date>(new Date());
  return (
    <Stack width={1}>
      <Stack
        width={1}
        bgcolor={Colors.secondBackground}
        minHeight={44}
        justifyContent="center"
        boxShadow={'border-box'}
        padding={2}
      >
        <Stack width={1} maxWidth={Size.maxWith} margin="0 auto">
          <Grid container>
            <Grid item xs={12} md={6}>
              <Stack flexDirection="row" alignItems="center" gap={1}>
                <EventAvailableIcon htmlColor={Colors.white} />
                <Typography color={Colors.white} fontSize={12} variant="body1">
                  {date.toDateString()}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
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
            </Grid>
          </Grid>
        </Stack>
      </Stack>
      <Stack
        width={1}
        bgcolor={Colors.background}
        minHeight={88}
        justifyContent="center"
        padding={2}
      >
        <Stack width={1} maxWidth={Size.maxWith} margin="0 auto">
          <Grid container width={1}>
            <Grid item xs={9} md={2}>
              <Stack width={1}>
                <Image
                  src="https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2019/04/khelo-logo.png"
                  width={182}
                  height={65}
                  alt="logo"
                  unoptimized
                />
              </Stack>
            </Grid>
            <Grid item md={8} sx={{ display: matches ? 'none' : 'block' }}>
              <ListMenu />
            </Grid>
            <Grid item xs={3} md={2}>
              <Stack
                height={1}
                flexDirection="row"
                alignItems="center"
                gap={1}
                justifyContent="right"
              >
                <IconButton
                  onClick={() => {
                    //
                  }}
                >
                  <SearchIcon htmlColor={Colors.white} />
                </IconButton>
                <IconButton>
                  <MenuIcon htmlColor={Colors.white} />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Stack>
  );
};
