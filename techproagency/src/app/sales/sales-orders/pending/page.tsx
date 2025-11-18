'use client';

export default function PendingOrdersPage() {
  const pendingOrdersData = [
    {
      id: 1,
      orderNumber: 'SO-2024-002',
      customerName: 'Tech Solutions Ltd',
      amount: '$8,750.00',
      status: 'Confirmed',
      daysWaiting: 4,
    },
    {
      id: 2,
      orderNumber: 'SO-2024-003',
      customerName: 'Global Services Inc',
      amount: '$5,200.00',
      status: 'Confirmed',
      daysWaiting: 2,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Pending Orders</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Order Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Days Waiting</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pendingOrdersData.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{order.orderNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{order.customerName}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.amount}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{order.daysWaiting}</td>
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
