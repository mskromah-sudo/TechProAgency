'use client';

export default function PriceListsPage() {
  return (
    <div className="p-8">
      {/* Welcome Section */}
      <div id="section-welcome" className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <i className="fa-solid fa-list-ul text-2xl text-gray-400"></i>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Price Lists</h1>
            <p className="text-gray-600">Manage your pricing strategies</p>
          </div>
        </div>
        
        <div className="flex gap-8 border-b border-gray-200 mb-6">
          <button className="pb-4 text-blue-600 border-b-2 border-blue-600 font-medium">All Price Lists</button>
          <button className="pb-4 text-gray-600 hover:text-gray-900">Archived</button>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Filter By :</span>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <span>Type: All</span>
            <i className="fa-solid fa-chevron-down text-xs"></i>
          </button>
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
          <i className="fa-solid fa-plus"></i>
          <span>New Price List</span>
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left"><input type="checkbox" className="rounded" /></th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">PRICE LIST NAME</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">CURRENCY</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">TYPE</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">CREATED ON</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
              <td className="px-6 py-4">
                <span className="font-medium text-gray-900">Retail Pricing</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">USD</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Selling</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">1 Mar 2025</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
              <td className="px-6 py-4">
                <span className="font-medium text-gray-900">Wholesale Pricing</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">USD</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">Selling</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">25 Feb 2025</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
              <td className="px-6 py-4">
                <span className="font-medium text-gray-900">Cost Pricing</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">USD</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full">Buying</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">20 Feb 2025</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
              <td className="px-6 py-4">
                <span className="font-medium text-gray-900">Partner Pricing</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">EUR</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Selling</span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">15 Feb 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
