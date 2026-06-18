'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { name: 'Jan', membros: 400, arrecadacao: 2400 },
  { name: 'Fev', membros: 300, arrecadacao: 1398 },
  { name: 'Mar', membros: 200, arrecadacao: 9800 },
  { name: 'Abr', membros: 278, arrecadacao: 3908 },
  { name: 'Mai', membros: 189, arrecadacao: 4800 },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">Painel Pastoral</h1>
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Total de Membros", value: "1.248", sub: "+12% vs mês anterior" },
          { label: "Células Ativas", value: "86", sub: "4 novas este mês" },
          { label: "Arrecadação", value: "R$ 42.150,00", sub: "Mercado Pago/Sicredi" },
          { label: "Freq. Culto", value: "84%", sub: "vs meta de 90%" },
        ].map((stat) => (
          <Card key={stat.label} className="shadow-sm border-slate-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <p className="text-xs text-blue-600 mt-1 font-medium">{stat.sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="shadow-sm border-slate-200 p-4">
          <CardTitle className="text-sm mb-4">Evolução de Membros</CardTitle>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="membros" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="shadow-sm border-slate-200 p-4">
          <CardTitle className="text-sm mb-4">Arrecadação Financeira</CardTitle>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="arrecadacao" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
