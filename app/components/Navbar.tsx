"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <>
      <nav>
        <Link href="#" className="nav-logo">
          <Image src="/logo.png" alt="Scrapmint" width={160} height={40} className="nav-logo-img" />
        </Link>
        <ul className="nav-links">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#problem">The Problem</Link></li>
          <li><Link href="#what-we-do">What We Do</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#founders">Founders</Link></li>
          <li><Link href="#cta" className="nav-cta">Partner With Us</Link></li>
        </ul>
        <button
          className={`hamburger${drawerOpen ? " open" : ""}`}
          onClick={toggleDrawer}
          aria-label="Open menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div
        className={`drawer-overlay${drawerOpen ? " open" : ""}`}
        onClick={closeDrawer}
      />
      <div className={`mobile-drawer${drawerOpen ? " open" : ""}`}>
        <Image src="/logo.png" alt="Scrapmint" width={128} height={32} className="drawer-logo-img" />
        <Link href="#about" onClick={closeDrawer}>About</Link>
        <Link href="#problem" onClick={closeDrawer}>The Problem</Link>
        <Link href="#what-we-do" onClick={closeDrawer}>What We Do</Link>
        <Link href="#projects" onClick={closeDrawer}>Projects</Link>
        <Link href="#founders" onClick={closeDrawer}>Founders</Link>
        <Link href="#cta" className="drawer-cta" onClick={closeDrawer}>Partner With Us</Link>
      </div>
    </>
  );
}
