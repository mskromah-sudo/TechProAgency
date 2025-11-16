Convert the below HTML/CSS code into React component. Do not include the global components as these already exist:

<div class="flex h-screen bg-gray-50">
  <!-- Sidebar -->
  <div id="sidebar-documents" class="w-64 bg-slate-900 text-white flex flex-col">
    <div class="p-6 border-b border-slate-700">
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-book text-xl"></i>
        <span class="text-xl font-semibold">Inventory</span>
      </div>
    </div>
    
    <div class="flex-1 overflow-y-auto">
      <div class="p-4">
        <button class="flex items-center gap-2 text-slate-300 hover:text-white mb-6">
          <i class="fa-solid fa-chevron-left"></i>
          <span>Back</span>
        </button>
        
        <h2 class="text-lg font-semibold mb-4">Documents</h2>
        
        <div class="space-y-2">
          <div class="px-4 py-2 rounded bg-slate-800 text-white flex items-center gap-2">
            <i class="fa-solid fa-file"></i>
            <span>All Documents</span>
          </div>
        </div>
        
        <div class="mt-8">
          <div class="text-xs text-slate-400 uppercase tracking-wider mb-3">Folders</div>
          <p class="text-sm text-slate-400 mb-4">There are no folders.</p>
          <button class="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
            <i class="fa-solid fa-plus"></i>
            <span>Create New Folder</span>
          </button>
        </div>
      </div>
    </div>
    
    <div class="p-4 border-t border-slate-700">
      <button class="w-full px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 justify-center">
        <i class="fa-solid fa-trash"></i>
        <span>Trash</span>
      </button>
    </div>
  </div>

  <!-- Main Content -->
  <div id="main-content" class="flex-1 flex flex-col">
    <!-- Header -->
    <div id="header-trash" class="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div class="flex items-center gap-4 flex-1">
        <button class="p-2 hover:bg-gray-100 rounded">
          <i class="fa-solid fa-rotate-left text-gray-600"></i>
        </button>
        <div class="relative flex-1 max-w-md">
          <i class="fa-solid fa-search absolute left-3 top-3 text-gray-400"></i>
          <input type="text" placeholder="Search in Documents ( / )" class="w-full pl-10 pr-4 py-2 bg-gray-100 rounded border-0 text-sm">
        </div>
      </div>
      
      <div class="flex items-center gap-2 text-sm">
        <span class="text-gray-600">This is a Test organization.</span>
        <button class="px-3 py-1 text-gray-700 hover:bg-gray-100 rounded flex items-center gap-1">
          <span>Demo Org</span>
          <i class="fa-solid fa-chevron-down text-xs"></i>
        </button>
      </div>
      
      <div class="flex items-center gap-3 ml-6">
        <button class="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
          <i class="fa-solid fa-plus"></i>
        </button>
        <button class="p-2 hover:bg-gray-100 rounded">
          <i class="fa-solid fa-user"></i>
        </button>
        <button class="p-2 hover:bg-gray-100 rounded">
          <i class="fa-solid fa-bell"></i>
        </button>
        <button class="p-2 hover:bg-gray-100 rounded">
          <i class="fa-solid fa-gear"></i>
        </button>
        <div class="w-8 h-8 rounded-full bg-gray-300"></div>
        <button class="p-2 hover:bg-gray-100 rounded">
          <i class="fa-solid fa-grip"></i>
        </button>
      </div>
    </div>

    <!-- Content Area -->
    <div class="flex-1 overflow-y-auto p-8">
      <div class="flex items-center justify-between mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Trash</h1>
        <div class="flex items-center gap-4">
          <button class="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <i class="fa-solid fa-trash"></i>
            <span class="text-sm">Empty Trash</span>
          </button>
          <button class="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <i class="fa-solid fa-rotate-right"></i>
            <span class="text-sm">Restore All</span>
          </button>
        </div>
      </div>

      <!-- Filter -->
      <div class="mb-6 flex items-center gap-2">
        <span class="text-sm text-gray-600">Filter By :</span>
        <span class="text-sm text-gray-600">File Type:</span>
        <button class="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
          <span>All</span>
          <i class="fa-solid fa-chevron-down text-xs"></i>
        </button>
      </div>

      <!-- Table -->
      <div id="table-trash" class="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-6 py-3 text-left">
                <input type="checkbox" class="rounded">
              </th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">File Name</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Uploaded By</th>
              <th class="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Uploaded On</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4"><input type="checkbox" class="rounded"></td>
              <td class="px-6 py-4 flex items-center gap-3">
                <i class="fa-solid fa-image text-red-500"></i>
                <span class="text-sm text-gray-900">image5.jpg</span>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600">jack@zohobooks.com</td>
              <td class="px-6 py-4 text-sm text-gray-600">15 Mar 2025</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4"><input type="checkbox" class="rounded"></td>
              <td class="px-6 py-4 flex items-center gap-3">
                <i class="fa-solid fa-image text-purple-500"></i>
                <span class="text-sm text-gray-900">image1.png</span>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600">queen@zohobooks.com</td>
              <td class="px-6 py-4 text-sm text-gray-600">15 Mar 2025</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4"><input type="checkbox" class="rounded"></td>
              <td class="px-6 py-4 flex items-center gap-3">
                <i class="fa-solid fa-image text-green-500"></i>
                <span class="text-sm text-gray-900">image4.png</span>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600">king@zohobooks.com</td>
              <td class="px-6 py-4 text-sm text-gray-600">15 Mar 2025</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4"><input type="checkbox" class="rounded"></td>
              <td class="px-6 py-4 flex items-center gap-3">
                <i class="fa-solid fa-image text-blue-500"></i>
                <span class="text-sm text-gray-900">image2.jpg</span>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600">king@zohobooks.com</td>
              <td class="px-6 py-4 text-sm text-gray-600">15 Mar 2025</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4"><input type="checkbox" class="rounded"></td>
              <td class="px-6 py-4 flex items-center gap-3">
                <i class="fa-solid fa-image text-blue-500"></i>
                <span class="text-sm text-gray-900">image1.png</span>
              </td>
              <td class="px-6 py-4 text-sm text-gray-600">king@zohobooks.com</td>
              <td class="px-6 py-4 text-sm text-gray-600">15 Mar 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Right Sidebar -->
  <div class="w-16 bg-white border-l border-gray-200 flex flex-col items-center py-4 gap-4">
    <button class="p-3 hover:bg-gray-100 rounded text-orange-500">
      <i class="fa-solid fa-circle-question text-xl"></i>
    </button>
    <button class="p-3 hover:bg-gray-100 rounded text-gray-600">
      <i class="fa-solid fa-thumbs-up text-xl"></i>
    </button>
    <button class="p-3 hover:bg-gray-100 rounded text-gray-600">
      <i class="fa-solid fa-message text-xl"></i>
    </button>
    <button class="p-3 hover:bg-gray-100 rounded text-gray-600">
      <i class="fa-solid fa-gear text-xl"></i>
    </button>
  </div>
</div>