'use client';

export default function ShipmentsPage() {
  const shipmentsData = [
    {
      id: 1,
      shipmentId: 'SHIP-2024-001',
      destination: 'New York, NY',
      status: 'In Transit',
      items: 5,
      trackingNumber: 'TRK-987654321',
      estimatedDelivery: '2024-11-20',
    },
    {
      id: 2,
      shipmentId: 'SHIP-2024-002',
      destination: 'Los Angeles, CA',
      status: 'Delivered',
      items: 8,
      trackingNumber: 'TRK-876543210',
      estimatedDelivery: '2024-11-15',
    },
    {
      id: 3,
      shipmentId: 'SHIP-2024-003',
      destination: 'Chicago, IL',
      status: 'Pending',
      items: 3,
      trackingNumber: 'TRK-765432109',
      estimatedDelivery: '2024-11-25',
    },
    {
      id: 4,
      shipmentId: 'SHIP-2024-004',
      destination: 'Houston, TX',
      status: 'Returned',
      items: 2,
      trackingNumber: 'TRK-654321098',
      estimatedDelivery: '2024-11-10',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'In Transit':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Returned':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Shipments</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
          <span>New Shipment</span>
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search shipments..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          <option>All Status</option>
          <option>Pending</option>
          <option>In Transit</option>
          <option>Delivered</option>
          <option>Returned</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Shipment ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Destination</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Items</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Tracking Number</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Est. Delivery</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {shipmentsData.map((shipment) => (
              <tr key={shipment.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-blue-600">{shipment.shipmentId}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{shipment.destination}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(shipment.status)}`}>
                    {shipment.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{shipment.items}</td>
                <td className="px-6 py-4 text-sm font-mono text-gray-600">{shipment.trackingNumber}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{shipment.estimatedDelivery}</td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">
                    <i className="fa-solid fa-location-dot"></i>
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <i className="fa-solid fa-file-download"></i>
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
