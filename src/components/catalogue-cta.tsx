import { ArrowDown } from "lucide-react";

export function CatalogueCta() {
  function scrollToForm(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const el = document.getElementById("enquire");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "#enquire";
    }
  }

  return (
    <div className="catalogue-action">
      <a
        className="catalogue-button"
        href="#enquire"
        onClick={scrollToForm}
        aria-label="Scroll down to vehicle fitment and rim options form"
      >
        Request Rim Options <ArrowDown size={18} aria-hidden="true" />
      </a>
      <span className="destination-note">
        Check stock, 15″–21″ sizes &amp; fitment options below
      </span>
    </div>
  );
}
