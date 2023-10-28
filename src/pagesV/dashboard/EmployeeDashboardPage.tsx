'use client';
import { FC } from 'react';

import { Grid } from '@mui/material';

import { ActivityWidget, ChargePoints } from '@/widgets';

const EmployeeDashboardPage: FC = () => {
  return (
    <Grid container gap={24}>
      <Grid item container>
        <ChargePoints />
      </Grid>
      <Grid item container>
        <ActivityWidget />
      </Grid>
    </Grid>
  );
};

export default EmployeeDashboardPage;
