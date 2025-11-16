'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function ItemsSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isItemsExpanded, setIsItemsExpanded] = useState(true);

  const isActive = (path: string) => pathname === path;

  const handleItemsClick = () => {
    setIsItemsExpanded(true);
    router.push('/items');
  };

  return (
    <div id="sidebar-items" className="w-64 bg-slate-900 text-white flex flex-col flex-shrink-0 h-fit min-h-full overflow-y-auto">
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

        {/* Items with submenu */}
        <div>
          <button
            onClick={handleItemsClick}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors cursor-pointer ${
              pathname.startsWith('/items')
                ? 'bg-blue-600 text-white'
                : 'hover:bg-slate-800 text-gray-300'
            }`}
          >
            <i className="fa-solid fa-box"></i>
            <span>Items</span>
            <i className={`fa-solid fa-chevron-down ml-auto text-xs transition-transform ${
              isItemsExpanded ? 'rotate-180' : ''
            }`}></i>
          </button>

          {/* Submenu Items */}
          {isItemsExpanded && (
            <div className="pl-8 space-y-2 mt-2 text-sm text-gray-300">
              <Link
                href="/items"
                className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                  pathname === '/items' ? 'text-blue-400 bg-slate-800' : ''
                }`}
              >
                Items
              </Link>
              <Link
                href="/items/composite-items"
                className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                  pathname === '/items/composite-items' ? 'text-blue-400 bg-slate-800' : ''
                }`}
              >
                Composite Items
              </Link>
              <Link
                href="/items/item-groups"
                className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                  pathname === '/items/item-groups' ? 'text-blue-400 bg-slate-800' : ''
                }`}
              >
                Item Groups
              </Link>
              <Link
                href="/items/price-lists"
                className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                  pathname === '/items/price-lists' ? 'text-blue-400 bg-slate-800' : ''
                }`}
              >
                Price Lists
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
