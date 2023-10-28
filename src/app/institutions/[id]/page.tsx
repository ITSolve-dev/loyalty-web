'use client';
import { FC } from 'react';

import { DetailedInstitutionPage } from '@/pagesV';

type DetailedInstitutionProps = {
  params: {
    id: string;
  };
};

const DetailedInstitution: FC<DetailedInstitutionProps> = ({ params }) => {
  return <DetailedInstitutionPage />;
};

export default DetailedInstitution;
