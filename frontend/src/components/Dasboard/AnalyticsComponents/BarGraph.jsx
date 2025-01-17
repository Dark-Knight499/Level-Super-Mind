import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Expense',
        data: [2000, 2600, 2200, 2400, 2500, 2800, 2700],
        backgroundColor: '#EC4899',
      },
      {
        label: 'Budget',
        data: [2500, 2500, 2500, 2500, 2500, 2500, 2500],
        backgroundColor: '#6366F1',
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
      <h3 className="text-gray-600 font-semibold mb-4">Comparing of Budget and Expense</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
