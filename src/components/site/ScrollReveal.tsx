import { useEffect } from "react";

const SELECTOR = [
  "h1",
  "h2",
  "h3",
  "h4",
  "section > p",
  "article",
  "[data-reveal]",
  ".shadow-elegant",
  ".shadow-soft",
  ".arch-frame",
  "section .grid > *",
  "section .flex > *",
].join(",");

export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    const observed = new WeakSet<Element>();
    const scan = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el, i) => {
        if (observed.has(el)) return;
        observed.add(el);
        el.classList.add("reveal");
        // Stagger children slightly
        const delay = Math.min((i % 8) * 60, 420);
        if (delay) el.style.transitionDelay = `${delay}ms`;
        io.observe(el);
      });
    };

    scan();
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
