'use client';
import { FC } from 'react';

import { Stack, Typography } from '@mui/material';
import { AddPoint } from '@/features';

const ChargePoints: FC = () => {
  return (
    <Stack flexGrow={1} alignItems="start" spacing={8}>
      <Typography variant="h4" fontWeight={590}>
        Начислить баллы
      </Typography>
      <AddPoint type="qr" />
      <AddPoint type="phone" />
    </Stack>
  );
};

export default ChargePoints;
