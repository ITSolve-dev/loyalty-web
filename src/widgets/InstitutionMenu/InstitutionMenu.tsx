'use client';
import { FC } from 'react';

import { Stack, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import { InstitutionMenuList } from '@/features';

const InstitutionMenu: FC = () => {
  return (
    // TODO: Remove inline styles
    <Stack spacing={8}>
      <Typography variant="h4" fontWeight={700}>
        Меню
      </Typography>
      <Button
        color="primary"
        variant="contained"
        startIcon={<EditIcon />}
        fullWidth
        disableElevation
        sx={{ p: '20px 10px' }}
      >
        Изменить меню
      </Button>
      <InstitutionMenuList />
    </Stack>
  );
};

export default InstitutionMenu;
