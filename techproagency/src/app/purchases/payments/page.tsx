'use client';

export default function PaymentsMadePage() {
  const paymentsData = [
    {
      id: 1,
      paymentNumber: 'PAY-2024-001',
      billNumber: 'BILL-2024-002',
      vendorName: 'Global Distributors',
      amount: '$6,200.00',
      paymentMethod: 'Bank Transfer',
      paidDate: '2024-11-15',
    },
    {
      id: 2,
      paymentNumber: 'PAY-2024-002',
      billNumber: 'BILL-2024-004',
      vendorName: 'Office Solutions',
      amount: '$2,550.00',
      paymentMethod: 'Check',
      paidDate: '2024-11-10',
    },
    {
      id: 3,
      paymentNumber: 'PAY-2024-003',
      billNumber: 'BILL-2024-003',
      vendorName: 'Premium Vendors Ltd',
      amount: '$3,200.00',
      paymentMethod: 'Credit Card',
      paidDate: '2024-11-08',
    },
    {
      id: 4,
      paymentNumber: 'PAY-2024-004',
      billNumber: 'BILL-2024-001',
      vendorName: 'TechSupply Inc',
      amount: '$2,250.00',
      paymentMethod: 'Bank Transfer',
      paidDate: '2024-11-12',
    },
  ];

  const getPaymentMethodColor = (method: string) => {
    switch (method) {
      case 'Bank Transfer':
        return 'bg-blue-100 text-blue-800';
      case 'Check':
        return 'bg-purple-100 text-purple-800';
      case 'Credit Card':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Payments Made</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
          <span>Record Payment</span>
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search payments..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          <option>All Methods</option>
          <option>Bank Transfer</option>
          <option>Check</option>
          <option>Credit Card</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Payment ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Bill</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Vendor</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Method</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Paid Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paymentsData.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{payment.paymentNumber}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{payment.billNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{payment.vendorName}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{payment.amount}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPaymentMethodColor(payment.paymentMethod)}`}>
                    {payment.paymentMethod}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{payment.paidDate}</td>
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
