"use client";
import { motion } from "motion/react";


const espacioVacio = 0.2; // tiempo en la que la palabra estara invisible

export default function AnimatedTitle() {
  return (
    <h1 className="text-5xl font-bold text-black flex">
      {"Welcome".split("").map((letra, i) => (
        <motion.span
          key={i}
          className="inline-block"
          animate={{
            // Los valores centrales repetidos la mantienen estática y visible
            filter: ["blur(8px)", "blur(0px)", "blur(0px)", "blur(0px)", "blur(8px)"],
            opacity: [0, 1, 1, 1, 0],
            y: [4, 0, 0, 0, -4],
          }}
          transition={{
            duration: 4, // tiempo en la que se ve la palabra
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