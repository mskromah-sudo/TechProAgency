Convert the below HTML/CSS code into React component. Do not include the global components as these already exist:

<div class="flex h-screen bg-gray-50">
  <!-- Sidebar -->
  <div id="sidebar-navigation" class="w-72 bg-slate-900 text-white flex flex-col">
    <div class="p-6 border-b border-slate-700">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 bg-white rounded flex items-center justify-center">
          <i class="fa-solid fa-book text-slate-900 text-sm"></i>
        </div>
        <span class="text-xl font-semibold">Inventory</span>
      </div>
    </div>
    
    <div class="flex-1 overflow-y-auto">
      <div class="p-4">
        <button class="flex items-center gap-2 text-slate-300 hover:text-white mb-6">
          <i class="fa-solid fa-chevron-left"></i>
          <span>Back</span>
        </button>
        
        <h2 class="text-2xl font-bold mb-8">Documents</h2>
        
        <div class="space-y-2 mb-8">
          <button class="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-slate-800 text-white hover:bg-slate-700">
            <i class="fa-solid fa-file"></i>
            <span>All Documents</span>
          </button>
        </div>
        
        <div class="mb-4">
          <div class="flex items-center justify-between px-4 mb-3">
            <span class="text-xs font-semibold text-slate-400 uppercase">Folders</span>
            <button class="text-slate-400 hover:text-white">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
          <p class="text-sm text-slate-400 px-4 mb-3">There are no folders.</p>
          <button class="text-blue-400 hover:text-blue-300 text-sm px-4">Create New Folder</button>
        </div>
      </div>
    </div>
    
    <div class="p-4 border-t border-slate-700">
      <button class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800">
        <i class="fa-solid fa-trash"></i>
        <span>Trash</span>
      </button>
    </div>
  </div>

  <!-- Main Content -->
  <div id="main-content" class="flex-1 flex flex-col">
    <!-- Header -->
    <div id="header-dashboard" class="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div class="flex items-center gap-4 flex-1">
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <i class="fa-solid fa-rotate-left text-gray-600"></i>
        </button>
        <div class="relative flex-1 max-w-md">
          <i class="fa-solid fa-search absolute left-3 top-3 text-gray-400"></i>
          <input type="text" placeholder="Search in Documents ( / )" class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
      </div>
      
      <div class="flex items-center gap-4">
        <span class="text-gray-700">This is a Test organization.</span>
        <button class="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-2">
          <span>Demo Org</span>
          <i class="fa-solid fa-chevron-down text-xs"></i>
        </button>
        <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2">
          <i class="fa-solid fa-plus"></i>
        </button>
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <i class="fa-solid fa-user text-gray-600"></i>
        </button>
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <i class="fa-solid fa-bell text-gray-600"></i>
        </button>
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <i class="fa-solid fa-gear text-gray-600"></i>
        </button>
        <img src="https://i.pravatar.cc/150?u=user1" alt="Profile" class="w-10 h-10 rounded-full">
      </div>
    </div>

    <!-- Content Area -->
    <div class="flex-1 overflow-y-auto">
      <div class="p-8">
        <div class="flex items-center justify-between mb-8">
          <h1 class="text-3xl font-bold text-gray-900">Files</h1>
          <div class="flex items-center gap-3">
            <button class="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 flex items-center gap-2">
              <i class="fa-solid fa-sliders"></i>
              <span>Configure</span>
            </button>
            <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2">
              <span>Upload File</span>
              <i class="fa-solid fa-chevron-down text-xs"></i>
            </button>
            <button class="p-2 hover:bg-gray-100 rounded-lg">
              <i class="fa-solid fa-ellipsis-vertical text-gray-600"></i>
            </button>
            <button class="p-2 hover:bg-gray-100 rounded-lg">
              <i class="fa-solid fa-list text-gray-600"></i>
            </button>
            <button class="p-2 hover:bg-gray-100 rounded-lg">
              <i class="fa-solid fa-square text-gray-600"></i>
            </button>
          </div>
        </div>

        <div class="mb-6">
          <div class="flex items-center gap-2">
            <span class="text-gray-700 font-medium">Filter By :</span>
            <button class="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <span>Status: All</span>
              <i class="fa-solid fa-chevron-down text-xs"></i>
            </button>
          </div>
        </div>

        <!-- Table -->
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 py-4 text-left"><input type="checkbox" class="rounded"></th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">FILE NAME</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">DETAILS</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">UPLOADED BY</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">UPLOADED ON</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4"><input type="checkbox" class="rounded"></td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-image text-red-600 text-sm"></i>
                    </div>
                    <span class="font-medium text-gray-900">image5.jpg</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full flex items-center gap-1 w-fit">
                    <i class="fa-solid fa-spinner text-xs"></i>
                    Scan in progress
                  </span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2 text-gray-700">
                    <i class="fa-solid fa-envelope text-gray-400"></i>
                    jack@zohobooks.com
                  </div>
                </td>
                <td class="px-6 py-4 text-gray-700">15 Mar 2025</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4"><input type="checkbox" class="rounded"></td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-image text-purple-600 text-sm"></i>
                    </div>
                    <span class="font-medium text-gray-900">image1.png</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full">Unreadable</span>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2 text-gray-700">
                    <i class="fa-solid fa-envelope text-gray-400"></i>
                    queen@zohobooks.com
                  </div>
                </td>
                <td class="px-6 py-4 text-gray-700">15 Mar 2025</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4"><input type="checkbox" class="rounded"></td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-green-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-image text-green-600 text-sm"></i>
                    </div>
                    <span class="font-medium text-gray-900">image4.png</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div>
                    <span class="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">Processed</span>
                    <p class="text-sm text-gray-600 mt-2">$undefined</p>
                    <p class="text-xs text-gray-500">Vendor: vero</p>
                    <p class="text-xs text-gray-500">Date: 2 Jun 2025</p>
                    <p class="text-xs text-gray-500">Ref #: 68374</p>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2 text-gray-700">
                    <i class="fa-solid fa-envelope text-gray-400"></i>
                    king@zohobooks.com
                  </div>
                </td>
                <td class="px-6 py-4 text-gray-700">15 Mar 2025</td>
              </tr>
              <tr class="hover:bg-gray-50">
                <td class="px-6 py-4"><input type="checkbox" class="rounded"></td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <i class="fa-solid fa-image text-blue-600 text-sm"></i>
                    </div>
                    <span class="font-medium text-gray-900">image2.jpg</span>
                  </div>
                </td>
                <td class="px-6 py-4"></td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2 text-gray-700">
                    <i class="fa-solid fa-envelope text-gray-400"></i>
                    king@zohobooks.com
                  </div>
                </td>
                <td class="px-6 py-4 text-gray-700">15 Mar 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>