'use client';

export default function DraftOrdersPage() {
  const draftOrdersData = [
    {
      id: 1,
      orderNumber: 'SO-2024-004',
      customerName: 'Innovation Labs',
      amount: '$15,800.00',
      lineItems: 8,
      lastModified: '2024-11-16 14:30',
    },
    {
      id: 2,
      orderNumber: 'SO-2024-005',
      customerName: 'Acme Corporation',
      amount: '$22,400.00',
      lineItems: 12,
      lastModified: '2024-11-15 09:15',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Draft Orders</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
          <span>Create Order</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Order Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Line Items</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Last Modified</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {draftOrdersData.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{order.orderNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{order.customerName}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.amount}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{order.lineItems}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{order.lastModified}</td>
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
