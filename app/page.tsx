import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-950">
      <div className="text-center max-w-2xl mx-auto space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          Ekklesia ERP
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Gerenciamento completo para igrejas e células.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition"
          >
            Acessar Painel
          </Link>
        </div>
      </div>
    </main>
  );
}
