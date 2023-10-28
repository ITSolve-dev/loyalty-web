'use client';
import { FC } from 'react';

import { Stack, Typography } from '@mui/material';

import { ActivityStatistic, ScanHistory } from '@/features';

/**
 * Describe widget from profile.
 * Activity filters and history of scans
 * @returns
 */
const ActivityWidget: FC = () => {
  return (
    <Stack spacing={8}>
      <Typography variant="h4">Активность</Typography>
      <ActivityStatistic />
      <ScanHistory scrollType="free" />
    </Stack>
  );
};

export default ActivityWidget;
