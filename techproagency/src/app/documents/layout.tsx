import Header from "@/components/layout/Header";
import DocumentsSidebar from "@/components/layout/DocumentsSidebar";
import RightSidebar from "@/components/layout/RightSidebar";

export default function DocumentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <DocumentsSidebar />
      <div id="main-content" className="ml-64 flex-1 flex flex-col">
        <Header />
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
      <RightSidebar />
    </div>
  );
}
