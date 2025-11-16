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

export default function ItemsPage() {
  return (
    <div className="p-8">
      {/* Welcome Section */}
      <div id="section-welcome" className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <i className="fa-solid fa-file text-2xl text-gray-400"></i>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hello, Demo User</h1>
            <p className="text-gray-600">Demo Org</p>
          </div>
        </div>
        
        <div className="flex gap-8 border-b border-gray-200 mb-6">
          <button className="pb-4 text-blue-600 border-b-2 border-blue-600 font-medium">Dashboard</button>
          <button className="pb-4 text-gray-600 hover:text-gray-900">Getting Started</button>
          <button className="pb-4 text-gray-600 hover:text-gray-900">Recent Updates</button>
        </div>
      </div>

      {/* Sales Activity Section */}
      <div id="section-sales-activity" className="grid grid-cols-2 gap-8 mb-8">
        <SalesActivityCard items={salesData} />
        <InventorySummaryCard quantityInHand="127..." quantityToBeReceived="62" />
      </div>

      {/* Bottom Section */}
      <div id="section-details" className="grid grid-cols-2 gap-8">
        <EmptyCard title="Item Details" />
        <div className="bg-white rounded-lg p-6 border border-gray-200 flex items-end justify-between">
          <h2 className="text-xl font-bold text-gray-900">Top Selling Items</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600">
            <i className="fa-solid fa-envelope"></i>
            <span>Contact Support</span>
          </button>
        </div>
      </div>
    </div>
  );
}
