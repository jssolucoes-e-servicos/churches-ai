import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-slate-50 font-sans text-slate-900 overflow-hidden">
        <Sidebar />
        <main className="flex-1 flex flex-col h-full overflow-y-auto">
            <Header />
            <div className="p-6">{children}</div>
        </main>
    </div>
  );
}
