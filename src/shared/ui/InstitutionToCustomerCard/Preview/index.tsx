import { FC } from 'react';

import { Typography, Paper, Grid } from '@mui/material';

import ProgressIndicator from '../../ProgressIndicator';
import { InstitutionToCustomerCardProps } from '../index';

const PreviewCard: FC<InstitutionToCustomerCardProps> = ({ onClick }) => {
  return (
    <Paper elevation={0} sx={{ pr: 5, pt: 5, pb: 3, pl: 7, minWidth: 170, minHeight: 80 }} onClick={onClick}>
      <Grid container rowGap={8} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="body2" fontWeight={590}>
            Cafe name
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body2" fontWeight={590}>
            8 баллов
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <ProgressIndicator current={8} end={10} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PreviewCard;
