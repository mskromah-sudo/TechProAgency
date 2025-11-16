'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PurchasesSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isVendorsExpanded, setIsVendorsExpanded] = useState(true);
  const [isPurchaseOrdersExpanded, setIsPurchaseOrdersExpanded] = useState(false);
  const [isBillsExpanded, setIsBillsExpanded] = useState(false);
  const [isPurchaseReturnsExpanded, setIsPurchaseReturnsExpanded] = useState(false);
  const [isPaymentMadeExpanded, setIsPaymentMadeExpanded] = useState(false);

  const handleSectionClick = (path: string, setter: (value: boolean) => void) => {
    setter(true);
    router.push(path);
  };

  return (
    <div id="sidebar-purchases" className="w-64 bg-slate-900 text-white flex flex-col flex-shrink-0 h-fit min-h-full overflow-y-auto">
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center gap-2 text-xl font-bold">
          <i className="fa-solid fa-truck"></i>
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

        {/* Sales Link */}
        <Link
          href="/sales"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 text-gray-300 transition-colors"
        >
          <i className="fa-solid fa-cart-shopping"></i>
          <span>Sales</span>
        </Link>

        {/* Purchases with submenu */}
        <div>
          <Link
            href="/purchases"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
              pathname === '/purchases'
                ? 'bg-blue-600 text-white'
                : 'hover:bg-slate-800 text-gray-300'
            }`}
          >
            <i className="fa-solid fa-truck"></i>
            <span>Purchases</span>
          </Link>

          {/* Vendors */}
          <div className="pl-8 mt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick('/purchases/vendors', setIsVendorsExpanded);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                pathname.startsWith('/purchases/vendors')
                  ? 'bg-blue-700 text-white'
                  : 'hover:bg-slate-800 text-gray-300'
              }`}
            >
              <i className="fa-solid fa-building"></i>
              <span>Vendors</span>
              <i className={`fa-solid fa-plus ml-auto text-xs`}></i>
              <i className={`fa-solid fa-chevron-down text-xs transition-transform ${
                isVendorsExpanded ? 'rotate-180' : ''
              }`}></i>
            </button>

            {isVendorsExpanded && (
              <div className="pl-4 space-y-1 mt-1 text-xs text-gray-300">
                <Link
                  href="/purchases/vendors"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/purchases/vendors' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  All Vendors
                </Link>
                <Link
                  href="/purchases/vendors/contacts"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/purchases/vendors/contacts' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  Vendor Contacts
                </Link>
              </div>
            )}
          </div>

          {/* Purchase Orders */}
          <div className="pl-8 mt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick('/purchases/purchase-orders', setIsPurchaseOrdersExpanded);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                pathname.startsWith('/purchases/purchase-orders')
                  ? 'bg-blue-700 text-white'
                  : 'hover:bg-slate-800 text-gray-300'
              }`}
            >
              <i className="fa-solid fa-clipboard-list"></i>
              <span>Purchase Orders</span>
              <i className={`fa-solid fa-plus ml-auto text-xs`}></i>
              <i className={`fa-solid fa-chevron-down text-xs transition-transform ${
                isPurchaseOrdersExpanded ? 'rotate-180' : ''
              }`}></i>
            </button>

            {isPurchaseOrdersExpanded && (
              <div className="pl-4 space-y-1 mt-1 text-xs text-gray-300">
                <Link
                  href="/purchases/purchase-orders"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/purchases/purchase-orders' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  All Orders
                </Link>
                <Link
                  href="/purchases/purchase-orders/draft"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/purchases/purchase-orders/draft' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  Draft Orders
                </Link>
                <Link
                  href="/purchases/purchase-orders/pending"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/purchases/purchase-orders/pending' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  Pending Orders
                </Link>
              </div>
            )}
          </div>

          {/* Bills */}
          <div className="pl-8 mt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick('/purchases/bills', setIsBillsExpanded);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                pathname.startsWith('/purchases/bills')
                  ? 'bg-blue-700 text-white'
                  : 'hover:bg-slate-800 text-gray-300'
              }`}
            >
              <i className="fa-solid fa-file-invoice-dollar"></i>
              <span>Bills</span>
              <i className={`fa-solid fa-plus ml-auto text-xs`}></i>
              <i className={`fa-solid fa-chevron-down text-xs transition-transform ${
                isBillsExpanded ? 'rotate-180' : ''
              }`}></i>
            </button>

            {isBillsExpanded && (
              <div className="pl-4 space-y-1 mt-1 text-xs text-gray-300">
                <Link
                  href="/purchases/bills"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/purchases/bills' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  All Bills
                </Link>
                <Link
                  href="/purchases/bills/draft"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/purchases/bills/draft' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  Draft Bills
                </Link>
                <Link
                  href="/purchases/bills/unpaid"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/purchases/bills/unpaid' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  Unpaid Bills
                </Link>
              </div>
            )}
          </div>

          {/* Purchase Returns */}
          <div className="pl-8 mt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick('/purchases/returns', setIsPurchaseReturnsExpanded);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                pathname.startsWith('/purchases/returns')
                  ? 'bg-blue-700 text-white'
                  : 'hover:bg-slate-800 text-gray-300'
              }`}
            >
              <i className="fa-solid fa-undo"></i>
              <span>Purchase Returns</span>
              <i className={`fa-solid fa-plus ml-auto text-xs`}></i>
              <i className={`fa-solid fa-chevron-down text-xs transition-transform ${
                isPurchaseReturnsExpanded ? 'rotate-180' : ''
              }`}></i>
            </button>

            {isPurchaseReturnsExpanded && (
              <div className="pl-4 space-y-1 mt-1 text-xs text-gray-300">
                <Link
                  href="/purchases/returns"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/purchases/returns' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  All Returns
                </Link>
                <Link
                  href="/purchases/returns/pending"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/purchases/returns/pending' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  Pending Returns
                </Link>
              </div>
            )}
          </div>

          {/* Payment Made */}
          <div className="pl-8 mt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick('/purchases/payments', setIsPaymentMadeExpanded);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                pathname.startsWith('/purchases/payments')
                  ? 'bg-blue-700 text-white'
                  : 'hover:bg-slate-800 text-gray-300'
              }`}
            >
              <i className="fa-solid fa-money-bill-wave"></i>
              <span>Payments Made</span>
              <i className={`fa-solid fa-plus ml-auto text-xs`}></i>
              <i className={`fa-solid fa-chevron-down text-xs transition-transform ${
                isPaymentMadeExpanded ? 'rotate-180' : ''
              }`}></i>
            </button>

            {isPaymentMadeExpanded && (
              <div className="pl-4 space-y-1 mt-1 text-xs text-gray-300">
                <Link
                  href="/purchases/payments"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/purchases/payments' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  All Payments
                </Link>
                <Link
                  href="/purchases/payments/partial"
                  className={`block py-2 px-3 rounded hover:bg-slate-800 transition-colors ${
                    pathname === '/purchases/payments/partial' ? 'text-blue-400 bg-slate-800' : ''
                  }`}
                >
                  Partial Payments
                </Link>
              </div>
            )}
          </div>

          {/* Vendor Credits */}
          <Link
            href="/purchases/vendor-credits"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-colors mt-2 ml-8 ${
              pathname === '/purchases/vendor-credits'
                ? 'bg-blue-700 text-white'
                : 'hover:bg-slate-800 text-gray-300'
            }`}
          >
            <i className="fa-solid fa-credit-card"></i>
            <span>Vendor Credits</span>
          </Link>
        </div>

        {/* Reports Link */}
        <Link
          href="/reports"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-800 text-gray-300 transition-colors"
        >
          <i className="fa-solid fa-chart-bar"></i>
          <span>Reports</span>
        </Link>

        {/* Documents Link */}
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
