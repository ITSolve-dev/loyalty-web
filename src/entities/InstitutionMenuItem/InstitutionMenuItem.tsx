'use client';
import { FC } from 'react';

import { Paper, Card, Stack, Grid, Typography, Box } from '@mui/material';

import { MenuItem } from './models';

type InstitutionMenuItemProps = {
  item: MenuItem;
};

const InstitutionMenuItem: FC<InstitutionMenuItemProps> = ({ item }) => {
  return (
    // TODO: Remove inline styles
    <Card sx={{ p: 4 }} elevation={0}>
      <Stack spacing={4}>
        <Paper
          sx={{ backgroundColor: 'white', width: 'auto', height: 'auto', flexGrow: 1, flexBasis: 110 }}
          elevation={0}
        />
        <Box sx={{ pl: 2, pr: 2, mb: 4 }}>
          <Grid container>
            <Grid item xs={12} container>
              <Typography variant="body2" fontWeight={590}>
                {item.title}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="caption" sx={{ opacity: 0.5 }}>
                {item.description}
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <Typography variant="body2" fontWeight={700}>
                {`${item.price} ${item.currency}`}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Card>
  );
};

export default InstitutionMenuItem;
