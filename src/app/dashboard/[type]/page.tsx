'use client';
import { FC } from 'react';

import CustomerDashboardPage from '@/pagesV/dashboard/CustomerDashboardPage';
import EmployeeDashboardPage from '@/pagesV/dashboard/EmployeeDashboardPage';

type TypedDashboardProps = {
  params: {
    type: string;
  };
};

const TypedDashboard: FC<TypedDashboardProps> = ({ params: { type } }) => {
  return type === 'customer' ? <CustomerDashboardPage /> : <EmployeeDashboardPage />;
};

export default TypedDashboard;
