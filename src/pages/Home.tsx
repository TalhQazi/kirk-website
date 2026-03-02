import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="section">
      <section className="hero" id="home">
        <div className="logo-top">
          <img className="logo-circle" src="/assets/logo2.jpeg" alt="KIRK Device logo" width={110} height={110} />
        </div>
        <div className="hero-grid">
          <div>
            <h1>KIRK™ Collar — Kinetic Instant Response for Neck Emergencies</h1>
            <p>Stops the clock when seconds matter most.</p>
            <div className="spacer" />
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#buy" className="btn-primary">
                Buy Now
              </a>
              <a href="#how-it-works" className="btn-secondary">
                Watch How It Works
              </a>
            </div>
            <div className="spacer" />
            <p className="muted">
              The KIRK™ Collar is a patent‑pending rapid‑deployment neck compression collar designed to slow or stop catastrophic bleeding in the
              field. Lightweight, intuitive, and trusted by responders worldwide.
            </p>
          </div>
          <div>
            <img src="/assets/kirk-collar-station.png" alt="KIRK Collar station" width={640} height={480} style={{ width: "100%", height: "auto" }} />
          </div>
        </div>
      </section>

      <section id="product" className="section">
        <h2>Why KIRK™?</h2>
        <div className="spacer" />
        <ul style={{ columns: 2, gap: 24 }}>
          <li>Applied in seconds — no training required</li>
          <li>Designed for traumatic neck bleeds</li>
          <li>Patent‑pending pressure control zones</li>
          <li>Airway‑preserving configuration</li>
          <li>Fits easily in any trauma kit or AED station</li>
          <li>Available in sterile vacuum pouches or wall‑mounted units</li>
        </ul>
        <div className="spacer" />
        <h3>Specs</h3>
        <div className="grid">
          <div>
            <div className="muted">Weight</div>
            <div>0.6 lbs</div>
          </div>
          <div>
            <div className="muted">Size Range</div>
            <div>Fits necks 10–20 inches</div>
          </div>
          <div>
            <div className="muted">Shelf Life</div>
            <div>5 years</div>
          </div>
          <div>
            <div className="muted">Color Options</div>
            <div>Tactical Black / Rescue Orange</div>
          </div>
          <div>
            <div className="muted">Deployment Time</div>
            <div>&lt;7 seconds</div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section">
        <div className="grid" style={{ alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: 32, marginBottom: 16 }}>How It Works</h2>
            <ol style={{ paddingLeft: 24, margin: 0, fontSize: 18, lineHeight: 1.7 }}>
              <li>Unroll the collar</li>
              <li>Align center pad with target zone</li>
              <li>Wrap and secure with pull strap</li>
              <li>Observe built‑in tension indicators</li>
            </ol>
          </div>
          <div>
            <img
              src="/assets/kirk-collar.png"
              alt="KIRK Collar"
              width={900}
              height={600}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </section>

      <section id="buy" className="section">
        <h2 style={{ textAlign: "center", marginBottom: 8 }}>Buy Now / Order</h2>
        <p className="muted" style={{ textAlign: "center", marginBottom: 24 }}>
          USD pricing. Checkout will be added later — contact us to order.
        </p>
        <div className="grid">
          <div className="card">
            <h3 style={{ marginBottom: 8 }}>Single collar (vacuum sealed)</h3>
            <p className="muted" style={{ marginBottom: 16 }}>Compact, sterile pouch.</p>
            <a href="#contact" className="btn-primary">
              Contact to Purchase
            </a>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: 8 }}>5‑pack responder kit</h3>
            <p className="muted" style={{ marginBottom: 16 }}>Ideal for teams and vehicles.</p>
            <a href="#contact" className="btn-primary">
              Contact to Purchase
            </a>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: 8 }}>Emergency KIRK™ Collar Station</h3>
            <p className="muted" style={{ marginBottom: 16 }}>Wall‑mounted deployment unit.</p>
            <a href="#contact" className="btn-primary">
              Contact to Purchase
            </a>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: 8 }}>Institutional quote</h3>
            <p className="muted" style={{ marginBottom: 16 }}>Government and agency pricing.</p>
            <a href="#contact" className="btn-secondary">
              Request Quote
            </a>
          </div>
        </div>
      </section>

      <section id="story" className="section">
        <h2 style={{ textAlign: "center" }}>Built from Tragedy. Designed to Save.</h2>
        <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
          <img
            src="/assets/loog.jpeg"
            alt="Memorial image of Iryna Zarutska with text 'We will never forget – Kirk collar born 2025'"
            style={{ maxWidth: "100%", height: "auto", borderRadius: 12 }}
          />
        </div>
        <p>
          The KIRK™ Collar was inspired by the loss of two lives in 2025 — Charlie Kirk and Iryna Zarutska. Both were attacked in separate
          incidents and died from neck injuries that may have been survivable had immediate intervention been available. We will not forget
          them. Their names live on — one on each side of every KIRK™ Collar.
        </p>
        <div className="spacer" />
        <p className="muted">A portion of proceeds go toward life‑saving preparedness initiatives.</p>
      </section>

      <section className="section">
        <div className="grid" style={{ alignItems: "flex-start" }}>
          <div id="institutions">
            <h2 style={{ textAlign: "left", marginBottom: 16, fontSize: 32 }}>For Institutions</h2>
            <ul style={{ fontSize: 20, lineHeight: 1.8, maxWidth: 520, margin: "0 0 24px 0" }}>
              <li>Police departments</li>
              <li>Fire & EMS teams</li>
              <li>Schools & universities</li>
              <li>Houses of worship</li>
              <li>Transit authorities</li>
              <li>Military field units</li>
            </ul>
          </div>
          <div id="support">
            <h2 style={{ textAlign: "left", marginBottom: 16, fontSize: 32 }}>Support & Instructions</h2>
            <ul style={{ fontSize: 20, lineHeight: 1.8, maxWidth: 640, margin: 0 }}>
              <li>How to Apply the Collar (PDF / video) — coming soon</li>
              <li>Cleaning & storage guide — coming soon</li>
              <li>Replace‑by date reminder — subscribe on Contact section</li>
              <li>Warranty & return policy — see Terms</li>
            </ul>
          </div>
        </div>
        <div className="spacer" />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="#contact" className="btn-primary">
            Request government or agency pricing
          </a>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
