'use client';

export default function RetainerInvoicesPage() {
  const retainersData = [
    {
      id: 1,
      invoiceNumber: 'RET-2024-001',
      customerName: 'Acme Corporation',
      amount: '$5,000.00',
      retainerAmount: '$2,500.00',
      status: 'Active',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
    },
    {
      id: 2,
      invoiceNumber: 'RET-2024-002',
      customerName: 'Tech Solutions Ltd',
      amount: '$8,000.00',
      retainerAmount: '$4,000.00',
      status: 'Active',
      startDate: '2024-01-15',
      endDate: '2024-12-31',
    },
    {
      id: 3,
      invoiceNumber: 'RET-2024-003',
      customerName: 'Global Services Inc',
      amount: '$3,500.00',
      retainerAmount: '$1,750.00',
      status: 'Expired',
      startDate: '2023-01-01',
      endDate: '2023-12-31',
    },
  ];

  const getStatusColor = (status: string) => {
    return status === 'Active'
      ? 'bg-green-100 text-green-800'
      : 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Retainer Invoices</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
          <span>Create Retainer</span>
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search retainers..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          <option>All Status</option>
          <option>Active</option>
          <option>Expired</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Invoice Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Retainer Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Period</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {retainersData.map((retainer) => (
              <tr key={retainer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{retainer.invoiceNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{retainer.customerName}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{retainer.amount}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{retainer.retainerAmount}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(retainer.status)}`}>
                    {retainer.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{retainer.startDate} to {retainer.endDate}</td>
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
    </div>
  );
}
