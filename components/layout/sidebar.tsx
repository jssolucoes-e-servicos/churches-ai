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
    <aside className="w-64 bg-slate-900 flex flex-col h-full">
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white">C</div>
        <span className="text-white font-bold text-xl tracking-tight">Ekklesia ERP</span>
      </div>
      <nav className="flex-1 py-6 px-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
                pathname === item.href ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">n8n Connection</span>
          </div>
          <p className="text-[11px] text-slate-300">WhatsApp API Active (v1.2)</p>
        </div>
      </div>
    </aside>
  );
}
