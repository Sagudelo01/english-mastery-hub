import Loader from "@/components/loader";
import StudentNavbar from "@/components/StudentNavbar";

const tablaDemostrativos = [
  { distancia: "Cerca", singular: "This", plural: "These" },
  { distancia: "Lejos", singular: "That", plural: "Those" },
];

const ejemplos = [
  { palabra: "This", detalle: "(singular, cerca)", ejemplo: "This pencil is blue." },
  { palabra: "That", detalle: "(singular, lejos)", ejemplo: "That car is red." },
  { palabra: "These", detalle: "(plural, cerca)", ejemplo: "These books are new." },
  { palabra: "Those", detalle: "(plural, lejos)", ejemplo: "Those houses are big." },
];

const roles = [
  { emoji: "👩‍🏫", nombre: "Líder" },
  { emoji: "✍️", nombre: "Escritor" },
  { emoji: "🗣️", nombre: "Vocero" },
  { emoji: "⏱️", nombre: "Tiempo" },
];

const readingPreguntas = [
  { id: "a", label: "What is big?" },
  { id: "b", label: "Are the books new or old?" },
  { id: "c", label: "Are the windows clean?" },
  { id: "d", label: "What does the student like?" },
];

const listeningFill = [
  { id: "a", fin: "is my classroom." },
  { id: "b", fin: "desks are new." },
  { id: "c", fin: "is the teacher's desk." },
  { id: "d", fin: "posters are colorful." },
];

const listeningPreguntas = [
  { id: "1", label: "What is that?" },
  { id: "2", label: "Are these Maria's books?" },
  { id: "3", label: "What are those?" },
];

const dialogo = [
  { personaje: "A", texto: "What is this?" },
  { personaje: "B", texto: "This is a backpack." },
  { personaje: "A", texto: "And what are those?" },
  { personaje: "B", texto: "Those are apples." },
];

const cierrePreguntas = [
  { id: "1", label: "When do we use THIS?" },
  { id: "2", label: "When do we use THOSE?" },
  { id: "3", label: "Was it easy to work in groups?" },
];

const inputClass =
  "w-full rounded-lg border border-[#e8e0dc] bg-white px-3 py-2 text-sm text-[#3f2c28] outline-none transition-colors focus:border-[#96665a] focus:ring-2 focus:ring-[#96665a]/20 dark:border-[#6b524b] dark:bg-[#3f2c28] dark:text-[#f5f5f5]";

export default function AdjetivosDemostrativosPage() {
  return (
    <>
      <Loader />
      <div className="min-h-screen bg-[#f5f5f5] font-mono dark:bg-[#3f2c28]">
        <StudentNavbar />

        <main className="mx-auto max-w-3xl px-6 py-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
              Adjetivos Demostrativos
            </h1>
            <p className="mt-2 text-[#6b524b] dark:text-[#c9b8b2]">
              Grade 6° | Lee, escucha y practica.
            </p>
          </div>

          {/* 1. ACTIVACIÓN DE SABERES */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#a58a7a] px-6 py-3">
              <h2 className="font-bold text-white">1. Activación de saberes (15 min)</h2>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-center font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Dinámica: &quot;What is this?&quot;
              </h3>
              <p className="mb-4 text-center text-[#6b524b] dark:text-[#c9b8b2]">
                Mira los objetos del salón y repasa esta tabla:
              </p>
              <div className="overflow-x-auto">
                <table className="mx-auto w-full max-w-md text-center">
                  <thead>
                    <tr className="border-b border-[#e8e0dc] text-sm text-[#6b524b] dark:border-[#6b524b] dark:text-[#c9b8b2]">
                      <th className="px-4 py-2 font-medium">Distancia</th>
                      <th className="px-4 py-2 font-medium">Singular (1)</th>
                      <th className="px-4 py-2 font-medium">Plural (Varios)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tablaDemostrativos.map((t) => (
                      <tr
                        key={t.distancia}
                        className="border-b border-[#f0ebe8] last:border-0 dark:border-[#6b524b]"
                      >
                        <td className="px-4 py-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                          {t.distancia}
                        </td>
                        <td className="px-4 py-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                          {t.singular}
                        </td>
                        <td className="px-4 py-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                          {t.plural}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 2. EXPLICACIÓN GUIADA */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#8c6a58] px-6 py-3">
              <h2 className="font-bold text-white">2. Explicación guiada (15 min)</h2>
            </div>
            <div className="p-6">
              <div className="rounded-lg border-l-4 border-[#8c6a58] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  Estructura y Ejemplos
                </h3>
                <ul className="space-y-2 text-[#3f2c28] dark:text-[#f5f5f5]">
                  {ejemplos.map((e) => (
                    <li key={e.palabra}>
                      <strong>{e.palabra}</strong> {e.detalle} →{" "}
                      <em>{e.ejemplo}</em>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 3. APRENDIZAJE COOPERATIVO */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#6e5547] px-6 py-3">
              <h2 className="font-bold text-white">3. Aprendizaje Cooperativo (30 min)</h2>
            </div>
            <div className="p-6">
              <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Roles del Grupo (4 estudiantes):
              </h3>
              <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {roles.map((r) => (
                  <span
                    key={r.nombre}
                    className="rounded-lg border border-[#e8e0dc] bg-[#faf7f5] px-2 py-2 text-center text-sm text-[#3f2c28] dark:border-[#6b524b] dark:bg-[#3f2c28] dark:text-[#f5f5f5]"
                  >
                    {r.emoji} {r.nombre}
                  </span>
                ))}
              </div>

              <div className="rounded-lg border-l-4 border-[#6e5547] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  📝 Actividad: &quot;Classroom Hunt&quot;
                </h3>
                <p className="mb-3 text-[#3f2c28] dark:text-[#f5f5f5]">
                  Escriban <strong>8 oraciones</strong> usando los objetos del
                  salón:
                </p>
                <div className="mb-3 grid grid-cols-2 gap-2 text-center text-[#3f2c28] dark:text-[#f5f5f5]">
                  <span>2 con <strong>THIS</strong></span>
                  <span>2 con <strong>THAT</strong></span>
                  <span>2 con <strong>THESE</strong></span>
                  <span>2 con <strong>THOSE</strong></span>
                </div>
                <p className="border-t border-[#e8e0dc] pt-2 text-[#6b524b] dark:border-[#6b524b] dark:text-[#c9b8b2]">
                  <em>Ejemplo: This desk is brown. / Those chairs are old.</em>
                </p>
              </div>
            </div>
          </section>

          {/* 4. READING ACTIVITY */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#b08d7a] px-6 py-3">
              <h2 className="font-bold text-white">4. Reading Activity (20 min)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#b08d7a] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  Lectura: &quot;My Classroom&quot;
                </h3>
                <p className="mt-2 leading-relaxed text-[#6b524b] dark:text-[#c9b8b2]">
                  &quot;This is my classroom. This desk is my favorite place. That
                  board is very big. These books are new. Those windows are
                  clean. I like this school!&quot;
                </p>
              </div>

              <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Trabajo cooperativo: Respondan
              </h3>
              <div className="space-y-5">
                {readingPreguntas.map((p) => (
                  <div key={p.id}>
                    <label className="mb-2 block text-sm font-bold text-[#6b524b] dark:text-[#c9b8b2]">
                      {p.id}) {p.label}
                    </label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder="Escriban su respuesta..."
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. LISTENING ACTIVITY */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#7d6352] px-6 py-3">
              <h2 className="font-bold text-white">5. Listening Activity (20 min)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#7d6352] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  🎧 Audio 1: Completen los espacios
                </h3>
                <audio controls className="mb-4 w-full">
                  <source src="/audio/audioAdjetivosClassroom.ogg" type="audio/ogg" />
                  Tu navegador no soporta el audio.
                </audio>
                <div className="space-y-3">
                  {listeningFill.map((l) => (
                    <p
                      key={l.id}
                      className="flex flex-wrap items-center gap-2 text-[#3f2c28] dark:text-[#f5f5f5]"
                    >
                      {l.id})
                      <input type="text" className={`${inputClass} w-32`} />
                      {l.fin}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border-l-4 border-[#7d6352] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  🎧 Audio 2: Escuchen y respondan
                </h3>
                <audio controls className="mb-4 w-full">
                  <source src="/audio/audioAdjetivosWhat.ogg" type="audio/ogg" />
                  Tu navegador no soporta el audio.
                </audio>
                <div className="space-y-5">
                  {listeningPreguntas.map((p) => (
                    <div key={p.id}>
                      <label className="mb-2 block text-sm font-bold text-[#6b524b] dark:text-[#c9b8b2]">
                        {p.id}. {p.label}
                      </label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="Escriban su respuesta..."
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 6. SPEAKING ACTIVITY */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#5f4a3e] px-6 py-3">
              <h2 className="font-bold text-white">6. Speaking Activity (30 min)</h2>
            </div>
            <div className="p-6">
              <div className="rounded-lg border-l-4 border-[#5f4a3e] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  🎭 Actividad: &quot;Mini Market&quot;
                </h3>
                <p className="mb-4 text-[#3f2c28] dark:text-[#f5f5f5]">
                  Un estudiante es el <strong>vendedor</strong> y otro el{" "}
                  <strong>comprador</strong>. Usen objetos del salón para
                  practicar este diálogo:
                </p>
                <div className="rounded-lg bg-[#fdf2e9] p-4 dark:bg-[#3f2c28]">
                  <h4 className="mb-2 font-bold text-[#5f4a3e] dark:text-[#e0c8c0]">
                    Diálogo modelo:
                  </h4>
                  {dialogo.map((d, i) => (
                    <p
                      key={i}
                      className="mb-1 text-[#3f2c28] last:mb-0 dark:text-[#f5f5f5]"
                    >
                      <strong>{d.personaje}:</strong> <em>{d.texto}</em>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 7. ACTIVIDAD CON VIDEO */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#9b7b68] px-6 py-3">
              <h2 className="font-bold text-white">7. Actividad con Video (15 min)</h2>
            </div>
            <div className="p-6">
              <p className="mb-4 text-[#3f2c28] dark:text-[#f5f5f5]">
                Miren los videos con atención y respondan las preguntas:
              </p>
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-xl shadow-sm">
                  <iframe
                    className="aspect-video w-full"
                    src="https://www.youtube.com/embed/cnNB_ThNukc"
                    title="Video 1"
                    allowFullScreen
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-sm">
                  <iframe
                    className="aspect-video w-full"
                    src="https://www.youtube.com/embed/a1ZDsWAFiaU"
                    title="Video 2"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="rounded-lg border-l-4 border-[#9b7b68] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <div className="mb-5">
                  <label className="mb-2 block text-sm font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                    1. What words did you hear?
                  </label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Escriban las palabras aquí..."
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                    2. Give two examples from the video:
                  </label>
                  <textarea
                    rows={2}
                    className={inputClass}
                    placeholder="Ejemplo: This is an apple..."
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 9. CIERRE (REFLEXIÓN) */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#4f3d33] px-6 py-3">
              <h2 className="font-bold text-white">9. Cierre (Reflexión)</h2>
            </div>
            <div className="p-6">
              <h3 className="mb-4 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Preguntas finales:
              </h3>
              <div className="rounded-lg border-l-4 border-[#4f3d33] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <div className="space-y-5">
                  {cierrePreguntas.map((p) => (
                    <div key={p.id}>
                      <label className="mb-2 block text-sm font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                        {p.label}
                      </label>
                      <textarea
                        rows={2}
                        className={inputClass}
                        placeholder="Escribe tu respuesta..."
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
