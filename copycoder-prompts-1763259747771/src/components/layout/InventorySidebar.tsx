'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function InventorySidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isInventoryExpanded, setIsInventoryExpanded] = useState(true);

  const isActive = (path: string) => pathname === path;

  const handleInventoryClick = () => {
    setIsInventoryExpanded(true);
    router.push('/inventory');
  };

  return (
    <div id="sidebar-inventory" className="w-64 bg-slate-900 text-white flex flex-col flex-shrink-0 h-fit min-h-full overflow-y-auto">
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center gap-2 text-xl font-bold">
          <i className="fa-solid fa-book"></i>
          <span>TechPro Inventory</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {/* Home Link */}
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 text-gray-300 transition-colors"
        >
          <i className="fa-solid fa-home"></i>
          <span>Home</span>
        </Link>

        {/* Items Link */}
        <Link
          href="/items"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 text-gray-300 transition-colors"
        >
          <i className="fa-solid fa-box"></i>
          <span>Items</span>
        </Link>

        {/* Inventory with submenu */}
        <div>
          <button
            onClick={handleInventoryClick}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors cursor-pointer ${
              pathname.startsWith('/inventory')
                ? 'bg-blue-600 text-white'
                : 'hover:bg-slate-800 text-gray-300'
            }`}
          >
            <i className="fa-solid fa-warehouse"></i>
            <span>Inventory</span>
            <i className={`fa-solid fa-chevron-down ml-auto text-xs transition-transform ${
              isInventoryExpanded ? 'rotate-180' : ''
            }`}></i>
          </button>

          {/* Submenu Items */}
          {isInventoryExpanded && (
            <div className="pl-8 space-y-2 mt-2 text-sm text-gray-300">
              <Link
                href="/inventory"
                className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                  pathname === '/inventory' ? 'text-blue-400 bg-slate-800' : ''
                }`}
              >
                Inventory
              </Link>
              <Link
                href="/inventory/assemblies"
                className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                  pathname === '/inventory/assemblies' ? 'text-blue-400 bg-slate-800' : ''
                }`}
              >
                Assemblies
              </Link>
              <Link
                href="/inventory/adjustments"
                className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                  pathname === '/inventory/adjustments' ? 'text-blue-400 bg-slate-800' : ''
                }`}
              >
                Adjustments
              </Link>
              <Link
                href="/inventory/packages"
                className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                  pathname === '/inventory/packages' ? 'text-blue-400 bg-slate-800' : ''
                }`}
              >
                Packages
              </Link>
              <Link
                href="/inventory/shipments"
                className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                  pathname === '/inventory/shipments' ? 'text-blue-400 bg-slate-800' : ''
                }`}
              >
                Shipments
              </Link>
            </div>
          )}
        </div>

        {/* Other menu items */}
        <Link
          href="/sales"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 text-gray-300 transition-colors"
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span>Sales</span>
        </Link>

        <Link
          href="/purchases"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 text-gray-300 transition-colors"
        >
          <i className="fa-solid fa-lock"></i>
          <span>Purchases</span>
        </Link>

        <Link
          href="/reports"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 text-gray-300 transition-colors"
        >
          <i className="fa-solid fa-chart-bar"></i>
          <span>Reports</span>
        </Link>

        <Link
          href="/documents"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 text-gray-300 transition-colors"
        >
          <i className="fa-solid fa-folder"></i>
          <span>Documents</span>
        </Link>
      </nav>
      
      <div className="p-4 border-t border-slate-700">
        <a href="#" className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
          <i className="fa-solid fa-sliders"></i>
          <span>Configure Features</span>
        </a>
      </div>
    </div>
  );
}
