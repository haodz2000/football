import {
  Avatar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Colors } from '../../theme/Colors';

export const PointTable = () => {
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
          Point Table
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
        <Stack>
          <Typography variant="h6" color={Colors.white}>
            Country
          </Typography>
        </Stack>
        <TableContainer>
          <Table
            sx={{
              ['& .MuiTableCell-root']: {
                borderBottom: `1px solid ${Colors.lightWhite}`,
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell colSpan={6}>
                  <Typography fontWeight={600} color={Colors.yellow}>
                    Team
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography fontWeight={600} color={Colors.yellow}>
                    W
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography fontWeight={600} color={Colors.yellow}>
                    L
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography fontWeight={600} color={Colors.yellow}>
                    D
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography fontWeight={600} color={Colors.yellow}>
                    PTS
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from(Array(10)).map((_, index) => (
                <TableRow
                  key={index}
                  sx={{
                    '&:last-child td': {
                      borderBottom: 0,
                    },
                  }}
                >
                  <TableCell colSpan={6}>
                    <Stack flexDirection="row" alignItems="center" gap={1}>
                      <Avatar
                        sx={{ width: 28, height: 28 }}
                        src="https://rstheme.com/products/wordpress/khelo/wp-content/uploads/2019/04/10.png"
                        alt="logo"
                      />
                      <Typography
                        color={Colors.white}
                        fontWeight={600}
                        fontSize={14}
                      >
                        Real Madrid
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      color={Colors.white}
                      fontWeight={600}
                      fontSize={14}
                    >
                      1
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      color={Colors.white}
                      fontWeight={600}
                      fontSize={14}
                    >
                      1
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      color={Colors.white}
                      fontWeight={600}
                      fontSize={14}
                    >
                      1
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      color={Colors.white}
                      fontWeight={600}
                      fontSize={14}
                    >
                      4
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
};
