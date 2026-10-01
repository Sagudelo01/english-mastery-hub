"use client";
import { motion } from "motion/react";

const espacioVacio = 0.2; // tiempo en la que la palabra estara invisible

export default function AnimatedTitle() {
  return (
    <h1 className="text-5xl font-bold text-black flex">
      {"Welcome".split("").map((letra, i) => (
        <motion.span // Aca hay propiedades. es lo mismo que atributos
          key={i}
          className="inline-block"
          animate={{
            filter: [
              // blur: es para desenfocar. si fuera 0 la animacion no existiria
              "blur(8px)",
              "blur(0px)",
              "blur(0px)",
              "blur(0px)",
              "blur(8px)",
            ],
            opacity: [0, 1, 1, 1, 0], // opacidad: de 0 a 1 ( transparencia a no transparencia)
            y: [4, 0, 0, 0, -4], // y: movimiento vertical
          }}
          transition={{
            duration: 4, // tiempo en la que se ve la palabra o sea la animacion como tal
            ease: "easeInOut",
            delay: i * 0.09,
            repeat: Infinity,
            repeatDelay: espacioVacio,
          }}
        >
          {letra}
        </motion.span>
      ))}
    </h1>
  );
}
