'use client';
import { Grid, Stack, IconButton, useMediaQuery } from '@mui/material';
import React from 'react';
import { Colors } from '../../theme/Colors';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import { ListMenu } from './ListMenu';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '@client/components/theme/theme';

interface Props {
  maxWidth: number;
  breadCrumb: React.ReactNode;
}
export const Header2 = ({ breadCrumb, maxWidth }: Props) => {
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack width={1}>
      <Stack
        width={1}
        sx={{
          backgroundImage:
            'url("https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2019/04/inner_3.jpg")',
        }}
        height={412}
        padding={2}
      >
        <Stack height={88} width={1} maxWidth={maxWidth} margin="0 auto">
          <Grid container width={1}>
            <Grid item xs={9} md={3}>
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
            <Grid item md={7} sx={{ display: matches ? 'none' : 'block' }}>
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
        <Stack height={324}>{breadCrumb}</Stack>
      </Stack>
    </Stack>
  );
};
