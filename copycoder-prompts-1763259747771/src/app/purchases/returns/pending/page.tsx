'use client';

export default function PendingPurchaseReturnsPage() {
  const pendingReturnsData = [
    {
      id: 1,
      returnNumber: 'PRET-2024-003',
      billNumber: 'BILL-2024-003',
      vendorName: 'Premium Vendors Ltd',
      returnAmount: '$1,200.00',
      reason: 'Quality Issues',
      returnDate: '2024-11-16',
      daysWaiting: 0,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Pending Returns</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Return Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Bill</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Vendor</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Return Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Reason</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Days Waiting</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pendingReturnsData.map((ret) => (
              <tr key={ret.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{ret.returnNumber}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{ret.billNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{ret.vendorName}</td>
                <td className="px-6 py-4 text-sm font-medium text-green-600">{ret.returnAmount}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{ret.reason}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{ret.daysWaiting}</td>
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
