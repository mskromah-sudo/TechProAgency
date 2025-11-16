'use client';

export default function AdjustmentsPage() {
  const adjustmentsData = [
    {
      id: 1,
      refNumber: 'ADJ-2024-001',
      itemName: 'Laptop Pro 15',
      quantity: 5,
      adjustmentType: 'Stock In',
      reason: 'Received shipment',
      date: '2024-11-15',
    },
    {
      id: 2,
      refNumber: 'ADJ-2024-002',
      itemName: 'Wireless Mouse',
      quantity: -2,
      adjustmentType: 'Stock Out',
      reason: 'Damage',
      date: '2024-11-14',
    },
    {
      id: 3,
      refNumber: 'ADJ-2024-003',
      itemName: 'USB-C Cable',
      quantity: 10,
      adjustmentType: 'Stock In',
      reason: 'Inventory count correction',
      date: '2024-11-13',
    },
    {
      id: 4,
      refNumber: 'ADJ-2024-004',
      itemName: 'Monitor 27"',
      quantity: 3,
      adjustmentType: 'Stock In',
      reason: 'Return from customer',
      date: '2024-11-12',
    },
  ];

  const getTypeColor = (type: string) => {
    return type === 'Stock In'
      ? 'bg-green-100 text-green-800'
      : 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Inventory Adjustments</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
          <span>New Adjustment</span>
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search adjustments..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          <option>All Types</option>
          <option>Stock In</option>
          <option>Stock Out</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Ref Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Item Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Quantity</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Reason</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {adjustmentsData.map((adjustment) => (
              <tr key={adjustment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{adjustment.refNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{adjustment.itemName}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{adjustment.quantity}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(adjustment.adjustmentType)}`}>
                    {adjustment.adjustmentType}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{adjustment.reason}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{adjustment.date}</td>
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
