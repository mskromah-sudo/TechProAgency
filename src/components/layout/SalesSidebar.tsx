'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

interface MenuSection {
  label: string;
  icon: string;
  mainPath: string;
  expanded: boolean;
  setExpanded: (value: boolean) => void;
  items: { label: string; path: string }[];
}

function MenuSection({ label, icon, mainPath, expanded, setExpanded, items }: MenuSection) {
  const pathname = usePathname();
  const router = useRouter();
  
  const isActive = pathname.startsWith(mainPath);

  const handleClick = () => {
    setExpanded(!expanded);
    if (pathname !== mainPath) {
      router.push(mainPath);
    }
  };

  return (
    <div className="space-y-0">
      <button
        onClick={handleClick}
        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
            : 'text-gray-300 hover:bg-slate-800/60'
        }`}
      >
        <i className={`fa-solid ${icon} w-4`}></i>
        <span className="flex-1 text-left truncate">{label}</span>
        <i
          className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 flex-shrink-0 ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Items */}
      {expanded && (
        <div className="pl-2 space-y-1 mt-1 max-h-96 overflow-y-auto">
          {items.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-all duration-150 ml-4 ${
                pathname === item.path
                  ? 'bg-blue-500/30 text-blue-300 border-l-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-slate-800/40'
              }`}
            >
              <i className="fa-solid fa-angle-right text-xs flex-shrink-0" />
              <span className="truncate">{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SalesSidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isCustomersExpanded, setIsCustomersExpanded] = useState(pathname.startsWith('/sales/customers'));
  const [isRetainerInvoicesExpanded, setIsRetainerInvoicesExpanded] = useState(pathname.startsWith('/sales/retainer-invoices'));
  const [isSalesOrdersExpanded, setIsSalesOrdersExpanded] = useState(pathname.startsWith('/sales/sales-orders'));
  const [isInvoicesExpanded, setIsInvoicesExpanded] = useState(pathname.startsWith('/sales/invoices'));
  const [isPaymentReceivedExpanded, setIsPaymentReceivedExpanded] = useState(pathname.startsWith('/sales/payments'));

  const salesSections = [
    {
      label: 'Customers',
      icon: 'fa-users',
      mainPath: '/sales/customers',
      expanded: isCustomersExpanded,
      setExpanded: setIsCustomersExpanded,
      items: [
        { label: 'All Customers', path: '/sales/customers' },
        { label: 'Customer Contacts', path: '/sales/customers/contacts' },
        { label: 'Customer Groups', path: '/sales/customers/groups' },
      ],
    },
    {
      label: 'Retainer Invoices',
      icon: 'fa-file-invoice',
      mainPath: '/sales/retainer-invoices',
      expanded: isRetainerInvoicesExpanded,
      setExpanded: setIsRetainerInvoicesExpanded,
      items: [
        { label: 'All Retainers', path: '/sales/retainer-invoices' },
        { label: 'Active Retainers', path: '/sales/retainer-invoices/active' },
      ],
    },
    {
      label: 'Sales Orders',
      icon: 'fa-receipt',
      mainPath: '/sales/sales-orders',
      expanded: isSalesOrdersExpanded,
      setExpanded: setIsSalesOrdersExpanded,
      items: [
        { label: 'All Orders', path: '/sales/sales-orders' },
        { label: 'Draft Orders', path: '/sales/sales-orders/draft' },
        { label: 'Pending Orders', path: '/sales/sales-orders/pending' },
      ],
    },
    {
      label: 'Invoices',
      icon: 'fa-file-lines',
      mainPath: '/sales/invoices',
      expanded: isInvoicesExpanded,
      setExpanded: setIsInvoicesExpanded,
      items: [
        { label: 'All Invoices', path: '/sales/invoices' },
        { label: 'Draft Invoices', path: '/sales/invoices/draft' },
        { label: 'Unpaid Invoices', path: '/sales/invoices/unpaid' },
      ],
    },
    {
      label: 'Payments Received',
      icon: 'fa-money-bill',
      mainPath: '/sales/payments',
      expanded: isPaymentReceivedExpanded,
      setExpanded: setIsPaymentReceivedExpanded,
      items: [
        { label: 'All Payments', path: '/sales/payments' },
        { label: 'Partial Payments', path: '/sales/payments/partial' },
      ],
    },
  ];

  return (
    <div className={`bg-gradient-to-b from-slate-900 to-slate-950 text-white flex flex-col transition-all duration-300 ease-in-out border-r border-slate-700 ${
      isExpanded ? 'w-64' : 'w-20'
    } overflow-hidden`}>
      {/* Header */}
      <div className="p-4 border-b border-slate-700/50 flex items-center justify-between gap-2">
        <div className={`flex items-center gap-3 ${!isExpanded && 'hidden'}`}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">
            T
          </div>
          <span className="font-semibold text-sm truncate">TechPro</span>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1.5 hover:bg-slate-800 rounded-md transition-colors flex-shrink-0"
          title={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          <i className={`fa-solid fa-chevron-${isExpanded ? 'left' : 'right'} text-sm`}></i>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-slate-700">
        <div className={`${isExpanded ? 'p-3' : 'p-2'} space-y-1.5`}>
          {/* Home */}
          <Link
            href="/"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
              pathname === '/'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'text-gray-300 hover:bg-slate-800/60'
            } ${!isExpanded && 'justify-center'}`}
            title={!isExpanded ? 'Home' : ''}
          >
            <i className="fa-solid fa-home w-4 flex-shrink-0" />
            {isExpanded && <span className="truncate">Home</span>}
          </Link>

          {/* Sales Menu Sections */}
          {isExpanded ? (
            <>
              {salesSections.map((section) => (
                <MenuSection key={section.mainPath} {...section} />
              ))}

              {/* Static Links */}
              <div className="pt-2 mt-2 border-t border-slate-700/30 space-y-1">
                <Link
                  href="/sales/returns"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    pathname === '/sales/returns'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-gray-300 hover:bg-slate-800/60'
                  }`}
                >
                  <i className="fa-solid fa-undo w-4" />
                  <span className="truncate">Sales Returns</span>
                </Link>
                <Link
                  href="/sales/credit-notes"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    pathname === '/sales/credit-notes'
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-gray-300 hover:bg-slate-800/60'
                  }`}
                >
                  <i className="fa-solid fa-note-sticky w-4" />
                  <span className="truncate">Credit Notes</span>
                </Link>
              </div>
            </>
          ) : (
            <div className="space-y-1">
              {salesSections.map((section) => (
                <Link
                  key={section.mainPath}
                  href={section.mainPath}
                  className={`flex items-center justify-center px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    pathname.startsWith(section.mainPath)
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-gray-300 hover:bg-slate-800/60'
                  }`}
                  title={section.label}
                >
                  <i className={`fa-solid ${section.icon}`} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Footer */}
      {isExpanded && (
        <div className="p-3 border-t border-slate-700/50">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-xs text-gray-400 hover:text-gray-200 hover:bg-slate-800/40 transition-colors"
          >
            <i className="fa-solid fa-sliders" />
            <span>Settings</span>
          </a>
        </div>
      )}
    </div>
  );
}
