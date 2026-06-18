'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { loginAdmin } from './actions'

export default function LoginPage() {
  const [error, setError] = useState('')

  async function handleSubmit(formData: FormData) {
    const result = await loginAdmin(formData)
    if (result?.error) {
      setError(result.error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Login Administrativo</h1>
        <form action={handleSubmit} className="space-y-4">
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
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </div>
    </div>
  )
}
