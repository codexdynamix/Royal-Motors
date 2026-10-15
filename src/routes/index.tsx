import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Features } from "@/components/home/features";
import { FinalPush } from "@/components/home/final-push";
import { Fitment } from "@/components/home/fitment";
import { Hero } from "@/components/home/hero";
import { Models } from "@/components/home/models";
import { Process } from "@/components/home/process";
import { Reviews } from "@/components/home/reviews";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      nodes.forEach((node) => node.classList.add("is-in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Hero />
      <Features />
      <Fitment />
      <Models />
      <Reviews />
      <Process />
      <FinalPush />
    </main>
  );
}
