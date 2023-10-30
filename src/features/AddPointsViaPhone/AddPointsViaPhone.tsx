'use client';
import { FC } from 'react';

import { Button, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const AddPointsViaPhone: FC = () => {
  return (
    <Button
      color="secondary"
      variant="contained"
      disableElevation
      endIcon={<NavigateNextIcon fontSize="large" />}
      fullWidth
      sx={{ p: '20px 10px' }}
    >
      <Typography variant="body2" fontWeight={590}>
        По номеру телефона
      </Typography>
    </Button>
  );
};

export default AddPointsViaPhone;
