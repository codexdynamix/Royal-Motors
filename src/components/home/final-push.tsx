import { Enquiry } from "@/components/home/enquiry";
import { LOGO_SRC } from "@/data/landing";

export function FinalPush() {
  return (
    <>
      <Enquiry />
      <footer>
        <div className="footer-brand">
          <img src={LOGO_SRC} alt="Royal Motors" />
        </div>
        <p>
          Royal Motors · 166A Harare Street · WhatsApp{" "}
          <a href="https://wa.me/263772877953">077 287 7953</a>
        </p>
        <p>Free fitment and balancing</p>
        <small>© 2026 Royal Motors. All rights reserved.</small>
      </footer>
    </>
  );
}
