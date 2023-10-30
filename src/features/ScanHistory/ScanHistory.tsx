'use client';
import { FC } from 'react';
import classNames from 'classnames';

import { useQuery } from '@tanstack/react-query';
import { Stack, Typography, CircularProgress } from '@mui/material';

import { ScanCard } from '@/entities/ScanCard';

import useActivityStore from './store';

import './ScanHistory.module.scss';

type ScanHistoryProps = {
  scrollType: 'scrollable' | 'free';
  maxHeight?: number | string;
};

const ScanHistory: FC<ScanHistoryProps> = ({ scrollType, maxHeight }) => {
  const { fetchScans, scans } = useActivityStore();
  const { isLoading } = useQuery({ queryKey: ['scans'], queryFn: fetchScans });

  return (
    <Stack spacing={8} flexGrow={1}>
      {/* TODO: Remove inline styles */}
      <Typography variant="body2" sx={{ opacity: 0.6 }}>
        История начислений
      </Typography>
      {isLoading && !scans ? (
        <CircularProgress />
      ) : (
        <Stack
          spacing={4}
          className={classNames({
            scrollable: scrollType === 'scrollable',
          })}
          maxHeight={maxHeight}
        >
          {scans && scans.map((scan) => scan && <ScanCard key={scan.id} scan={scan} />)}
        </Stack>
      )}
    </Stack>
  );
};

export default ScanHistory;
