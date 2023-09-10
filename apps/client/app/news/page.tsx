'use client';
import { Grid, Stack, TextField, Typography } from '@mui/material';
import { AppLayout } from '@client/components/layouts/AppLayout';
import { Header2 } from '@client/components/layouts/headers/Header2';
import { Size } from '@client/components/theme/Size';
import { NewsBreadCrumb } from '@client/components/breadcrumbs/NewsBreadCrumb';
import { Blog } from '@client/components/news/Blog';
import SearchIcon from '@mui/icons-material/Search';
import { Colors } from '@client/components/theme/Colors';

export default async function Index() {
  return (
    <AppLayout
      maxWidth={Size.xl}
      header={<Header2 breadCrumb={<NewsBreadCrumb />} maxWidth={Size.xl} />}
    >
      <Stack width={1} padding={2} bgcolor={'#ededed'}>
        <Stack py={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
              <Stack gap={5}>
                <Blog />
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Stack px={2} gap={3}>
                <Stack>
                  <TextField
                    size="small"
                    onChange={(e) => console.log(e)}
                    InputProps={{
                      endAdornment: <SearchIcon htmlColor={Colors.textGray} />,
                    }}
                    placeholder="Search..."
                  />
                </Stack>
                <Stack>
                  <Typography
                    variant="h3"
                    fontWeight={600}
                    color={Colors.textBlack}
                    fontSize={22}
                  >
                    Recent News
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </AppLayout>
  );
}
