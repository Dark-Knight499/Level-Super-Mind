import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler, // Import Filler plugin
} from 'chart.js';

// Register components, including the Filler plugin
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const LineChart = () => {
  const data = {
    labels: ['7 Jul', '8 Jul', '9 Jul', '10 Jul', '11 Jul', '12 Jul', '13 Jul'],
    datasets: [
      {
        label: 'This Month',
        data: [15000, 15500, 14000, 16000, 17000, 18000, 17500],
        borderColor: '#6366F1',
        backgroundColor: 'rgba(99, 102, 241, 0.3)', // Background color for fill
        fill: true, // Enable fill for this dataset
      },
      {
        label: 'Same Period Last Month',
        data: [14000, 15000, 13500, 14500, 16000, 17000, 16500],
        borderColor: '#A5B4FC',
        borderDash: [5, 5],
        fill: false, // Disable fill for this dataset
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-gray-600 font-semibold mb-4">Total Balance Overview</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
