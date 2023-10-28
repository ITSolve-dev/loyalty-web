'use client';
import { FC, useMemo } from 'react';

import { Paper, Typography, Stack, Grid } from '@mui/material';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';

import { Scan } from './models';

type ScanCardProps = {
  scan: Scan;
};

const ScanCard: FC<ScanCardProps> = ({ scan }) => {
  const sign = useMemo(() => (scan.income ? '+' : '-'), [scan]);

  return (
    <Paper elevation={0} sx={{ p: '8px 24px 8px 8px', width: '100%' }}>
      <Grid container columnGap={4} alignItems="center" justifyContent="center">
        <Grid item>
          <StorefrontRoundedIcon fontSize="large" />
        </Grid>
        <Grid item xs container>
          <Stack spacing={0}>
            <Typography variant="body2">{scan.institution}</Typography>
            <Typography variant="caption">{scan.date}</Typography>
          </Stack>
        </Grid>
        <Grid item>
          <Stack>
            <Typography color="error.main" variant="body1" fontWeight={700}>
              {sign}
              {scan.amount}
            </Typography>
            <Typography variant="caption">балл</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ScanCard;
