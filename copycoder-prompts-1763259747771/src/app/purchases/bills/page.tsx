'use client';

export default function BillsPage() {
  const billsData = [
    {
      id: 1,
      billNumber: 'BILL-2024-001',
      vendorName: 'TechSupply Inc',
      amount: '$4,500.00',
      dueDate: '2024-12-01',
      status: 'Unpaid',
      paidDate: '-',
    },
    {
      id: 2,
      billNumber: 'BILL-2024-002',
      vendorName: 'Global Distributors',
      amount: '$6,200.00',
      dueDate: '2024-11-30',
      status: 'Paid',
      paidDate: '2024-11-15',
    },
    {
      id: 3,
      billNumber: 'BILL-2024-003',
      vendorName: 'Premium Vendors Ltd',
      amount: '$3,200.00',
      dueDate: '2024-11-20',
      status: 'Overdue',
      paidDate: '-',
    },
    {
      id: 4,
      billNumber: 'BILL-2024-004',
      vendorName: 'Office Solutions',
      amount: '$5,100.00',
      dueDate: '2024-12-05',
      status: 'Partially Paid',
      paidDate: '2024-11-10',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800';
      case 'Unpaid':
        return 'bg-yellow-100 text-yellow-800';
      case 'Overdue':
        return 'bg-red-100 text-red-800';
      case 'Partially Paid':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Bills</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
          <span>Create Bill</span>
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search bills..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          <option>All Status</option>
          <option>Paid</option>
          <option>Unpaid</option>
          <option>Overdue</option>
          <option>Partially Paid</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Bill Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Vendor</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Due Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Paid Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {billsData.map((bill) => (
              <tr key={bill.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{bill.billNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{bill.vendorName}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{bill.amount}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{bill.dueDate}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(bill.status)}`}>
                    {bill.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{bill.paidDate}</td>
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
