'use server'
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"
import { redirect } from "next/navigation"

export async function loginAdmin(formData: FormData) {
  const identifier = formData.get("identifier") as string
  const password = formData.get("password") as string
  
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        { email: identifier },
        { cpf: identifier }
      ]
    }
  })
  
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return { error: "Credenciais inválidas" }
  }
  
  // In a real app, you would set a session/cookie here
  // For now, redirect to dashboard
  redirect("/painel")
}
