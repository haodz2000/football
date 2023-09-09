'use client';
import { Stack, IconButton } from '@mui/material';
import React, {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { Footer } from './Footer';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Colors } from '../theme/Colors';

interface Props extends PropsWithChildren {
  header: ReactNode;
  maxWidth: number;
}
export const AppLayout = ({ maxWidth, header, children }: Props) => {
  const [scroll, setScroll] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 100) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    });
  }, []);
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Stack
      minHeight={'100vh'}
      width={1}
      sx={{
        overflowX: 'hidden',
        boxSizing: 'border-box',
        scrollBehavior: 'smooth',
        overflowY: 'auto',
      }}
      position={'relative'}
    >
      {header}
      <Stack
        width={1}
        maxWidth={maxWidth}
        margin="0 auto"
        minHeight={'calc(100vh - 132px - 415px)'}
      >
        {children}
      </Stack>
      <Footer maxWidth={maxWidth} />
      {scroll && (
        <Stack flexDirection={'row'} position={'fixed'} right={5} bottom={15}>
          <IconButton sx={{ bgcolor: Colors.yellow }} onClick={handleTop}>
            <KeyboardArrowUpIcon htmlColor={Colors.white} />
          </IconButton>
        </Stack>
      )}
    </Stack>
  );
};
