import { Link } from "react-router-dom";

export default function Institutions() {
  return (
    <div className="section">
      <h1>For Institutions</h1>
      <div className="spacer" />
      <ul>
        <li>Police departments</li>
        <li>Fire & EMS teams</li>
        <li>Schools & universities</li>
        <li>Houses of worship</li>
        <li>Transit authorities</li>
        <li>Military field units</li>
      </ul>
      <div className="spacer" />
      <Link to="/contact" className="btn-primary">
        Request government or agency pricing
      </Link>
    </div>
  );
}
