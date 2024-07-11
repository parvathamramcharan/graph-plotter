import React from 'react';
import { Line } from 'react-chartjs-2';

const GraphDisplay = ({ xData, yData }) => {
  const data = {
    labels: xData,
    datasets: [
      {
        label: 'Sample Data',
        data: yData,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return <Line data={data} />;
};

export default GraphDisplay;
