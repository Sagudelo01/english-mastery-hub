"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SignOutButton from "@/components/SignOutButton";
import ThemeToggle from "@/components/ThemeToggle";

const talleresNav = [
  { nombre: "Verbo To Be", slug: "verb-to-be" },
  { nombre: "Adjetivos Demostrativos", slug: "adjetivos-demostrativos" },
  { nombre: "Preposiciones", slug: "preposiciones" },
  { nombre: "There Is / There Are", slug: "there-is-there-are" },
  { nombre: "Presente Simple", slug: "presente-simple" },
];

export default function StudentNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-10 border-b bg-[#f5f5f5]/90 backdrop-blur transition-shadow duration-300 dark:bg-[#3f2c28]/90 ${
        scrolled
          ? "border-[#e8e0dc] shadow-md dark:border-[#6b524b]"
          : "border-[#e8e0dc] dark:border-[#6b524b]"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-8 py-3">
        <Link href="/dashboard" className="flex shrink-0 items-center gap-2">
          <img
            src="/img/en.png"
            alt="Logo"
            className="h-8 w-8 animate-[logo-bounce_8s_ease-in-out_infinite]"
          />
          <span className="hidden text-base font-bold text-[#3f2c28] dark:text-[#f5f5f5] sm:inline">
            English Hub
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {talleresNav.map((taller) => (
            <Link
              key={taller.slug}
              href={`/talleres/${taller.slug}`}
              className="group relative whitespace-nowrap text-sm text-[#6b524b] transition-colors hover:text-[#96665a] dark:text-[#c9b8b2] dark:hover:text-[#e0c8c0]"
            >
              {taller.nombre}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#96665a] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <SignOutButton />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#e8e0dc] text-[#6b524b] transition-colors hover:bg-[#96665a]/10 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#e8e0dc] px-6 py-3 md:hidden dark:border-[#6b524b]">
          <div className="flex flex-col gap-1">
            {talleresNav.map((taller) => (
              <Link
                key={taller.slug}
                href={`/talleres/${taller.slug}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-[#6b524b] transition-colors hover:bg-[#96665a]/10 hover:text-[#96665a] dark:text-[#c9b8b2] dark:hover:text-[#e0c8c0]"
              >
                {taller.nombre}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
