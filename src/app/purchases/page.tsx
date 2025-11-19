'use client';

import SalesActivityCard from '@/components/cards/SalesActivityCard';
import InventorySummaryCard from '@/components/cards/InventorySummaryCard';

const purchasesActivityData = [
  { value: 156, label: 'Orders', status: 'PURCHASE ORDERS', color: 'blue' as const },
  { value: 32, label: 'Bills', status: 'PENDING BILLS', color: 'amber' as const },
  { value: 18, label: 'Bills', status: 'OVERDUE BILLS', color: 'red' as const },
  { value: 42, label: 'Returns', status: 'PENDING RETURNS', color: 'teal' as const },
];

const purchasesMetrics = [
  { label: 'Total Purchases', value: '$85,200.00', change: '+5.8%', icon: 'fa-shopping-cart' },
  { label: 'Pending Bills', value: '$32,100.00', change: '+2.1%', icon: 'fa-hourglass' },
  { label: 'Purchase Orders', value: '156', change: '+10.2%', icon: 'fa-clipboard-list' },
  { label: 'Payment Terms Avg', value: '30 Days', change: '+1.5%', icon: 'fa-calendar' },
];

export default function PurchasesPage() {
  return (
    <div className="p-8">
      {/* Welcome Section */}
      <div id="section-welcome" className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <i className="fa-solid fa-shopping-bag text-2xl text-gray-400"></i>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hello, Demo User</h1>
            <p className="text-gray-600">Purchases Management</p>
          </div>
        </div>
        
        <div className="flex gap-8 border-b border-gray-200 mb-6">
          <button className="pb-4 text-blue-600 border-b-2 border-blue-600 font-medium">Dashboard</button>
          <button className="pb-4 text-gray-600 hover:text-gray-900">Getting Started</button>
          <button className="pb-4 text-gray-600 hover:text-gray-900">Recent Updates</button>
        </div>
      </div>

      {/* Purchases Activity Section */}
      <div id="section-purchases-activity" className="grid grid-cols-2 gap-8 mb-8">
        <SalesActivityCard items={purchasesActivityData} />
        <InventorySummaryCard quantityInHand="$85,200" quantityToBeReceived="$32,100" />
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {purchasesMetrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{metric.value}</p>
                <p className="text-green-600 text-xs mt-2">{metric.change}</p>
              </div>
              <i className={`fa-solid ${metric.icon} text-4xl text-green-200`}></i>
            </div>
          </div>
        ))}
      </div>

      {/* Charts/Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bills */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Bills</h2>
          <div className="space-y-3">
            {[
              { bill: 'BILL-2024-001', vendor: 'TechSupply Inc', amount: '$4,500', status: 'Unpaid' },
              { bill: 'BILL-2024-002', vendor: 'Global Distributors', amount: '$6,200', status: 'Paid' },
              { bill: 'BILL-2024-003', vendor: 'Office Solutions', amount: '$2,800', status: 'Overdue' },
              { bill: 'BILL-2024-004', vendor: 'Premium Vendors Ltd', amount: '$5,100', status: 'Partially Paid' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-200">
                <div>
                  <p className="font-medium text-gray-900">{item.bill}</p>
                  <p className="text-sm text-gray-600">{item.vendor}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{item.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded ${
                    item.status === 'Paid' ? 'bg-green-100 text-green-800' :
                    item.status === 'Unpaid' ? 'bg-yellow-100 text-yellow-800' :
                    item.status === 'Overdue' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Vendors */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Top Vendors</h2>
          <div className="space-y-3">
            {[
              { name: 'TechSupply Inc', spent: '$28,500', orders: 15 },
              { name: 'Global Distributors', spent: '$22,100', orders: 12 },
              { name: 'Premium Vendors Ltd', spent: '$18,900', orders: 8 },
              { name: 'Office Solutions', spent: '$15,600', orders: 6 },
            ].map((vendor, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    {vendor.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{vendor.name}</p>
                    <p className="text-xs text-gray-600">{vendor.orders} orders</p>
                  </div>
                </div>
                <p className="font-medium text-gray-900">{vendor.spent}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
