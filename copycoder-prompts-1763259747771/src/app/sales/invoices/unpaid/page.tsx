'use client';

export default function UnpaidInvoicesPage() {
  const unpaidInvoicesData = [
    {
      id: 1,
      invoiceNumber: 'INV-2024-002',
      customerName: 'Tech Solutions Ltd',
      amount: '$8,500.00',
      dueDate: '2024-12-05',
      daysOverdue: 0,
    },
    {
      id: 2,
      invoiceNumber: 'INV-2024-003',
      customerName: 'Global Services Inc',
      amount: '$3,200.00',
      dueDate: '2024-11-20',
      daysOverdue: 26,
    },
    {
      id: 3,
      invoiceNumber: 'INV-2024-004',
      customerName: 'Innovation Labs',
      amount: '$3,400.00',
      dueDate: '2024-12-10',
      daysOverdue: 0,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Unpaid Invoices</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Invoice Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Due Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Days Overdue</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {unpaidInvoicesData.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{invoice.invoiceNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{invoice.customerName}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{invoice.amount}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{invoice.dueDate}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    invoice.daysOverdue > 0 ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {invoice.daysOverdue > 0 ? `${invoice.daysOverdue} days` : 'Upcoming'}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-green-600 hover:text-green-800 mr-3">
                    <i className="fa-solid fa-money-bill"></i>
                  </button>
                  <button className="text-blue-600 hover:text-blue-800">
                    <i className="fa-solid fa-envelope"></i>
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
