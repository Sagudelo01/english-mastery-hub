import Loader from "@/components/loader";
import StudentNavbar from "@/components/StudentNavbar";

const thinkPairShare = [
  { titulo: "Think", descripcion: "Escribe 2 ejemplos que veas en el video." },
  { titulo: "Pair", descripcion: "Compara tus ejemplos con un compañero." },
  { titulo: "Share", descripcion: "Compartan una oración con la clase." },
];

const lecturaRoles = [
  { emoji: "🗣️", nombre: "1: Lector" },
  { emoji: "🔄", nombre: "2: Traductor" },
  { emoji: "🔍", nombre: '3: Busca "There is"' },
  { emoji: "🔎", nombre: '4: Busca "There are"' },
];

const listeningPreguntas = [
  "1. Is there a board?",
  "2. Are there twenty desks?",
  "3. Are there three doors?",
];

export default function ThereIsThereArePage() {
  return (
    <>
      <Loader />
      <div className="min-h-screen bg-[#f5f5f5] font-mono dark:bg-[#3f2c28]">
        <StudentNavbar />

        <main className="mx-auto max-w-3xl px-6 py-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
              There Is / There Are
            </h1>
            <p className="mt-2 text-[#6b524b] dark:text-[#c9b8b2]">
              Grade 6° | Observa, analiza y comparte en equipo.
            </p>
          </div>

          {/* 1. ACTIVIDAD DE INICIO */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#c0a48f] px-6 py-3">
              <h2 className="font-bold text-white">1. Actividad de Inicio (10 min)</h2>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-center font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                🎥 Videos Introductorios
              </h3>
              <p className="mb-4 text-center text-[#6b524b] dark:text-[#c9b8b2]">
                Observa con atención los siguientes videos:
              </p>
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-xl shadow-sm">
                  <iframe
                    className="aspect-video w-full"
                    src="https://www.youtube.com/embed/j3llK722RVQ"
                    title="Video 1"
                    allowFullScreen
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-sm">
                  <iframe
                    className="aspect-video w-full"
                    src="https://www.youtube.com/embed/-ZI2WHJj2Xk"
                    title="Video 2"
                    allowFullScreen
                  />
                </div>
              </div>

              <h3 className="mb-3 text-center font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Dinámica: &quot;Think-Pair-Share&quot;
              </h3>
              <p className="mb-4 text-center text-[#6b524b] dark:text-[#c9b8b2]">
                Sigue estos 3 pasos:
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {thinkPairShare.map((t) => (
                  <div
                    key={t.titulo}
                    className="rounded-lg border-l-4 border-[#c0a48f] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]"
                  >
                    <h4 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                      {t.titulo}
                    </h4>
                    <p className="text-sm text-[#6b524b] dark:text-[#c9b8b2]">
                      {t.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. EXPLICACIÓN GUIADA */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#8f6f5a] px-6 py-3">
              <h2 className="font-bold text-white">2. Explicación Guiada (15 min)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#8f6f5a] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  📌 Regla Principal:
                </h3>
                <p className="mb-1 text-[#3f2c28] dark:text-[#f5f5f5]">
                  <strong>There is</strong> → Singular (1 cosa)
                </p>
                <p className="text-[#3f2c28] dark:text-[#f5f5f5]">
                  <strong>There are</strong> → Plural (2 o más cosas)
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-[#e8e0dc] bg-[#faf7f5] p-4 text-center dark:border-[#6b524b] dark:bg-[#3f2c28]">
                  <h4 className="mb-3 font-bold uppercase text-[#3f2c28] dark:text-[#f5f5f5]">
                    Singular
                  </h4>
                  <p className="mb-2 text-[#3f2c28] dark:text-[#f5f5f5]">
                    <em>There is a park.</em>
                  </p>
                  <p className="text-[#3f2c28] dark:text-[#f5f5f5]">
                    <em>There is an apple.</em>
                  </p>
                </div>
                <div className="rounded-lg border border-[#e8e0dc] bg-[#faf7f5] p-4 text-center dark:border-[#6b524b] dark:bg-[#3f2c28]">
                  <h4 className="mb-3 font-bold uppercase text-[#3f2c28] dark:text-[#f5f5f5]">
                    Plural
                  </h4>
                  <p className="mb-2 text-[#3f2c28] dark:text-[#f5f5f5]">
                    <em>There are two parks.</em>
                  </p>
                  <p className="text-[#3f2c28] dark:text-[#f5f5f5]">
                    <em>There are three apples.</em>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. ACTIVIDAD DE LECTURA */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#6e5240] px-6 py-3">
              <h2 className="font-bold text-white">3. Actividad de Lectura (20 min)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#6e5240] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  📖 Texto: &quot;My Neighborhood&quot;
                </h3>
                <p className="italic text-[#6b524b] dark:text-[#c9b8b2]">
                  &quot;There is a big park in my neighborhood. There is a school
                  near my house. There are two supermarkets. There are many
                  trees in the park.&quot;
                </p>
              </div>

              <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                👥 Técnica: &quot;Lectura por roles&quot;
              </h3>
              <p className="mb-4 text-[#6b524b] dark:text-[#c9b8b2]">
                Cada grupo de 4 estudiantes tendrá una función clave:
              </p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {lecturaRoles.map((r) => (
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

          {/* 4. ACTIVIDAD DE ESCUCHA */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#a5836d] px-6 py-3">
              <h2 className="font-bold text-white">4. Actividad de Escucha (20 min)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#a5836d] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  🎧 Escucha la descripción
                </h3>
                <audio controls className="mb-3 w-full">
                  <source src="/audio/audioThereIs.ogg" type="audio/ogg" />
                  Tu navegador no soporta el audio.
                </audio>
                <p className="italic text-[#6b524b] dark:text-[#c9b8b2]">
                  &quot;In my classroom, there are twenty desks...&quot;
                </p>
              </div>

              <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                👥 Técnica: &quot;Numbered Heads Together&quot;
              </h3>
              <p className="mb-4 text-[#6b524b] dark:text-[#c9b8b2]">
                Escuchen el audio, discutan en grupo y prepárense. ¡El profesor
                elegirá un número del 1 al 4 para que responda!
              </p>

              <div className="rounded-lg border border-[#e8e0dc] bg-[#faf7f5] p-4 dark:border-[#6b524b] dark:bg-[#3f2c28]">
                <ul className="space-y-3 text-[#3f2c28] dark:text-[#f5f5f5]">
                  {listeningPreguntas.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 5. ACTIVIDAD DE HABLA */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#7c5c49] px-6 py-3">
              <h2 className="font-bold text-white">5. Actividad de Habla (25 min)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#7c5c49] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  🗣️ Describe the Picture
                </h3>
                <p className="text-[#6b524b] dark:text-[#c9b8b2]">
                  En sus equipos, observen la imagen proyectada y cada uno diga
                  una oración.
                </p>
              </div>

              <div className="mb-6 rounded-lg border border-[#e8e0dc] bg-[#faf7f5] p-4 dark:border-[#6b524b] dark:bg-[#3f2c28]">
                <p className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  Ejemplos:
                </p>
                <p className="mb-1 text-[#3f2c28] dark:text-[#f5f5f5]">
                  <em>There is a tree.</em>
                </p>
                <p className="text-[#3f2c28] dark:text-[#f5f5f5]">
                  <em>There are three children.</em>
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-[#7c5c49] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <p className="text-[#3f2c28] dark:text-[#f5f5f5]">
                  <strong>🎬 Reto de Video:</strong> Graben un clip corto
                  describiendo su salón usando:{" "}
                  <em>&quot;In my classroom, there is... / There are...&quot;</em>
                </p>
              </div>
            </div>
          </section>

          {/* 6. PROYECTO FINAL */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#5e483a] px-6 py-3">
              <h2 className="font-bold text-white">6. Proyecto Final (20 min)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#5e483a] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  🏫 My Dream School
                </h3>
                <p className="text-[#6b524b] dark:text-[#c9b8b2]">
                  Diseñen su escuela ideal en una cartulina y preséntenla a la
                  clase.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-[#e8e0dc] bg-[#faf7f5] p-4 text-center dark:border-[#6b524b] dark:bg-[#3f2c28]">
                  <h4 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                    Paso 1: Escribir
                  </h4>
                  <p className="mb-1 text-[#6b524b] dark:text-[#c9b8b2]">
                    Creen 3 oraciones con <strong>There is</strong>
                  </p>
                  <p className="text-[#6b524b] dark:text-[#c9b8b2]">
                    Creen 3 oraciones con <strong>There are</strong>
                  </p>
                </div>
                <div className="rounded-lg border border-[#e8e0dc] bg-[#faf7f5] p-4 text-center dark:border-[#6b524b] dark:bg-[#3f2c28]">
                  <h4 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                    Paso 2: Presentar
                  </h4>
                  <p className="text-[#6b524b] dark:text-[#c9b8b2]">
                    Pasen al frente con su equipo y compartan su creación
                    oralmente.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
