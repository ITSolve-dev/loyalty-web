'use client';
import { FC } from 'react';

import { Grid } from '@mui/material';

import { ActivityWidget, ProfileWidget } from '@/widgets';

const CustomerProfilePage: FC = () => {
  return (
    <Grid container gap={24}>
      <Grid item xs={12} container>
        <ProfileWidget />
      </Grid>
      <Grid item xs={12} container>
        <ActivityWidget />
      </Grid>
    </Grid>
  );
};

export default CustomerProfilePage;
