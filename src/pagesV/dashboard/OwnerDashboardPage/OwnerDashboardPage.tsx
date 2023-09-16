"use client";

import { FC } from "react";

type OwnerDashboardPageProps = {};

const OwnerDashboardPage: FC<OwnerDashboardPageProps> = () => {
  return (
    <div>
      <h1>Statistic</h1>
      <h3>Employees</h3>
      <ul>
        <li>Employee 1</li>
        <li>Employee 2</li>
        <li>Employee 3</li>
      </ul>
    </div>
  );
};

export default OwnerDashboardPage;
