"use client";
import { FC } from "react";

type ClientDashboardPageProps = {};

const ClientDashboardPage: FC<ClientDashboardPageProps> = () => {
  return (
    <div>
      <div>QR code here</div>
      <div>
        <ul>
          <li>Place 1</li>
          <li>Place 2</li>
          <li>Place 3</li>
        </ul>
      </div>
    </div>
  );
};

export default ClientDashboardPage;
