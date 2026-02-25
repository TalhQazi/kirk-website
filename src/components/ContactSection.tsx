import { useForm } from "@formspree/react";

export default function ContactSection() {
  const formId = "mgvnzqdp";
  const hasFormspree = Boolean(formId);

  const [state, handleSubmit]: any = hasFormspree
    ? useForm(formId as string)
    : [
        { submitting: false, succeeded: false, clientInitialized: false },
        (e: any) => {
          e?.preventDefault?.();
          if (typeof window !== "undefined") {
            window.location.href = "mailto:info@kirkcollar.com?subject=KIRK%20Website%20Inquiry";
          }
        },
      ];
//submitted section
  const submitted = state.succeeded;

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p className="muted">Distributors, press/media, law enforcement inquiries, and bulk orders.</p>
      <div className="spacer" />
      {submitted ? (
        <p>Thank you — we will get back to you shortly.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          method="POST"
          action="https://formspree.io/f/mgvnzqdp"
          style={{ display: "grid", gap: 12, maxWidth: 640 }}
        >
          <label>
            Name
            <input required name="name" type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input required name="email" type="email" placeholder="info@youragency.gov" />
          </label>
          <label>
            Organization
            <input name="organization" type="text" placeholder="Agency/Company" />
          </label>
          <label>
            Inquiry Type
            <select name="type" defaultValue="Bulk Order">
              <option>Bulk Order</option>
              <option>Distributor</option>
              <option>Press/Media</option>
              <option>Law Enforcement</option>
              <option>General</option>
            </select>
          </label>
          <label>
            Message
            <textarea required name="message" rows={6} placeholder="How can we help?" />
          </label>
          <input type="hidden" name="_subject" value="KIRK Website Inquiry" />
          <button className="btn-primary" type="submit" disabled={state.submitting}>
            {hasFormspree ? "Send" : "Email Us"}
          </button>
        </form>
      )}
      <div className="spacer" />
      <p className="muted">Email: info@kirkcollar.com • Phone: 207-947-1999 • Address: PO Box 52, Detroit, ME 04929</p>
    </section>
  );
}
