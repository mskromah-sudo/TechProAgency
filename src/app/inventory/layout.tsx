import InventorySidebar from '@/components/layout/InventorySidebar';
import Header from '@/components/layout/Header';
import RightSidebar from '@/components/layout/RightSidebar';

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <InventorySidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 flex overflow-hidden">
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
