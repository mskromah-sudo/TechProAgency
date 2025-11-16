'use client';

export default function AssembliesPage() {
  const assembliesData = [
    {
      id: 1,
      assemblyName: 'Desktop Computer Kit',
      sku: 'ASM-001',
      status: 'Active',
      components: 5,
      createdOn: '2024-09-10',
    },
    {
      id: 2,
      assemblyName: 'Office Workstation',
      sku: 'ASM-002',
      status: 'Active',
      components: 8,
      createdOn: '2024-08-22',
    },
    {
      id: 3,
      assemblyName: 'Gaming Setup Bundle',
      sku: 'ASM-003',
      status: 'Inactive',
      components: 6,
      createdOn: '2024-07-15',
    },
    {
      id: 4,
      assemblyName: 'Server Configuration',
      sku: 'ASM-004',
      status: 'Active',
      components: 12,
      createdOn: '2024-10-05',
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
        <h1 className="text-3xl font-bold text-gray-900">Assemblies</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
          <span>Create Assembly</span>
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search assemblies..."
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
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Assembly Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">SKU</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Components</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Created On</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {assembliesData.map((assembly) => (
              <tr key={assembly.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{assembly.assemblyName}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{assembly.sku}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(assembly.status)}`}>
                    {assembly.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{assembly.components}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{assembly.createdOn}</td>
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
