"use client";
import { useState, useEffect } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [desvanecer, setDesvanecer] = useState(false);

  useEffect(() => {
    setTimeout(() => setDesvanecer(true), 1500); // Empieza a desvanecerse la animación
    setTimeout(() => setVisible(false), 2000); // Se retira la pantalla de la animación
  }, []); // Se ejecuta una sola vez para que no se repita infinitamente

  if (!visible) return null; // Si visible es false, no se muestra y lo quita del DOM para que no consuma recursos

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#4A3D3A] gap-4 transition-opacity duration-500 ease-in-out ${desvanecer ? "opacity-0" : "opacity-100"}`}>
      <div className="loader">
        <svg viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="32"></circle>
        </svg>
      </div>
      <div className="loader triangle">
        <svg viewBox="0 0 86 80">
          <polygon points="43 8 79 72 7 72"></polygon>
        </svg>
      </div>
      <div className="loader">
        <svg viewBox="0 0 80 80">
          <rect x="8" y="8" width="64" height="64"></rect>
        </svg>
      </div>
    </div>
  );
}
