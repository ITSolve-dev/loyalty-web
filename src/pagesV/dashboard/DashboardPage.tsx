'use client';
import { FC, useMemo } from 'react';

import { CircularProgress, Box } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { useUserStore } from '@/shared/stores';
import { RoleType } from '@/shared/models';

import CustomerDashboardPage from './CustomerDashboardPage';
import EmployeeDashboardPage from './EmployeeDashboardPage';

const DashboardPage: FC = () => {
  const { fetchUser, profiles } = useUserStore();
  const { isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => fetchUser(),
  });

  const Page = useMemo(() => {
    if (profiles) {
      if (profiles[0].role === RoleType.CUSTOMER) return <CustomerDashboardPage />;
      if (profiles[0].role === RoleType.EMPLOYEE) return <EmployeeDashboardPage />;
      if (profiles[0].role === RoleType.DEVELOPER) return <EmployeeDashboardPage />;
      return <CustomerDashboardPage />;
    }
    return (
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }, [isLoading, profiles]);

  return Page;
};

export default DashboardPage;
