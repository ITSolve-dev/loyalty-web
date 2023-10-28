'use client';
import { FC } from 'react';

import { Typography } from '@mui/material';

import { SearchListItems, InstitutionToCustomerCard } from '@/shared/ui';

const InstitutionPage: FC = () => {
  return (
    <SearchListItems title={<Typography variant="h3">Заведения</Typography>}>
      <InstitutionToCustomerCard type="standard" />
      <InstitutionToCustomerCard type="standard" />
      <InstitutionToCustomerCard type="standard" />
      <InstitutionToCustomerCard type="standard" />
      <InstitutionToCustomerCard type="standard" />
    </SearchListItems>
  );
};

export default InstitutionPage;
