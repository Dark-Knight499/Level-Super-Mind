import React from 'react';

const Statcard = ({ title, value, currency, percentage, transactions, categories }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h3 className="text-gray-600 font-semibold">{title}</h3>
      <div className="flex items-baseline mt-2">
        <span className="text-2xl font-bold">{currency}{value}</span>
        <span className={`ml-2 text-sm font-medium ${percentage > 0 ? 'text-green-500' : 'text-red-500'}`}>
          {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
        </span>
      </div>
      <p className="text-gray-400 text-sm mt-1">{transactions} transactions • {categories} categories</p>
    </div>
  );
};

export default Statcard;
