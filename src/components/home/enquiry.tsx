import { useState, type FormEvent } from "react";
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
      <div className="enquiry-inner">
        <p className="eyebrow">06 / THE WORKSHOP</p>
        <h2>
          Tell us the car.
          <br />
          <span>We'll sort the fit.</span>
        </h2>
        <p className="enquiry-lead">Leave your details. We reply on WhatsApp with stock and fitment.</p>
        {sent ? (
          <p className="enquiry-sent" role="status">
            WhatsApp is open with your message. If it didn’t, send it to 077 287 7953.
          </p>
        ) : (
          <form className="enquiry-form" onSubmit={onSubmit}>
            <label>
              Name
              <input
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
              />
            </label>
            <label>
              WhatsApp number
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
            <label className="span-2">
              Vehicle
              <input
                name="vehicle"
                value={vehicle}
                onChange={(event) => setVehicle(event.target.value)}
                placeholder="Mercedes GLE, Hilux, Gladiator…"
              />
            </label>
            <label className="span-2">
              What are you looking for?
              <textarea
                name="message"
                rows={4}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Size, finish, or a photo description"
              />
            </label>
            <button className="catalogue-button enquiry-submit" type="submit">
              Send on WhatsApp
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
