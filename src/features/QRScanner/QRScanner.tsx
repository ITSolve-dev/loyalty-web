"use client";

import { FC, useEffect, useState } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";
import "./QRScanner.scss";

type QRScannerProps = {};

const QRScanner: FC<QRScannerProps> = () => {
  const [isScan, setIsScan] = useState<boolean>(false);

  return (
    <div>
      <h2>QRScanner</h2>
      <button onClick={() => setIsScan(true)}>Scan</button>
      {isScan && (
        <div
          id="custom-reader"
          style={{
            position: "relative",
          }}
        >
          <QrScanner
            scanDelay={100}
            onError={() => {}}
            onDecode={(data) => console.log(data)}
            videoStyle={{}}
          />
        </div>
      )}
    </div>
  );
};

export default QRScanner;
