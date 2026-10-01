import Link from "next/link";
import Loader from "@/components/loader";
import StudentNavbar from "@/components/StudentNavbar";

const roles = [
  {
    nombre: "COORDINADOR",
    descripcion: "Asegura que todos hablen bien en inglés.",
  },
  {
    nombre: "AYUDANTE DEL COORDINADOR",
    descripcion: "Gestiona la duración de cada actividad.",
  },
  {
    nombre: "SECRETARIO",
    descripcion: "Registra las respuestas grupales.",
  },
  {
    nombre: "ENCARGADO DEL MATERIAL",
    descripcion: "Verifica que todos entendieron la instrucción.",
  },
];

const fichaCampos = [
  { label: "Name & Age:" },
  { label: "Country:" },
  { label: "Family:" },
  { label: "Hobbies & Pets:" },
];

const inputClass =
  "w-full rounded-lg border border-[#e8e0dc] bg-white px-3 py-2 text-sm text-[#3f2c28] outline-none transition-colors focus:border-[#96665a] focus:ring-2 focus:ring-[#96665a]/20 dark:border-[#6b524b] dark:bg-[#3f2c28] dark:text-[#f5f5f5]";

export default function EvaluacionFinalPage() {
  return (
    <>
      <Loader />
      <div className="min-h-screen bg-[#f5f5f5] font-mono dark:bg-[#3f2c28]">
        <StudentNavbar />

        <main className="mx-auto max-w-3xl px-6 py-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
              English Diagnostic Quiz
            </h1>
            <p className="mt-2 text-[#6b524b] dark:text-[#c9b8b2]">
              Nuestras Historias en Comunidad | Grade 6°
            </p>
          </div>

          {/* SECCIÓN 1: ROLES */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#8a6f5c] px-6 py-3">
              <h2 className="font-bold text-white">1. Organización del Equipo</h2>
            </div>
            <div className="p-6">
              <p className="mb-6 text-[#6b524b] dark:text-[#c9b8b2]">
                Trabajaremos en grupos de 4 personas. Cada integrante tendrá un
                rol:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {roles.map((rol) => (
                  <div
                    key={rol.nombre}
                    className="rounded-lg border-l-4 border-[#96665a] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]"
                  >
                    <span className="mb-2 inline-block rounded-full bg-[#96665a]/15 px-3 py-1 text-xs font-bold text-[#96665a] dark:bg-[#96665a]/30 dark:text-[#e0c8c0]">
                      {rol.nombre}
                    </span>
                    <p className="text-sm text-[#3f2c28] dark:text-[#f5f5f5]">
                      {rol.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECCIÓN 2: LISTENING */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#5a4038] px-6 py-3">
              <h2 className="font-bold text-white">2. Sección de Escucha (Jigsaw)</h2>
            </div>
            <div className="p-6">
              <p className="mb-6 text-[#6b524b] dark:text-[#c9b8b2]">
                Escuchen los audios y dividan las misiones para completar la
                ficha grupal.
              </p>

              <div className="mb-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                    Audio Tom
                  </h3>
                  <audio controls className="w-full">
                    <source src="/audio/audioTom.ogg" type="audio/ogg" />
                    Tu navegador no soporta el audio.
                  </audio>
                </div>
                <div>
                  <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                    Audio Marta
                  </h3>
                  <audio controls className="w-full">
                    <source src="/audio/audioMarta.ogg" type="audio/ogg" />
                    Tu navegador no soporta el audio.
                  </audio>
                </div>
              </div>

              <h3 className="mb-4 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Ficha Grupal
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                {fichaCampos.map((c) => (
                  <div key={c.label}>
                    <label className="mb-2 block text-sm text-[#6b524b] dark:text-[#c9b8b2]">
                      {c.label}
                    </label>
                    <input type="text" className={inputClass} placeholder="Answer..." />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECCIÓN 3: SPEAKING */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#7d5a4a] px-6 py-3">
              <h2 className="font-bold text-white">
                3. Sección de Habla (English Game Bank)
              </h2>
            </div>
            <div className="p-6">
              <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Entrevista en Tres Pasos
              </h3>
              <ul className="mb-6 space-y-2 text-[#6b524b] dark:text-[#c9b8b2]">
                <li>
                  <strong>Paso A:</strong> Estudiante 1 entrevista al Estudiante
                  2 usando las preguntas.
                </li>
                <li>
                  <strong>Paso B:</strong> Intercambian roles.
                </li>
                <li>
                  <strong>Paso C:</strong> Presentan a su compañero (ej.{" "}
                  <em>&quot;This is my friend...&quot;</em>).
                </li>
              </ul>

              <hr className="mb-6 border-[#96665a]/30" />

              <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Juego Lúdico: Charadas de Hobbies
              </h3>
              <p className="text-[#6b524b] dark:text-[#c9b8b2]">
                Un estudiante actúa una actividad y su equipo adivina con
                oraciones completas (ej. <em>&quot;You like dancing&quot;</em>).
              </p>
            </div>
          </section>

          <div className="text-center">
            <Link
              href="/dashboard"
              className="inline-block rounded-lg bg-[#96665a] px-8 py-3 font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6b524b] hover:shadow-lg dark:bg-[#96665a] dark:hover:bg-[#6b524b]"
            >
              Volver al inicio →
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
