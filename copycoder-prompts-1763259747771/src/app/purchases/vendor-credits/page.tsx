'use client';

export default function VendorCreditsPage() {
  const creditsData = [
    {
      id: 1,
      creditNumber: 'VC-2024-001',
      billNumber: 'BILL-2024-002',
      vendorName: 'Global Distributors',
      creditAmount: '$600.00',
      reason: 'Defective Items - Credit',
      issuedDate: '2024-11-14',
      status: 'Applied',
    },
    {
      id: 2,
      creditNumber: 'VC-2024-002',
      billNumber: 'BILL-2024-001',
      vendorName: 'TechSupply Inc',
      creditAmount: '$250.00',
      reason: 'Early Payment Discount',
      issuedDate: '2024-11-12',
      status: 'Applied',
    },
    {
      id: 3,
      creditNumber: 'VC-2024-003',
      billNumber: 'BILL-2024-003',
      vendorName: 'Premium Vendors Ltd',
      creditAmount: '$1,200.00',
      reason: 'Return - Quality Issues',
      issuedDate: '2024-11-16',
      status: 'Open',
    },
  ];

  const getStatusColor = (status: string) => {
    return status === 'Applied'
      ? 'bg-green-100 text-green-800'
      : 'bg-yellow-100 text-yellow-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Vendor Credits</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
          <span>Create Vendor Credit</span>
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search vendor credits..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          <option>All Status</option>
          <option>Open</option>
          <option>Applied</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Credit Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Bill</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Vendor</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Credit Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Reason</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Issued Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {creditsData.map((credit) => (
              <tr key={credit.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{credit.creditNumber}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{credit.billNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{credit.vendorName}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{credit.creditAmount}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{credit.reason}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{credit.issuedDate}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(credit.status)}`}>
                    {credit.status}
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
