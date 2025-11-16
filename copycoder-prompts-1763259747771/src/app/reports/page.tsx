'use client';

export default function ReportsPage() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12">Reports Center</h1>

      {/* Search Bar */}
      <div className="mb-12">
        <div className="relative">
          <i className="fa-solid fa-search absolute left-4 top-3.5 text-gray-400"></i>
          <input type="text" placeholder="Search reports" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      <div className="flex gap-8">
        {/* Left Sidebar */}
        <div id="sidebar-categories" className="w-64 flex-shrink-0">
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-6">
              <i className="fa-regular fa-star text-gray-400"></i>
              <h3 className="font-semibold text-gray-900">Favorites</h3>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Report Category</h4>
            <nav className="space-y-2">
              <div className="flex items-center space-x-3 px-3 py-2 bg-blue-50 rounded-lg cursor-pointer">
                <i className="fa-solid fa-folder text-blue-600"></i>
                <span className="text-sm font-medium text-gray-900">Sales</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <i className="fa-solid fa-folder text-gray-400"></i>
                <span className="text-sm text-gray-700">Inventory</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <i className="fa-solid fa-folder text-gray-400"></i>
                <span className="text-sm text-gray-700">Receivables</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <i className="fa-solid fa-folder text-gray-400"></i>
                <span className="text-sm text-gray-700">Payments Received</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <i className="fa-solid fa-folder text-gray-400"></i>
                <span className="text-sm text-gray-700">Payables</span>
              </div>
              <div className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <i className="fa-solid fa-folder text-gray-400"></i>
                <span className="text-sm text-gray-700">Purchases</span>
              </div>
            </nav>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">All Reports</h2>
          
          {/* Reports Table */}
          <div id="card-reports-list" className="bg-white rounded-lg border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Report Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Last Visited</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Created By</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">Sales</span>
                      <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">6</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600"></td>
                  <td className="px-6 py-4 text-sm text-gray-600"></td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <a href="#" className="text-sm font-medium text-blue-600 hover:underline">Sales by Customer</a>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600"></td>
                  <td className="px-6 py-4 text-sm text-gray-600">System Generated</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <i className="fa-regular fa-star text-gray-300"></i>
                      <a href="#" className="text-sm font-medium text-blue-600 hover:underline">Sales by Item</a>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600"></td>
                  <td className="px-6 py-4 text-sm text-gray-600">System Generated</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <i className="fa-regular fa-star text-gray-300"></i>
                      <a href="#" className="text-sm font-medium text-blue-600 hover:underline">Order Fulfillment By Item</a>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600"></td>
                  <td className="px-6 py-4 text-sm text-gray-600">System Generated</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <i className="fa-regular fa-star text-gray-300"></i>
                      <a href="#" className="text-sm font-medium text-blue-600 hover:underline">Sales Return History</a>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600"></td>
                  <td className="px-6 py-4 text-sm text-gray-600">System Generated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
