Convert the below HTML/CSS code into React component. Do not include the global components as these already exist:

<div class="flex h-screen bg-gray-50">
  <!-- Sidebar -->
  <div id="sidebar-navigation" class="w-64 bg-slate-900 text-white flex flex-col fixed h-screen">
    <div class="p-6 border-b border-slate-700">
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-book text-xl"></i>
        <span class="text-lg font-semibold">Inventory</span>
      </div>
    </div>
    <nav class="flex-1 overflow-y-auto p-4 space-y-1">
      <a href="#" class="flex items-center gap-3 px-4 py-3 bg-blue-600 rounded-lg text-white">
        <i class="fa-solid fa-home w-5"></i>
        <span>Home</span>
      </a>
      <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-slate-800 rounded-lg">
        <i class="fa-solid fa-box w-5"></i>
        <span>Items</span>
      </a>
      <div class="px-4 py-2">
        <button class="flex items-center gap-3 w-full text-left hover:bg-slate-800 rounded-lg p-2">
          <i class="fa-solid fa-warehouse w-5"></i>
          <span>Inventory</span>
        </button>
        <div class="ml-8 mt-2 space-y-1">
          <a href="#" class="block px-3 py-2 text-sm hover:bg-slate-800 rounded">Assemblies</a>
          <a href="#" class="block px-3 py-2 text-sm hover:bg-slate-800 rounded">Adjustments</a>
          <a href="#" class="block px-3 py-2 text-sm hover:bg-slate-800 rounded">Packages</a>
          <a href="#" class="block px-3 py-2 text-sm hover:bg-slate-800 rounded">Shipments</a>
        </div>
      </div>
      <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-slate-800 rounded-lg">
        <i class="fa-solid fa-chart-line w-5"></i>
        <span>Sales</span>
      </a>
      <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-slate-800 rounded-lg">
        <i class="fa-solid fa-lock w-5"></i>
        <span>Purchases</span>
      </a>
      <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-slate-800 rounded-lg">
        <i class="fa-solid fa-chart-bar w-5"></i>
        <span>Reports</span>
      </a>
      <a href="#" class="flex items-center gap-3 px-4 py-2 hover:bg-slate-800 rounded-lg">
        <i class="fa-solid fa-folder w-5"></i>
        <span>Documents</span>
      </a>
    </nav>
  </div>

  <!-- Main Content -->
  <div id="main-content" class="ml-64 flex-1 flex flex-col">
    <!-- Header -->
    <div id="header-dashboard" class="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div class="flex items-center gap-4 flex-1">
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <i class="fa-solid fa-rotate-left text-gray-600"></i>
        </button>
        <div class="relative flex-1 max-w-md">
          <i class="fa-solid fa-search absolute left-3 top-3 text-gray-400"></i>
          <input type="text" placeholder="Search in Customers ( / )" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm">
        </div>
      </div>
      <div class="flex items-center gap-4">
        <span class="text-sm text-gray-700">This is a <strong>Test</strong> organization.</span>
        <button class="px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded">Demo Org</button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
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
        <img src="https://i.pravatar.cc/150?u=demo" class="w-8 h-8 rounded-full">
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <i class="fa-solid fa-grip text-gray-600"></i>
        </button>
      </div>
    </div>

    <!-- Page Content -->
    <div class="flex-1 overflow-y-auto">
      <div class="p-8">
        <!-- Welcome Section -->
        <div id="section-welcome" class="mb-8">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <i class="fa-solid fa-building text-gray-600"></i>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-gray-900">Hello, Demo User</h1>
              <p class="text-gray-600">Demo Org</p>
            </div>
          </div>
          <div class="flex gap-6 border-b border-gray-200">
            <button class="px-4 py-3 border-b-2 border-blue-500 text-blue-600 font-medium">Dashboard</button>
            <button class="px-4 py-3 text-gray-600 hover:text-gray-900">Getting Started</button>
            <button class="px-4 py-3 text-gray-600 hover:text-gray-900">Recent Updates</button>
          </div>
        </div>

        <!-- Sales Activity & Inventory Summary -->
        <div class="grid grid-cols-3 gap-8 mb-8">
          <div id="card-sales-activity" class="col-span-2">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Sales Activity</h2>
            <div class="grid grid-cols-4 gap-4">
              <div class="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div class="text-4xl font-bold text-blue-500 mb-2">51</div>
                <div class="text-sm text-gray-600 mb-3">Qty</div>
                <div class="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>TO BE PACKED</span>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div class="text-4xl font-bold text-red-500 mb-2">40</div>
                <div class="text-sm text-gray-600 mb-3">Pkgs</div>
                <div class="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>TO BE SHIPPED</span>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div class="text-4xl font-bold text-green-500 mb-2">52</div>
                <div class="text-sm text-gray-600 mb-3">Pkgs</div>
                <div class="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>TO BE DELIVERED</span>
                </div>
              </div>
              <div class="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <div class="text-4xl font-bold text-yellow-500 mb-2">97</div>
                <div class="text-sm text-gray-600 mb-3">Qty</div>
                <div class="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>TO BE INVOICED</span>
                </div>
              </div>
            </div>
          </div>

          <div id="card-inventory-summary" class="bg-white p-6 rounded-lg border border-gray-200">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Inventory Summary</h2>
            <div class="space-y-6">
              <div>
                <p class="text-xs text-gray-500 uppercase tracking-wide mb-2">Quantity in Hand</p>
                <p class="text-3xl font-bold text-gray-900">127...</p>
              </div>
              <div>
                <p class="text-xs text-gray-500 uppercase tracking-wide mb-2">Quantity to be Received</p>
                <p class="text-3xl font-bold text-gray-900">62</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Item Details & Top Selling Items -->
        <div class="grid grid-cols-2 gap-8">
          <div id="card-item-details" class="bg-white p-6 rounded-lg border border-gray-200">
            <h2 class="text-xl font-bold text-gray-900">Item Details</h2>
          </div>
          <div id="card-top-selling" class="bg-white p-6 rounded-lg border border-gray-200">
            <h2 class="text-xl font-bold text-gray-900">Top Selling Items</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Floating Support Button -->
  <div class="fixed bottom-8 right-8">
    <button class="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 flex items-center gap-2">
      <i class="fa-solid fa-envelope"></i>
      <span>Contact Support</span>
    </button>
  </div>
</div>