'use client';

import { FC, useState, useMemo, useCallback } from 'react';
import { QrScanner } from '@yudiel/react-qr-scanner';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

type onErrorFunction = (error: Error) => void;
type onResultFunction = (result: string) => void;

type QRScannerProps = {
  onError: onErrorFunction;
  onResult?: onResultFunction;
  width?: number | 'auto';
  height?: number | 'auto';
};

enum ScanStatus {
  CLOSE = 0,
  ACTIVE,
}

export default function QRScanner({
  width = 'auto',
  height = 'auto',
  onError = () => {},
  onResult = () => {},
}: QRScannerProps) {
  const [status, setStatus] = useState<ScanStatus>(ScanStatus.CLOSE);

  const handleActivateScan = useCallback(() => setStatus(ScanStatus.ACTIVE), []);

  const handleCloseScan = useCallback(() => setStatus(ScanStatus.CLOSE), []);

  const handleSuccessDecodeQR = useCallback(
    (data: string) => {
      handleCloseScan();
      onResult && onResult(data);
    },
    [onResult, handleCloseScan]
  );

  const states = useMemo(
    () => ({
      [ScanStatus.CLOSE]: (
        <Button variant="contained" size="large" onClick={handleActivateScan}>
          Scan
        </Button>
      ),
      [ScanStatus.ACTIVE]: (
        <>
          <div style={{ width, height }}>
            <QrScanner scanDelay={100} onError={onError} onDecode={handleSuccessDecodeQR} />
          </div>
          <Button variant="contained" size="large" onClick={handleCloseScan}>
            Close
          </Button>
        </>
      ),
    }),
    [width, height]
  );

  return (
    <Container>
      <Typography variant="h4">QRScanner</Typography>
      {states[status]}
    </Container>
  );
}
