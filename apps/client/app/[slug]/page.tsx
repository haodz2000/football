import { AppLayout } from '@client/components/layouts/AppLayout';
import { Header } from '@client/components/layouts/headers/Header';
import { Size } from '@client/components/theme/Size';
import { Stack } from '@mui/material';

export default async function Index() {
  return (
    <AppLayout
      maxWidth={Size.maxWidth}
      header={<Header maxWidth={Size.maxWidth} />}
    >
      <Stack width={1}>Slug</Stack>
    </AppLayout>
  );
}
