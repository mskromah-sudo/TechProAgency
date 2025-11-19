'use client';

export default function PurchaseReturnsPage() {
  const returnsData = [
    {
      id: 1,
      returnNumber: 'PRET-2024-001',
      billNumber: 'BILL-2024-002',
      vendorName: 'Global Distributors',
      returnAmount: '$600.00',
      reason: 'Defective Items',
      returnDate: '2024-11-14',
      status: 'Received',
    },
    {
      id: 2,
      returnNumber: 'PRET-2024-002',
      billNumber: 'BILL-2024-001',
      vendorName: 'TechSupply Inc',
      returnAmount: '$400.00',
      reason: 'Wrong Items',
      returnDate: '2024-11-10',
      status: 'In Transit',
    },
    {
      id: 3,
      returnNumber: 'PRET-2024-003',
      billNumber: 'BILL-2024-003',
      vendorName: 'Premium Vendors Ltd',
      returnAmount: '$1,200.00',
      reason: 'Quality Issues',
      returnDate: '2024-11-16',
      status: 'Pending',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Received':
        return 'bg-green-100 text-green-800';
      case 'In Transit':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Purchase Returns</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
          <span>Create Return</span>
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search returns..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          <option>All Status</option>
          <option>Pending</option>
          <option>In Transit</option>
          <option>Received</option>
        </select>
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
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Return Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {returnsData.map((ret) => (
              <tr key={ret.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{ret.returnNumber}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{ret.billNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{ret.vendorName}</td>
                <td className="px-6 py-4 text-sm font-medium text-green-600">{ret.returnAmount}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{ret.reason}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{ret.returnDate}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(ret.status)}`}>
                    {ret.status}
                  </span>
                </td>
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
