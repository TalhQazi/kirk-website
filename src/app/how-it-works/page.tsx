import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="section">
      <h1>How It Works</h1>
      <p className="muted">Step-by-step visual explainer.</p>
      <div className="spacer" />
      <ol className="grid" style={{listStyle:"none"}}>
        <li>
          <strong>1. Unroll the collar</strong>
          <p className="muted">Deploy from pouch or wall unit.</p>
        </li>
        <li>
          <strong>2. Align center pad</strong>
          <p className="muted">Place on the target compression zone.</p>
        </li>
        <li>
          <strong>3. Wrap and secure</strong>
          <p className="muted">Use the pull strap for rapid fixation.</p>
        </li>
        <li>
          <strong>4. Check indicators</strong>
          <p className="muted">Observe built‑in tension indicators.</p>
        </li>
      </ol>
      <div className="spacer" />
      <div style={{position:"relative",width:"100%",maxWidth:900}}>
        <Image src="/assets/kirk-collar.png" alt="KIRK Collar" width={900} height={600} style={{width:"100%",height:"auto"}} />
      </div>
      <div className="spacer" />
      <div style={{aspectRatio:"16/9",background:"#000",borderRadius:8,display:"grid",placeItems:"center",color:"#fff"}}>
        60‑sec demo video placeholder
      </div>
    </div>
  );
}

