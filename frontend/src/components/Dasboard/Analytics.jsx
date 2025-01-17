import React from 'react';
import LineChart from './AnalyticsComponents/LineChart';
import PieChart from './AnalyticsComponents/PieChart';
import BarGraph from './AnalyticsComponents/BarGraph';
import Statcard from './AnalyticsComponents/Statcard';

const Analytics = () => {
  return (
    <div className="flex justify-center p-6 bg-neutral-100">
      {/* Container for the Analytics content */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Stat Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4">
          <Statcard
            title="Total Balance"
            value="15,700"
            currency="USD"
            percentage={12.1}
            transactions={50}
            categories={5}
          />
          <Statcard
            title="Income"
            value="8,500"
            currency="USD"
            percentage={6.3}
            transactions={27}
            categories={6}
          />
          <Statcard
            title="Expense"
            value="6,222"
            currency="USD"
            percentage={-2.4}
            transactions={23}
            categories={9}
          />
          <Statcard
            title="Expense"
            value="6,222"
            currency="USD"
            percentage={-2.4}
            transactions={23}
            categories={9}
          />
        </div>

        {/* Line Chart */}
        <div className="lg:col-span-2">
          <LineChart />
        </div>

        {/* Pie Chart */}
        <div>
          <PieChart />
        </div>

        {/* Bar Graph */}
        <div className="lg:col-span-3">
          <BarGraph />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
