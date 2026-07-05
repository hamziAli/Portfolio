import React, { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Sun, Moon, FileText, FolderGit2, ArrowRight, Menu, X } from "lucide-react";

const NAME = "HAMZA ALI";
const PHOTO_URL = "/profile.jpeg"; // profile image served from public/profile.jpeg

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com/hamziAli" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/hamza-ali-69730431a" },
  { icon: Mail, label: "Email", href: "mailto:hamza93313813@gmail.com" },
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function MatrixName({ text = NAME }) {
  const [letters, setLetters] = useState(
    text.split("").map((c) => ({ char: c, matrix: false, space: c === " " }))
  );
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const randomChar = () => (Math.random() > 0.5 ? "1" : "0");
    const holdMs = 380;
    const stagger = 65;

    text.split("").forEach((char, i) => {
      if (char === " ") return;
      const t1 = setTimeout(() => {
        setLetters((prev) => {
          const next = [...prev];
          next[i] = { ...next[i], char: randomChar(), matrix: true };
          return next;
        });
        setTimeout(() => {
          setLetters((prev) => {
            const next = [...prev];
            next[i] = { ...next[i], char, matrix: false };
            return next;
          });
        }, holdMs);
      }, i * stagger + 250);
      return () => clearTimeout(t1);
    });
  }, [text]);

  return (
    <span className="matrix-name" aria-label={text}>
      {letters.map((l, i) => (
        <span key={i} className={"matrix-letter" + (l.matrix ? " is-matrix" : "")}>
          {l.space ? "\u00A0" : l.char}
        </span>
      ))}
    </span>
  );
}

function TerminalPrompt() {
  const [typed, setTyped] = useState("");
  const full = "whoami";
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 95);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="terminal-prompt">
      <span className="prompt-user">hamza@giki</span>
      <span className="prompt-colon">:~$&nbsp;</span>
      <span className="prompt-cmd">{typed}</span>
      <span className="cursor">▍</span>
    </div>
  );
}

export default function Hero({ onNavigateToProjects = () => { } }) {
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <div className="hero-root" data-theme={theme}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Inter:wght@400;500;600;700&display=swap');

        .hero-root {
          --ink: #00171F;
          --abyss: #003459;
          --ocean: #007EA7;
          --current: #00A8E8;
          --foam: #FFFFFF;
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          position: relative;
          transition: background 0.4s ease, color 0.4s ease;
        }
        .hero-root[data-theme="dark"] {
          --bg: var(--ink);
          --bg-2: var(--abyss);
          --text: var(--foam);
          --text-dim: rgba(255,255,255,0.62);
          --accent: var(--current);
          --border: rgba(0,168,232,0.28);
          --surface: rgba(255,255,255,0.04);
          background: var(--bg);
          color: var(--text);
        }
        .hero-root[data-theme="light"] {
          --bg: var(--foam);
          --bg-2: #eaf6fb;
          --text: var(--ink);
          --text-dim: rgba(0,23,31,0.62);
          --accent: var(--ocean);
          --border: rgba(0,52,89,0.18);
          --surface: rgba(0,126,167,0.06);
          background: var(--bg);
          color: var(--text);
        }

        .hero-content {
          position: relative;
          overflow: hidden;
        }

        .depth-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%);
          background-size: 100% 220%;
          animation: depthDrift 18s ease-in-out infinite alternate;
        }
        @keyframes depthDrift {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 100%; }
        }
        .grid-overlay {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.05;
          background-image:
            linear-gradient(var(--accent) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse at 30% 30%, black 0%, transparent 70%);
        }
        .glow {
          position: absolute;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--current) 0%, transparent 70%);
          opacity: 0.18;
          filter: blur(20px);
          z-index: 0;
          top: 8%;
          right: 6%;
          animation: pulseGlow 6s ease-in-out infinite alternate;
        }
        @keyframes pulseGlow {
          0% { transform: scale(1); opacity: 0.14; }
          100% { transform: scale(1.15); opacity: 0.24; }
        }

        /* ---------- Navbar ---------- */
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          padding: 1rem 1.5rem;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
        }
        .nav-inner {
          max-width: 1180px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav.scrolled {
          background: color-mix(in srgb, var(--bg) 82%, transparent);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }
        .logo {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text);
          letter-spacing: 0.02em;
          text-decoration: none;
        }
        .logo span { color: var(--accent); }

        .nav-links {
          display: none;
          align-items: center;
          gap: 1.9rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links a {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-dim);
          text-decoration: none;
          position: relative;
          padding: 0.2rem 0;
          transition: color 0.2s ease;
        }
        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0;
          height: 1.5px;
          background: var(--accent);
          transition: width 0.2s ease;
        }
        .nav-links a:hover {
          color: var(--text);
        }
        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 0.35rem;
        }
        .theme-toggle button {
          all: unset;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
          color: var(--text-dim);
          transition: background 0.25s ease, color 0.25s ease;
        }
        .theme-toggle button.active {
          background: var(--accent);
          color: var(--ink);
        }

        .hamburger {
          all: unset;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          border: 1px solid var(--border);
          color: var(--text);
          cursor: pointer;
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 49;
          background: var(--bg);
          padding: 5.5rem 1.75rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .mobile-menu a {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--text);
          text-decoration: none;
        }

        @media (min-width: 780px) {
          .nav-links { display: flex; }
          .hamburger { display: none; }
        }

        /* ---------- Hero content ---------- */
        .hero-main {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          padding: 2rem 1.5rem 5rem;
          align-items: center;
        }
        @media (min-width: 900px) {
          .hero-main {
            grid-template-columns: 1.15fr 0.85fr;
            padding: 3.5rem 1.5rem 6rem;
            min-height: 78vh;
          }
        }

        .terminal-prompt {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          color: var(--text-dim);
          margin-bottom: 1rem;
          display: flex;
          flex-wrap: wrap;
        }
        .prompt-user { color: var(--accent); }
        .prompt-colon { color: var(--text-dim); }
        .prompt-cmd { color: var(--text); }
        .cursor {
          margin-left: 2px;
          color: var(--accent);
          animation: blink 1s steps(1) infinite;
        }
        @keyframes blink { 50% { opacity: 0; } }

        .matrix-name {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 800;
          font-size: clamp(2.4rem, 7vw, 4.4rem);
          line-height: 1.05;
          letter-spacing: -0.01em;
          display: inline-block;
          color: var(--text);
        }
        .matrix-letter {
          display: inline-block;
          transition: color 0.15s ease;
        }
        .matrix-letter.is-matrix {
          color: var(--accent);
          text-shadow: 0 0 12px var(--current);
        }

        .tagline-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 0.7rem;
          margin: 1.1rem 0 1.25rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
        }
        .tag-pill {
          padding: 0.3rem 0.75rem;
          border: 1px solid var(--border);
          border-radius: 999px;
          color: var(--text-dim);
          background: var(--surface);
        }
        .tag-pill b { color: var(--accent); font-weight: 600; }

        .intro-text {
          font-size: 1.05rem;
          line-height: 1.65;
          color: var(--text-dim);
          max-width: 34rem;
          margin-bottom: 2rem;
        }

        .cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
          margin-bottom: 2.2rem;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.92rem;
          padding: 0.75rem 1.35rem;
          border-radius: 10px;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }
        .btn:hover { transform: translateY(-2px); }
        .btn-primary {
          background: var(--accent);
          color: var(--ink);
          box-shadow: 0 8px 24px -8px var(--current);
        }
        .btn-outline {
          border: 1.5px solid var(--border);
          color: var(--text);
          background: transparent;
        }
        .btn-ghost {
          color: var(--accent);
          padding-left: 0.2rem;
          padding-right: 0.2rem;
        }

        .social-row {
          display: flex;
          gap: 0.9rem;
        }
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 10px;
          border: 1px solid var(--border);
          color: var(--text-dim);
          transition: color 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .social-link:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-2px);
        }

        /* Terminal-framed photo */
        .photo-wrap {
          position: relative;
          justify-self: center;
        }
        .term-window {
          width: min(320px, 78vw);
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--bg-2);
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.45);
        }
        .term-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 0.75rem;
          background: rgba(0,0,0,0.15);
          border-bottom: 1px solid var(--border);
        }
        .term-dot { width: 10px; height: 10px; border-radius: 50%; }
        .term-dot:nth-child(1) { background: #ff5f56; }
        .term-dot:nth-child(2) { background: #ffbd2e; }
        .term-dot:nth-child(3) { background: #27c93f; }
        .term-tab {
          margin-left: 0.6rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: var(--text-dim);
        }
        .term-photo {
          width: 100%;
          aspect-ratio: 4 / 5;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at 30% 20%, var(--accent) 0%, transparent 55%),
            linear-gradient(160deg, var(--abyss), var(--ink));
        }
        .term-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .avatar-initials {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 800;
          font-size: 4.5rem;
          color: var(--foam);
          opacity: 0.9;
          letter-spacing: -0.02em;
        }

        .float-chip {
          position: absolute;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.72rem;
          padding: 0.5rem 0.8rem;
          border-radius: 10px;
          background: var(--bg);
          border: 1px solid var(--border);
          color: var(--text);
          box-shadow: 0 12px 24px -12px rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .chip-status { bottom: -18px; left: -18px; }
        .chip-status .dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #27c93f;
          box-shadow: 0 0 8px #27c93f;
        }
        .chip-year { top: -16px; right: -12px; }

        @media (prefers-reduced-motion: reduce) {
          .depth-bg, .glow, .cursor { animation: none !important; }
          .btn:hover, .social-link:hover { transform: none; }
        }
      `}</style>

      <header className={"nav" + (scrolled ? " scrolled" : "")}>
        <div className="nav-inner">
          <a className="logo" href="#top">hamza<span>.</span>ali<span>()</span></a>

          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.label === "Projects" ? (
                  <a onClick={onNavigateToProjects} style={{ cursor: "pointer" }}>
                    {link.label}
                  </a>
                ) : (
                  <a href={link.href}>{link.label}</a>
                )}
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <div className="theme-toggle" role="group" aria-label="Toggle color theme">
              <button
                aria-label="Light mode"
                className={theme === "light" ? "active" : ""}
                onClick={() => setTheme("light")}
              >
                <Sun size={15} />
              </button>
              <button
                aria-label="Dark mode"
                className={theme === "dark" ? "active" : ""}
                onClick={() => setTheme("dark")}
              >
                <Moon size={15} />
              </button>
            </div>

            <button
              className="hamburger"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <nav className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              onClick={() => {
                if (link.label === "Projects") {
                  onNavigateToProjects();
                }
                handleNavClick();
              }}
              style={{ cursor: link.label === "Projects" ? "pointer" : "auto" }}
              href={link.label !== "Projects" ? link.href : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}

      <div className="hero-content">
        <div className="depth-bg" />
        <div className="grid-overlay" />
        <div className="glow" />

        <main className="hero-main">
          <div>
            <TerminalPrompt />
            <h1 className="matrix-name">
              <MatrixName />
            </h1>

            <div className="tagline-row">
              <span className="tag-pill"><b>CS</b> Undergrad · GIK Institute</span>
              <span className="tag-pill">Web Developer</span>
              <span className="tag-pill">DevOps &amp; Cloud</span>
            </div>

            <p className="intro-text">
              Third-year Computer Science student building web apps and automating the
              boring parts, from CI/CD pipelines to cloud infrastructure. I like making
              systems that run themselves.
            </p>

            <div className="cta-row">
              <a className="btn btn-primary" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText size={17} /> View Resume
              </a>
              <a className="btn btn-outline" href="/Resume.pdf" download="Resume.pdf">
                <FileText size={17} /> Download Resume
              </a>
              <button
                className="btn btn-outline"
                onClick={onNavigateToProjects}
                style={{ border: "inherit", cursor: "pointer" }}
              >
                <FolderGit2 size={17} /> See Projects
              </button>
              <a className="btn btn-ghost" href="#contact">
                Contact Me <ArrowRight size={16} />
              </a>
            </div>

            <div className="social-row">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a key={label} className="social-link" href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>

          <div className="photo-wrap">
            <div className="term-window">
              <div className="term-bar">
                <span className="term-dot" />
                <span className="term-dot" />
                <span className="term-dot" />
                <span className="term-tab">profile.png</span>
              </div>
              <div className="term-photo">
                {PHOTO_URL ? (
                  <img src={PHOTO_URL} alt="Hamza Ali" />
                ) : (
                  <span className="avatar-initials">HA</span>
                )}
              </div>
            </div>
            <div className="float-chip chip-status">
              <span className="dot" /> Open to opportunities
            </div>
            <div className="float-chip chip-year">Year 03 / 04</div>
          </div>
        </main>
      </div>


    </div>
  );
}