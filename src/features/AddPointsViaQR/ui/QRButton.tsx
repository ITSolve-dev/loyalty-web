'use client';
import { FC } from 'react';

import { Button, Container, Stack, Typography, ButtonProps } from '@mui/material';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const QRButton: FC<ButtonProps> = ({
  color = 'primary',
  fullWidth = true,
  variant = 'contained',
  size = 'large',
  disableElevation = true,
  ...rest
}) => {
  return (
    <Button
      color={color}
      fullWidth={fullWidth}
      variant={variant}
      size={size}
      disableElevation={disableElevation}
      sx={{ p: '30px 10px' }}
      {...rest}
    >
      <Container>
        <Stack spacing={8} alignItems="center" justifyContent="center">
          <QrCodeScannerIcon fontSize="large" sx={{ width: 100, height: 100 }} />
          <Typography variant="h4" fontWeight={590}>
            Сканировать QR-код
          </Typography>
        </Stack>
      </Container>
    </Button>
  );
};

export default QRButton;
