'use client';

import { useState } from 'react';
import CreatePurchaseOrderForm from '@/components/forms/CreatePurchaseOrderForm';

export default function PurchaseOrdersPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [purchaseOrdersData, setPurchaseOrdersData] = useState([
    {
      id: 1,
      poNumber: 'PO-2024-001',
      vendorName: 'TechSupply Inc',
      amount: '$12,500.00',
      status: 'Received',
      createdDate: '2024-11-10',
      deliveryDate: '2024-11-15',
    },
    {
      id: 2,
      poNumber: 'PO-2024-002',
      vendorName: 'Global Distributors',
      amount: '$8,750.00',
      status: 'In Transit',
      createdDate: '2024-11-12',
      deliveryDate: '2024-11-20',
    },
    {
      id: 3,
      poNumber: 'PO-2024-003',
      vendorName: 'Premium Vendors Ltd',
      amount: '$5,200.00',
      status: 'Confirmed',
      createdDate: '2024-11-14',
      deliveryDate: '2024-11-22',
    },
    {
      id: 4,
      poNumber: 'PO-2024-004',
      vendorName: 'Office Solutions',
      amount: '$15,800.00',
      status: 'Draft',
      createdDate: '2024-11-16',
      deliveryDate: 'TBD',
    },
  ]);
  const [editingOrder, setEditingOrder] = useState(null);
  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState('');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Received':
        return 'bg-green-100 text-green-800';
      case 'In Transit':
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
    if (editingOrder) {
      // @ts-ignore
      const updatedOrders = purchaseOrdersData.map((order) =>
      // @ts-ignore
        order.id === editingOrder.id ? { ...order, ...data } : order
      );
      setPurchaseOrdersData(updatedOrders);
    } else {
      const newOrder = {
        id: purchaseOrdersData.length + 1,
        poNumber: data.poNumber,
        vendorName: data.vendorName,
        amount: '$0.00',
        status: 'Draft',
        createdDate: new Date().toISOString().split('T')[0],
        deliveryDate: data.expectedDelivery,
      };
      setPurchaseOrdersData([...purchaseOrdersData, newOrder]);
    }
    setEditingOrder(null);
  };

  const handleEditPurchaseOrder = (order: any) => {
    setEditingOrder(order);
    setIsFormOpen(true);
  };

  const handleDeletePurchaseOrder = (orderId: number) => {
    const updatedOrders = purchaseOrdersData.filter(
      (order) => order.id !== orderId
    );
    setPurchaseOrdersData(updatedOrders);
    setIsDeleteConfirmation('Purchase order successfully deleted.');
    setTimeout(() => {
      setIsDeleteConfirmation('');
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Purchase Orders</h1>
        <button
          onClick={() => {
            setEditingOrder(null);
            setIsFormOpen(true);
          }}
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
          <option>In Transit</option>
          <option>Received</option>
        </select>
      </div>

      {isDeleteConfirmation && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> {isDeleteConfirmation}</span>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">PO Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Vendor</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Created Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Delivery Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {purchaseOrdersData.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{order.poNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{order.vendorName}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.amount}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{order.createdDate}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{order.deliveryDate}</td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => handleEditPurchaseOrder(order)}
                    className="text-blue-600 hover:text-blue-800 mr-3"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    onClick={() => handleDeletePurchaseOrder(order.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CreatePurchaseOrderForm
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingOrder(null);
        }}
        onSubmit={handleAddOrder}
        // @ts-ignore
        orderData={editingOrder}
      />
    </div>
  );
}
