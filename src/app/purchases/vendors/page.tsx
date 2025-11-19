'use client';

import { useState } from 'react';
import AddVendorForm from '@/components/forms/AddVendorForm';

export default function VendorsPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [vendorsData, setVendorsData] = useState([
    {
      id: 1,
      vendorName: 'TechSupply Inc',
      email: 'contact@techsupply.com',
      phone: '+1-800-123-4567',
      creditLimit: '$100,000',
      outstandingAmount: '$15,200',
      status: 'Active',
    },
    {
      id: 2,
      vendorName: 'Global Distributors',
      email: 'info@globaldist.com',
      phone: '+1-800-234-5678',
      creditLimit: '$75,000',
      outstandingAmount: '$0',
      status: 'Active',
    },
    {
      id: 3,
      vendorName: 'Premium Vendors Ltd',
      email: 'sales@premiumvend.com',
      phone: '+1-800-345-6789',
      creditLimit: '$50,000',
      outstandingAmount: '$8,500',
      status: 'Active',
    },
    {
      id: 4,
      vendorName: 'Office Solutions',
      email: 'support@officeso.com',
      phone: '+1-800-456-7890',
      creditLimit: '$30,000',
      outstandingAmount: '$2,800',
      status: 'Inactive',
    },
  ]);

  const getStatusColor = (status: string) => {
    return status === 'Active'
      ? 'bg-green-100 text-green-800'
      : 'bg-gray-100 text-gray-800';
  };

  const handleAddVendor = (data: any) => {
    const newVendor = {
      id: vendorsData.length + 1,
      ...data,
      outstandingAmount: '$0',
    };
    setVendorsData([...vendorsData, newVendor]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Vendors</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <i className="fa-solid fa-plus"></i>
          <span>Add Vendor</span>
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search vendors..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Vendor Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Credit Limit</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Outstanding Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {vendorsData.map((vendor) => (
              <tr key={vendor.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{vendor.vendorName}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{vendor.email}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{vendor.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{vendor.creditLimit}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{vendor.outstandingAmount}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(vendor.status)}`}>
                    {vendor.status}
                  </span>
                </td>
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

      <AddVendorForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleAddVendor}
      />
    </div>
  );
}
