'use server'
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function registerAdmin(formData: FormData) {
  const name = formData.get("name") as string
  const cpf = formData.get("cpf") as string
  const email = formData.get("email") as string
  const whatsapp = formData.get("whatsapp") as string
  const password = formData.get("password") as string
  
  const hashedPassword = await bcrypt.hash(password, 10)
  
  try {
    await prisma.user.create({
      data: {
        name,
        cpf,
        email,
        whatsapp,
        password: hashedPassword
      }
    })
    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false, error: "Erro ao cadastrar administrador." }
  }
}
