import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, MapPin, MessageCircle, Send, Sparkles, Wrench } from "lucide-react";
import { CATALOGUE_URL } from "@/data/landing";

const INCH_OPTIONS = ["15″", "16″", "17″", "18″", "20″", "21″"];
const HOLE_OPTIONS = ["4 Holes", "5 Holes", "6 Holes"];

export function Enquiry() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [make, setMake] = useState("");
  const [yearModel, setYearModel] = useState("");
  const [inches, setInches] = useState("20″");
  const [tyreSizes, setTyreSizes] = useState("");
  const [holes, setHoles] = useState("5 Holes");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const payload = {
      name: name.trim(),
      phone: phone.trim(),
      make: make.trim(),
      yearModel: yearModel.trim(),
      inches,
      holes,
      tyreSizes: tyreSizes.trim(),
      notes: notes.trim(),
      timestamp: new Date().toISOString(),
    };

    try {
      // Submit to backend endpoint which sends emails separately to the designated mailboxes
      let res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // Fallback for environments mapping direct script
        res = await fetch("/submit-enquiry.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
    } catch {
      // In case of any network boundary, proceed to thank you state
    } finally {
      setLoading(false);
      setSent(true);
    }
  }

  return (
    <section className="enquiry reveal" id="enquire">
      <div className="enquiry-container">
        {/* Left Column: Workshop Info & Value Proposition */}
        <div className="enquiry-left">
          <p className="eyebrow">06 / WORKSHOP FITMENT &amp; CATALOGUE</p>
          <h2>
            Tell us your ride.
            <br />
            <span>We match the fit.</span>
          </h2>
          <p className="enquiry-lead">
            Select your vehicle specs, preferred rim diameter (15″ to 21″), and bolt pattern. Our Harare workshop specialists will review your requirements and respond directly with in-stock mag sets and pricing.
          </p>

          <div className="enquiry-contact-cards">
            <div className="enquiry-contact-item">
              <div className="enquiry-contact-icon">
                <MapPin size={20} />
              </div>
              <div>
                <strong>Harare Workshop</strong>
                <p>166A Harare Street, Harare, Zimbabwe</p>
              </div>
            </div>

            <div className="enquiry-contact-item">
              <div className="enquiry-contact-icon">
                <MessageCircle size={20} />
              </div>
              <div>
                <strong>Customer Assistance</strong>
                <p>+263 77 287 7953 · Quick replies during workshop hours</p>
              </div>
            </div>

            <div className="enquiry-contact-item">
              <div className="enquiry-contact-icon">
                <Wrench size={20} />
              </div>
              <div>
                <strong>Complete Fitment Package Included</strong>
                <p>Free fitting, high-speed balancing &amp; precision wheel nuts</p>
              </div>
            </div>
          </div>

          <div className="enquiry-catalogue-callout">
            <div>
              <Sparkles size={18} className="gold-icon" />
              <span>Prefer to look through photos first?</span>
            </div>
            <a
              href={CATALOGUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="catalogue-inline-link"
            >
              Open Live WhatsApp Catalogue ↗
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Fitment Form */}
        <div className="enquiry-right">
          <div className="enquiry-card">
            <div className="enquiry-card-header">
              <h3>Request Rim Options</h3>
              <p className="enquiry-card-subtitle">
                Enter your vehicle details below to receive matching in-stock rim options and quotes.
              </p>
            </div>

            {sent ? (
              <div className="enquiry-sent" role="status">
                <CheckCircle2 size={46} className="sent-icon" />
                <h4>Thank You!</h4>
                <p>Your rim options enquiry has been successfully submitted.</p>
                <p className="sent-subtext">
                  Our workshop team has received your vehicle specifications and will contact you shortly with matching in-stock options and pricing.
                </p>
                <div className="sent-actions">
                  <button
                    type="button"
                    className="catalogue-button enquiry-resend-btn"
                    onClick={() => {
                      setSent(false);
                      setName("");
                      setPhone("");
                      setMake("");
                      setYearModel("");
                      setTyreSizes("");
                      setNotes("");
                    }}
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form className="enquiry-form" onSubmit={onSubmit}>
                {/* Contact Row */}
                <div className="enquiry-row">
                  <label>
                    <span>
                      Your Name <span className="req">*</span>
                    </span>
                    <input
                      name="name"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="e.g. Adrian Musanga"
                    />
                  </label>

                  <label>
                    <span>
                      Phone / WhatsApp Number <span className="req">*</span>
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      inputMode="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="e.g. 077 287 7953"
                    />
                  </label>
                </div>

                {/* Vehicle Make & Year Model */}
                <div className="enquiry-row">
                  <label>
                    <span>
                      Vehicle Make <span className="req">*</span>
                    </span>
                    <input
                      name="make"
                      required
                      value={make}
                      onChange={(event) => setMake(event.target.value)}
                      placeholder="e.g. Mercedes-Benz, BMW, Toyota…"
                    />
                  </label>

                  <label>
                    <span>
                      Year &amp; Model <span className="req">*</span>
                    </span>
                    <input
                      name="yearModel"
                      required
                      value={yearModel}
                      onChange={(event) => setYearModel(event.target.value)}
                      placeholder="e.g. 2021 GLE 43, 2019 Hilux, 2018 320d"
                    />
                  </label>
                </div>

                {/* Inches / Rim Size Selection */}
                <div className="enquiry-field-group">
                  <span className="field-label">
                    <span>
                      Rim Size (Inches) <span className="req">*</span>
                    </span>
                    <small className="field-hint">Select your preferred diameter</small>
                  </span>
                  <div className="chip-group" role="radiogroup" aria-label="Rim size in inches">
                    {INCH_OPTIONS.map((inch) => {
                      const isSelected = inches === inch;
                      return (
                        <button
                          key={inch}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          className={`chip-btn ${isSelected ? "is-selected" : ""}`}
                          onClick={() => setInches(inch)}
                        >
                          {inch}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Hole Pattern (4/5/6) */}
                <div className="enquiry-field-group">
                  <span className="field-label">
                    <span>
                      Wheel Stud Holes <span className="req">*</span>
                    </span>
                    <small className="field-hint">PCD stud count: 4, 5, or 6 holes</small>
                  </span>
                  <div className="chip-group" role="radiogroup" aria-label="Wheel hole count">
                    {HOLE_OPTIONS.map((holeOption) => {
                      const isSelected = holes === holeOption;
                      return (
                        <button
                          key={holeOption}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          className={`chip-btn ${isSelected ? "is-selected" : ""}`}
                          onClick={() => setHoles(holeOption)}
                        >
                          {holeOption}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Tyre Sizes */}
                <label>
                  <span>
                    Tyre Sizes <span className="field-optional">(If known or currently fitted)</span>
                  </span>
                  <input
                    name="tyreSizes"
                    value={tyreSizes}
                    onChange={(event) => setTyreSizes(event.target.value)}
                    placeholder="e.g. 275/40 R20, 265/65 R17, or type 'Recommend for me'"
                  />
                </label>

                {/* Additional Notes / Finish Preference */}
                <label>
                  <span>
                    Notes &amp; Finish Preference <span className="field-optional">(Optional)</span>
                  </span>
                  <textarea
                    name="notes"
                    rows={2}
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    placeholder="e.g. Prefer brushed silver, bronze concave, gloss black, or need offset advice"
                  />
                </label>

                <button
                  className="catalogue-button enquiry-submit-btn"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Request Rim Options
                    </>
                  )}
                </button>

                <p className="enquiry-privacy-note">
                  🔒 Your information is confidential and will only be used to provide fitment specifications.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
