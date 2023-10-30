import { toInternal } from '@/shared/lib/helpers';
import { CreateScan } from '../models';

const scanQrCodeRequest = async (data: CreateScan) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_SCANS as string, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (response.status === 200) {
    const scanInfo = await response.json();
    return toInternal(scanInfo);
  }
};

export { scanQrCodeRequest };
