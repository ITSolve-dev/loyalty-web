'use client';
import { FC } from 'react';

import { InstitutionCarousel, SearchInstitution } from '@/features';

const CustomerDashboardPage: FC = () => {
  return (
    <>
      <InstitutionCarousel />
      <SearchInstitution />
    </>
  );
};

export default CustomerDashboardPage;
