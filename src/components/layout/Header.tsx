'use client';

export default function Header() {
  return (
    <header id="header-top" className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <i className="fa-solid fa-rotate-left text-gray-600"></i>
        </button>
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 flex-1 max-w-md">
          <i className="fa-solid fa-search text-gray-400"></i>
          <input type="text" placeholder="Search in Customers ( / )" className="bg-transparent outline-none text-sm flex-1" />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">This is a <strong>Test</strong> organization.</span>
        <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
          <span className="text-sm">Demo Org</span>
          <i className="fa-solid fa-chevron-down text-xs"></i>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          <i className="fa-solid fa-plus"></i>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <i className="fa-solid fa-user text-gray-600"></i>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <i className="fa-solid fa-bell text-gray-600"></i>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <i className="fa-solid fa-gear text-gray-600"></i>
        </button>
        <img src="https://i.pravatar.cc/150?u=demo" alt="Avatar" className="w-8 h-8 rounded-full" />
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <i className="fa-solid fa-grip text-gray-600"></i>
        </button>
      </div>
    </header>
  );
}
