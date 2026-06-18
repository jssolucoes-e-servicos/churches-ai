'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Login Administrativo</h1>
        <form className="space-y-4">
          <div>
            <Label>Email ou CPF</Label>
            <Input name="identifier" required />
          </div>
          <div>
            <Label>Senha</Label>
            <Input name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">Entrar</Button>
        </form>
      </div>
    </div>
  )
}
