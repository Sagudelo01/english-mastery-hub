import Loader from "@/components/loader";
import StudentNavbar from "@/components/StudentNavbar";

const roles = [
  { emoji: "🗣️", nombre: "Speaker" },
  { emoji: "✍️", nombre: "Writer" },
  { emoji: "⏱️", nombre: "Timekeeper" },
  { emoji: "👩‍🏫", nombre: "Leader" },
];

const readingPreguntas = [
  { id: "1", label: "Where is the lamp?" },
  { id: "2", label: "Where are the shoes?" },
  { id: "3", label: "Where is the wardrobe?" },
];

const videoFill = [
  { id: "a", fin: "the box." },
  { id: "b", fin: "the chair." },
];

const inputClass =
  "w-full rounded-lg border border-[#e8e0dc] bg-white px-3 py-2 text-sm text-[#3f2c28] outline-none transition-colors focus:border-[#96665a] focus:ring-2 focus:ring-[#96665a]/20 dark:border-[#6b524b] dark:bg-[#3f2c28] dark:text-[#f5f5f5]";

export default function PreposicionesPage() {
  return (
    <>
      <Loader />
      <div className="min-h-screen bg-[#f5f5f5] font-mono dark:bg-[#3f2c28]">
        <StudentNavbar />

        <main className="mx-auto max-w-3xl px-6 py-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
              Preposiciones de Lugar
            </h1>
            <p className="mt-2 text-[#6b524b] dark:text-[#c9b8b2]">
              Grade 6° | Lee, escucha y practica.
            </p>
          </div>

          {/* 1. ACTIVACIÓN DE SABERES */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#b59a8a] px-6 py-3">
              <h2 className="font-bold text-white">1. Activación de saberes (10 min)</h2>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-center font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Dinámica: &quot;Where is the object?&quot;
              </h3>
              <p className="mb-4 text-center text-[#6b524b] dark:text-[#c9b8b2]">
                El docente colocará un objeto en diferentes partes del salón.
                Observa y responde en equipo:
              </p>

              <div className="mx-auto mb-6 max-w-md rounded-lg border-l-4 border-[#b59a8a] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <p className="mb-1 text-[#3f2c28] dark:text-[#f5f5f5]">
                  <em>The book is <strong>on</strong> the table.</em>
                </p>
                <p className="text-[#3f2c28] dark:text-[#f5f5f5]">
                  <em>The book is <strong>under</strong> the chair.</em>
                </p>
              </div>

              <h4 className="mb-3 text-center font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Roles del equipo:
              </h4>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {roles.map((r) => (
                  <span
                    key={r.nombre}
                    className="rounded-lg border border-[#e8e0dc] bg-[#faf7f5] px-2 py-2 text-center text-sm text-[#3f2c28] dark:border-[#6b524b] dark:bg-[#3f2c28] dark:text-[#f5f5f5]"
                  >
                    {r.emoji} {r.nombre}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* 2. READING ACTIVITY */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#8a6a55] px-6 py-3">
              <h2 className="font-bold text-white">2. Reading Activity (15 min)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#8a6a55] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  Texto: &quot;Tom&apos;s Bedroom&quot;
                </h3>
                <p className="mt-2 leading-relaxed text-[#6b524b] dark:text-[#c9b8b2]">
                  Tom&apos;s bedroom is small but comfortable. The bed is next to
                  the window. The desk is in front of the bed. There is a lamp on
                  the desk. His shoes are under the bed. The wardrobe is between
                  the desk and the door. There is a picture on the wall.
                </p>
              </div>

              <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Actividades:
              </h3>
              <ul className="mb-6 list-inside list-disc space-y-1 text-[#3f2c28] dark:text-[#f5f5f5]">
                <li>Subrayen las preposiciones.</li>
                <li>Dibujen la habitación según la descripción.</li>
              </ul>

              <h4 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Respondan las preguntas:
              </h4>
              <div className="space-y-5">
                {readingPreguntas.map((p) => (
                  <div key={p.id}>
                    <label className="mb-2 block text-sm font-bold text-[#6b524b] dark:text-[#c9b8b2]">
                      {p.id}. {p.label}
                    </label>
                    <input type="text" className={inputClass} placeholder="Escribe aquí..." />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. LISTENING ACTIVITY */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#6b4f3f] px-6 py-3">
              <h2 className="font-bold text-white">3. Listening Activity (15 min)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#6b4f3f] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  🎧 Escuchen con atención
                </h3>
                <p className="mb-3 text-[#6b524b] dark:text-[#c9b8b2]">
                  Se reproducirá un audio con varias oraciones.
                </p>
                <audio controls className="w-full">
                  <source src="/audio/audioPreposicionesOraciones.ogg" type="audio/ogg" />
                  Tu navegador no soporta el audio.
                </audio>
              </div>

              <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                📝 Actividad:
              </h3>
              <div className="rounded-lg bg-[#fcf3eb] p-4 dark:bg-[#3f2c28]">
                <ul className="space-y-3 text-[#3f2c28] dark:text-[#f5f5f5]">
                  <li>
                    <strong>Paso 1:</strong> Escuchen y dibujen lo que oyeron.
                  </li>
                  <li>
                    <strong>Paso 2:</strong> Comparen sus dibujos en equipo.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. SPEAKING ACTIVITY */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#a07d68] px-6 py-3">
              <h2 className="font-bold text-white">4. Speaking Activity (20 min)</h2>
            </div>
            <div className="p-6">
              <div className="rounded-lg border-l-4 border-[#a07d68] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  🗺️ Describe and Guess
                </h3>
                <p className="mb-4 text-[#3f2c28] dark:text-[#f5f5f5]">
                  Trabajen en grupos. Recibirán una imagen secreta (habitación,
                  parque, cocina).
                </p>

                <div className="mb-4 rounded-lg bg-[#f4ecf7] p-4 dark:bg-[#3f2c28]">
                  <h4 className="mb-2 font-bold text-[#a07d68] dark:text-[#e0c8c0]">
                    Estudiante A (Describe):
                  </h4>
                  <p className="mb-1 text-[#3f2c28] dark:text-[#f5f5f5]">
                    <em>The tree is <strong>behind</strong> the house.</em>
                  </p>
                  <p className="text-[#3f2c28] dark:text-[#f5f5f5]">
                    <em>The car is <strong>in front of</strong> the house.</em>
                  </p>
                </div>

                <p className="text-[#3f2c28] dark:text-[#f5f5f5]">
                  <strong>Estudiante B:</strong> Dibuja lo que escuchas y luego
                  comparen con la imagen original.
                </p>
              </div>
            </div>
          </section>

          {/* 5. VIDEO ACTIVITY */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#7a5a48] px-6 py-3">
              <h2 className="font-bold text-white">5. Video Activity (10 min)</h2>
            </div>
            <div className="p-6">
              <p className="mb-4 text-[#3f2c28] dark:text-[#f5f5f5]">
                Escucha, repite y completa los espacios mientras ven los videos:
              </p>
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-xl shadow-sm">
                  <iframe
                    className="aspect-video w-full"
                    src="https://www.youtube.com/embed/XrMWpamw9Rw"
                    title="Video 1"
                    allowFullScreen
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-sm">
                  <iframe
                    className="aspect-video w-full"
                    src="https://www.youtube.com/embed/ais0CrYYS4Y"
                    title="Video 2"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="rounded-lg border-l-4 border-[#7a5a48] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <div className="space-y-3">
                  {videoFill.map((v) => (
                    <p
                      key={v.id}
                      className="flex flex-wrap items-center gap-2 text-[#3f2c28] dark:text-[#f5f5f5]"
                    >
                      {v.id}) The cat is
                      <input type="text" className={`${inputClass} w-32`} />
                      {v.fin}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 6. PROYECTO */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#5c4638] px-6 py-3">
              <h2 className="font-bold text-white">6. Proyecto: &quot;My Dream Room&quot; (15 min)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#5c4638] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  🏠 ¡Diseñen su habitación ideal!
                </h3>
                <p className="text-[#3f2c28] dark:text-[#f5f5f5]">
                  En sus equipos, sigan estos pasos para completar el reto
                  final:
                </p>
              </div>

              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                    1. Dibujar
                  </h4>
                  <p className="text-[#6b524b] dark:text-[#c9b8b2]">
                    Dibujen una habitación creativa con al menos 5 objetos
                    diferentes.
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                    2. Escribir
                  </h4>
                  <p className="text-[#6b524b] dark:text-[#c9b8b2]">
                    Escriban 8 oraciones usando las preposiciones aprendidas
                    (in, on, under, etc.).
                  </p>
                </div>
              </div>

              <div className="rounded-lg border border-[#e8e0dc] bg-[#fef9e7] p-4 dark:border-[#6b524b] dark:bg-[#3f2c28]">
                <p className="text-[#3f2c28] dark:text-[#f5f5f5]">
                  <strong>Ejemplo:</strong>{" "}
                  <em>
                    The TV is <strong>on</strong> the wall. The rug is{" "}
                    <strong>under</strong> the table.
                  </em>
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
