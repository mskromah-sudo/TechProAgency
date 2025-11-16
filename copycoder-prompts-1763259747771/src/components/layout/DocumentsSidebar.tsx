'use client';

export default function DocumentsSidebar() {
  return (
    <div id="sidebar-documents" className="w-64 bg-slate-900 text-white flex flex-col fixed h-screen left-0 top-0">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-book text-xl"></i>
          <span className="text-xl font-semibold">Inventory</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <button className="flex items-center gap-2 text-slate-300 hover:text-white mb-6">
            <i className="fa-solid fa-chevron-left"></i>
            <span>Back</span>
          </button>
          
          <h2 className="text-lg font-semibold mb-4">Documents</h2>
          
          <div className="space-y-2">
            <div className="px-4 py-2 rounded bg-slate-800 text-white flex items-center gap-2">
              <i className="fa-solid fa-file"></i>
              <span>All Documents</span>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-3">Folders</div>
            <p className="text-sm text-slate-400 mb-4">There are no folders.</p>
            <button className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
              <i className="fa-solid fa-plus"></i>
              <span>Create New Folder</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-slate-700">
        <button className="w-full px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 justify-center">
          <i className="fa-solid fa-trash"></i>
          <span>Trash</span>
        </button>
      </div>
    </div>
  );
}
