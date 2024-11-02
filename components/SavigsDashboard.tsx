import React from "react";

interface DashboardProps {
  totalSavings: number;
  memberCount: number;
}

const SavigsDashboard: React.FC<DashboardProps> = ({
  totalSavings,
  memberCount,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h2 className="text-xl font-semibold mb-4">Savings Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Total Savings:</p>
          <p className="text-2xl font-bold">
            {totalSavings.toLocaleString()} Naira
          </p>
        </div>
        <div>
          <p className="text-gray-600">Total Members:</p>
          <p className="text-2xl font-bold">{memberCount}</p>
        </div>
      </div>
    </div>
  );
};

export default SavigsDashboard;
