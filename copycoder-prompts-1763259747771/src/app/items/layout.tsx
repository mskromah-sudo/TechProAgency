import Header from "@/components/layout/Header";
import ItemsSidebar from "@/components/layout/ItemsSidebar";
import RightSidebar from "@/components/layout/RightSidebar";

export default function ItemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <ItemsSidebar />
      <div id="main-content" className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
      <RightSidebar />
    </div>
  );
}
