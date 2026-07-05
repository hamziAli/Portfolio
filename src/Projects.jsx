import React, { useState } from "react";
import { Github, ArrowRight, Sun, Moon, X, Menu } from "lucide-react";

const PROJECTS = [
    {
        title: "DevOps Monitoring Dashboard",
        summary: "A containerized full-stack monitoring platform with real-time logs, CI/CD, Docker Compose, and AWS deployment.",
        stack: ["React", "Flask", "MongoDB", "Docker", "Terraform"],
        repo: "https://github.com/hamziAli/DevOps_Project",
        demo: "https://github.com/hamziAli/DevOps_Project",
        description: `A containerized, real-time log monitoring dashboard designed for a complete DevOps pipeline deployment. This project serves as a practical implementation of modern CI/CD practices and infrastructure as code.

The Log Monitoring Dashboard provides a centralized interface to view system logs in real-time. The application utilizes a microservices-style architecture, with a Python Flask backend, a React frontend, and a MongoDB database, all orchestrated via Docker Compose.`,
        tech: {
            frontend: "React (Vite)",
            backend: "Python Flask",
            database: "MongoDB",
            containerization: "Docker & Docker Compose",
            cicd: "GitHub Actions (Automated Testing & Deployment)",
            hosting: "AWS EC2 (t2.medium)",
            iac: "Terraform",
        },
        features: [
            "Real-time log streaming and filtering",
            "Automated CI/CD pipeline with GitHub Actions",
            "Infrastructure as Code with Terraform",
            "Multi-container orchestration with Docker Compose",
            "Responsive web interface for log visualization",
        ],
        // Add screenshot/video URLs here
        screenshot: "",
        videoUrl: "",
    },
    {
        title: "FBR Property Valuation",
        summary: "An intelligent valuation tool that reads Excel-based FBR rates and calculates property taxes with a guided workflow.",
        stack: ["Python", "FastAPI", "React", "Excel", "Pytest"],
        repo: "https://github.com/hamziAli/House_Valuation-FBR-",
        demo: "https://github.com/hamziAli/House_Valuation-FBR-",
        description: `Calculate FBR fair market value for Karachi properties using area-wise rates from Excel, with commercial transfer tax calculations (3% active filer/overseas, 10.5% non-filer).

The app automatically reads FBR-Value-Karachi-2022.xlsx and parses category rate tables and area-wise valuation categories. Built with a practical flow: Address Input → FBR Area Name → Category → Rate → Final Valuation.`,
        tech: {
            backend: "Python FastAPI",
            frontend: "React",
            database: "Excel-based",
            testing: "Pytest",
        },
        features: [
            "Fuzzy address matching for area lookup",
            "Automatic unit conversion (sq yd ↔ sq ft)",
            "Tax calculation with filer/non-filer rates",
            "Excel file parsing and validation",
            "RESTful API for valuations",
        ],
        screenshots: [
            "/Result-1-FBR.png",
            "/Result-2-FBR.png",
        ],
        videoUrl: "/FBR_vid.mp4",
        isLocalVideo: true,
    },
    {
        title: "gikihub",
        summary: "A student-focused platform experience designed to centralize academic resources and community-facing workflows.",
        stack: ["React", "Node", "MongoDB"],
        repo: "https://github.com/hamziAli/gikihub",
        demo: "https://github.com/hamziAli/gikihub",
        description: "A comprehensive student platform connecting academic resources, collaboration tools, and community engagement.",
        features: [
            "Centralized academic resource management",
            "Community collaboration tools",
            "Student networking features",
            "Resource sharing and discovery",
        ],
        screenshot: "",
        videoUrl: "",
    },
    {
        title: "Battleship",
        summary: "A classic strategy game recreated with a clean interface and polished gameplay logic.",
        stack: ["JavaScript", "React", "Game Logic"],
        repo: "https://github.com/hamziAli/Battleship",
        demo: "https://github.com/hamziAli/Battleship",
        description: "A fully playable Battleship game with intuitive UI, AI opponent, and strategic gameplay mechanics.",
        features: [
            "Interactive game board and ship placement",
            "AI opponent with strategic logic",
            "Turn-based gameplay",
            "Win/loss tracking",
        ],
        screenshot: "",
        videoUrl: "",
    },
    {
        title: "Student Gradebook",
        summary: "A practical grade management app that helps organize coursework, records, and student progress efficiently.",
        stack: ["Python", "Flask", "SQLite"],
        repo: "https://github.com/hamziAli/student-gradebook",
        demo: "https://github.com/hamziAli/student-gradebook",
        description: "A streamlined gradebook for managing student records, course assignments, and progress tracking.",
        features: [
            "Student record management",
            "Grade tracking and calculation",
            "Course organization",
            "Progress analytics",
        ],
        screenshot: "",
        videoUrl: "",
    },
];

export default function Projects({ onNavigateToHero = () => { } }) {
    const [theme, setTheme] = useState("dark");
    const [mobileOpen, setMobileOpen] = useState(false);
    const [expandedProject, setExpandedProject] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = () => setMobileOpen(false);

    return (
        <div className="projects-root" data-theme={theme}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Inter:wght@400;500;600;700&display=swap');

        .projects-root {
          --ink: #00171F;
          --abyss: #003459;
          --ocean: #007EA7;
          --current: #00A8E8;
          --foam: #FFFFFF;
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          transition: background 0.4s ease, color 0.4s ease;
        }
        .projects-root[data-theme="dark"] {
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
        .projects-root[data-theme="light"] {
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

        .projects-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          padding: 1rem 1.5rem;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
        }
        .projects-nav.scrolled {
          background: color-mix(in srgb, var(--bg) 82%, transparent);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }
        .projects-nav-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .projects-logo {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text);
          text-decoration: none;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .projects-logo:hover {
          color: var(--accent);
        }
        .projects-logo span { color: var(--accent); }

        .projects-nav-links {
          display: none;
          align-items: center;
          gap: 1.9rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .projects-nav-links a {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-dim);
          text-decoration: none;
          position: relative;
          padding: 0.2rem 0;
          transition: color 0.2s ease;
          cursor: pointer;
        }
        .projects-nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0;
          height: 1.5px;
          background: var(--accent);
          transition: width 0.2s ease;
        }
        .projects-nav-links a:hover {
          color: var(--text);
        }
        .projects-nav-links a:hover::after {
          width: 100%;
        }

        .projects-mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 49;
          background: var(--bg);
          padding: 5.5rem 1.75rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .projects-mobile-menu a {
          font-family: 'JetBrains Mono', monospace;
          font-size: 1.4rem;
          font-weight: 600;
          color: var(--text);
          text-decoration: none;
          cursor: pointer;
        }

        .projects-nav-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .theme-toggle {
          display: flex;
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
          transition: background 0.25s ease;
        }
        .theme-toggle button.active {
          background: var(--accent);
          color: var(--ink);
        }

        .hamburger {
          all: unset;
          display: none;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          border: 1px solid var(--border);
          color: var(--text);
          cursor: pointer;
        }

        .projects-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
        }

        .projects-header-section {
          margin-bottom: 3rem;
        }
        .eyebrow {
          display: inline-flex;
          margin: 0 0 0.6rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--accent);
        }
        .projects-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(2rem, 4vw, 2.8rem);
          line-height: 1.2;
          margin: 0 0 1rem;
          color: var(--text);
        }

        .projects-list {
          display: grid;
          gap: 1.5rem;
        }

        .project-item {
          border: 1px solid var(--border);
          border-radius: 22px;
          padding: 1.8rem;
          background: var(--surface);
          backdrop-filter: blur(8px);
          box-shadow: 0 20px 45px -24px rgba(0,0,0,0.45);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .project-item:hover {
          border-color: var(--accent);
          box-shadow: 0 30px 60px -20px rgba(0,168,232,0.2);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 1rem;
        }
        .project-title {
          margin: 0;
          font-size: 1.35rem;
          color: var(--text);
          font-weight: 700;
        }
        .project-summary {
          margin: 0.5rem 0 0;
          color: var(--text-dim);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin: 1rem 0;
        }
        .tech-badge {
          display: inline-flex;
          padding: 0.4rem 0.8rem;
          border-radius: 999px;
          border: 1px solid var(--border);
          background: rgba(0,168,232,0.08);
          color: var(--accent);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .project-actions-expanded {
          display: flex;
          gap: 0.8rem;
          margin-top: 1.5rem;
        }
        .project-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.2rem;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s ease;
        }
        .project-link-primary {
          background: var(--accent);
          color: var(--ink);
        }
        .project-link-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -8px var(--current);
        }
        .project-link-secondary {
          border: 1.5px solid var(--border);
          color: var(--text);
          background: transparent;
        }
        .project-link-secondary:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .expanded-content {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          display: grid;
          gap: 2rem;
        }

        .content-section h3 {
          font-size: 1.1rem;
          color: var(--text);
          margin: 0 0 1rem;
          font-weight: 700;
        }

        .description-text {
          line-height: 1.8;
          color: var(--text-dim);
          white-space: pre-wrap;
        }

        .tech-details {
          display: grid;
          gap: 0.8rem;
        }
        .tech-item {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 1rem;
        }
        .tech-label {
          font-family: 'JetBrains Mono', monospace;
          color: var(--accent);
          font-weight: 600;
          font-size: 0.85rem;
        }
        .tech-value {
          color: var(--text-dim);
        }

        .features-list {
          display: grid;
          gap: 0.6rem;
        }
        .feature-item {
          display: flex;
          gap: 0.8rem;
          color: var(--text-dim);
          align-items: center;
        }
        .feature-item::before {
          content: "▸";
          color: var(--accent);
          font-weight: bold;
        }

        .media-section {
          display: grid;
          gap: 1rem;
        }
        .media-placeholder {
          width: 100%;
          height: 300px;
          background: linear-gradient(135deg, var(--bg-2), rgba(0,168,232,0.1));
          border: 1px solid var(--border);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-dim);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
        }

        @media (min-width: 780px) {
          .hamburger { display: none; }
          .projects-nav-links { display: flex; }
        }
        @media (max-width: 780px) {
          .hamburger { display: flex; }
          .projects-container {
            padding: 2rem 1.5rem;
          }
          .project-item {
            padding: 1.2rem;
          }
          .project-title {
            font-size: 1.1rem;
          }
          .tech-item {
            grid-template-columns: 100px 1fr;
          }
        }
      `}</style>

            <nav className={"projects-nav" + (scrolled ? " scrolled" : "")}>
                <div className="projects-nav-inner">
                    <a
                        className="projects-logo"
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            onNavigateToHero();
                        }}
                    >
                        hamza<span>.</span>ali<span>()</span>
                    </a>

                    <ul className="projects-nav-links">
                        <li><a onClick={onNavigateToHero}>About</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Certifications</a></li>
                        <li><a>Skills</a></li>
                        <li><a>Contact</a></li>
                    </ul>

                    <div className="projects-nav-right">
                        <div className="theme-toggle">
                            <button
                                className={theme === "light" ? "active" : ""}
                                onClick={() => setTheme("light")}
                                title="Light mode"
                            >
                                <Sun size={15} />
                            </button>
                            <button
                                className={theme === "dark" ? "active" : ""}
                                onClick={() => setTheme("dark")}
                                title="Dark mode"
                            >
                                <Moon size={15} />
                            </button>
                        </div>
                        <button
                            className="hamburger"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
                        </button>
                    </div>
                </div>
            </nav>

            {mobileOpen && (
                <nav className="projects-mobile-menu">
                    <a onClick={() => { onNavigateToHero(); handleNavClick(); }}>About</a>
                    <a onClick={handleNavClick}>Projects</a>
                    <a onClick={handleNavClick}>Certifications</a>
                    <a onClick={handleNavClick}>Skills</a>
                    <a onClick={handleNavClick}>Contact</a>
                </nav>
            )}

            <div className="projects-container">
                <div className="projects-header-section">
                    <p className="eyebrow">Portfolio</p>
                    <h1 className="projects-title">Featured Projects</h1>
                    <p style={{ color: "var(--text-dim)", fontSize: "1.05rem", lineHeight: "1.7" }}>
                        Explore the projects I've built, from full-stack web applications to DevOps infrastructure.
                        Click any project to see detailed information, tech stack, and links to view the work.
                    </p>
                </div>

                <div className="projects-list">
                    {PROJECTS.map((project, idx) => (
                        <div
                            key={idx}
                            className="project-item"
                            onClick={() =>
                                setExpandedProject(expandedProject === idx ? null : idx)
                            }
                        >
                            <div className="project-header">
                                <div>
                                    <h2 className="project-title">{project.title}</h2>
                                    <p className="project-summary">{project.summary}</p>
                                </div>
                            </div>

                            <div className="tech-pills">
                                {project.stack.map((tech) => (
                                    <span className="tech-badge" key={tech}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {expandedProject === idx && (
                                <div className="expanded-content">
                                    {project.description && (
                                        <div className="content-section">
                                            <h3>Overview</h3>
                                            <p className="description-text">{project.description}</p>
                                        </div>
                                    )}

                                    {project.tech && Object.keys(project.tech).length > 0 && (
                                        <div className="content-section">
                                            <h3>Tech Stack</h3>
                                            <div className="tech-details">
                                                {Object.entries(project.tech).map(([key, value]) => (
                                                    <div className="tech-item" key={key}>
                                                        <span className="tech-label">
                                                            {key.charAt(0).toUpperCase() +
                                                                key.slice(1).replace(/([A-Z])/g, " $1")}
                                                        </span>
                                                        <span className="tech-value">{value}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {project.features && project.features.length > 0 && (
                                        <div className="content-section">
                                            <h3>Key Features</h3>
                                            <div className="features-list">
                                                {project.features.map((feature, i) => (
                                                    <div className="feature-item" key={i}>
                                                        {feature}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {(project.screenshot || project.screenshots || project.videoUrl) && (
                                        <div className="content-section">
                                            <h3>Media</h3>
                                            <div className="media-section">
                                                {project.screenshots && project.screenshots.length > 0 ? (
                                                    project.screenshots.map((ss, idx) => (
                                                        <img
                                                            key={idx}
                                                            src={ss}
                                                            alt={`${project.title} Screenshot ${idx + 1}`}
                                                            style={{
                                                                maxWidth: "100%",
                                                                borderRadius: "12px",
                                                                border: "1px solid var(--border)",
                                                            }}
                                                        />
                                                    ))
                                                ) : project.screenshot ? (
                                                    <img
                                                        src={project.screenshot}
                                                        alt={project.title}
                                                        style={{
                                                            maxWidth: "100%",
                                                            borderRadius: "12px",
                                                            border: "1px solid var(--border)",
                                                        }}
                                                    />
                                                ) : (
                                                    <div className="media-placeholder">
                                                        📸 Screenshot placeholder
                                                    </div>
                                                )}
                                                {project.videoUrl ? (
                                                    project.isLocalVideo ? (
                                                        <video
                                                            width="100%"
                                                            height="400"
                                                            controls
                                                            preload="auto"
                                                            style={{ borderRadius: "12px", backgroundColor: "#000", display: "block" }}
                                                        >
                                                            <source src={project.videoUrl} type="video/mp4" />
                                                            Your browser does not support HTML5 video.
                                                            <a href={project.videoUrl} download style={{ color: "var(--accent)" }}>
                                                                Download video
                                                            </a>
                                                        </video>
                                                    ) : (
                                                        <iframe
                                                            width="100%"
                                                            height="400"
                                                            src={project.videoUrl}
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                            style={{ borderRadius: "12px" }}
                                                        />
                                                    )
                                                ) : (
                                                    <div className="media-placeholder">
                                                        🎥 Video placeholder
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    <div className="project-actions-expanded">
                                        <a
                                            className="project-link-btn project-link-primary"
                                            href={project.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github size={18} /> View Repository
                                        </a>
                                        <a
                                            className="project-link-btn project-link-secondary"
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            View Project <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
