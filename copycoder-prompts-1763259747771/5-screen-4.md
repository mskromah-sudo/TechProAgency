Convert the below HTML/CSS code into React component. Do not include the global components as these already exist:

<div class="flex h-screen bg-gray-50">
  <!-- Sidebar -->
  <div id="sidebar-navigation" class="w-64 bg-slate-900 text-white flex flex-col">
    <div class="p-6 border-b border-slate-700">
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-book text-xl"></i>
        <span class="text-xl font-bold">Inventory</span>
      </div>
    </div>
    <nav class="flex-1 overflow-y-auto p-4 space-y-2">
      <div class="px-4 py-3 bg-blue-600 rounded-lg flex items-center gap-3 cursor-pointer">
        <i class="fa-solid fa-home"></i>
        <span>Home</span>
      </div>
      <div class="px-4 py-3 hover:bg-slate-800 rounded-lg flex items-center gap-3 cursor-pointer">
        <i class="fa-solid fa-box"></i>
        <span>Items</span>
      </div>
      <div class="px-4 py-3 hover:bg-slate-800 rounded-lg flex items-center gap-3 cursor-pointer">
        <i class="fa-solid fa-warehouse"></i>
        <span>Inventory</span>
      </div>
      <div class="px-4 py-3 hover:bg-slate-800 rounded-lg flex items-center gap-3 cursor-pointer">
        <i class="fa-solid fa-chart-line"></i>
        <span>Sales</span>
      </div>
      <div class="pl-8 py-2 text-sm text-gray-300 space-y-2">
        <div class="hover:text-white cursor-pointer">Customers</div>
        <div class="hover:text-white cursor-pointer">Retailer Invoices</div>
        <div class="hover:text-white cursor-pointer">Sales Orders</div>
        <div class="hover:text-white cursor-pointer">Invoices</div>
        <div class="hover:text-white cursor-pointer">Payments Received</div>
        <div class="hover:text-white cursor-pointer">Sales Returns</div>
        <div class="hover:text-white cursor-pointer">Credit Notes</div>
      </div>
      <div class="px-4 py-3 hover:bg-slate-800 rounded-lg flex items-center gap-3 cursor-pointer">
        <i class="fa-solid fa-shopping-bag"></i>
        <span>Purchases</span>
      </div>
      <div class="px-4 py-3 hover:bg-slate-800 rounded-lg flex items-center gap-3 cursor-pointer">
        <i class="fa-solid fa-chart-bar"></i>
        <span>Reports</span>
      </div>
    </nav>
  </div>

  <!-- Main Content -->
  <div id="main-content" class="flex-1 flex flex-col">
    <!-- Header -->
    <div id="header-dashboard" class="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div class="flex items-center gap-4 flex-1">
        <i class="fa-solid fa-rotate-left text-gray-400 text-lg cursor-pointer"></i>
        <div class="relative flex-1 max-w-md">
          <i class="fa-solid fa-search absolute left-3 top-3 text-gray-400"></i>
          <input type="text" placeholder="Search in Customers ( / )" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm">
        </div>
      </div>
      <div class="flex items-center gap-6">
        <span class="text-sm text-gray-600">This is a <span class="font-semibold">Test</span> organization.</span>
        <button class="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">Demo Org <i class="fa-solid fa-chevron-down ml-1"></i></button>
        <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"><i class="fa-solid fa-plus"></i></button>
        <i class="fa-solid fa-user text-gray-400 text-lg cursor-pointer"></i>
        <i class="fa-solid fa-bell text-gray-400 text-lg cursor-pointer"></i>
        <i class="fa-solid fa-gear text-gray-400 text-lg cursor-pointer"></i>
        <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
        <i class="fa-solid fa-grip text-gray-400 text-lg cursor-pointer"></i>
      </div>
    </div>

    <!-- Page Content -->
    <div class="flex-1 overflow-y-auto p-8">
      <!-- Welcome Section -->
      <div id="section-welcome" class="mb-8">
        <div class="flex items-center gap-3 mb-2">
          <i class="fa-solid fa-file text-gray-400 text-2xl"></i>
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Hello, Demo User</h1>
            <p class="text-gray-600">Demo Org</p>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex gap-8 border-b border-gray-200 mb-8">
        <button class="pb-4 font-medium text-gray-900 border-b-2 border-blue-500">Dashboard</button>
        <button class="pb-4 font-medium text-gray-600 hover:text-gray-900">Getting Started</button>
        <button class="pb-4 font-medium text-gray-600 hover:text-gray-900">Recent Updates</button>
      </div>

      <!-- Main Grid -->
      <div class="grid grid-cols-3 gap-8">
        <!-- Left Column -->
        <div class="col-span-2 space-y-8">
          <!-- Sales Activity -->
          <div id="card-sales-activity" class="bg-white rounded-lg p-6 border border-gray-200">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Sales Activity</h2>
            <div class="grid grid-cols-4 gap-4">
              <div class="text-center">
                <div class="text-4xl font-bold text-blue-500">51</div>
                <div class="text-sm text-gray-600 mt-1">Qty</div>
                <div class="text-xs text-gray-500 mt-2 flex items-center justify-center gap-1">
                  <i class="fa-solid fa-circle-check"></i> TO BE PACKED
                </div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-red-500">40</div>
                <div class="text-sm text-gray-600 mt-1">Pkgs</div>
                <div class="text-xs text-gray-500 mt-2 flex items-center justify-center gap-1">
                  <i class="fa-solid fa-circle-check"></i> TO BE SHIPPED
                </div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-teal-500">52</div>
                <div class="text-sm text-gray-600 mt-1">Pkgs</div>
                <div class="text-xs text-gray-500 mt-2 flex items-center justify-center gap-1">
                  <i class="fa-solid fa-circle-check"></i> TO BE DELIVERED
                </div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-amber-500">97</div>
                <div class="text-sm text-gray-600 mt-1">Qty</div>
                <div class="text-xs text-gray-500 mt-2 flex items-center justify-center gap-1">
                  <i class="fa-solid fa-circle-check"></i> TO BE INVOICED
                </div>
              </div>
            </div>
          </div>

          <!-- Item Details -->
          <div id="card-item-details" class="bg-white rounded-lg p-6 border border-gray-200">
            <h2 class="text-xl font-bold text-gray-900">Item Details</h2>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-8">
          <!-- Inventory Summary -->
          <div id="card-inventory-summary" class="bg-white rounded-lg p-6 border border-gray-200">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Inventory Summary</h2>
            <div class="space-y-6">
              <div>
                <div class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Quantity in Hand</div>
                <div class="text-3xl font-bold text-gray-900 mt-2">127...</div>
              </div>
              <div>
                <div class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Quantity to be Received</div>
                <div class="text-3xl font-bold text-gray-900 mt-2">62</div>
              </div>
            </div>
          </div>

          <!-- Top Selling Items -->
          <div id="card-top-selling" class="bg-white rounded-lg p-6 border border-gray-200">
            <h2 class="text-xl font-bold text-gray-900">Top Selling Items</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact Support Button -->
  <div class="fixed bottom-8 right-8">
    <button class="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-600 shadow-lg">
      <i class="fa-solid fa-envelope"></i>
      <span>Contact Support</span>
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  </div>
</div>