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

      {/* Dropdown Items - Expand Downward Inside Sidebar */}
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

export default function PurchasesSidebar() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isVendorsExpanded, setIsVendorsExpanded] = useState(pathname.startsWith('/purchases/vendors'));
  const [isPurchaseOrdersExpanded, setIsPurchaseOrdersExpanded] = useState(pathname.startsWith('/purchases/purchase-orders'));
  const [isBillsExpanded, setIsBillsExpanded] = useState(pathname.startsWith('/purchases/bills'));
  const [isPurchaseReturnsExpanded, setIsPurchaseReturnsExpanded] = useState(pathname.startsWith('/purchases/returns'));
  const [isPaymentMadeExpanded, setIsPaymentMadeExpanded] = useState(pathname.startsWith('/purchases/payments'));

  const purchasesSections = [
    {
      label: 'Vendors',
      icon: 'fa-building',
      mainPath: '/purchases/vendors',
      expanded: isVendorsExpanded,
      setExpanded: setIsVendorsExpanded,
      items: [
        { label: 'All Vendors', path: '/purchases/vendors' },
        { label: 'Vendor Contacts', path: '/purchases/vendors/contacts' },
      ],
    },
    {
      label: 'Purchase Orders',
      icon: 'fa-clipboard-list',
      mainPath: '/purchases/purchase-orders',
      expanded: isPurchaseOrdersExpanded,
      setExpanded: setIsPurchaseOrdersExpanded,
      items: [
        { label: 'All Orders', path: '/purchases/purchase-orders' },
        { label: 'Draft Orders', path: '/purchases/purchase-orders/draft' },
        { label: 'Pending Orders', path: '/purchases/purchase-orders/pending' },
      ],
    },
    {
      label: 'Bills',
      icon: 'fa-file-invoice-dollar',
      mainPath: '/purchases/bills',
      expanded: isBillsExpanded,
      setExpanded: setIsBillsExpanded,
      items: [
        { label: 'All Bills', path: '/purchases/bills' },
        { label: 'Draft Bills', path: '/purchases/bills/draft' },
        { label: 'Unpaid Bills', path: '/purchases/bills/unpaid' },
      ],
    },
    {
      label: 'Purchase Returns',
      icon: 'fa-undo',
      mainPath: '/purchases/returns',
      expanded: isPurchaseReturnsExpanded,
      setExpanded: setIsPurchaseReturnsExpanded,
      items: [
        { label: 'All Returns', path: '/purchases/returns' },
        { label: 'Pending Returns', path: '/purchases/returns/pending' },
      ],
    },
    {
      label: 'Payments Made',
      icon: 'fa-money-bill-wave',
      mainPath: '/purchases/payments',
      expanded: isPaymentMadeExpanded,
      setExpanded: setIsPaymentMadeExpanded,
      items: [
        { label: 'All Payments', path: '/purchases/payments' },
        { label: 'Partial Payments', path: '/purchases/payments/partial' },
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

          {/* Purchases Menu Sections */}
          {isExpanded ? (
            <>
              {purchasesSections.map((section) => (
                <MenuSection key={section.mainPath} {...section} />
              ))}

              {/* Vendor Credits - Static Link */}
              <Link
                href="/purchases/vendor-credits"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  pathname === '/purchases/vendor-credits'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-gray-300 hover:bg-slate-800/60'
                }`}
              >
                <i className="fa-solid fa-credit-card w-4" />
                <span className="flex-1 text-left truncate">Vendor Credits</span>
              </Link>
            </>
          ) : (
            <Link
              href="/purchases"
              className={`flex items-center justify-center px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                pathname.startsWith('/purchases')
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-gray-300 hover:bg-slate-800/60'
              }`}
              title="Purchases"
            >
              <i className="fa-solid fa-truck" />
            </Link>
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
