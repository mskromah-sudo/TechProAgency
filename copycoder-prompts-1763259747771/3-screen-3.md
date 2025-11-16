Convert the below HTML/CSS code into React component. Do not include the global components as these already exist:

<div class="flex h-screen bg-gray-50">
  <!-- Sidebar -->
  <div id="sidebar-navigation" class="w-64 bg-slate-900 text-white flex flex-col fixed h-screen">
    <div class="p-6 border-b border-slate-700">
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-box text-2xl"></i>
        <span class="text-xl font-bold">Inventory</span>
      </div>
    </div>
    
    <nav class="flex-1 overflow-y-auto p-4 space-y-2">
      <a href="#" class="flex items-center gap-3 px-4 py-3 bg-blue-600 rounded-lg text-white">
        <i class="fa-solid fa-home"></i>
        <span>Home</span>
      </a>
      
      <div class="space-y-2">
        <button class="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg text-left">
          <i class="fa-solid fa-box"></i>
          <span>Items</span>
          <i class="fa-solid fa-chevron-down ml-auto text-xs"></i>
        </button>
        <div class="pl-8 space-y-2 text-sm text-gray-300">
          <a href="#" class="block py-2 hover:text-white">Items</a>
          <a href="#" class="block py-2 hover:text-white">Composite Items</a>
          <a href="#" class="block py-2 hover:text-white">Item Groups</a>
          <a href="#" class="block py-2 hover:text-white">Price Lists</a>
        </div>
      </div>
      
      <button class="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg text-left">
        <i class="fa-solid fa-boxes"></i>
        <span>Inventory</span>
        <i class="fa-solid fa-chevron-right ml-auto text-xs"></i>
      </button>
      
      <button class="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg text-left">
        <i class="fa-solid fa-cart-shopping"></i>
        <span>Sales</span>
        <i class="fa-solid fa-chevron-right ml-auto text-xs"></i>
      </button>
      
      <button class="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg text-left">
        <i class="fa-solid fa-bag-shopping"></i>
        <span>Purchases</span>
        <i class="fa-solid fa-chevron-right ml-auto text-xs"></i>
      </button>
      
      <button class="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg text-left">
        <i class="fa-solid fa-chart-line"></i>
        <span>Reports</span>
      </button>
      
      <button class="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800 rounded-lg text-left">
        <i class="fa-solid fa-file"></i>
        <span>Documents</span>
      </button>
    </nav>
    
    <div class="p-4 border-t border-slate-700">
      <button class="w-full flex items-center justify-center py-2 hover:bg-slate-800 rounded">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
    </div>
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
          <input type="text" placeholder="Search in Customers ( / )" class="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm">
        </div>
      </div>
      
      <div class="flex items-center gap-6">
        <span class="text-sm text-gray-600">This is a Test organization.</span>
        <div class="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <span class="text-sm">Demo Org</span>
          <i class="fa-solid fa-chevron-down text-xs"></i>
        </div>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600">
          <i class="fa-solid fa-plus"></i>
        </button>
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <i class="fa-solid fa-users text-gray-600"></i>
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

    <!-- Content Area -->
    <div class="flex-1 overflow-y-auto">
      <div class="p-8">
        <!-- Welcome Section -->
        <div id="section-welcome" class="mb-8">
          <div class="flex items-center gap-3 mb-4">
            <i class="fa-solid fa-file text-2xl text-gray-400"></i>
            <div>
              <h1 class="text-3xl font-bold text-gray-900">Hello, Demo User</h1>
              <p class="text-gray-600">Demo Org</p>
            </div>
          </div>
          
          <div class="flex gap-8 border-b border-gray-200 mb-6">
            <button class="pb-4 text-blue-600 border-b-2 border-blue-600 font-medium">Dashboard</button>
            <button class="pb-4 text-gray-600 hover:text-gray-900">Getting Started</button>
            <button class="pb-4 text-gray-600 hover:text-gray-900">Recent Updates</button>
          </div>
        </div>

        <!-- Sales Activity Section -->
        <div id="section-sales-activity" class="grid grid-cols-2 gap-8 mb-8">
          <div id="card-sales-activity" class="bg-white rounded-lg p-6 border border-gray-200">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Sales Activity</h2>
            <div class="grid grid-cols-4 gap-4">
              <div class="text-center">
                <div class="text-4xl font-bold text-blue-500 mb-2">51</div>
                <p class="text-sm text-gray-600 mb-3">Qty</p>
                <div class="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>TO BE PACKED</span>
                </div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-red-500 mb-2">40</div>
                <p class="text-sm text-gray-600 mb-3">Pkgs</p>
                <div class="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>TO BE SHIPPED</span>
                </div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-teal-500 mb-2">52</div>
                <p class="text-sm text-gray-600 mb-3">Pkgs</p>
                <div class="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>TO BE DELIVERED</span>
                </div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-amber-500 mb-2">97</div>
                <p class="text-sm text-gray-600 mb-3">Qty</p>
                <div class="flex items-center justify-center gap-2 text-xs text-gray-600">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>TO BE INVOICED</span>
                </div>
              </div>
            </div>
          </div>

          <div id="card-inventory-summary" class="bg-white rounded-lg p-6 border border-gray-200">
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

        <!-- Bottom Section -->
        <div id="section-details" class="grid grid-cols-2 gap-8">
          <div id="card-item-details" class="bg-white rounded-lg p-6 border border-gray-200">
            <h2 class="text-xl font-bold text-gray-900">Item Details</h2>
          </div>
          <div id="card-top-selling" class="bg-white rounded-lg p-6 border border-gray-200 flex items-end justify-between">
            <h2 class="text-xl font-bold text-gray-900">Top Selling Items</h2>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600">
              <i class="fa-solid fa-envelope"></i>
              <span>Contact Support</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>