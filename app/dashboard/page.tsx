import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import SignOutButton from "@/components/SignOutButton";
import ThemeToggle from "@/components/ThemeToggle";
import Loader from "@/components/loader";
import StudentNavbar from "@/components/StudentNavbar";

export default async function DashboardPage() {
  const session = await auth();
  const supabase = await createClient();
  if (!session) redirect("/");

  // Lógica temporal para identificar al profesor por su correo
  // 1. Buscamos al usuario en tu base de datos usando su correo
  const { data: usuarioDb } = await supabase
    .from("usuarios")
    .select("rol")
    .eq("correo", session.user?.email)
    .single();

  // 2. Ahora la variable depende de lo que diga la base de datos, no de un correo fijo
  const esProfesor = usuarioDb?.rol === "profesor";

  const { data: estudiantes } = await supabase
    .from("usuarios")
    .select("correo, created_at")
    .eq("rol", "estudiante")
    .order("created_at", { ascending: false });

  return (
    <>
      <Loader />
      <div className="min-h-screen bg-[#f5f5f5] font-mono dark:bg-[#3f2c28]">
        {esProfesor ? (
          <>
            <header className="flex items-center justify-between px-6 py-4">
              <h1 className="text-xl font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Panel del Profesor
              </h1>
              <div className="flex items-center gap-2">
                <Link
                  href="/talleres/diagnostico"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#96665a] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#6b524b]"
                >
                  Ver actividades
                </Link>
                <ThemeToggle />
                <SignOutButton />
              </div>
            </header>

            <main className="px-6 pb-10">
              <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-[#4a3d3a]">
                <div className="border-b border-[#e8e0dc] bg-[#faf7f5] px-6 py-4 dark:border-[#6b524b] dark:bg-[#3f2c28]">
                  <h2 className="text-lg font-semibold text-[#3f2c28] dark:text-[#f5f5f5]">
                    Estudiantes
                  </h2>
                  <p className="text-sm text-[#6b524b] dark:text-[#c9b8b2]">
                    {estudiantes?.length ?? 0} registrados
                  </p>
                </div>

                {estudiantes && estudiantes.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-[#e8e0dc] text-sm text-[#6b524b] dark:border-[#6b524b] dark:text-[#c9b8b2]">
                          <th className="px-6 py-3 font-medium">Correo</th>
                          <th className="px-6 py-3 font-medium">Fecha de registro</th>
                          <th className="px-6 py-3 font-medium">Rol</th>
                        </tr>
                      </thead>
                      <tbody>
                        {estudiantes.map((estudiante) => (
                          <tr
                            key={estudiante.correo}
                            className="border-b border-[#f0ebe8] transition-colors last:border-0 hover:bg-[#faf7f5] dark:border-[#6b524b] dark:hover:bg-[#3f2c28]"
                          >
                            <td className="px-6 py-4 text-[#3f2c28] dark:text-[#f5f5f5]">
                              {estudiante.correo}
                            </td>
                            <td className="px-6 py-4 text-[#6b524b] dark:text-[#c9b8b2]">
                              {new Date(estudiante.created_at).toLocaleDateString("es-ES", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center rounded-full bg-[#96665a]/15 px-3 py-1 text-xs font-medium text-[#96665a] dark:bg-[#96665a]/30 dark:text-[#e0c8c0]">
                                estudiante
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="px-6 py-10 text-center text-[#6b524b] dark:text-[#c9b8b2]">
                    Aún no hay estudiantes
                  </p>
                )}
              </div>
            </main>
          </>
        ) : (
          <>
            <StudentNavbar />

            <main className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-16 lg:flex-row lg:gap-16">
              <div className="order-2 flex-1 lg:order-1">
                <h1 className="text-3xl font-bold leading-tight text-[#3f2c28] dark:text-[#f5f5f5] sm:text-4xl">
                  Tu camino al inglés empieza con un{" "}
                  <span className="text-[#96665a]">diagnóstico</span>
                </h1>
                <p className="mt-4 text-base leading-relaxed text-[#6b524b] dark:text-[#c9b8b2]">
                  Para asegurar tu aprendizaje, el primer paso es conocer tu nivel.
                  <br />
                  Completa esta <strong>Evaluación Diagnóstica</strong> antes de
                  iniciar los talleres prácticos.
                </p>
                <div className="mt-8">
                  <Link
                    href="/talleres/diagnostico"
                    className="inline-block rounded-lg bg-[#96665a] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6b524b] hover:shadow-lg"
                  >
                    Hacer Diagnóstico
                  </Link>
                </div>
              </div>

              <div className="order-1 flex-1 lg:order-2">
<img
                  src="/img/img.png"
                  alt="Hero"
                  className="mx-auto w-full max-w-md animate-[logo-bounce_8s_ease-in-out_infinite]"
                  loading="lazy"
                />
              </div>
            </main>
          </>
        )}
      </div>
    </>
  );
}
