import { useState, type FormEvent } from "react";
import { MapPin, MessageCircle, Send, Wrench } from "lucide-react";
import { WHATSAPP_URL } from "@/data/landing";

export function Enquiry() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = [
      "Royal Motors enquiry",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      vehicle.trim() ? `Vehicle: ${vehicle.trim()}` : "",
      message.trim() ? message.trim() : "",
    ].filter(Boolean);
    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section className="enquiry reveal" id="enquire">
      <div className="enquiry-container">
        <div className="enquiry-left">
          <p className="eyebrow">06 / THE WORKSHOP</p>
          <h2>
            Tell us the car.
            <br />
            <span>We'll sort the fit.</span>
          </h2>
          <p className="enquiry-lead">
            Leave your vehicle details and requirements. Our workshop team replies directly on WhatsApp with stock, specs, and fitment advice.
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
                <strong>WhatsApp Hotline</strong>
                <p>+263 77 287 7953 · Quick replies during workshop hours</p>
              </div>
            </div>

            <div className="enquiry-contact-item">
              <div className="enquiry-contact-icon">
                <Wrench size={20} />
              </div>
              <div>
                <strong>All Extras Included</strong>
                <p>Free fitment, balancing &amp; wheel nuts with every set</p>
              </div>
            </div>
          </div>
        </div>

        <div className="enquiry-right">
          <div className="enquiry-card">
            <h3>Vehicle Fitment Enquiry</h3>
            <p className="enquiry-card-subtitle">
              Fill out this quick form to receive options directly on WhatsApp.
            </p>

            {sent ? (
              <div className="enquiry-sent" role="status">
                <p><strong>WhatsApp is ready!</strong></p>
                <p>If the chat didn’t open automatically, send your message directly to <strong>077 287 7953</strong>.</p>
                <button
                  type="button"
                  className="catalogue-button enquiry-resend-btn"
                  onClick={() => setSent(false)}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form className="enquiry-form" onSubmit={onSubmit}>
                <div className="enquiry-row">
                  <label>
                    Your Name <span className="req">*</span>
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
                    WhatsApp Number <span className="req">*</span>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      inputMode="tel"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="07X XXX XXXX"
                    />
                  </label>
                </div>

                <label>
                  Vehicle Make &amp; Model
                  <input
                    name="vehicle"
                    value={vehicle}
                    onChange={(event) => setVehicle(event.target.value)}
                    placeholder="e.g. Mercedes GLE 43, E53, Hilux…"
                  />
                </label>

                <label>
                  What are you looking for?
                  <textarea
                    name="message"
                    rows={3}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Specify 21″ style, finish preference, or questions about offset and fitment"
                  />
                </label>

                <button className="catalogue-button enquiry-submit-btn" type="submit">
                  <Send size={18} /> Send Enquiry via WhatsApp
                </button>

                <span className="enquiry-privacy-note">
                  🔒 Direct WhatsApp message to Royal Motors workshop. No spam.
                </span>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
