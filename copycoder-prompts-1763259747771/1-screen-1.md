Convert the below HTML/CSS code into React component. Do not include the global components as these already exist:

<div class="flex h-screen bg-gray-50">
  <!-- Sidebar -->
  <div id="sidebar-main" class="w-64 bg-slate-900 text-white flex flex-col fixed h-screen overflow-y-auto">
    <div class="p-4 border-b border-slate-700">
      <div class="flex items-center gap-2 text-xl font-bold">
        <i class="fa-solid fa-book"></i>
        <span>TechPro Inventory</span>
      </div>
    </div>
    
    <nav class="flex-1 p-4 space-y-2">
      <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-600 text-white">
        <i class="fa-solid fa-home"></i>
        <span>Home</span>
      </a>
      <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800">
        <i class="fa-solid fa-box"></i>
        <span>Items</span>
      </a>
      <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800">
        <i class="fa-solid fa-warehouse"></i>
        <span>Inventory</span>
      </a>
      <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800">
        <i class="fa-solid fa-cart-shopping"></i>
        <span>Sales</span>
      </a>
      <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800">
        <i class="fa-solid fa-lock"></i>
        <span>Purchases</span>
      </a>
      <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800">
        <i class="fa-solid fa-chart-bar"></i>
        <span>Reports</span>
      </a>
      <a href="#" class="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800">
        <i class="fa-solid fa-folder"></i>
        <span>Documents</span>
      </a>
    </nav>
    
    <div class="p-4 border-t border-slate-700">
      <a href="#" class="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
        <i class="fa-solid fa-sliders"></i>
        <span>Configure Features</span>
      </a>
    </div>
  </div>

  <!-- Main Content -->
  <div id="main-content" class="ml-64 flex-1 flex flex-col">
    <!-- Header -->
    <header id="header-top" class="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
      <div class="flex items-center gap-4 flex-1">
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <i class="fa-solid fa-rotate-left text-gray-600"></i>
        </button>
        <div class="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 flex-1 max-w-md">
          <i class="fa-solid fa-search text-gray-400"></i>
          <input type="text" placeholder="Search in Customers ( / )" class="bg-transparent outline-none text-sm flex-1">
        </div>
      </div>
      
      <div class="flex items-center gap-4">
        <span class="text-sm text-gray-600">This is a <strong>Test</strong> organization.</span>
        <div class="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <span class="text-sm">Demo Org</span>
          <i class="fa-solid fa-chevron-down text-xs"></i>
        </div>
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
        <img src="https://i.pravatar.cc/150?u=demo" alt="Avatar" class="w-8 h-8 rounded-full">
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <i class="fa-solid fa-grip text-gray-600"></i>
        </button>
      </div>
    </header>

    <!-- Page Content -->
    <div class="flex-1 overflow-y-auto">
      <div class="p-6">
        <!-- Welcome Section -->
        <div id="section-welcome" class="mb-6">
          <div class="flex items-center gap-3 mb-4">
            <i class="fa-solid fa-file text-gray-400 text-2xl"></i>
            <div>
              <h1 class="text-2xl font-bold text-gray-900">Hello, Demo User</h1>
              <p class="text-gray-600">Demo Org</p>
            </div>
          </div>
          
          <div class="flex gap-6 border-b border-gray-200 mb-6">
            <button class="pb-3 text-gray-900 font-medium border-b-2 border-blue-500">Dashboard</button>
            <button class="pb-3 text-gray-600 hover:text-gray-900">Getting Started</button>
            <button class="pb-3 text-gray-600 hover:text-gray-900">Recent Updates</button>
          </div>
        </div>

        <!-- Main Grid -->
        <div class="grid grid-cols-3 gap-6">
          <!-- Sales Activity Card -->
          <div id="card-sales-activity" class="col-span-2 bg-white rounded-lg border border-gray-200 p-6">
            <h2 class="text-lg font-bold text-gray-900 mb-6">Sales Activity</h2>
            <div class="grid grid-cols-4 gap-4">
              <div class="text-center p-4 border border-gray-200 rounded-lg">
                <div class="text-4xl font-bold text-blue-500 mb-2">51</div>
                <p class="text-sm text-gray-600 mb-3">Qty</p>
                <div class="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <i class="fa-solid fa-circle text-gray-400"></i>
                  <span>TO BE PACKED</span>
                </div>
              </div>
              <div class="text-center p-4 border border-gray-200 rounded-lg">
                <div class="text-4xl font-bold text-red-500 mb-2">40</div>
                <p class="text-sm text-gray-600 mb-3">Pkgs</p>
                <div class="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <i class="fa-solid fa-circle text-gray-400"></i>
                  <span>TO BE SHIPPED</span>
                </div>
              </div>
              <div class="text-center p-4 border border-gray-200 rounded-lg">
                <div class="text-4xl font-bold text-teal-500 mb-2">52</div>
                <p class="text-sm text-gray-600 mb-3">Pkgs</p>
                <div class="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <i class="fa-solid fa-circle text-gray-400"></i>
                  <span>TO BE DELIVERED</span>
                </div>
              </div>
              <div class="text-center p-4 border border-gray-200 rounded-lg">
                <div class="text-4xl font-bold text-amber-500 mb-2">97</div>
                <p class="text-sm text-gray-600 mb-3">Qty</p>
                <div class="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <i class="fa-solid fa-circle text-gray-400"></i>
                  <span>TO BE INVOICED</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Inventory Summary Card -->
          <div id="card-inventory-summary" class="bg-white rounded-lg border border-gray-200 p-6">
            <h2 class="text-lg font-bold text-gray-900 mb-6">Inventory Summary</h2>
            <div class="space-y-6">
              <div>
                <p class="text-xs text-gray-500 uppercase tracking-wide mb-1">Quantity in Hand</p>
                <p class="text-3xl font-bold text-gray-900">127...</p>
              </div>
              <div>
                <p class="text-xs text-gray-500 uppercase tracking-wide mb-1">Quantity to be Received</p>
                <p class="text-3xl font-bold text-gray-900">62</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="grid grid-cols-2 gap-6 mt-6">
          <div id="card-item-details" class="bg-white rounded-lg border border-gray-200 p-6">
            <h2 class="text-lg font-bold text-gray-900">Item Details</h2>
          </div>
          <div id="card-top-selling" class="bg-white rounded-lg border border-gray-200 p-6 flex items-end justify-between">
            <h2 class="text-lg font-bold text-gray-900">Top Selling Items</h2>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
              <i class="fa-solid fa-envelope"></i>
              <span>Contact Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>