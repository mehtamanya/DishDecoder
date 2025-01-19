import React from 'react';
import QRCode from 'react-qr-code';

const QRGenerator = ({ dish, quantities, totalCalories }) => {
  const qrData = { dish, quantities, totalCalories };

  return (
    <div>
      <QRCode value={JSON.stringify(qrData)} />
    </div>
  );
};

export default QRGenerator;
