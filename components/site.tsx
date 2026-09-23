"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";

const navItems = [
  ["About", "/#about"],
  ["Capabilities", "/#capabilities"],
  ["Materials", "/#materials"],
  ["Journal", "/#journal"],
  ["Contact", "/#contact"],
];

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      className={`logo ${light ? "logo--light" : ""}`}
      href="/"
      aria-label="Jakin Works home"
    >
      <span className="logo-mark">
        <b>J</b>
        <b>W</b>
      </span>
      <span className="logo-name">
        JAKIN
        <br />
        WORKS
      </span>
    </Link>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light";
}) {
  return (
    <Link className={`button button--${variant}`} href={href}>
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
          <Button href="/#contact">Request a quote</Button>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span>{open ? "Close" : "Menu"}</span>
          <i />
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navItems.map(([label, href]) => (
            <Link onClick={() => setOpen(false)} key={href} href={href}>
              {label}
              <span>↗</span>
            </Link>
          ))}
          <Button href="/#contact">Request a quote</Button>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p className="footer-tagline">{siteConfig.tagline}.</p>
        </div>
        <div className="footer-links">
          <div>
            <Eyebrow>Explore</Eyebrow>
            <Link href="/projects">Work</Link>
            <Link href="/services">Services</Link>
            <Link href="/materials">Materials</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/about">About</Link>
          </div>
          <div>
            <Eyebrow>Start here</Eyebrow>
            <Link href="/request-a-quote">Request a quote</Link>
            <Link href="/contact">Contact us</Link>
            <p className="footer-note">
              Bespoke architectural fabrication
              <br />
              Mild steel · Stainless steel · Aluminium
            </p>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {siteConfig.companyName}</span>
        <span>Nairobi · Kenya</span>
      </div>
    </footer>
  );
}

export function QuoteForm({ contact = false }: { contact?: boolean }) {
  return (
    <form className="quote-form" onSubmit={(event) => event.preventDefault()}>
      <div className="form-row">
        <label>
          {contact ? "Full name" : "Full name *"}
          <input required name="name" placeholder="Your name" />
        </label>
        <label>
          {contact ? "Email" : "Phone number *"}
          <input
            required={!contact}
            name={contact ? "email" : "phone"}
            type={contact ? "email" : "tel"}
            placeholder={contact ? "you@example.com" : "+254 ..."}
          />
        </label>
      </div>
      {!contact && (
        <div className="form-row">
          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" />
          </label>
          <label>
            Project type *
            <select required name="projectType" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Architectural</option>
              <option>Other</option>
            </select>
          </label>
        </div>
      )}
      <label>
        {contact ? "How can we help?" : "Project description *"}
        <textarea
          required={!contact}
          name="message"
          rows={5}
          placeholder="Tell us a little about what you are building..."
        />
      </label>
      {!contact && (
        <label className="check">
          <input type="checkbox" required />{" "}
          <span>I agree to the privacy policy.</span>
        </label>
      )}
      <button className="button button--primary" type="submit">
        {contact ? "Send enquiry" : "Request a quote"}
        <span>↗</span>
      </button>
    </form>
  );
}
