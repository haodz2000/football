import { Stack } from '@mui/material';
import { AppLayout } from '@client/components/layouts/AppLayout';
import { Header2 } from '@client/components/layouts/headers/Header2';
import { Size } from '@client/components/theme/Size';
import { NewsBreadCrumb } from '@client/components/breadcrumbs/NewsBreadCrumb';

export default async function Index() {
  return (
    <AppLayout
      maxWidth={Size.xl}
      header={<Header2 breadCrumb={<NewsBreadCrumb />} maxWidth={Size.xl} />}
    >
      <Stack width={1}></Stack>
    </AppLayout>
  );
}
