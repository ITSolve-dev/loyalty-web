'use client';
import { FC } from 'react';

import { Grid, Button, Typography } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { ProfileLink } from '@/shared/ui';

const DashboardHeader: FC = () => {
  return (
    <Grid container columnGap={4}>
      <Grid item xs>
        <ProfileLink href="/profile" />
      </Grid>
      <Grid item xs={5} container>
        <Button fullWidth color="secondary" variant="contained" disableElevation startIcon={<HelpOutlineIcon />}>
          <Typography variant="body2" fontWeight={590}>
            Помощь
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default DashboardHeader;
