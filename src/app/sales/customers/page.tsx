'use client';

import { useState } from 'react';
import AddCustomerForm from '@/components/forms/AddCustomerForm';

export default function CustomersPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [customersData, setCustomersData] = useState([
    {
      id: 1,
      customerName: 'Acme Corporation',
      email: 'contact@acme.com',
      phone: '+1-800-123-4567',
      creditLimit: '$50,000',
      outstandingBalance: '$8,500',
      status: 'Active',
    },
    {
      id: 2,
      customerName: 'Tech Solutions Ltd',
      email: 'info@techsol.com',
      phone: '+1-800-234-5678',
      creditLimit: '$75,000',
      outstandingBalance: '$0',
      status: 'Active',
    },
    {
      id: 3,
      customerName: 'Global Services Inc',
      email: 'support@global.com',
      phone: '+1-800-345-6789',
      creditLimit: '$30,000',
      outstandingBalance: '$12,200',
      status: 'Active',
    },
    {
      id: 4,
      customerName: 'Innovation Labs',
      email: 'hello@innovation.com',
      phone: '+1-800-456-7890',
      creditLimit: '$100,000',
      outstandingBalance: '$5,800',
      status: 'Inactive',
    },
  ]);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [isDeleteConfirmation, setIsDeleteConfirmation] = useState('');

  const getStatusColor = (status: string) => {
    return status === 'Active'
      ? 'bg-green-100 text-green-800'
      : 'bg-gray-100 text-gray-800';
  };

  const handleAddCustomer = (data: any) => {
    if (editingCustomer) {
      // @ts-ignore
      const updatedCustomers = customersData.map((customer) =>
      // @ts-ignore
        customer.id === editingCustomer.id ? { ...customer, ...data } : customer
      );
      setCustomersData(updatedCustomers);
    } else {
      const newCustomer = {
        id: customersData.length + 1,
        ...data,
        outstandingBalance: '$0',
      };
      setCustomersData([...customersData, newCustomer]);
    }
    setEditingCustomer(null);
  };

  const handleEditCustomer = (customer: any) => {
    setEditingCustomer(customer);
    setIsFormOpen(true);
  };

  const handleDeleteCustomer = (customerId: number) => {
    const updatedCustomers = customersData.filter(
      (customer) => customer.id !== customerId
    );
    setCustomersData(updatedCustomers);
    setIsDeleteConfirmation('Customer successfully deleted.');
    setTimeout(() => {
      setIsDeleteConfirmation('');
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
        <button
          onClick={() => {
            setEditingCustomer(null);
            setIsFormOpen(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <i className="fa-solid fa-plus"></i>
          <span>Add Customer</span>
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search customers..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
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
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Customer Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Credit Limit</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Outstanding Balance</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {customersData.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{customer.customerName}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{customer.email}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{customer.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{customer.creditLimit}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{customer.outstandingBalance}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(customer.status)}`}>
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => handleEditCustomer(customer)}
                    className="text-blue-600 hover:text-blue-800 mr-3"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    onClick={() => handleDeleteCustomer(customer.id)}
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

      <AddCustomerForm
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingCustomer(null);
        }}
        onSubmit={handleAddCustomer}
        // @ts-ignore
        customerData={editingCustomer}
      />
    </div>
  );
}
