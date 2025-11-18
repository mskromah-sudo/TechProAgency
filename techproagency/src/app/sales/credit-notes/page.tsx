'use client';

export default function CreditNotesPage() {
  const creditNotesData = [
    {
      id: 1,
      creditNoteNumber: 'CN-2024-001',
      invoiceNumber: 'INV-2024-001',
      customerName: 'Acme Corporation',
      creditAmount: '$500.00',
      reason: 'Defective Item - Full Refund',
      issuedDate: '2024-11-14',
      status: 'Applied',
    },
    {
      id: 2,
      creditNoteNumber: 'CN-2024-002',
      invoiceNumber: 'INV-2024-003',
      customerName: 'Global Services Inc',
      creditAmount: '$200.00',
      reason: 'Discount Adjustment',
      issuedDate: '2024-11-12',
      status: 'Applied',
    },
    {
      id: 3,
      creditNoteNumber: 'CN-2024-003',
      invoiceNumber: 'INV-2024-002',
      customerName: 'Tech Solutions Ltd',
      creditAmount: '$1,200.00',
      reason: 'Return - Wrong Item',
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
        <h1 className="text-3xl font-bold text-gray-900">Credit Notes</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
          <span>Create Credit Note</span>
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search credit notes..."
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
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Credit Note Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Invoice</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Credit Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Reason</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Issued Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {creditNotesData.map((cn) => (
              <tr key={cn.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{cn.creditNoteNumber}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{cn.invoiceNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{cn.customerName}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{cn.creditAmount}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{cn.reason}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{cn.issuedDate}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(cn.status)}`}>
                    {cn.status}
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
