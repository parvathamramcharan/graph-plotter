import React, { useState } from 'react';

const GraphInput = ({ onSubmit }) => {
  const [xData, setXData] = useState('');
  const [yData, setYData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(xData.split(',').map(Number), yData.split(',').map(Number));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="X-axis data"
        value={xData}
        onChange={(e) => setXData(e.target.value)}
      />
      <input
        type="text"
        placeholder="Y-axis data"
        value={yData}
        onChange={(e) => setYData(e.target.value)}
      />
      <button type="submit">Plot Graph</button>
    </form>
  );
};

export default GraphInput;
