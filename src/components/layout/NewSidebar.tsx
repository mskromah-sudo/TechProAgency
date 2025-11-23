'use client';

import { useState } from 'react';
import Link from 'next/link';

const menuItems = [
  {
    name: 'Home',
    icon: 'fa-solid fa-home',
    path: '/',
  },
  {
    name: 'Items',
    icon: 'fa-solid fa-box',
    submenus: [
      { name: 'Items', path: '/items' },
      { name: 'Composite Items', path: '/items/composite-items' },
      { name: 'Item Groups', path: '/items/item-groups' },
      { name: 'Price Lists', path: '/items/price-lists' },
    ],
  },
  {
    name: 'Inventory',
    icon: 'fa-solid fa-warehouse',
    submenus: [
      { name: 'Assemblies', path: '/inventory/assemblies' },
      { name: 'Inventory Adjustments', path: '/inventory/adjustments' },
      { name: 'Packages', path: '/inventory/packages' },
      { name: 'Shipments', path: '/inventory/shipments' },
    ],
  },
  {
    name: 'Sales',
    icon: 'fa-solid fa-dollar-sign',
    submenus: [
      { name: 'Customers', path: '/sales/customers' },
      { name: 'Retainer Invoices', path: '/sales/retainer-invoices' },
      { name: 'Sales Orders', path: '/sales/sales-orders' },
      { name: 'Invoices', path: '/sales/invoices' },
      { name: 'Payments Received', path: '/sales/payments' },
      { name: 'Sales Returns', path: '/sales/returns' },
      { name: 'Credit Notes', path: '/sales/credit-notes' },
    ],
  },
  {
    name: 'Purchases',
    icon: 'fa-solid fa-shopping-cart',
    submenus: [
      { name: 'Vendors', path: '/purchases/vendors' },
      { name: 'Purchase Orders', path: '/purchases/purchase-orders' },
      { name: 'Bills', path: '/purchases/bills' },
      { name: 'Purchase Returns', path: '/purchases/returns' },
      { name: 'Vendor Credits', path: '/purchases/vendor-credits' },
      { name: 'Payments Made', path: '/purchases/payments' },
    ],
  },
  {
    name: 'Reports',
    icon: 'fa-solid fa-chart-bar',
    path: '/reports',
  },
  {
    name: 'Documents',
    icon: 'fa-solid fa-file-alt',
    path: '/documents',
  },
];

export default function NewSidebar() {
  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);
  const [activePath, setActivePath] = useState('');

  const toggleSubmenu = (submenuName: string) => {
    if (openSubmenus.includes(submenuName)) {
      setOpenSubmenus(openSubmenus.filter((name) => name !== submenuName));
    } else {
      setOpenSubmenus([...openSubmenus, submenuName]);
    }
  };

  const handleLinkClick = (path: string) => {
    setActivePath(path);
  };

  return (
    <aside className="new-sidebar">
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.submenus ? (
                <div
                  className={`menu-item ${
                    openSubmenus.includes(item.name) ? 'open' : ''
                  }`}
                  onClick={() => toggleSubmenu(item.name)}
                >
                  <i className={item.icon}></i>
                  <span>{item.name}</span>
                  <i className="fa-solid fa-chevron-down dropdown-arrow"></i>
                </div>
              ) : (
                <Link href={item.path || '#'}>
                  <div
                    className={`menu-item ${
                      activePath === item.path ? 'active' : ''
                    }`}
                    onClick={() => handleLinkClick(item.path || '#')}
                  >
                    <i className={item.icon}></i>
                    <span>{item.name}</span>
                  </div>
                </Link>
              )}
              {item.submenus && (
                <ul
                  className={`submenu ${
                    openSubmenus.includes(item.name) ? 'open' : ''
                  }`}
                >
                  {item.submenus.map((submenu) => (
                    <li key={submenu.name}>
                      <Link href={submenu.path}>
                        <div
                          className={`submenu-item ${
                            activePath === submenu.path ? 'active' : ''
                          }`}
                          onClick={() => handleLinkClick(submenu.path)}
                        >
                          {submenu.name}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}