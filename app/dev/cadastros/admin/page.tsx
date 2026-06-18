'use client'
import { useState } from 'react'
import { registerAdmin } from './actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function RegisterAdminPage() {
  const [message, setMessage] = useState('')

  async function handleSubmit(formData: FormData) {
    const result = await registerAdmin(formData)
    if (result.success) {
      setMessage('Administrador cadastrado com sucesso!')
    } else {
      setMessage(result.error || 'Erro inesperado.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Cadastro de Administrador</h1>
        <form action={handleSubmit} className="space-y-4">
          <div>
            <Label>Nome</Label>
            <Input name="name" required />
          </div>
          <div>
            <Label>CPF</Label>
            <Input name="cpf" required />
          </div>
          <div>
            <Label>Email</Label>
            <Input name="email" type="email" required />
          </div>
          <div>
            <Label>WhatsApp</Label>
            <Input name="whatsapp" />
          </div>
          <div>
            <Label>Senha</Label>
            <Input name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">Cadastrar</Button>
        </form>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  )
}
