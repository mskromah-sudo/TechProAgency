'use client';

export default function PartialPaymentsMadePage() {
  const partialPaymentsData = [
    {
      id: 1,
      billNumber: 'BILL-2024-001',
      vendorName: 'TechSupply Inc',
      billAmount: '$4,500.00',
      amountPaid: '$2,250.00',
      amountDue: '$2,250.00',
      percentagePaid: 50,
    },
    {
      id: 2,
      billNumber: 'BILL-2024-004',
      vendorName: 'Office Solutions',
      billAmount: '$5,100.00',
      amountPaid: '$2,550.00',
      amountDue: '$2,550.00',
      percentagePaid: 50,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Partial Payments Made</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Bill</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Vendor</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Bill Amount</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Paid</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Due</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Progress</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {partialPaymentsData.map((payment) => (
              <tr key={payment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{payment.billNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{payment.vendorName}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{payment.billAmount}</td>
                <td className="px-6 py-4 text-sm text-green-600 font-medium">{payment.amountPaid}</td>
                <td className="px-6 py-4 text-sm text-red-600 font-medium">{payment.amountDue}</td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: `${payment.percentagePaid}%` }}></div>
                    </div>
                    <span className="text-xs text-gray-600">{payment.percentagePaid}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-green-600 hover:text-green-800 mr-3">
                    <i className="fa-solid fa-money-bill"></i>
                  </button>
                  <button className="text-blue-600 hover:text-blue-800">
                    <i className="fa-solid fa-eye"></i>
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
