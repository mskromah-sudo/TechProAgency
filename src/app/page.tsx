'use client';

import SalesActivityCard from '@/components/cards/SalesActivityCard';
import InventorySummaryCard from '@/components/cards/InventorySummaryCard';
import EmptyCard from '@/components/cards/EmptyCard';

const salesData = [
  { value: 51, label: 'Qty', status: 'TO BE PACKED', color: 'blue' as const },
  { value: 40, label: 'Pkgs', status: 'TO BE SHIPPED', color: 'red' as const },
  { value: 52, label: 'Pkgs', status: 'TO BE DELIVERED', color: 'teal' as const },
  { value: 97, label: 'Qty', status: 'TO BE INVOICED', color: 'amber' as const },
];

export default function Home() {
  return (
    <div className="p-6">
      {/* Welcome Section */}
      <div id="section-welcome" className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <i className="fa-solid fa-file text-gray-400 text-2xl"></i>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Hello, Demo User</h1>
            <p className="text-gray-600">Demo Org</p>
          </div>
        </div>
        
        <div className="flex gap-6 border-b border-gray-200 mb-6">
          <button className="pb-3 text-gray-900 font-medium border-b-2 border-blue-500">Dashboard</button>
          <button className="pb-3 text-gray-600 hover:text-gray-900">Getting Started</button>
          <button className="pb-3 text-gray-600 hover:text-gray-900">Recent Updates</button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Sales Activity Card */}
        <div className="col-span-2">
          <SalesActivityCard items={salesData} />
        </div>

        {/* Inventory Summary Card */}
        <InventorySummaryCard quantityInHand="127..." quantityToBeReceived="62" />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <EmptyCard title="Item Details" />
        <div className="bg-white rounded-lg border border-gray-200 p-6 flex items-end justify-between">
          <h2 className="text-lg font-bold text-gray-900">Top Selling Items</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
            <i className="fa-solid fa-envelope"></i>
            <span>Contact Support</span>
          </button>
        </div>
      </div>
    </div>
  );
}
