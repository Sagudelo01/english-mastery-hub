import Link from "next/link";
import Loader from "@/components/loader";
import StudentNavbar from "@/components/StudentNavbar";

const trueFalse = [
  { id: "a", text: "Tom is 12 years old." },
  { id: "b", text: "He is from Canada." },
];

const preguntas = [
  { id: "a", label: "How old is Tom?" },
  { id: "b", label: "Where is he from?" },
  { id: "c", label: "Who live tom with?" },
  { id: "d", label: "What is the name of your sister?" },
  { id: "e", label: "What Tom likes to do?" },
];

const vocabulario = [
  { word: "Mother" },
  { word: "Like" },
  { word: "Subject" },
  { word: "Live" },
  { word: "Fun" },
  { word: "Dog" },
];

const significados = [
  { value: "a", label: "Deporte" },
  { value: "b", label: "Mamá" },
  { value: "c", label: "Perro" },
  { value: "d", label: "Asignatura" },
  { value: "e", label: "Gustar" },
  { value: "f", label: "Vivir" },
  { value: "g", label: "Divertido" },
];

const listeningCampos = [
  { label: "Name:" },
  { label: "Age:" },
  { label: "Brother's Name:" },
  { label: "Favorite Color:" },
  { label: "She is from:" },
];

const listeningOpciones = [
  { pregunta: "1. Sara is:", opciones: ["10", "11", "12"] },
  { pregunta: "2. She likes:", opciones: ["Singing", "Dancing", "Swimming"] },
  { pregunta: "3. She has:", opciones: ["One brother", "Two brothers", "One sister"] },
];

const speakingPreguntas = [
  "What is your name?",
  "How old are you?",
  "Where are you from?",
  "What is your favorite color?",
  "What do you like to do?",
];

const inputClass =
  "w-full rounded-lg border border-[#e8e0dc] bg-white px-3 py-2 text-sm text-[#3f2c28] outline-none transition-colors focus:border-[#96665a] focus:ring-2 focus:ring-[#96665a]/20 dark:border-[#6b524b] dark:bg-[#3f2c28] dark:text-[#f5f5f5]";

const selectClass =
  "w-full rounded-lg border border-[#e8e0dc] bg-white px-3 py-2 text-sm text-[#3f2c28] outline-none transition-colors focus:border-[#96665a] focus:ring-2 focus:ring-[#96665a]/20 dark:border-[#6b524b] dark:bg-[#3f2c28] dark:text-[#f5f5f5]";

export default function TallerDiagnosticoPage() {
  return (
    <>
      <Loader />
      <div className="min-h-screen bg-[#f5f5f5] font-mono dark:bg-[#3f2c28]">
        <StudentNavbar />

        <main className="mx-auto max-w-3xl px-6 py-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
              English Diagnostic Test
            </h1>
            <p className="mt-2 text-[#6b524b] dark:text-[#c9b8b2]">
              Grade 6° | Lee, escucha y practica.
            </p>
          </div>

          {/* PART 1: READING */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#96665a] px-6 py-3">
              <h2 className="font-bold text-white">PART 1: READING (30 pts)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#96665a] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  My Name is Tom
                </h3>
                <p className="mt-2 leading-relaxed text-[#6b524b] dark:text-[#c9b8b2]">
                  Hello! My name is Tom. I am 11 years old. I am from Canada. I
                  live with my mother, father, and my little sister Anna. I like
                  playing soccer and listening to music. My favorite subject is
                  English because it is fun. I have a dog named Max.
                </p>
              </div>

              <h4 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                1. Answer True (T) or False (F) - (10 pts)
              </h4>
<div className="mb-6 space-y-5">
                {trueFalse.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-4 sm:flex-row sm:items-center smtems-center sm:justify-between"
                  >
                    <span className="text-[#3f2c28] dark:text-[#f5f5f5]">
                      {item.id}) {item.text}
                    </span>
                    <select className={`${selectClass} sm:w-40`} defaultValue="">
                      <option value="" disabled>
                        Select...
                      </option>
                      <option value="T">True</option>
                      <option value="F">False</option>
                    </select>
                  </div>
                ))}
              </div>

              <h4 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                2. Answer the questions - (10 pts)
              </h4>
              <div className="mb-6 space-y-5">
                {preguntas.map((p) => (
                  <div key={p.id}>
                    <label className="mb-2 block text-sm text-[#6b524b] dark:text-[#c9b8b2]">
                      {p.id}) {p.label}
                    </label>
                    <input type="text" className={inputClass} placeholder="Your answer..." />
                  </div>
                ))}
              </div>

              <h4 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                3. Vocabulary Matching - (10 pts)
              </h4>
              <div className="space-y-5">
                {vocabulario.map((v) => (
                  <div
                    key={v.word}
                    className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                      {v.word}
                    </span>
                    <select className={`${selectClass} sm:w-56`} defaultValue="">
                      <option value="" disabled>
                        Choose meaning...
                      </option>
                      {significados.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PART 2: LISTENING */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#6b524b] px-6 py-3">
              <h2 className="font-bold text-white">PART 2: LISTENING (30 pts)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#6b524b] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  Listening Audio
                </h3>
                <audio controls className="mt-3 w-full">
                  <source src="/audio/audioDiagnostico.ogg" type="audio/ogg" />
                  Tu navegador no soporta el audio.
                </audio>
              </div>

              <h4 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                A. Complete the information (15 pts)
              </h4>
              <div className="mb-6 space-y-5">
                {listeningCampos.map((c) => (
                  <div key={c.label}>
                    <label className="mb-2 block text-sm text-[#6b524b] dark:text-[#c9b8b2]">
                      {c.label}
                    </label>
                    <input type="text" className={inputClass} placeholder="Answer..." />
                  </div>
                ))}
              </div>

              <h4 className="mb-3 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                B. Choose the correct answer (15 pts)
              </h4>
              <div className="space-y-5">
                {listeningOpciones.map((o) => (
                  <div
                    key={o.pregunta}
                    className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-[#3f2c28] dark:text-[#f5f5f5]">
                      {o.pregunta}
                    </span>
                    <select className={`${selectClass} sm:w-40`} defaultValue="">
                      <option value="" disabled>
                        Select...
                      </option>
                      {o.opciones.map((op) => (
                        <option key={op} value={op}>
                          {op}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PART 3: SPEAKING */}
          <section className="mb-8 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#4a3d3a]">
            <div className="bg-[#3f2c28] px-6 py-3">
              <h2 className="font-bold text-white">PART 3: SPEAKING (40 pts)</h2>
            </div>
            <div className="p-6">
              <div className="mb-6 rounded-lg border-l-4 border-[#3f2c28] bg-[#faf7f5] p-4 dark:bg-[#3f2c28]">
                <h3 className="font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                  A. Personal Introduction (20 pts)
                </h3>
                <p className="mt-2 text-[#6b524b] dark:text-[#c9b8b2]">
                  The teacher will ask you these questions:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-[#6b524b] dark:text-[#c9b8b2]">
                  {speakingPreguntas.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </div>

              <h4 className="mb-2 font-bold text-[#3f2c28] dark:text-[#f5f5f5]">
                B. Describe Yourself (20 pts)
              </h4>
              <p className="mb-3 text-sm text-[#6b524b] dark:text-[#c9b8b2]">
                Write key words or sentences here to practice before speaking
                (at least 5 sentences).
              </p>
              <textarea
                rows={5}
                className={inputClass}
                placeholder={"Example:\n- I am 11 years old.\n- I like soccer.\n- I have one sister..."}
              />
            </div>
          </section>

          <div className="text-center">
            <Link
              href="/talleres/evaluacion-final"
              className="inline-block rounded-lg bg-[#96665a] px-8 py-3 font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6b524b] hover:shadow-lg dark:bg-[#96665a] dark:hover:bg-[#6b524b]"
            >
              Ir a la Evaluación Final →
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
