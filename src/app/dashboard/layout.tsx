'use client';
import { FC, ReactNode } from 'react';

import { Stack } from '@mui/material';

import { DashboardHeader } from '@/widgets';

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Stack direction="column" spacing={12}>
      <DashboardHeader />
      {children}
    </Stack>
  );
};

export default DashboardLayout;
