import { useEffect, useState } from "react";
import { BadgeCheck, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { CatalogueCta } from "@/components/catalogue-cta";

const SLIDES = [
  {
    src: "/media/slide-1.jpg?v=2",
    alt: "Iconic 21-inch brushed silver deep-dish 5-spoke monoblock mag wheel with mirror polished lip",
  },
  {
    src: "/media/slide-2.jpg?v=2",
    alt: "Aggressive 21-inch satin bronze forged concave Y-spoke mag wheel with titanium perimeter bolts",
  },
  {
    src: "/media/slide-3.jpg?v=2",
    alt: "Metallic silver BMW luxury sedan facing right with custom 21-inch alloy mag wheels",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-slides" aria-roledescription="carousel" aria-label="Royal Motors wheel gallery">
        {SLIDES.map((slide, slideIndex) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={slideIndex === index ? "is-active" : undefined}
            fetchPriority={slideIndex === 0 ? "high" : "auto"}
          />
        ))}
      </div>
      <div className="hero-copy">
        <h1>
          Big Wheels. Big Presence.
          <br />
          <em>
            Strong Mags at Prices
            <br className="desktop-break" /> You'll Love.
          </em>
        </h1>
        <p className="hero-description">
          Premium 21-inch mag rims for Mercedes-Benz SUVs and luxury sedans, built tough, styled to turn heads,
          and priced fair.
        </p>
        <div className="hero-perks">
          <span>
            <ShieldCheck />
            Strong and durable
            <small>Built for Zimbabwe roads</small>
          </span>
          <span>
            <Sparkles />
            Stunning looks
            <small>Instant style upgrade</small>
          </span>
          <span>
            <BadgeCheck />
            Affordable quality
            <small>Without the luxury price tag</small>
          </span>
          <span>
            <Wrench />
            Free extras
            <small>Fitment, balancing & wheel nuts</small>
          </span>
        </div>
        <CatalogueCta />
        <div className="hero-trust">
          <div>
            <span className="stars" aria-label="Five-star customer rating">
              ★★★★★
            </span>
            <span>Trusted by drivers across Zimbabwe</span>
          </div>
          <div className="trust-quotes">
            <span>“Looking nice from every angle.”</span>
            <span>“They handled the rest in the workshop.”</span>
          </div>
        </div>
      </div>
      <figure className="hero-photo">
        <img
          src="/media/stance.jpg"
          alt="Silver multi-spoke alloy rim fitted on a black luxury SUV"
        />
        <figcaption>
          <span>
            21 INCHES.
            <br />
            <strong>ZERO COMPROMISE.</strong>
          </span>
          <span className="photo-caption">
            THE ROYAL MOTORS LOOK
            <small>Confirm fitment in the catalogue</small>
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
