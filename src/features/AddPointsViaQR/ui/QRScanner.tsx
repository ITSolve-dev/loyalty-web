'use client';
import { FC, useCallback } from 'react';

import { QrScanner, QrScannerProps } from '@yudiel/react-qr-scanner';

import { QRInfo } from '@/shared/models';

import { convertQrInfoToObject } from '../helpers';

type QRScannerProps = Omit<QrScannerProps, 'onDecode'> & {
  width?: string | number | 'auto';
  height?: string | number | 'auto';
  onGetData?: (data: QRInfo | null) => void;
};

const QRScanner: FC<QRScannerProps> = ({ width = 'auto', height = 'auto', onGetData = () => {}, ...rest }) => {
  const handleDecodeData = useCallback(
    (data: string) => {
      const qrInfo = convertQrInfoToObject(data);
      onGetData(qrInfo);
    },
    [onGetData]
  );

  return (
    <div style={{ width, height }}>
      <QrScanner tracker onDecode={handleDecodeData} {...rest} />
    </div>
  );
};

export default QRScanner;
