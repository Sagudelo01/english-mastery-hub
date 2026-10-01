// INCIO IMPORTACIONES
import { auth } from "@/auth";
import LoginForm from "@/components/LoginForm";
import Loader from "@/components/loader";
import { redirect } from "next/navigation";
// FIN IMPORTACIONES

export default async function Home() {
  const session = await auth();

  if (session) redirect("/dashboard");

  return (
    <>
      <Loader />
      <section className="min-h-screen flex items-center justify-center font-mono bg-linear-to-r from-[#3f2c28] from-10% via-[#6b524b] via-50% to-[#96665a60] to-100%">
        <LoginForm />
      </section>
    </>
  );
}
