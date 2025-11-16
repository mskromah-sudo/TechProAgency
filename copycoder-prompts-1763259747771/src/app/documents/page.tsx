'use client';

export default function DocumentsPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Trash</h1>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <i className="fa-solid fa-trash"></i>
            <span className="text-sm">Empty Trash</span>
          </button>
          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <i className="fa-solid fa-rotate-right"></i>
            <span className="text-sm">Restore All</span>
          </button>
        </div>
      </div>

      {/* Filter */}
      <div className="mb-6 flex items-center gap-2">
        <span className="text-sm text-gray-600">Filter By :</span>
        <span className="text-sm text-gray-600">File Type:</span>
        <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
          <span>All</span>
          <i className="fa-solid fa-chevron-down text-xs"></i>
        </button>
      </div>

      {/* Table */}
      <div id="table-trash" className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">File Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Uploaded By</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Uploaded On</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
              <td className="px-6 py-4 flex items-center gap-3">
                <i className="fa-solid fa-image text-red-500"></i>
                <span className="text-sm text-gray-900">image5.jpg</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">jack@zohobooks.com</td>
              <td className="px-6 py-4 text-sm text-gray-600">15 Mar 2025</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
              <td className="px-6 py-4 flex items-center gap-3">
                <i className="fa-solid fa-image text-purple-500"></i>
                <span className="text-sm text-gray-900">image1.png</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">queen@zohobooks.com</td>
              <td className="px-6 py-4 text-sm text-gray-600">15 Mar 2025</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
              <td className="px-6 py-4 flex items-center gap-3">
                <i className="fa-solid fa-image text-green-500"></i>
                <span className="text-sm text-gray-900">image4.png</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">king@zohobooks.com</td>
              <td className="px-6 py-4 text-sm text-gray-600">15 Mar 2025</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
              <td className="px-6 py-4 flex items-center gap-3">
                <i className="fa-solid fa-image text-blue-500"></i>
                <span className="text-sm text-gray-900">image2.jpg</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">king@zohobooks.com</td>
              <td className="px-6 py-4 text-sm text-gray-600">15 Mar 2025</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
              <td className="px-6 py-4 flex items-center gap-3">
                <i className="fa-solid fa-image text-blue-500"></i>
                <span className="text-sm text-gray-900">image1.png</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">king@zohobooks.com</td>
              <td className="px-6 py-4 text-sm text-gray-600">15 Mar 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
