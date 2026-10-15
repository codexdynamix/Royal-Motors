import { Car, CircleDot, Gauge, ShieldCheck, Sparkles } from "lucide-react";
import { features } from "@/data/landing";

const icons = { shield: ShieldCheck, gauge: Gauge, wheel: CircleDot, sparkles: Sparkles, car: Car };

export function Features() {
  return (
    <section className="section features reveal">
      <div className="section-heading">
        <p className="eyebrow">01 / THE UPGRADE</p>
        <h2>
          Looks that turn heads.
          <br />
          <span>Strength that backs it up.</span>
        </h2>
        <p>Not just a better-looking car. A better drive.</p>
      </div>
      <div className="feature-grid">
        {features.map((feature) => {
          const Icon = icons[feature.icon];
          return (
            <article className="feature-card" key={feature.title}>
              <Icon size={30} strokeWidth={1.5} />
              <h3>{feature.title}</h3>
              <p>{feature.detail}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
