'use client';
import { FC } from 'react';

import { Stack, Typography } from '@mui/material';
import { AddPointsViaQR, AddPointsViaPhone } from '@/features';

const ChargePoints: FC = () => {
  return (
    <Stack flexGrow={1} alignItems="start" spacing={8}>
      <Typography variant="h4" fontWeight={590}>
        Начислить баллы
      </Typography>
      <AddPointsViaQR />
      <AddPointsViaPhone />
    </Stack>
  );
};

export default ChargePoints;
