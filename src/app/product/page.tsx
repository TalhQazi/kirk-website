export default function Product() {
  return (
    <div className="section">
      <h1>Why KIRK™?</h1>
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
      <h2>Specs</h2>
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
    </div>
  );
}

