import { Check, Wrench } from "lucide-react";
import { fittingBenefits } from "@/data/landing";

export function Fitment() {
  return (
    <section className="fitment-section reveal">
      <div className="fitment-inner">
        <div>
          <p className="eyebrow">02 / THE ROYAL TREATMENT</p>
          <h2>
            Your new mags.
            <br />
            <span>The extras? On us.</span>
          </h2>
          <p className="fitment-intro">
            The price of your mags shouldn't be the start of a long list of extras. We get you road-ready,
            without the hidden costs.
          </p>
          <div className="free-stamp">
            <Wrench size={28} strokeWidth={1.5} />
            <span>
              FREE FITMENT
              <br />
              FREE BALANCING
              <br />
              FREE WHEEL NUTS
            </span>
          </div>
        </div>
        <div className="fitting-list">
          {fittingBenefits.map(([title, detail]) => (
            <div key={title}>
              <Check size={21} />
              <span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
