import Loader from "@/components/loader";
import StudentNavbar from "@/components/StudentNavbar";

const warmUpPreguntas = [
  { id: "a", label: "Are you happy today?" },
  { id: "b", label: "Is your best friend in this class?" },
];

const videoInputs = [
  { placeholder: "One sentence with am..." },
  { placeholder: "One sentence with is..." },
  { placeholder: "One sentence with are..." },
];

const tablaVerbo = [
  { subject: "I" },
  { subject: "He / She" },
  { subject: "We / They" },
];

const listeningSelects = [
  { id: "1", texto: "Tom", opciones: ["am", "is", "are"], fin: "12 years old." },
  { id: "2", texto: "Anna", opciones: ["is", "are"], fin: "Tom's friend." },
  { id: "3", texto: "They", opciones: ["is", "are"], fin: "classmates." },
];

const rolePlay = [
  { personaje: "Student A", texto: "Hello, I am Carlos." },
  { personaje: "Student B", texto: "Hi, I am Ana." },
  { personaje: "Student C", texto: "We are students." },
  { personaje: "Student D", texto: "We are in sixth grade." },
];

const reflectionPreguntas = [
  { id: "a", label: "What did you learn today?" },
  { id: "b", label: "When do we use am, is, and are?" },
];

const inputClass =
  "w-full rounded-lg border border-[#e8e0dc] bg-white px-3 py-2 text-sm text-[#3f2c28] outline-none transition-colors focus:border-[#96665a] focus:ring-2 focus:ring-[#96665a]/20 dark:border-[#6b524b] dark:bg-[#3f2c28] dark:text-[#f5f5f5]";

const selectClass =
  "rounded-lg border border-[#e8e0dc] bg-white px-3 py-2 text-sm text-[#3f2c28] outline-none transition-colors focus:border-[#96665a] focus:ring-2 focus:ring-[#96665a]/20 dark:border-[#6b524b] dark:bg-[#3f2c28] dark:text-[#f5f5f5]";

export default function VerbToBePage() {
  return (
    <>
      <Loader />
      <div className="min-h-screen bg-[#f5f5f5] font-mono dark:bg-[#3f2c28]">
        <StudentNavbar />

        <main className="mx-auto max-w-3xl px-6 py-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
              Verb to Be: Learn &amp; Practice
            </h1>
            <p className="mt-2 text-[#6b524b] dark:text-[#c9b8b2]">
              Master the basics of English grammar.
            </p>
          </div>

          {/* 1. WARM UP */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#9c7a6b] px-6 py-3">
              <h2 className="font-bold text-white">1. Warm Up (10 min)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#9c7a6b] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  Dinámica Oral
                </h3>
                <p className="mt-2 leading-relaxed text-[#6b524b] dark:text-[#c9b8b2]">
                  <strong>Teacher:</strong> I am a teacher.
                  <br />
                  <strong>Students:</strong> You are a teacher.
                </p>
              </div>

              <h4 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Quick Questions (Responde con tu grupo)
              </h4>
              <div className="space-y-5">
                {warmUpPreguntas.map((p) => (
                  <div key={p.id}>
                    <label className="mb-2 block text-sm text-[#6b524b] dark:text-[#c9b8b2]">
                      {p.id}) {p.label}
                    </label>
                    <input type="text" className={inputClass} placeholder="Your answer..." />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. VIDEO OBSERVATION */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#7a5c4f] px-6 py-3">
              <h2 className="font-bold text-white">2. Video Observation (10 min)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-xl shadow-sm">
                  <iframe
                    className="aspect-video w-full"
                    src="https://www.youtube.com/embed/xeoYcCAnQlU"
                    title="Video 1"
                    allowFullScreen
                  />
                </div>
                <div className="overflow-hidden rounded-xl shadow-sm">
                  <iframe
                    className="aspect-video w-full"
                    src="https://www.youtube.com/embed/TJEzebWv5ms"
                    title="Video 2"
                    allowFullScreen
                  />
                </div>
              </div>

              <h4 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Antes del video:
              </h4>
              <p className="mb-6 text-[#6b524b] dark:text-[#c9b8b2]">
                What words do you hear? Do you hear <strong>am</strong>,{" "}
                <strong>is</strong>, or <strong>are</strong>?
              </p>

              <h4 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Después del video (Escribe con tu grupo):
              </h4>
              <div className="space-y-3">
                {videoInputs.map((v) => (
                  <input
                    key={v.placeholder}
                    type="text"
                    className={inputClass}
                    placeholder={v.placeholder}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* 3. COOPERATIVE READING */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#5c443c] px-6 py-3">
              <h2 className="font-bold text-white">3. Cooperative Reading (15 min)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#5c443c] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <p className="leading-relaxed text-[#3f2c28] dark:text-[#f5f5f5]">
                  Hello! My name is Tom. I am 12 years old. I am a student. My
                  best friend is Anna. She is very nice. We are in sixth grade.
                  We are good friends.
                </p>
              </div>

              <h4 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Actividad: Completa la tabla del verbo To Be
              </h4>
              <div className="overflow-x-auto">
                <table className="mx-auto w-full max-w-md text-center">
                  <thead>
                    <tr className="border-b border-[#e8e0dc] text-sm text-[#6b524b] dark:border-[#6b524b] dark:text-[#c9b8b2]">
                      <th className="px-4 py-2 font-medium">Subject</th>
                      <th className="px-4 py-2 font-medium">Verb to be</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tablaVerbo.map((t) => (
                      <tr
                        key={t.subject}
                        className="border-b border-[#f0ebe8] last:border-0 dark:border-[#6b524b]"
                      >
                        <td className="px-4 py-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                          {t.subject}
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="text"
                            className={`${inputClass} mx-auto max-w-[100px] text-center`}
                            placeholder="..."
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 4. LISTENING */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#8b6f5e] px-6 py-3">
              <h2 className="font-bold text-white">4. Listening (20 min)</h2>
            </div>
            <div className="p-6">
              <h3 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Audio 1: Introductions
              </h3>
              <audio controls className="mb-4 w-full">
                <source src="/audio/audioVerbToBeTom.ogg" type="audio/ogg" />
                Tu navegador no soporta el audio.
              </audio>

              <h4 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Circle the correct answer:
              </h4>
              <div className="mb-6 space-y-3">
                {listeningSelects.map((l) => (
                  <p
                    key={l.id}
                    className="flex flex-wrap items-center gap-2 text-[#3f2c28] dark:text-[#f5f5f5]"
                  >
                    {l.id}. {l.texto}
                    <select className={selectClass} defaultValue="">
                      <option value="" disabled>
                        ...
                      </option>
                      {l.opciones.map((op) => (
                        <option key={op} value={op}>
                          {op}
                        </option>
                      ))}
                    </select>
                    {l.fin}
                  </p>
                ))}
              </div>

              <h3 className="mb-3 border-t border-[#e8e0dc] pt-4 font-bold text-[#3f2c28] dark:border-[#6b524b] dark:text-[#f5f5f5]">
                Audio 2: Who is who?
              </h3>
              <audio controls className="mb-3 w-full">
                <source src="/audio/audioVerbToBeLaura.ogg" type="audio/ogg" />
                Tu navegador no soporta el audio.
              </audio>
              <p className="text-[#6b524b] dark:text-[#c9b8b2]">
                Escucha a Laura y presta atención a las descripciones físicas.
              </p>
            </div>
          </section>

          {/* 5. SPEAKING ROLE PLAY */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#6d4f42] px-6 py-3">
              <h2 className="font-bold text-white">5. Speaking Role Play (15 min)</h2>
            </div>
            <div className="p-6">
              <p className="mb-4 text-[#6b524b] dark:text-[#c9b8b2]">
                Cada grupo prepara y presenta este mini diálogo:
              </p>
              <div className="rounded-lg border-l-4 border-[#6d4f42] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                {rolePlay.map((r) => (
                  <p
                    key={r.personaje}
                    className="mb-1 text-[#3f2c28] last:mb-0 dark:text-[#f5f5f5]"
                  >
                    <strong>{r.personaje}:</strong> {r.texto}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* 6. REFLECTION */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#4a3d3a] px-6 py-3">
              <h2 className="font-bold text-white">6. Reflection (5 min)</h2>
            </div>
            <div className="p-6">
              <h4 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                Preguntas finales para el grupo:
              </h4>
              <div className="space-y-5">
                {reflectionPreguntas.map((p) => (
                  <div key={p.id}>
                    <label className="mb-2 block text-sm text-[#6b524b] dark:text-[#c9b8b2]">
                      {p.id}) {p.label}
                    </label>
                    <textarea
                      rows={2}
                      className={inputClass}
                      placeholder="Your answer..."
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-lg border-l-4 border-[#4a3d3a] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <p className="text-[#3f2c28] dark:text-[#f5f5f5]">
                  <strong>Reto final:</strong> Cada grupo dice una oración final
                  usando el verbo <em>to be</em>.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
