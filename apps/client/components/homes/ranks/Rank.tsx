import {
  Avatar,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';
import { Colors } from '../../theme/Colors';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const Rank = () => {
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
          Club Ranking
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
        <TableContainer>
          <Table
            sx={{
              ['& .MuiTableCell-root']: {
                borderBottom: `1px solid ${Colors.lightWhite}`,
              },
            }}
          >
            <TableBody>
              {Array.from(Array(12)).map((_, index) => (
                <TableRow
                  key={index}
                  sx={{
                    '&:last-child td': {
                      borderBottom: 0,
                    },
                  }}
                >
                  <TableCell width={50} align="center">
                    <Stack>
                      <Avatar
                        src="https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2019/04/6.png"
                        alt=""
                      />
                    </Stack>
                  </TableCell>
                  <TableCell align="left">
                    <Typography color={Colors.white} fontWeight={600}>
                      Real Madrid
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography color={Colors.white} fontWeight={600}>
                      222
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
            View Full Rankings
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
