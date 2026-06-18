import { LayoutDashboard, Users, UsersRound, CalendarDays, ReceiptText, ShieldAlert, Wifi } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Painel Pastoral</h1>
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Total de Membros", value: "1.248", sub: "+12% vs mês anterior" },
          { label: "Células Ativas", value: "86", sub: "4 novas este mês" },
          { label: "Arrecadação", value: "R$ 42.150,00", sub: "Mercado Pago/Sicredi" },
          { label: "Freq. Culto", value: "84%", sub: "vs meta de 90%" },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <p className="text-xs text-slate-400 mt-1 font-medium">{stat.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
