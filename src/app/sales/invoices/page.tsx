'use client';

import { useState } from 'react';
import CreateInvoiceForm from '@/components/forms/CreateInvoiceForm';

export default function InvoicesPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [invoicesData, setInvoicesData] = useState([
    {
      id: 1,
      invoiceNumber: 'INV-2024-001',
      customerName: 'Acme Corporation',
      amount: '$5,200.00',
      dueDate: '2024-12-01',
      status: 'Paid',
      paidDate: '2024-11-15',
    },
    {
      id: 2,
      invoiceNumber: 'INV-2024-002',
      customerName: 'Tech Solutions Ltd',
      amount: '$8,500.00',
      dueDate: '2024-12-05',
      status: 'Unpaid',
      paidDate: '-',
    },
    {
      id: 3,
      invoiceNumber: 'INV-2024-003',
      customerName: 'Global Services Inc',
      amount: '$3,200.00',
      dueDate: '2024-11-20',
      status: 'Overdue',
      paidDate: '-',
    },
    {
      id: 4,
      invoiceNumber: 'INV-2024-004',
      customerName: 'Innovation Labs',
      amount: '$6,800.00',
      dueDate: '2024-12-10',
      status: 'Partially Paid',
      paidDate: '2024-11-10',
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Unpaid':
        return 'bg-yellow-100 text-yellow-800';
      case 'Overdue':
        return 'bg-red-100 text-red-800';
      case 'Partially Paid':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddInvoice = (data: any) => {
    const newInvoice = {
      id: invoicesData.length + 1,
      ...data,
      status: 'Unpaid',
      paidDate: '-',
    };
    setInvoicesData([...invoicesData, newInvoice]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Invoices</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <i className="fa-solid fa-plus"></i>
          <span>Create Invoice</span>
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search invoices..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          <option>All Status</option>
          <option>Paid</option>
          <option>Unpaid</option>
          <option>Overdue</option>
          <option>Partially Paid</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Invoice Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Due Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Paid Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {invoicesData.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{invoice.invoiceNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{invoice.customerName}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{invoice.amount}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{invoice.dueDate}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(invoice.status)}`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{invoice.paidDate}</td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">
                    <i className="fa-solid fa-eye"></i>
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

      <CreateInvoiceForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleAddInvoice}
      />
    </div>
  );
}
