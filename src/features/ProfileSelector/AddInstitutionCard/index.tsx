'use client';
import { FC } from 'react';

import { Stack, Paper, Typography, Button } from '@mui/material';

import { ProfileCard } from '@/entities/Profile';

const AddInstitutionCard: FC = () => {
  return (
    // TODO: Remove inline styles
    <Paper elevation={0} sx={{ backgroundColor: 'white', p: '16px 16px 24px 16px' }}>
      <Stack spacing={8} alignItems="center" flexGrow={1}>
        <Typography variant="body2" fontWeight={590} textAlign="center">
          Подключить свое заведение
        </Typography>
        <ProfileCard />
        <Typography variant="body2" textAlign="center">
          Для того чтобы подключить свое заведение в приложение, свяжитесь с представителями бота
        </Typography>
        <Button color="primary" variant="contained" sx={{ p: '14px 24px' }}>
          <Typography variant="body2" fontWeight={590}>
            Перейти в чат
          </Typography>
        </Button>
      </Stack>
    </Paper>
  );
};

export default AddInstitutionCard;
