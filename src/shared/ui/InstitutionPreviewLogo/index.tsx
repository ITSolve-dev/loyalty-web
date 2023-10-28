'use client';
import { FC } from 'react';

import { Paper, Typography } from '@mui/material';

import './styles.scss';

const InstitutionPreviewLogo: FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 8,
      }}
      className="institution-preview-logo"
    >
      <Typography variant="h4" color="primary.contrastText" fontWeight={700}>
        Cafe name
      </Typography>
      <Typography color="primary.contrastText" fontWeight={500}>
        Гродно, ул. Советская 12
      </Typography>
    </Paper>
  );
};

export default InstitutionPreviewLogo;
