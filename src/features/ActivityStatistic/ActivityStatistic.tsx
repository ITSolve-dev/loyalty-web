'use client';
import { FC } from 'react';

import { Stack, Grid } from '@mui/material';

import { ActivityCard } from '@/entities/ActivityCard';
import { FilterSwitcher } from './ui';

const ActivityStatistic: FC = () => {
  return (
    <Stack flexGrow={1} spacing={8}>
      <FilterSwitcher />
      <Grid container gap={4}>
        <Grid item xs={12}>
          <ActivityCard
            activity={{
              amount: 230,
              type: 'scan',
            }}
          />
        </Grid>
        <Grid item xs>
          <ActivityCard
            activity={{
              amount: 242,
              type: 'income',
            }}
          />
        </Grid>
        <Grid item xs>
          <ActivityCard
            activity={{
              amount: 100,
              type: 'outgoing',
            }}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ActivityStatistic;
