'use client';

export default function ActiveRetainersPage() {
  const activeRetainersData = [
    {
      id: 1,
      invoiceNumber: 'RET-2024-001',
      customerName: 'Acme Corporation',
      monthlyAmount: '$2,500.00',
      nextBillingDate: '2024-12-01',
      utilizationPercentage: 75,
    },
    {
      id: 2,
      invoiceNumber: 'RET-2024-002',
      customerName: 'Tech Solutions Ltd',
      monthlyAmount: '$4,000.00',
      nextBillingDate: '2024-11-25',
      utilizationPercentage: 92,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Active Retainers</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Invoice Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Monthly Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Utilization</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Next Billing</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {activeRetainersData.map((retainer) => (
              <tr key={retainer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{retainer.invoiceNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{retainer.customerName}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{retainer.monthlyAmount}</td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${retainer.utilizationPercentage}%` }}></div>
                    </div>
                    <span className="text-xs text-gray-600">{retainer.utilizationPercentage}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{retainer.nextBillingDate}</td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">
                    <i className="fa-solid fa-pen-to-square"></i>
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
