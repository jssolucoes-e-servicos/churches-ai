export default function PainelPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard Administrativo</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold">Resumo Geral</h2>
          <p className="text-gray-600">Bem-vindo ao sistema administrativo.</p>
        </div>
      </div>
    </div>
  )
}
