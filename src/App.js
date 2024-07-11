import React, { useState, useEffect } from 'react';
import GraphInput from './GraphInput';
import GraphDisplay from './GraphDisplay';
import './App.css';
import Chart from 'chart.js/auto'; // Import Chart.js

const App = () => {
  const [xData, setXData] = useState([]);
  const [yData, setYData] = useState([]);
  const [chartInstance, setChartInstance] = useState(null);

  const handleDataSubmit = (x, y) => {
    setXData(x);
    setYData(y);
  };

  useEffect(() => {
    // Destroy previous chart instance if it exists
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Create new chart instance
    const ctx = document.getElementById('myChart');
    const newChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
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
      },
    });

    // Set the new chart instance to state
    setChartInstance(newChartInstance);

    // Clean up on component unmount
    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, [xData, yData]);

  return (
    <div className="App">
      <h1>Graph Plotter</h1>
      <GraphInput onSubmit={handleDataSubmit} />
      <div className="chart-container">
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    </div>
  );
};

export default App;
