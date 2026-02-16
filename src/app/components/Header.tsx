"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="container nav nav-center">
        <a href="#home" aria-label="KIRK home" className="logo-wrap">
          <Image className="logo-circle" src="/assets/logo2.jpeg" alt="KIRK Device logo" width={88} height={88} />
        </a>
      </div>
    </header>
  );
}

