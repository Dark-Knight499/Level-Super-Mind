import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Money Transfer', 'Cafe & Restaurants', 'Rent', 'Education', 'Food & Groceries', 'Others'],
    datasets: [
      {
        data: [2500, 1200, 800, 600, 500, 300],
        backgroundColor: ['#6366F1', '#EC4899', '#10B981', '#F59E0B', '#3B82F6', '#A5B4FC'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-gray-600 font-semibold mb-4">Statistics</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
