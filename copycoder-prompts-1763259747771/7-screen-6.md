Convert the below HTML/CSS code into React component. Do not include the global components as these already exist:

<div class="flex h-screen bg-gray-50">
  <!-- Sidebar -->
  <div id="sidebar-navigation" class="w-20 bg-slate-900 flex flex-col items-center py-4 space-y-6">
    <div class="w-10 h-10 bg-slate-700 rounded flex items-center justify-center">
      <i class="fa-solid fa-book text-white text-lg"></i>
    </div>
    <nav class="flex flex-col space-y-4 flex-1">
      <button class="w-12 h-12 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800">
        <i class="fa-solid fa-home text-xl"></i>
      </button>
      <button class="w-12 h-12 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800">
        <i class="fa-solid fa-shopping-bag text-xl"></i>
      </button>
      <button class="w-12 h-12 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800">
        <i class="fa-solid fa-boxes text-xl"></i>
      </button>
      <button class="w-12 h-12 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800">
        <i class="fa-solid fa-cart-shopping text-xl"></i>
      </button>
      <button class="w-12 h-12 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800">
        <i class="fa-solid fa-lock text-xl"></i>
      </button>
      <button class="w-12 h-12 rounded flex items-center justify-center bg-blue-600 text-white">
        <i class="fa-solid fa-chart-bar text-xl"></i>
      </button>
      <button class="w-12 h-12 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800">
        <i class="fa-solid fa-file text-xl"></i>
      </button>
    </nav>
    <button class="w-12 h-12 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-800">
      <i class="fa-solid fa-arrow-right-arrow-left text-xl"></i>
    </button>
  </div>

  <!-- Main Content -->
  <div id="main-content" class="flex-1 flex flex-col">
    <!-- Header -->
    <div id="header-reports" class="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-4 flex-1">
        <button class="text-gray-600 hover:text-gray-900">
          <i class="fa-solid fa-arrow-rotate-left text-lg"></i>
        </button>
        <div class="relative flex-1 max-w-md">
          <i class="fa-solid fa-search absolute left-3 top-3 text-gray-400"></i>
          <input type="text" placeholder="Search in Customers ( / )" class="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none">
        </div>
      </div>
      <div class="flex items-center space-x-6">
        <span class="text-sm text-gray-700">This is a <strong>Test</strong> organization.</span>
        <button class="px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded">Demo Org <i class="fa-solid fa-chevron-down ml-1"></i></button>
        <button class="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700">
          <i class="fa-solid fa-plus"></i>
        </button>
        <button class="text-gray-600 hover:text-gray-900"><i class="fa-solid fa-user-circle text-xl"></i></button>
        <button class="text-gray-600 hover:text-gray-900"><i class="fa-solid fa-bell text-lg"></i></button>
        <button class="text-gray-600 hover:text-gray-900"><i class="fa-solid fa-gear text-lg"></i></button>
        <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>

    <!-- Content Area -->
    <div class="flex-1 overflow-y-auto">
      <div class="max-w-6xl mx-auto px-8 py-12">
        <!-- Title -->
        <h1 class="text-4xl font-bold text-center mb-12">Reports Center</h1>

        <!-- Search Bar -->
        <div class="mb-12">
          <div class="relative">
            <i class="fa-solid fa-search absolute left-4 top-3.5 text-gray-400"></i>
            <input type="text" placeholder="Search reports" class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
        </div>

        <div class="flex gap-8">
          <!-- Left Sidebar -->
          <div id="sidebar-categories" class="w-64 flex-shrink-0">
            <div class="mb-8">
              <div class="flex items-center space-x-2 mb-6">
                <i class="fa-regular fa-star text-gray-400"></i>
                <h3 class="font-semibold text-gray-900">Favorites</h3>
              </div>
            </div>

            <div>
              <h4 class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Report Category</h4>
              <nav class="space-y-2">
                <div class="flex items-center space-x-3 px-3 py-2 bg-blue-50 rounded-lg cursor-pointer">
                  <i class="fa-solid fa-folder text-blue-600"></i>
                  <span class="text-sm font-medium text-gray-900">Sales</span>
                </div>
                <div class="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <i class="fa-solid fa-folder text-gray-400"></i>
                  <span class="text-sm text-gray-700">Inventory</span>
                </div>
                <div class="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <i class="fa-solid fa-folder text-gray-400"></i>
                  <span class="text-sm text-gray-700">Receivables</span>
                </div>
                <div class="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <i class="fa-solid fa-folder text-gray-400"></i>
                  <span class="text-sm text-gray-700">Payments Received</span>
                </div>
                <div class="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <i class="fa-solid fa-folder text-gray-400"></i>
                  <span class="text-sm text-gray-700">Payables</span>
                </div>
                <div class="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <i class="fa-solid fa-folder text-gray-400"></i>
                  <span class="text-sm text-gray-700">Purchases</span>
                </div>
              </nav>
            </div>
          </div>

          <!-- Right Content -->
          <div class="flex-1">
            <h2 class="text-2xl font-bold mb-6">All Reports</h2>
            
            <!-- Reports Table -->
            <div id="card-reports-list" class="bg-white rounded-lg border border-gray-200">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-gray-200">
                    <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Report Name</th>
                    <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Last Visited</th>
                    <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Created By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-gray-100 hover:bg-gray-50">
                    <td class="px-6 py-4">
                      <div class="flex items-center space-x-2">
                        <span class="text-sm font-medium text-gray-900">Sales</span>
                        <span class="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">6</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-600"></td>
                    <td class="px-6 py-4 text-sm text-gray-600"></td>
                  </tr>
                  <tr class="border-b border-gray-100 hover:bg-gray-50">
                    <td class="px-6 py-4">
                      <div class="flex items-center space-x-2">
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline">Sales by Customer</a>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-600"></td>
                    <td class="px-6 py-4 text-sm text-gray-600">System Generated</td>
                  </tr>
                  <tr class="border-b border-gray-100 hover:bg-gray-50">
                    <td class="px-6 py-4">
                      <div class="flex items-center space-x-2">
                        <i class="fa-regular fa-star text-gray-300"></i>
                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline">Sales by Item</a>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-600"></td>
                    <td class="px-6 py-4 text-sm text-gray-600">System Generated</td>
                  </tr>
                  <tr class="border-b border-gray-100 hover:bg-gray-50">
                    <td class="px-6 py-4">
                      <div class="flex items-center space-x-2">
                        <i class="fa-regular fa-star text-gray-300"></i>
                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline">Order Fulfillment By Item</a>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-600"></td>
                    <td class="px-6 py-4 text-sm text-gray-600">System Generated</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="px-6 py-4">
                      <div class="flex items-center space-x-2">
                        <i class="fa-regular fa-star text-gray-300"></i>
                        <a href="#" class="text-sm font-medium text-blue-600 hover:underline">Sales Return History</a>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-gray-600"></td>
                    <td class="px-6 py-4 text-sm text-gray-600">System Generated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>