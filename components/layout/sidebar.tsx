'use client'
import { LayoutDashboard, Users, UsersRound, CalendarDays, ReceiptText, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Painel Pastoral", href: "/dashboard", icon: LayoutDashboard },
    { name: "Membros & Células", href: "/dashboard/members", icon: UsersRound },
    { name: "Escalas & Voluntários", href: "/dashboard/scales", icon: CalendarDays },
    { name: "Tesouraria", href: "/dashboard/treasury", icon: ReceiptText },
    { name: "Logs de Auditoria", href: "/dashboard/logs", icon: ShieldAlert },
  ];

  return (
    <aside className="w-64 bg-[#0a192f] text-white flex flex-col h-full border-r border-[#1e2d45]">
      <div className="p-6 flex items-center gap-3 border-b border-[#1e2d45]">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-900/50">E</div>
        <span className="font-bold text-xl tracking-tight text-white">Ekklesia ERP</span>
      </div>
      <nav className="flex-1 py-6 px-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                pathname === item.href 
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md" 
                    : "text-slate-400 hover:bg-[#112240] hover:text-blue-300"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-[#1e2d45]">
        <div className="bg-[#112240] rounded-xl p-4 border border-[#1e2d45]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] text-blue-300 font-bold uppercase tracking-wider">WhatsApp API</span>
          </div>
          <p className="text-xs text-slate-300">Conectado via n8n (v1.2)</p>
        </div>
      </div>
    </aside>
  );
}
