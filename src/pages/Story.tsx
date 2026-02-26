export default function Story() {
  return (
    <div className="section">
      <h1>Built from Tragedy. Designed to Save.</h1>
      <div className="spacer" />
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
    </div>
  );
}
