'use client';

export default function InventoryPage() {
  const inventoryData = [
    {
      id: 1,
      itemName: 'Laptop Pro 15',
      sku: 'LAP-001',
      quantity: 45,
      status: 'In Stock',
      location: 'Warehouse A',
      lastUpdated: '2024-11-15',
    },
    {
      id: 2,
      itemName: 'USB-C Cable',
      sku: 'USB-C-002',
      quantity: 230,
      status: 'In Stock',
      location: 'Warehouse B',
      lastUpdated: '2024-11-14',
    },
    {
      id: 3,
      itemName: 'Wireless Mouse',
      sku: 'MOUSE-001',
      quantity: 8,
      status: 'Low Stock',
      location: 'Warehouse A',
      lastUpdated: '2024-11-15',
    },
    {
      id: 4,
      itemName: 'Monitor 27"',
      sku: 'MON-027',
      quantity: 0,
      status: 'Out of Stock',
      location: 'N/A',
      lastUpdated: '2024-11-13',
    },
    {
      id: 5,
      itemName: 'Keyboard Mechanical',
      sku: 'KEY-001',
      quantity: 67,
      status: 'In Stock',
      location: 'Warehouse C',
      lastUpdated: '2024-11-15',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-800';
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Inventory</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
          <span>Add Item</span>
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search items..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          <option>All Statuses</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Out of Stock</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Item Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">SKU</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Quantity</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Location</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Last Updated</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {inventoryData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{item.itemName}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{item.sku}</td>
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">{item.quantity}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{item.location}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{item.lastUpdated}</td>
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
