'use client';

export default function DraftInvoicesPage() {
  const draftInvoicesData = [
    {
      id: 1,
      invoiceNumber: 'INV-2024-005',
      customerName: 'Acme Corporation',
      amount: '$4,500.00',
      createdDate: '2024-11-16',
      lineItems: 6,
    },
    {
      id: 2,
      invoiceNumber: 'INV-2024-006',
      customerName: 'Tech Solutions Ltd',
      amount: '$7,200.00',
      createdDate: '2024-11-15',
      lineItems: 8,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Draft Invoices</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
          <span>Create Invoice</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Invoice Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Line Items</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Created Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {draftInvoicesData.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{invoice.invoiceNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{invoice.customerName}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{invoice.amount}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{invoice.lineItems}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{invoice.createdDate}</td>
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
  );
}
