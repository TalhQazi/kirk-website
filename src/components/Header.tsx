import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header>
      <div className="container nav nav-center">
        {isHome ? (
          <a href="#home" aria-label="KIRK home" className="logo-wrap">
            <img className="logo-circle" src="/assets/logo2.jpeg" alt="KIRK Device logo" width={88} height={88} />
          </a>
        ) : (
          <Link to="/" aria-label="KIRK home" className="logo-wrap">
            <img className="logo-circle" src="/assets/logo2.jpeg" alt="KIRK Device logo" width={88} height={88} />
          </Link>
        )}
      </div>
    </header>
  );
}
