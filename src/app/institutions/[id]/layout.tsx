'use client';
import { FC, ReactNode } from 'react';

import { Box } from '@mui/material';

import { ProgressIndicator } from '@/shared/ui';

import './styles.scss';

type InstitutionLayoutProps = {
  children: ReactNode;
};

const InstitutionLayout: FC<InstitutionLayoutProps> = ({ children }) => {
  return (
    <>
      <Box sx={{ pb: 60 }}>{children}</Box>
      <Box className="bottom-options linear-gradient">
        <Box className="bottom-options__wrapper">
          <ProgressIndicator type="linear" end={10} current={8} />
        </Box>
      </Box>
    </>
  );
};

export default InstitutionLayout;
