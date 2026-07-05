"use client";

import { useEffect, useRef, type ReactNode } from "react";

let observer: IntersectionObserver | null = null;

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
  }
  return observer;
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** Retardo en ms para escalonar elementos vecinos */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  /* El ocultamiento se aplica recién acá, después del primer render: el HTML
     del servidor y la hidratación quedan idénticos (sin mismatch) y sin JS
     el contenido nunca se oculta. Solo se anima lo que está fuera de vista. */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    el.classList.add("reveal-hidden");
    const obs = getObserver();
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
