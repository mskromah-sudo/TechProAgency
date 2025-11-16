'use client';

export default function RightSidebar() {
  return (
    <div className="w-16 bg-white border-l border-gray-200 flex flex-col items-center py-4 gap-4">
      <button className="p-3 hover:bg-gray-100 rounded text-orange-500 transition-colors">
        <i className="fa-solid fa-circle-question text-xl"></i>
      </button>
      <button className="p-3 hover:bg-gray-100 rounded text-gray-600 transition-colors">
        <i className="fa-solid fa-thumbs-up text-xl"></i>
      </button>
      <button className="p-3 hover:bg-gray-100 rounded text-gray-600 transition-colors">
        <i className="fa-solid fa-message text-xl"></i>
      </button>
      <button className="p-3 hover:bg-gray-100 rounded text-gray-600 transition-colors">
        <i className="fa-solid fa-gear text-xl"></i>
      </button>
    </div>
  );
}
