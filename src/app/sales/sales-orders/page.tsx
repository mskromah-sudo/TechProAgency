'use client';

import { useState } from 'react';
import CreateSalesOrderForm from '@/components/forms/CreateSalesOrderForm';

export default function SalesOrdersPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [salesOrdersData, setSalesOrdersData] = useState([
    {
      id: 1,
      orderNumber: 'SO-2024-001',
      customerName: 'Acme Corporation',
      amount: '$12,500.00',
      status: 'Shipped',
      createdDate: '2024-11-10',
      shippingDate: '2024-11-15',
    },
    {
      id: 2,
      orderNumber: 'SO-2024-002',
      customerName: 'Tech Solutions Ltd',
      amount: '$8,750.00',
      status: 'Processing',
      createdDate: '2024-11-12',
      shippingDate: '2024-11-20',
    },
    {
      id: 3,
      orderNumber: 'SO-2024-003',
      customerName: 'Global Services Inc',
      amount: '$5,200.00',
      status: 'Confirmed',
      createdDate: '2024-11-14',
      shippingDate: '2024-11-22',
    },
    {
      id: 4,
      orderNumber: 'SO-2024-004',
      customerName: 'Innovation Labs',
      amount: '$15,800.00',
      status: 'Draft',
      createdDate: '2024-11-16',
      shippingDate: 'TBD',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Shipped':
        return 'bg-green-100 text-green-800';
      case 'Processing':
        return 'bg-blue-100 text-blue-800';
      case 'Confirmed':
        return 'bg-purple-100 text-purple-800';
      case 'Draft':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddOrder = (data: any) => {
    const newOrder = {
      id: salesOrdersData.length + 1,
      orderNumber: data.soNumber,
      customerName: data.customerName,
      amount: '$0.00',
      status: 'Draft',
      createdDate: new Date().toISOString().split('T')[0],
      shippingDate: data.dueDate,
    };
    setSalesOrdersData([...salesOrdersData, newOrder]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Sales Orders</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <i className="fa-solid fa-plus"></i>
          <span>Create Order</span>
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search orders..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          <option>All Status</option>
          <option>Draft</option>
          <option>Confirmed</option>
          <option>Processing</option>
          <option>Shipped</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Order Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Created Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Ship Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {salesOrdersData.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{order.orderNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{order.customerName}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.amount}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{order.createdDate}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{order.shippingDate}</td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CreateSalesOrderForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleAddOrder}
      />
    </div>
  );
}
