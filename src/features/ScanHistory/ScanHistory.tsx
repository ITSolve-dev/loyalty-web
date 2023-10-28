'use client';
import { FC } from 'react';
import classNames from 'classnames';

import { Stack, Typography } from '@mui/material';

import { ScanCard, Scan } from '@/entities/ScanCard';

import './ScanHistory.module.scss';

const scans1: Scan[] = [
  {
    amount: 1,
    date: '12.10.2023 • 12:30',
    institution: 'Cafe name',
    income: true,
  },
  {
    amount: 2,
    date: '12.10.2023 • 12:30',
    institution: 'Cafe name',
    income: true,
  },
  {
    amount: 10,
    date: '12.10.2023 • 12:30',
    institution: 'Cafe name',
    income: false,
  },
  {
    amount: 1,
    date: '12.10.2023 • 12:30',
    institution: 'Cafe name',
    income: true,
  },
  {
    amount: 2,
    date: '12.10.2023 • 12:30',
    institution: 'Cafe name',
    income: true,
  },
  {
    amount: 10,
    date: '12.10.2023 • 12:30',
    institution: 'Cafe name',
    income: false,
  },
  {
    amount: 1,
    date: '12.10.2023 • 12:30',
    institution: 'Cafe name',
    income: true,
  },
  {
    amount: 2,
    date: '12.10.2023 • 12:30',
    institution: 'Cafe name',
    income: true,
  },
  {
    amount: 10,
    date: '12.10.2023 • 12:30',
    institution: 'Cafe name',
    income: false,
  },
];

type ScanHistoryProps = {
  scrollType: 'scrollable' | 'free';
  maxHeight?: number | string;
};

const ScanHistory: FC<ScanHistoryProps> = ({ scrollType, maxHeight }) => {
  return (
    <Stack spacing={8} flexGrow={1}>
      {/* TODO: Remove inline styles */}
      <Typography variant="body2" sx={{ opacity: 0.6 }}>
        История начислений
      </Typography>
      <Stack
        spacing={4}
        className={classNames({
          scrollable: scrollType === 'scrollable',
        })}
        maxHeight={maxHeight}
      >
        {scans1.map((scan, index) => (
          <ScanCard key={index} scan={scan} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ScanHistory;
