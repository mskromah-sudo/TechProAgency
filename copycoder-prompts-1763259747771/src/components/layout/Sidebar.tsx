'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: '/', label: 'Home', icon: 'fa-home' },
    { href: '/items', label: 'Items', icon: 'fa-box' },
    { href: '/inventory', label: 'Inventory', icon: 'fa-warehouse' },
    { href: '/sales', label: 'Sales', icon: 'fa-cart-shopping' },
    { href: '/purchases', label: 'Purchases', icon: 'fa-lock' },
    { href: '/reports', label: 'Reports', icon: 'fa-chart-bar' },
    { href: '/documents', label: 'Documents', icon: 'fa-folder' },
  ];

  return (
    <div id="sidebar-main" className="w-64 bg-slate-900 text-white flex flex-col flex-shrink-0 h-fit min-h-full overflow-y-auto">
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center gap-2 text-xl font-bold">
          <i className="fa-solid fa-book"></i>
          <span>TechPro Inventory</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
              isActive(item.href)
                ? 'bg-blue-600 text-white'
                : 'hover:bg-slate-800 text-gray-300'
            }`}
          >
            <i className={`fa-solid ${item.icon}`}></i>
            <span>{item.label}</span>
          </Link>
        ))}
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
