'use client';
import { FC } from 'react';

import { Button, Container, Stack, Typography, Card } from '@mui/material';

import { QRInfo } from '@/shared/models';
import QRScanner from './QRScanner';

type CameraViewProps = {
  onClose: () => void;
  onSuccess: (data: QRInfo | null) => void;
  onError: (error: Error) => void;
};

const CameraView: FC<CameraViewProps> = ({ onClose, onError, onSuccess }) => {
  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 0,
        pl: 8,
        pr: 8,
        pt: 15,
        pb: 12,
      }}
    >
      <Container sx={{ height: '100%' }}>
        <Stack spacing={10} alignItems="center" flexGrow={1} sx={{ height: '100%' }}>
          <Typography variant="h4" fontWeight={700}>
            Сканировать QR-код
          </Typography>
          <Typography textAlign="center" variant="body2">
            Попросите клиента открыть свой QR-код и наведите на него камеру
          </Typography>
          <QRScanner scanDelay={0} onError={onError} onGetData={onSuccess} width="100%" height="100%" />
          <Button
            fullWidth
            color="secondary"
            variant="contained"
            disableElevation
            sx={{ p: '20px 10px' }}
            onClick={onClose}
          >
            <Typography variant="body2" fontWeight={590}>
              Отмена
            </Typography>
          </Button>
        </Stack>
      </Container>
    </Card>
  );
};

export default CameraView;
