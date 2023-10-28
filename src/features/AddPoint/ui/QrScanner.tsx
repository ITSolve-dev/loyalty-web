'use client';
import { FC } from 'react';

import { Button, Stack, Typography } from '@mui/material';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const QrScanner: FC = () => {
  return (
    <Button color="primary" variant="contained" size="large" fullWidth sx={{ p: '30px 10px' }} disableElevation>
      <Stack direction="column" spacing={8} alignItems="center" justifyContent="center">
        <QrCodeScannerIcon fontSize="large" sx={{ width: 100, height: 100 }} />
        <Typography variant="body2" fontWeight={590}>
          Сканировать QR-код
        </Typography>
      </Stack>
    </Button>
  );
};

export default QrScanner;
