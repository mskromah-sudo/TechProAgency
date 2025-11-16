'use client';

export default function FilesPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Files</h1>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 flex items-center gap-2">
            <i className="fa-solid fa-sliders"></i>
            <span>Configure</span>
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2">
            <span>Upload File</span>
            <i className="fa-solid fa-chevron-down text-xs"></i>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <i className="fa-solid fa-ellipsis-vertical text-gray-600"></i>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <i className="fa-solid fa-list text-gray-600"></i>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <i className="fa-solid fa-square text-gray-600"></i>
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Filter By :</span>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <span>Status: All</span>
            <i className="fa-solid fa-chevron-down text-xs"></i>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left"><input type="checkbox" className="rounded" /></th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">FILE NAME</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">DETAILS</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">UPLOADED BY</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">UPLOADED ON</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                    <i className="fa-solid fa-image text-red-600 text-sm"></i>
                  </div>
                  <span className="font-medium text-gray-900">image5.jpg</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full flex items-center gap-1 w-fit">
                  <i className="fa-solid fa-spinner text-xs"></i>
                  Scan in progress
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <i className="fa-solid fa-envelope text-gray-400"></i>
                  jack@zohobooks.com
                </div>
              </td>
              <td className="px-6 py-4 text-gray-700">15 Mar 2025</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                    <i className="fa-solid fa-image text-purple-600 text-sm"></i>
                  </div>
                  <span className="font-medium text-gray-900">image1.png</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full">Unreadable</span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <i className="fa-solid fa-envelope text-gray-400"></i>
                  queen@zohobooks.com
                </div>
              </td>
              <td className="px-6 py-4 text-gray-700">15 Mar 2025</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                    <i className="fa-solid fa-image text-green-600 text-sm"></i>
                  </div>
                  <span className="font-medium text-gray-900">image4.png</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div>
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">Processed</span>
                  <p className="text-sm text-gray-600 mt-2">$undefined</p>
                  <p className="text-xs text-gray-500">Vendor: vero</p>
                  <p className="text-xs text-gray-500">Date: 2 Jun 2025</p>
                  <p className="text-xs text-gray-500">Ref #: 68374</p>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <i className="fa-solid fa-envelope text-gray-400"></i>
                  king@zohobooks.com
                </div>
              </td>
              <td className="px-6 py-4 text-gray-700">15 Mar 2025</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4"><input type="checkbox" className="rounded" /></td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <i className="fa-solid fa-image text-blue-600 text-sm"></i>
                  </div>
                  <span className="font-medium text-gray-900">image2.jpg</span>
                </div>
              </td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <i className="fa-solid fa-envelope text-gray-400"></i>
                  king@zohobooks.com
                </div>
              </td>
              <td className="px-6 py-4 text-gray-700">15 Mar 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
