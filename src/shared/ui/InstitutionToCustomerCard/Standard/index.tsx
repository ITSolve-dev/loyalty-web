import { FC } from 'react';

import { Typography, Paper, Grid } from '@mui/material';

import { InstitutionToCustomerCardProps } from '../index';

const StandardCard: FC<InstitutionToCustomerCardProps> = ({ onClick }) => {
  return (
    <Paper elevation={0} sx={{ pr: 5, pt: 5, pb: 3, pl: 7, minHeight: 120, width: '100%' }} onClick={onClick}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid>
          <Typography variant="h4" fontWeight={590}>
            Cafe name
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StandardCard;
