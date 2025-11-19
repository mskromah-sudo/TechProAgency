'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SalesSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isCustomersExpanded, setIsCustomersExpanded] = useState(true);
  const [isRetainerInvoicesExpanded, setIsRetainerInvoicesExpanded] = useState(false);
  const [isSalesOrdersExpanded, setIsSalesOrdersExpanded] = useState(false);
  const [isInvoicesExpanded, setIsInvoicesExpanded] = useState(false);
  const [isPaymentReceivedExpanded, setIsPaymentReceivedExpanded] = useState(false);

  const handleSectionClick = (path: string, setter: (value: boolean) => void) => {
    setter(true);
    router.push(path);
  };

  return (
    <div id="sidebar-sales" className="w-64 bg-slate-900 text-white flex flex-col flex-shrink-0 h-fit min-h-full overflow-y-auto">
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center gap-2 text-xl font-bold">
          <i className="fa-solid fa-chart-line"></i>
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

        {/* Inventory Link */}
        <Link
          href="/inventory"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 text-gray-300 transition-colors"
        >
          <i className="fa-solid fa-warehouse"></i>
          <span>Inventory</span>
        </Link>

        {/* Sales with submenu */}
        <div>
          <Link
            href="/sales"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
              pathname === '/sales'
                ? 'bg-blue-600 text-white'
                : 'hover:bg-slate-800 text-gray-300'
            }`}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span>Sales</span>
          </Link>

          {/* Customers */}
          <div className="pl-8 mt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick('/sales/customers', setIsCustomersExpanded);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                pathname.startsWith('/sales/customers')
                  ? 'bg-blue-700 text-white'
                  : 'hover:bg-slate-800 text-gray-300'
              }`}
            >
              <i className="fa-solid fa-users"></i>
              <span>Customers</span>
              <i className={`fa-solid fa-plus ml-auto text-xs`}></i>
              <i className={`fa-solid fa-chevron-down text-xs transition-transform ${
                isCustomersExpanded ? 'rotate-180' : ''
              }`}></i>
            </button>

            {isCustomersExpanded && (
              <div className="pl-4 space-y-1 mt-1 text-xs text-gray-300">
                <Link
                  href="/sales/customers"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/sales/customers' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  All Customers
                </Link>
                <Link
                  href="/sales/customers/contacts"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/sales/customers/contacts' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  Customer Contacts
                </Link>
                <Link
                  href="/sales/customers/groups"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/sales/customers/groups' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  Customer Groups
                </Link>
              </div>
            )}
          </div>

          {/* Retainer Invoices */}
          <div className="pl-8 mt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick('/sales/retainer-invoices', setIsRetainerInvoicesExpanded);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                pathname.startsWith('/sales/retainer-invoices')
                  ? 'bg-blue-700 text-white'
                  : 'hover:bg-slate-800 text-gray-300'
              }`}
            >
              <i className="fa-solid fa-file-invoice"></i>
              <span>Retainer Invoices</span>
              <i className={`fa-solid fa-plus ml-auto text-xs`}></i>
              <i className={`fa-solid fa-chevron-down text-xs transition-transform ${
                isRetainerInvoicesExpanded ? 'rotate-180' : ''
              }`}></i>
            </button>

            {isRetainerInvoicesExpanded && (
              <div className="pl-4 space-y-1 mt-1 text-xs text-gray-300">
                <Link
                  href="/sales/retainer-invoices"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/sales/retainer-invoices' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  All Retainers
                </Link>
                <Link
                  href="/sales/retainer-invoices/active"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/sales/retainer-invoices/active' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  Active Retainers
                </Link>
              </div>
            )}
          </div>

          {/* Sales Orders */}
          <div className="pl-8 mt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick('/sales/sales-orders', setIsSalesOrdersExpanded);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                pathname.startsWith('/sales/sales-orders')
                  ? 'bg-blue-700 text-white'
                  : 'hover:bg-slate-800 text-gray-300'
              }`}
            >
              <i className="fa-solid fa-receipt"></i>
              <span>Sales Orders</span>
              <i className={`fa-solid fa-plus ml-auto text-xs`}></i>
              <i className={`fa-solid fa-chevron-down text-xs transition-transform ${
                isSalesOrdersExpanded ? 'rotate-180' : ''
              }`}></i>
            </button>

            {isSalesOrdersExpanded && (
              <div className="pl-4 space-y-1 mt-1 text-xs text-gray-300">
                <Link
                  href="/sales/sales-orders"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/sales/sales-orders' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  All Orders
                </Link>
                <Link
                  href="/sales/sales-orders/draft"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/sales/sales-orders/draft' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  Draft Orders
                </Link>
                <Link
                  href="/sales/sales-orders/pending"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/sales/sales-orders/pending' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  Pending Orders
                </Link>
              </div>
            )}
          </div>

          {/* Invoices */}
          <div className="pl-8 mt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick('/sales/invoices', setIsInvoicesExpanded);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                pathname.startsWith('/sales/invoices')
                  ? 'bg-blue-700 text-white'
                  : 'hover:bg-slate-800 text-gray-300'
              }`}
            >
              <i className="fa-solid fa-file-lines"></i>
              <span>Invoices</span>
              <i className={`fa-solid fa-plus ml-auto text-xs`}></i>
              <i className={`fa-solid fa-chevron-down text-xs transition-transform ${
                isInvoicesExpanded ? 'rotate-180' : ''
              }`}></i>
            </button>

            {isInvoicesExpanded && (
              <div className="pl-4 space-y-1 mt-1 text-xs text-gray-300">
                <Link
                  href="/sales/invoices"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/sales/invoices' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  All Invoices
                </Link>
                <Link
                  href="/sales/invoices/draft"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/sales/invoices/draft' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  Draft Invoices
                </Link>
                <Link
                  href="/sales/invoices/unpaid"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/sales/invoices/unpaid' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  Unpaid Invoices
                </Link>
              </div>
            )}
          </div>

          {/* Payment Received */}
          <div className="pl-8 mt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick('/sales/payments', setIsPaymentReceivedExpanded);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                pathname.startsWith('/sales/payments')
                  ? 'bg-blue-700 text-white'
                  : 'hover:bg-slate-800 text-gray-300'
              }`}
            >
              <i className="fa-solid fa-money-bill"></i>
              <span>Payments Received</span>
              <i className={`fa-solid fa-plus ml-auto text-xs`}></i>
              <i className={`fa-solid fa-chevron-down text-xs transition-transform ${
                isPaymentReceivedExpanded ? 'rotate-180' : ''
              }`}></i>
            </button>

            {isPaymentReceivedExpanded && (
              <div className="pl-4 space-y-1 mt-1 text-xs text-gray-300">
                <Link
                  href="/sales/payments"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/sales/payments' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  All Payments
                </Link>
                <Link
                  href="/sales/payments/partial"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/sales/payments/partial' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  Partial Payments
                </Link>
              </div>
            )}
          </div>

          {/* Sales Return */}
          <Link
            href="/sales/returns"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors mt-2 ml-8 ${
              pathname === '/sales/returns'
                ? 'bg-blue-700 text-white'
                : 'hover:bg-slate-800 text-gray-300'
            }`}
          >
            <i className="fa-solid fa-undo"></i>
            <span>Sales Returns</span>
          </Link>

          {/* Credit Notes */}
          <Link
            href="/sales/credit-notes"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors mt-2 ml-8 ${
              pathname === '/sales/credit-notes'
                ? 'bg-blue-700 text-white'
                : 'hover:bg-slate-800 text-gray-300'
            }`}
          >
            <i className="fa-solid fa-note-sticky"></i>
            <span>Credit Notes</span>
          </Link>
        </div>

        {/* Other menu items */}
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
