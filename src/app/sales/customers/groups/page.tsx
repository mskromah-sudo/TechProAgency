'use client';

export default function CustomerGroupsPage() {
  const groupsData = [
    {
      id: 1,
      groupName: 'Enterprise Clients',
      description: 'Large corporations with significant contract values',
      memberCount: 12,
      createdOn: '2024-01-15',
    },
    {
      id: 2,
      groupName: 'SMB Partners',
      description: 'Small and medium business partners',
      memberCount: 28,
      createdOn: '2024-02-10',
    },
    {
      id: 3,
      groupName: 'Resellers',
      description: 'Authorized resellers and distributors',
      memberCount: 8,
      createdOn: '2024-03-05',
    },
    {
      id: 4,
      groupName: 'Government Agencies',
      description: 'Public sector and government entities',
      memberCount: 5,
      createdOn: '2024-04-12',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Customer Groups</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
          <span>Create Group</span>
        </button>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search groups..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Group Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Description</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Members</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Created On</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {groupsData.map((group) => (
              <tr key={group.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{group.groupName}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{group.description}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{group.memberCount}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{group.createdOn}</td>
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
