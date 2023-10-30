'use client';
import { FC } from 'react';

import { QRCode } from 'react-qrcode-logo';
import { Card, Stack, Typography } from '@mui/material';

import { useUserStore } from '@/shared/stores';

const QR: FC = () => {
  const { qrInfo } = useUserStore();

  return (
    <Card elevation={0} sx={{ p: 8, backgroundColor: 'white' }}>
      <Stack direction="column" spacing={16} alignItems="center" justifyContent="center">
        <Typography variant="body2" fontWeight={590}>
          Ваш QR-код
        </Typography>
        <QRCode value={JSON.stringify(qrInfo)} eyeRadius={20} size={200} />
        <Typography variant="body2" textAlign="center">
          Покажите этот QR-код на кассе для зачисления баллов
        </Typography>
      </Stack>
    </Card>
  );
};

export default QR;
