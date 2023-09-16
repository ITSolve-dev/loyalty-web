"use client";

import { FC } from "react";
import { QRScanner } from "@/features";

type EmployeeDashboardPageProps = {};

const EmployeeDashboardPage: FC<EmployeeDashboardPageProps> = () => {
  return (
    <div>
      <div>
        <h1>Scan QR CODE</h1>
        <button>Scan</button>
        <QRScanner />
      </div>
    </div>
  );
};

export default EmployeeDashboardPage;
