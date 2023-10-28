'use client';
import { FC } from 'react';

import { QrScanner, AddingViaPhone } from './ui';

type AddPointProp = {
  type: AddPointType;
};

const AddPoint: FC<AddPointProp> = ({ type }) => {
  return type === 'qr' ? <QrScanner /> : <AddingViaPhone />;
};

export default AddPoint;
