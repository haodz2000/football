import { Stack } from '@mui/material';
import { Home } from '../components/homes/Home';
import { AppLayout } from '../components/layouts/AppLayout';
import { Header } from '../components/layouts/headers/Header';
import { Size } from '@client/components/theme/Size';

export default async function Index() {
  return (
    <AppLayout
      maxWidth={Size.maxWidth}
      header={<Header maxWidth={Size.maxWidth} />}
    >
      <Stack width={1}>
        <Home />
      </Stack>
    </AppLayout>
  );
}
