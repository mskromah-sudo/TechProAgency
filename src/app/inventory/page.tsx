'use client';

import { useState } from 'react';
import AddItemForm from '@/components/forms/AddItemForm';
import SalesActivityCard from '@/components/cards/SalesActivityCard';
import InventorySummaryCard from '@/components/cards/InventorySummaryCard';

const inventoryActivityData = [
  { value: 45, label: 'Units', status: 'IN WAREHOUSE A', color: 'blue' as const },
  { value: 230, label: 'Units', status: 'IN WAREHOUSE B', color: 'green' as const },
  { value: 8, label: 'Units', status: 'LOW STOCK', color: 'amber' as const },
  { value: 0, label: 'Units', status: 'OUT OF STOCK', color: 'red' as const },
];

export default function InventoryPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [inventoryData, setInventoryData] = useState([
    {
      id: 1,
      itemName: 'Laptop Pro 15',
      sku: 'LAP-001',
      quantity: 45,
      status: 'In Stock',
      location: 'Warehouse A',
      lastUpdated: '2024-11-15',
    },
    {
      id: 2,
      itemName: 'USB-C Cable',
      sku: 'USB-C-002',
      quantity: 230,
      status: 'In Stock',
      location: 'Warehouse B',
      lastUpdated: '2024-11-14',
    },
    {
      id: 3,
      itemName: 'Wireless Mouse',
      sku: 'MOUSE-001',
      quantity: 8,
      status: 'Low Stock',
      location: 'Warehouse A',
      lastUpdated: '2024-11-15',
    },
    {
      id: 4,
      itemName: 'Monitor 27"',
      sku: 'MON-027',
      quantity: 0,
      status: 'Out of Stock',
      location: 'N/A',
      lastUpdated: '2024-11-13',
    },
    {
      id: 5,
      itemName: 'Keyboard Mechanical',
      sku: 'KEY-001',
      quantity: 67,
      status: 'In Stock',
      location: 'Warehouse C',
      lastUpdated: '2024-11-15',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-800';
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddItem = (data: any) => {
    const newItem = {
      id: inventoryData.length + 1,
      ...data,
      status: 'In Stock',
      lastUpdated: new Date().toISOString().split('T')[0],
    };
    setInventoryData([...inventoryData, newItem]);
  };

  return (
    <div className="p-8">
      {/* Welcome Section */}
      <div id="section-welcome" className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <i className="fa-solid fa-warehouse text-2xl text-gray-400"></i>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Hello, Demo User</h1>
            <p className="text-gray-600">Inventory Management</p>
          </div>
        </div>
        
        <div className="flex gap-8 border-b border-gray-200 mb-6">
          <button className="pb-4 text-blue-600 border-b-2 border-blue-600 font-medium">Dashboard</button>
          <button className="pb-4 text-gray-600 hover:text-gray-900">Getting Started</button>
          <button className="pb-4 text-gray-600 hover:text-gray-900">Recent Updates</button>
        </div>
      </div>

      {/* Inventory Activity Section */}
      <div id="section-inventory-activity" className="grid grid-cols-2 gap-8 mb-8">
        <SalesActivityCard items={inventoryActivityData} />
        <InventorySummaryCard quantityInHand="350" quantityToBeReceived="45" />
      </div>

      {/* Inventory Items Section */}
      <div id="section-items" className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Inventory Items</h2>
          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <i className="fa-solid fa-plus"></i>
            <span>Add Item</span>
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Search items..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
            <option>All Statuses</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>

        <div className="overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Item Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">SKU</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Quantity</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Location</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Last Updated</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {inventoryData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{item.itemName}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.sku}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{item.quantity}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.location}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.lastUpdated}</td>
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
      </div>

      <AddItemForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleAddItem}
      />
    </div>
  );
}
