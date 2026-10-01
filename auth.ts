import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { createClient } from "@/utils/supabase/server"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return true

      const supabase = await createClient()

      const { error } = await supabase.from("usuarios").upsert(
        { correo: user.email, rol: "estudiante" },
        { onConflict: "correo", ignoreDuplicates: true }
      )

      if (error) {
        console.error("Error sincronizando usuario en Supabase:", error.message)
      }

      return true
    },
  },
})

