import Image from "next/image";
import ContactSection from "./contact/section";

export default function Home() {
  return (
    <div className="section">
      {/* HERO */}
      <section className="hero" id="home">
        <div className="logo-top">
          <Image className="logo-circle" src="/assets/logo.png" alt="KIRK Device logo" width={110} height={110}  />
        </div>
        <div className="hero-grid">
          <div>
            <h1>KIRK™ Collar — Kinetic Instant Response for Neck Emergencies</h1>
          <p>Stops the clock when seconds matter most.</p>
          <div className="spacer" />
          <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <a href="#buy" className="btn-primary">Buy Now</a>
            {/* <a href="#contact" className="btn-secondary">Request Bulk Pricing</a> */}
            <a href="#how-it-works" className="btn-secondary">Watch How It Works</a>
          </div>
          <div className="spacer" />
          <p className="muted">The KIRK™ Collar is a patent‑pending rapid‑deployment neck compression collar designed to slow or stop catastrophic bleeding in the field. Lightweight, intuitive, and trusted by responders worldwide.</p>
          </div>
          <div>
            <Image src="/assets/kirk-collar-station.png" alt="KIRK Collar station" width={640} height={480} style={{width:"100%",height:"auto"}}/>
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section id="product" className="section">
        <h2>Why KIRK™?</h2>
        <div className="spacer" />
        <ul style={{columns:2, gap:24}}>
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

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="section">
        <h2>How It Works</h2>
        <div className="grid">
          <div>
            <ol style={{paddingLeft:18}}>
              <li>Unroll the collar</li>
              <li>Align center pad with target zone</li>
              <li>Wrap and secure with pull strap</li>
              <li>Observe built‑in tension indicators</li>
        </ol>
          </div>
          <div>
            <Image src="/assets/kirk-collar.png" alt="KIRK Collar" width={900} height={600} style={{width:"100%",height:"auto"}} />
          </div>
        </div>
      </section>

      {/* BUY */}
      <section id="buy" className="section">
        <h2>Buy Now / Order</h2>
        <p className="muted">USD pricing. Checkout will be added later — contact us to order.</p>
        <div className="grid">
          <div className="card">
            <h3>Single collar (vacuum sealed)</h3>
            <p className="muted">Compact, sterile pouch.</p>
            <a href="#contact" className="btn-primary">Contact to Purchase</a>
          </div>
          <div className="card">
            <h3>5‑pack responder kit</h3>
            <p className="muted">Ideal for teams and vehicles.</p>
            <a href="#contact" className="btn-primary">Contact to Purchase</a>
          </div>
          <div className="card">
            <h3>Emergency KIRK™ Collar Station</h3>
            <p className="muted">Wall‑mounted deployment unit.</p>
            <a href="#contact" className="btn-primary">Contact to Purchase</a>
          </div>
          <div className="card">
            <h3>Institutional quote</h3>
            <p className="muted">Government and agency pricing.</p>
            <a href="#contact" className="btn-secondary">Request Quote</a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="section">
        <h2>Built from Tragedy. Designed to Save.</h2>
        <p>
          The KIRK™ Collar was inspired by the loss of two lives in 2025 — Charlie Kirk and Iryna Zarutska. Both were attacked in separate incidents and died from neck injuries that may have been survivable had immediate intervention been available. We will not forget them. Their names live on — one on each side of every KIRK™ Collar.
        </p>
        <div className="spacer" />
        <p className="muted">A portion of proceeds go toward life‑saving preparedness initiatives.</p>
      </section>

      {/* INSTITUTIONS */}
      <section id="institutions" className="section">
        <h2>For Institutions</h2>
        <ul>
          <li>Police departments</li>
          <li>Fire & EMS teams</li>
          <li>Schools & universities</li>
          <li>Houses of worship</li>
          <li>Transit authorities</li>
          <li>Military field units</li>
        </ul>
        <div className="spacer" />
        <a href="#contact" className="btn-primary">Request government or agency pricing</a>
      </section>

      {/* SUPPORT */}
      <section id="support" className="section">
        <h2>Support & Instructions</h2>
        <ul>
          <li>How to Apply the Collar (PDF / video) — coming soon</li>
          <li>Cleaning & storage guide — coming soon</li>
          <li>Replace‑by date reminder — subscribe on Contact section</li>
          <li>Warranty & return policy — see Terms</li>
        </ul>
      </section>

      {/* CONTACT */}
      <ContactSection />
    </div>
  );
}
