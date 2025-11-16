'use client';

export default function PackagesPage() {
  const packagesData = [
    {
      id: 1,
      packageName: 'Professional Starter Kit',
      sku: 'PKG-001',
      contents: 'Laptop + Mouse + Cable',
      cost: '$1,250.00',
      status: 'Active',
      createdOn: '2024-10-20',
    },
    {
      id: 2,
      packageName: 'Office Bundle',
      sku: 'PKG-002',
      contents: 'Monitor + Keyboard + Headset',
      cost: '$450.00',
      status: 'Active',
      createdOn: '2024-10-18',
    },
    {
      id: 3,
      packageName: 'Home Office Setup',
      sku: 'PKG-003',
      contents: 'Desk + Chair + Lamp',
      cost: '$800.00',
      status: 'Inactive',
      createdOn: '2024-09-15',
    },
    {
      id: 4,
      packageName: 'Tech Support Package',
      sku: 'PKG-004',
      contents: 'Hardware + Software + Support',
      cost: '$2,000.00',
      status: 'Active',
      createdOn: '2024-11-01',
    },
  ];

  const getStatusColor = (status: string) => {
    return status === 'Active'
      ? 'bg-green-100 text-green-800'
      : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Packages</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
          <span>Create Package</span>
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search packages..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Package Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">SKU</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Contents</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Cost</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Created On</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {packagesData.map((pkg) => (
              <tr key={pkg.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{pkg.packageName}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{pkg.sku}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{pkg.contents}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{pkg.cost}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(pkg.status)}`}>
                    {pkg.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{pkg.createdOn}</td>
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
