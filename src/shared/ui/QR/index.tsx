'use client';
import { FC } from 'react';
import Image from 'next/image';

import { Card, Stack, Typography } from '@mui/material';

import QrCodeImageExample from '@/assets/images/qrcode_example.jpg';

const QR: FC = () => {
  return (
    <Card elevation={0} sx={{ p: 8, backgroundColor: 'white' }}>
      <Stack direction="column" spacing={16} alignItems="center" justifyContent="center">
        <Typography variant="body2" fontWeight={590}>
          Ваш QR-код
        </Typography>
        <Image src={QrCodeImageExample} alt="qr" />
        <Typography variant="body2" textAlign="center">
          Покажите этот QR-код на кассе для зачисления баллов
        </Typography>
      </Stack>
    </Card>
  );
};

export default QR;
