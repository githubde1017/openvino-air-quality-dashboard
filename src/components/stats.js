import React from 'react';
import { Bar } from 'react-chartjs-2';

const Stats = ({ data }) => {
  const labels = data.map(sensor => sensor.name);
  const aqiValues = data.map(sensor => sensor.aqi);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Air Quality Index (AQI)',
        data: aqiValues,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>AQI Statistics</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default Stats;
