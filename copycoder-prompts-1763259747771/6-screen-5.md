Convert the below HTML/CSS code into React component. Do not include the global components as these already exist:

<div class="flex h-screen bg-gray-50">
  <!-- Sidebar -->
  <div id="sidebar-navigation" class="w-64 bg-slate-900 text-white flex flex-col fixed h-screen">
    <div class="p-4 border-b border-slate-700">
      <div class="flex items-center gap-2 text-xl font-semibold">
        <i class="fa-solid fa-book"></i>
        <span>Inventory</span>
      </div>
    </div>
    <nav class="flex-1 overflow-y-auto p-3 space-y-1">
      <div class="px-3 py-2 bg-blue-600 rounded-lg flex items-center gap-2 cursor-pointer">
        <i class="fa-solid fa-home"></i>
        <span>Home</span>
      </div>
      <div class="px-3 py-2 hover:bg-slate-800 rounded-lg flex items-center gap-2 cursor-pointer">
        <i class="fa-solid fa-box"></i>
        <span>Items</span>
      </div>
      <div class="px-3 py-2 hover:bg-slate-800 rounded-lg flex items-center gap-2 cursor-pointer">
        <i class="fa-solid fa-warehouse"></i>
        <span>Inventory</span>
      </div>
      <div class="px-3 py-2 hover:bg-slate-800 rounded-lg flex items-center gap-2 cursor-pointer">
        <i class="fa-solid fa-cart-shopping"></i>
        <span>Sales</span>
      </div>
      <div class="px-3 py-2 hover:bg-slate-800 rounded-lg flex items-center gap-2 cursor-pointer">
        <i class="fa-solid fa-lock"></i>
        <span>Purchases</span>
      </div>
      <div class="pl-6 space-y-1 mt-2">
        <div class="px-3 py-2 hover:bg-slate-800 rounded text-sm cursor-pointer">Vendors</div>
        <div class="px-3 py-2 hover:bg-slate-800 rounded text-sm cursor-pointer">Purchase Orders</div>
        <div class="px-3 py-2 hover:bg-slate-800 rounded text-sm cursor-pointer">Bills</div>
        <div class="px-3 py-2 hover:bg-slate-800 rounded text-sm cursor-pointer">Purchase Returns</div>
        <div class="px-3 py-2 hover:bg-slate-800 rounded text-sm cursor-pointer">Payments Made</div>
        <div class="px-3 py-2 hover:bg-slate-800 rounded text-sm cursor-pointer">Vendor Credits</div>
      </div>
      <div class="px-3 py-2 hover:bg-slate-800 rounded-lg flex items-center gap-2 cursor-pointer mt-4">
        <i class="fa-solid fa-chart-bar"></i>
        <span>Reports</span>
      </div>
      <div class="px-3 py-2 hover:bg-slate-800 rounded-lg flex items-center gap-2 cursor-pointer">
        <i class="fa-solid fa-file"></i>
        <span>Documents</span>
      </div>
    </nav>
  </div>

  <!-- Main Content -->
  <div class="ml-64 flex-1 flex flex-col">
    <!-- Header -->
    <div id="header-dashboard" class="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-4 flex-1">
        <i class="fa-solid fa-clock text-gray-400"></i>
        <div class="relative flex-1 max-w-md">
          <i class="fa-solid fa-search absolute left-3 top-3 text-gray-400"></i>
          <input type="text" placeholder="Search in Customers ( / )" class="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none">
        </div>
      </div>
      <div class="flex items-center gap-4">
        <span class="text-sm text-gray-600">This is a Test organization.</span>
        <button class="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg flex items-center gap-1">
          Demo Org <i class="fa-solid fa-chevron-down"></i>
        </button>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <i class="fa-solid fa-plus"></i>
        </button>
        <i class="fa-solid fa-user text-gray-400 cursor-pointer"></i>
        <i class="fa-solid fa-bell text-gray-400 cursor-pointer"></i>
        <i class="fa-solid fa-gear text-gray-400 cursor-pointer"></i>
        <img src="https://i.pravatar.cc/150?u=demo" class="w-8 h-8 rounded-full">
        <i class="fa-solid fa-grip text-gray-400 cursor-pointer"></i>
      </div>
    </div>

    <!-- Page Content -->
    <div class="flex-1 overflow-y-auto">
      <div class="p-6">
        <!-- Welcome Section -->
        <div class="mb-6">
          <div class="flex items-center gap-3 mb-2">
            <i class="fa-solid fa-building text-gray-400"></i>
            <h1 class="text-3xl font-bold text-gray-900">Hello, Demo User</h1>
          </div>
          <p class="text-gray-600">Demo Org</p>
        </div>

        <!-- Tabs -->
        <div class="flex gap-8 border-b border-gray-200 mb-6">
          <button class="pb-3 text-gray-900 font-medium border-b-2 border-blue-600">Dashboard</button>
          <button class="pb-3 text-gray-600 hover:text-gray-900">Getting Started</button>
          <button class="pb-3 text-gray-600 hover:text-gray-900">Recent Updates</button>
        </div>

        <!-- Main Grid -->
        <div class="grid grid-cols-3 gap-6">
          <!-- Sales Activity -->
          <div id="card-sales-activity" class="col-span-2">
            <h2 class="text-xl font-bold text-gray-900 mb-4">Sales Activity</h2>
            <div class="grid grid-cols-4 gap-4">
              <div class="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div class="text-4xl font-bold text-blue-500 mb-2">51</div>
                <div class="text-sm text-gray-600 mb-2">Qty</div>
                <div class="flex items-center justify-center gap-1 text-xs text-gray-500">
                  <i class="fa-solid fa-check-circle"></i>
                  <span>TO BE PACKED</span>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div class="text-4xl font-bold text-red-500 mb-2">40</div>
                <div class="text-sm text-gray-600 mb-2">Pkgs</div>
                <div class="flex items-center justify-center gap-1 text-xs text-gray-500">
                  <i class="fa-solid fa-circle"></i>
                  <span>TO BE SHIPPED</span>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div class="text-4xl font-bold text-green-500 mb-2">52</div>
                <div class="text-sm text-gray-600 mb-2">Pkgs</div>
                <div class="flex items-center justify-center gap-1 text-xs text-gray-500">
                  <i class="fa-solid fa-circle"></i>
                  <span>TO BE DELIVERED</span>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div class="text-4xl font-bold text-amber-500 mb-2">97</div>
                <div class="text-sm text-gray-600 mb-2">Qty</div>
                <div class="flex items-center justify-center gap-1 text-xs text-gray-500">
                  <i class="fa-solid fa-circle"></i>
                  <span>TO BE INVOICED</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Inventory Summary -->
          <div id="card-inventory-summary" class="bg-white p-6 rounded-lg border border-gray-200">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Inventory Summary</h2>
            <div class="space-y-6">
              <div>
                <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Quantity in Hand</div>
                <div class="text-3xl font-bold text-gray-900">127...</div>
              </div>
              <div>
                <div class="text-xs text-gray-500 uppercase tracking-wide mb-1">Quantity to be Received</div>
                <div class="text-3xl font-bold text-gray-900">62</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="grid grid-cols-2 gap-6 mt-6">
          <div id="card-item-details" class="bg-white p-6 rounded-lg border border-gray-200">
            <h2 class="text-xl font-bold text-gray-900">Item Details</h2>
          </div>
          <div id="card-top-selling" class="bg-white p-6 rounded-lg border border-gray-200 flex items-center justify-between">
            <h2 class="text-xl font-bold text-gray-900">Top Selling Items</h2>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <i class="fa-solid fa-envelope"></i>
              <span>Contact Support</span>
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>