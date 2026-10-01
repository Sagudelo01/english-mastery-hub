import Loader from "@/components/loader";
import StudentNavbar from "@/components/StudentNavbar";

const warmUpPreguntas = [
  "1. What time do you wake up?",
  "2. Do you play sports?",
  "3. What do you do after school?",
];

const thinkPairShare = [
  { titulo: "Think", descripcion: "Piensa tus propias respuestas." },
  { titulo: "Pair", descripcion: "Compártelas con tu pareja de equipo." },
  { titulo: "Share", descripcion: "Elijan un portavoz y compartan con la clase." },
];

const presentacion = [
  {
    titulo: "✅ Affirmative",
    ejemplos: ["I play soccer.", "She plays soccer."],
  },
  {
    titulo: "❌ Negative",
    ejemplos: ["I don't play.", "She doesn't play."],
  },
  {
    titulo: "❓ Questions",
    ejemplos: ["Do you play?", "Does she play?"],
  },
];

const groupTask = [
  "1. Underline verbs in Simple Present.",
  "2. What time does Carlos wake up?",
  "3. Does he play basketball?",
  "4. Change 2 sentences to negative form.",
];

const listeningFill = [
  { texto: "Laura gets up at" },
  { texto: "She studies" },
  { texto: "She listens to" },
];

const videoRetos = [
  "1. Write 5 daily activities from the video",
  "2. Create 3 questions using DO / DOES",
  "3. Practice pronunciation together",
];

const interviewPreguntas = [
  "1. What time do you wake up?",
  "2. Do you watch TV?",
  "3. Does your mother work?",
];

const inputClass =
  "w-full rounded-lg border border-[#e8e0dc] bg-white px-3 py-2 text-sm text-[#3f2c28] outline-none transition-colors focus:border-[#96665a] focus:ring-2 focus:ring-[#96665a]/20 dark:border-[#6b524b] dark:bg-[#3f2c28] dark:text-[#f5f5f5]";

export default function PresenteSimplePage() {
  return (
    <>
      <Loader />
      <div className="min-h-screen bg-[#f5f5f5] font-mono dark:bg-[#3f2c28]">
        <StudentNavbar />

        <main className="mx-auto max-w-3xl px-6 py-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
              Presente Simple
            </h1>
            <p className="mt-2 text-[#6b524b] dark:text-[#c9b8b2]">
              Grade 6° | Lee, escucha y practica.
            </p>
          </div>

          {/* 1. WARM-UP */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#c9a98f] px-6 py-3">
              <h2 className="font-bold text-white">1. Warm-Up (15 min)</h2>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-center font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Dinámica: &quot;Think-Pair-Share&quot;
              </h3>
              <p className="mb-4 text-center text-[#6b524b] dark:text-[#c9b8b2]">
                En equipos de 4, respondan las siguientes preguntas:
              </p>

              <div className="mb-6 rounded-lg border-l-4 border-[#c9a98f] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <ul className="space-y-3 text-[#3f2c28] dark:text-[#f5f5f5]">
                  {warmUpPreguntas.map((p) => (
                    <li key={p}>
                      <strong>{p}</strong>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {thinkPairShare.map((t) => (
                  <div
                    key={t.titulo}
                    className="rounded-lg border border-[#e8e0dc] bg-[#faf7f5] p-4 dark:border-[#6b524b] dark:bg-[#3f2c28]"
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

          {/* 2. PRESENTATION */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#93745c] px-6 py-3">
              <h2 className="font-bold text-white">2. Presentation</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#93745c] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  📌 Regla de Oro (He, She, It)
                </h3>
                <p className="text-[#6b524b] dark:text-[#c9b8b2]">
                  En oraciones afirmativas, al verbo se le agrega{" "}
                  <strong>-s</strong> o <strong>-es</strong>.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {presentacion.map((p) => (
                  <div
                    key={p.titulo}
                    className="rounded-lg border border-[#e8e0dc] bg-[#faf7f5] p-4 text-center dark:border-[#6b524b] dark:bg-[#3f2c28]"
                  >
                    <h4 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                      {p.titulo}
                    </h4>
                    {p.ejemplos.map((e) => (
                      <p
                        key={e}
                        className="mb-2 text-[#3f2c28] last:mb-0 dark:text-[#f5f5f5]"
                      >
                        <em>{e}</em>
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. READING ACTIVITY */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#71543f] px-6 py-3">
              <h2 className="font-bold text-white">3. Reading Activity (20 min)</h2>
            </div>
            <div className="p-6">
              <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                👥 Reading Circles
              </h3>
              <p className="mb-4 text-[#6b524b] dark:text-[#c9b8b2]">
                Cada miembro del grupo elige un rol:{" "}
                <strong>Reader, Writer, Timekeeper o Speaker.</strong>
              </p>

              <div className="mb-6 rounded-lg border-l-4 border-[#71543f] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  📘 Carlos&apos; Daily Routine
                </h3>
                <p className="italic text-[#6b524b] dark:text-[#c9b8b2]">
                  &quot;Carlos wakes up at 6:00 a.m. He eats breakfast at 6:30.
                  He goes to school at 7:00. In the afternoon, he does homework
                  and plays soccer. He watches TV at night and sleeps at
                  9:30.&quot;
                </p>
              </div>

              <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                ✏️ Group Task
              </h3>
              <div className="rounded-lg border border-[#e8e0dc] bg-[#faf7f5] p-4 dark:border-[#6b524b] dark:bg-[#3f2c28]">
                <ul className="space-y-2 text-[#3f2c28] dark:text-[#f5f5f5]">
                  {groupTask.map((t) => (
                    <li key={t}>
                      <strong>{t}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 4. LISTENING ACTIVITY */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#a8876e] px-6 py-3">
              <h2 className="font-bold text-white">4. Listening Activity (15 min)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#a8876e] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  🎧 Laura&apos;s Routine
                </h3>
                <audio controls className="mb-3 w-full">
                  <source src="/audio/audioPresenteSimple.ogg" type="audio/ogg" />
                  Tu navegador no soporta el audio.
                </audio>
                <p className="italic text-[#6b524b] dark:text-[#c9b8b2]">
                  &quot;Hello! My name is Laura...&quot;
                </p>
              </div>

              <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                🎯 Listening Tasks
              </h3>
              <p className="mb-4 text-[#6b524b] dark:text-[#c9b8b2]">
                <strong>1.</strong> Escuchen primero. <strong>2.</strong> Luego
                completen:
              </p>

              <div className="mb-6 rounded-lg border border-[#e8e0dc] bg-[#faf7f5] p-4 dark:border-[#6b524b] dark:bg-[#3f2c28]">
                <div className="space-y-3">
                  {listeningFill.map((l) => (
                    <p
                      key={l.texto}
                      className="flex flex-wrap items-center gap-2 text-[#3f2c28] dark:text-[#f5f5f5]"
                    >
                      {l.texto}
                      <input type="text" className={`${inputClass} w-32`} placeholder="..." />
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border-l-4 border-[#a8876e] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <p className="text-[#3f2c28] dark:text-[#f5f5f5]">
                  <strong>Group discussion:</strong> What activities are similar
                  to your routine?
                </p>
              </div>
            </div>
          </section>

          {/* 5. VIDEO ACTIVITY */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#7f5f4a] px-6 py-3">
              <h2 className="font-bold text-white">5. Video Activity (15 min)</h2>
            </div>
            <div className="p-6">
              <h3 className="mb-3 text-center font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                🎥 Daily Routines
              </h3>
              <p className="mb-4 text-center text-[#6b524b] dark:text-[#c9b8b2]">
                Observa los videos con atención:
              </p>
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-xl shadow-sm">
                  <iframe
                    className="aspect-video w-full"
                    src="https://www.youtube.com/embed/wtTAdfyejH0"
                    title="Video 1"
                    allowFullScreen
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-sm">
                  <iframe
                    className="aspect-video w-full"
                    src="https://www.youtube.com/embed/iIQmMGR0LqY"
                    title="Video 2"
                    allowFullScreen
                  />
                </div>
              </div>

              <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                🎯 After Watching
              </h3>
              <p className="mb-4 text-[#6b524b] dark:text-[#c9b8b2]">
                En grupos, completen los siguientes retos:
              </p>
              <div className="rounded-lg border border-[#e8e0dc] bg-[#faf7f5] p-4 dark:border-[#6b524b] dark:bg-[#3f2c28]">
                <ul className="space-y-3 text-[#3f2c28] dark:text-[#f5f5f5]">
                  {videoRetos.map((r) => (
                    <li key={r}>
                      <strong>{r}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 6. SPEAKING ACTIVITY */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#614a3b] px-6 py-3">
              <h2 className="font-bold text-white">6. Speaking Activity (20 min)</h2>
            </div>
            <div className="p-6">
              <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                🎤 Técnica: &quot;Interview Carousel&quot;
              </h3>
              <p className="mb-4 text-[#6b524b] dark:text-[#c9b8b2]">
                Cada estudiante debe entrevistar a 3 compañeros usando estas
                preguntas:
              </p>

              <div className="mb-6 rounded-lg border-l-4 border-[#614a3b] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <ul className="space-y-3 text-[#3f2c28] dark:text-[#f5f5f5]">
                  {interviewPreguntas.map((p) => (
                    <li key={p}>
                      <strong>{p}</strong>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                🗣️ Reporte al Grupo
              </h3>
              <div className="rounded-lg border border-[#e8e0dc] bg-[#faf7f5] p-4 dark:border-[#6b524b] dark:bg-[#3f2c28]">
                <p className="mb-2 text-[#3f2c28] dark:text-[#f5f5f5]">
                  Luego, compartan los resultados con la clase:
                </p>
                <p className="mb-1 text-[#6b524b] dark:text-[#c9b8b2]">
                  <em>&quot;Maria wakes up at 6:00.&quot;</em>
                </p>
                <p className="text-[#6b524b] dark:text-[#c9b8b2]">
                  <em>&quot;Juan doesn&apos;t play soccer.&quot;</em>
                </p>
              </div>
            </div>
          </section>

          {/* 7. COOPERATIVE PROJECT */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#523f33] px-6 py-3">
              <h2 className="font-bold text-white">7. Cooperative Project (25 min)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#523f33] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  🎨 Our Group Routine Poster
                </h3>
                <p className="text-[#6b524b] dark:text-[#c9b8b2]">
                  Creen un póster ilustrado sobre sus rutinas y prepárense para
                  la presentación oral.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-[#e8e0dc] bg-[#faf7f5] p-4 text-center dark:border-[#6b524b] dark:bg-[#3f2c28]">
                  <h4 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                    ¿Qué debe incluir?
                  </h4>
                  <p className="mb-1 text-[#6b524b] dark:text-[#c9b8b2]">
                    <strong>5</strong> oraciones afirmativas
                  </p>
                  <p className="mb-1 text-[#6b524b] dark:text-[#c9b8b2]">
                    <strong>2</strong> oraciones negativas
                  </p>
                  <p className="text-[#6b524b] dark:text-[#c9b8b2]">
                    <strong>2</strong> preguntas y dibujos
                  </p>
                </div>
                <div className="rounded-lg border border-[#e8e0dc] bg-[#faf7f5] p-4 text-center dark:border-[#6b524b] dark:bg-[#3f2c28]">
                  <h4 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                    Ejemplos
                  </h4>
                  <p className="mb-1 text-[#6b524b] dark:text-[#c9b8b2]">
                    <em>We study English.</em>
                  </p>
                  <p className="mb-1 text-[#6b524b] dark:text-[#c9b8b2]">
                    <em>She doesn&apos;t drink coffee.</em>
                  </p>
                  <p className="text-[#6b524b] dark:text-[#c9b8b2]">
                    <em>Do you exercise?</em>
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
