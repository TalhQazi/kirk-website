import { Link } from "react-router-dom";

export default function Buy() {
  return (
    <div className="section">
      <h1>Buy Now / Order</h1>
      <p className="muted">USD pricing. Secure checkout will be added later — for now, contact us to order.</p>
      <div className="spacer" />
      <div className="grid">
        <div>
          <h3>Single collar (vacuum sealed)</h3>
          <p className="muted">Compact, sterile pouch.</p>
          <Link to="/contact" className="btn-primary">
            Contact to Purchase
          </Link>
        </div>
        <div>
          <h3>5‑pack responder kit</h3>
          <p className="muted">Ideal for teams and vehicles.</p>
          <Link to="/contact" className="btn-primary">
            Contact to Purchase
          </Link>
        </div>
        <div>
          <h3>Emergency KIRK™ Collar Station</h3>
          <p className="muted">Wall‑mounted deployment unit.</p>
          <Link to="/contact" className="btn-primary">
            Contact to Purchase
          </Link>
        </div>
        <div>
          <h3>Institutional quote</h3>
          <p className="muted">Government and agency pricing.</p>
          <Link to="/contact" className="btn-secondary">
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
