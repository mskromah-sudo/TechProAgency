'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, ReactNode } from 'react';

interface MenuItem {
  label: string;
  icon: string;
  href?: string;
  submenu?: MenuItem[];
}

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());

  const menuItems: MenuItem[] = [
    { label: 'Home', icon: 'fa-home', href: '/' },
    {
      label: 'Items',
      icon: 'fa-box',
      submenu: [
        { label: 'Items', icon: 'fa-cube', href: '/items' },
        { label: 'Composite Items', icon: 'fa-box-open', href: '/items/composite' },
        { label: 'Item Groups', icon: 'fa-layer-group', href: '/items/groups' },
        { label: 'Price Lists', icon: 'fa-tag', href: '/items/price-lists' },
      ],
    },
    { label: 'Inventory', icon: 'fa-warehouse', href: '/inventory' },
    { label: 'Sales', icon: 'fa-cart-shopping', href: '/sales' },
    { label: 'Purchases', icon: 'fa-shopping-bag', href: '/purchases' },
    { label: 'Reports', icon: 'fa-chart-bar', href: '/reports' },
    { label: 'Documents', icon: 'fa-folder', href: '/documents' },
  ];

  const toggleMenu = (label: string) => {
    const newExpanded = new Set(expandedMenus);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedMenus(newExpanded);
  };

  const isActive = (path?: string) => path && pathname === path;
  const isActiveSection = (path?: string) => path && pathname.startsWith(path);

  const renderMenuItem = (item: MenuItem, level: number = 0): ReactNode => {
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isItemExpanded = expandedMenus.has(item.label);
    const active = isActive(item.href) || (hasSubmenu && item.submenu?.some(sub => isActiveSection(sub.href)));

    return (
      <div key={item.label}>
        <div
          className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer group ${
            active
              ? 'bg-blue-600 text-white'
              : 'text-gray-300 hover:bg-slate-700/40'
          }`}
          onClick={() => {
            if (hasSubmenu) {
              toggleMenu(item.label);
            } else if (item.href) {
              window.location.href = item.href;
            }
          }}
          style={{ marginLeft: `${level * 12}px` }}
        >
          <i className={`fa-solid ${item.icon} w-5 flex-shrink-0 text-sm`}></i>
          <span className="text-sm font-medium flex-1">{item.label}</span>
          {hasSubmenu && (
            <i
              className={`fa-solid fa-chevron-down w-4 flex-shrink-0 text-xs transition-transform duration-250 ${
                isItemExpanded ? 'rotate-180' : ''
              }`}
            ></i>
          )}
        </div>

        {/* Submenu */}
        {hasSubmenu && isItemExpanded && (
          <div className="space-y-0.5 mt-0.5 overflow-hidden">
            {item.submenu?.map((subitem) => (
              <Link
                key={subitem.label}
                href={subitem.href || '#'}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 text-sm ${
                  isActive(subitem.href)
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:bg-slate-700/30 hover:text-gray-200'
                }`}
                style={{ marginLeft: `${(level + 1) * 12}px` }}
              >
                <i className={`fa-solid ${subitem.icon} w-4 flex-shrink-0 text-xs`}></i>
                <span>{subitem.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 bg-slate-900 text-white flex flex-col border-r border-slate-700 overflow-hidden">
      {/* Header with Logo */}
      <div className="px-4 py-5 border-b border-slate-700/50 flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">
          T
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-base text-white">TechPro</h1>
          <p className="text-xs text-gray-400">Inventory System</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-slate-700 hover:scrollbar-thumb-slate-600">
        <div className="p-3 space-y-1">
          {menuItems.map((item) => renderMenuItem(item))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700/50 space-y-2">
        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-300 hover:bg-slate-700/40 transition-colors text-sm group">
          <i className="fa-solid fa-sliders w-5 flex-shrink-0"></i>
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
}
