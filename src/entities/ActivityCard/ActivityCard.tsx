'use client';
import { FC } from 'react';

import { Paper, Typography, Stack } from '@mui/material';

import { Activity } from './models';
import { textConfig } from './config';

type ActivityCardProps = {
  activity: Activity;
};

const ActivityCard: FC<ActivityCardProps> = ({ activity: { type, amount } }) => {
  return (
    <Paper elevation={0} sx={{ pt: 11, pb: 11 }}>
      <Stack alignItems="center" justifyContent="center">
        <Typography variant="h5" fontWeight={700}>
          {amount}
        </Typography>
        <Typography variant="body2">{textConfig[type as ActivityCardType]}</Typography>
      </Stack>
    </Paper>
  );
};

export default ActivityCard;
