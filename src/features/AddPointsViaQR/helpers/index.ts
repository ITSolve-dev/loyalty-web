import { QRInfo } from '@/shared/models';

const convertQrInfoToObject = (data: string): QRInfo | null => {
  let result = null;
  try {
    result = JSON.parse(data);
    if ('telegramId' in result && 'userId' in result && 'profileId' in result) {
      return result;
    }
    result = null;
  } catch (error) {
    console.log(error);
  } finally {
    return result;
  }
};

export { convertQrInfoToObject };
