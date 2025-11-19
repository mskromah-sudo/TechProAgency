'use client';

import SalesActivityCard from '@/components/cards/SalesActivityCard';
import InventorySummaryCard from '@/components/cards/InventorySummaryCard';
import EmptyCard from '@/components/cards/EmptyCard';

const salesActivityData = [
  { value: 51, label: 'Qty', status: 'TO BE PACKED', color: 'blue' as const },
  { value: 40, label: 'Pkgs', status: 'TO BE SHIPPED', color: 'red' as const },
  { value: 52, label: 'Pkgs', status: 'TO BE DELIVERED', color: 'teal' as const },
  { value: 97, label: 'Qty', status: 'TO BE INVOICED', color: 'amber' as const },
];

const salesMetrics = [
  { label: 'Total Revenue', value: '$125,450.00', change: '+12.5%', icon: 'fa-chart-line' },
  { label: 'Invoices Created', value: '248', change: '+8.2%', icon: 'fa-file-lines' },
  { label: 'Pending Invoices', value: '$32,100.00', change: '+3.1%', icon: 'fa-hourglass' },
  { label: 'Collections Rate', value: '94.5%', change: '+2.3%', icon: 'fa-percent' },
];

export default function SalesPage() {
  return (
    <div className="p-8">
      {/* Welcome Section */}
      <div id="section-welcome" className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <i className="fa-solid fa-cart-shopping text-2xl text-gray-400"></i>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hello, Demo User</h1>
            <p className="text-gray-600">Sales Management</p>
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
        <SalesActivityCard items={salesActivityData} />
        <InventorySummaryCard quantityInHand="127..." quantityToBeReceived="62" />
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {salesMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{metric.value}</p>
                <p className="text-green-600 text-xs mt-2">{metric.change}</p>
              </div>
              <i className={`fa-solid ${metric.icon} text-4xl text-blue-200`}></i>
            </div>
          </div>
        ))}
      </div>

      {/* Charts/Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Invoices */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Invoices</h2>
          <div className="space-y-3">
            {[
              { inv: 'INV-2024-001', customer: 'Acme Corp', amount: '$5,200', status: 'Paid' },
              { inv: 'INV-2024-002', customer: 'Tech Solutions', amount: '$8,500', status: 'Pending' },
              { inv: 'INV-2024-003', customer: 'Global Services', amount: '$3,200', status: 'Paid' },
              { inv: 'INV-2024-004', customer: 'Innovation Labs', amount: '$6,800', status: 'Overdue' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-200">
                <div>
                  <p className="font-medium text-gray-900">{item.inv}</p>
                  <p className="text-sm text-gray-600">{item.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{item.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded ${
                    item.status === 'Paid' ? 'bg-green-100 text-green-800' :
                    item.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Customers */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Top Customers</h2>
          <div className="space-y-3">
            {[
              { name: 'Acme Corp', sales: '$28,500', orders: 12 },
              { name: 'Tech Solutions', sales: '$22,100', orders: 8 },
              { name: 'Global Services', sales: '$18,900', orders: 6 },
              { name: 'Innovation Labs', sales: '$15,200', orders: 5 },
            ].map((customer, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {customer.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{customer.name}</p>
                    <p className="text-xs text-gray-600">{customer.orders} orders</p>
                  </div>
                </div>
                <p className="font-medium text-gray-900">{customer.sales}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
