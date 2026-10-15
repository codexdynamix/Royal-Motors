import { ArrowUpRight } from "lucide-react";
import { CATALOGUE_URL } from "@/data/landing";

export function CatalogueCta() {
  return (
    <div className="catalogue-action">
      <a className="catalogue-button" href={CATALOGUE_URL} target="_blank" rel="noopener noreferrer">
        View Our Catalogue <ArrowUpRight size={20} aria-hidden="true" />
      </a>
    </div>
  );
}
