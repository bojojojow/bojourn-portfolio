
"use client";

import { useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  FileSpreadsheet,
  Github,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MousePointer2,
  Sparkles,
  X,
} from "lucide-react";

const skills = [
  "Executive & Administrative Support",
  "Excel Reporting & Data Analysis",
  "WordPress Website Management",
  "Digital Marketing Support",
  "CRM & Lead Management",
  "Research & Operations",
];

const projects = [
  {
    id: "01",
    name: "Excel Sales Reporting",
    type: "DATA & OPERATIONS",
    headline: "Turning numbers into clarity.",
    description:
      "Maintaining and updating established Excel reporting dashboards, sales scorecards, booking percentages, lead-to-booking conversion reports, and representative performance tracking. Built around accurate, useful reporting that helps teams stay informed.",
    tags: ["Microsoft Excel", "PivotTables", "Formulas", "Reporting"],
    link: "",
    theme: "excel",
    icon: FileSpreadsheet,
  },
  {
    id: "02",
    name: "WordPress Operations",
    type: "WEBSITE MANAGEMENT",
    headline: "Keeping websites running smoothly.",
    description:
      "Updating existing WordPress websites, maintaining content and plugins, publishing blog posts, and supporting site improvements using Oxygen Builder and Elementor.",
    tags: ["WordPress", "Oxygen Builder", "Elementor", "Content"],
    link: "",
    theme: "wordpress",
    icon: Globe2,
  },
  {
    id: "03",
    name: "ByaheTaBai",
    type: "PERSONAL PROJECT",
    headline: "An idea turned into a live product.",
    description:
      "An AI-assisted travel management application I planned, tested, troubleshot, and deployed. It brings together itineraries, traveler management, and expense tracking in one place.",
    tags: ["Product Planning", "AI-Assisted Development", "Testing", "Deployment"],
    link: "https://byahetabai.vercel.app/",
    theme: "travel",
    icon: Code2,
  },
];

const experience = [
  {
    company: "MoveBees",
    role: "Data & Reports Analyst / Virtual Assistant",
    date: "JAN 2024 — PRESENT",
    detail:
      "Maintain and update existing Excel dashboards, sales scorecards, booking metrics, lead-to-booking conversion reports, and representative performance reports.",
  },
  {
    company: "Digital Agency Support",
    role: "Junior WordPress Developer",
    date: "JUN 2026 — PRESENT",
    detail:
      "Returned to support WordPress website operations, including updates to existing websites, content management, and site maintenance.",
  },
  {
    company: "AjileMedia",
    role: "Executive & Digital Marketing Assistant",
    date: "JUL 2025 — JUN 2026",
    detail:
      "Supported the COO with inbox management and client communications, plus Google Ads, Local Services Ads verification, and Google Business Profile operations.",
  },
  {
    company: "Digital Agency Support",
    role: "Junior WordPress Developer",
    date: "OCT 2024 — JUN 2025",
    detail:
      "Maintained existing WordPress websites using Oxygen Builder and Elementor, updated plugins, published blog content, and supported Google Business Profiles.",
  },
  {
    company: "Forsyth Advisors",
    role: "General Virtual Assistant",
    date: "AUG 2021 — MAY 2022",
    detail:
      "Provided CRM support, investor research, lead generation, and general administrative assistance.",
  },
  {
    company: "Local Furniture Outlet",
    role: "Previous Professional Experience",
    date: "DEC 2020 — JUN 2021",
    detail:
      "Earlier professional experience. Additional position details can be provided upon request.",
  },
  {
    company: "Concentrix",
    role: "Previous Professional Experience",
    date: "AUG 2020 — NOV 2020",
    detail:
      "Earlier professional experience. Additional position details can be provided upon request.",
  },
  {
    company: "Flatworld Solutions",
    role: "Previous Professional Experience",
    date: "MAY 2020 — AUG 2020",
    detail:
      "Earlier professional experience. Additional position details can be provided upon request.",
  },
  {
    company: "Teleperformance",
    role: "Previous Professional Experience",
    date: "JUN 2018 — APR 2020",
    detail:
      "Earlier professional experience. Additional position details can be provided upon request.",
  },
  {
    company: "iQor",
    role: "Previous Professional Experience",
    date: "MAR 2018 — MAY 2018",
    detail:
      "Earlier professional experience. Additional position details can be provided upon request.",
  },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [showAllExperience, setShowAllExperience] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // High-impact reversible 3D reveals, without sticky sections or forced heights.
  const aboutScroll = useScroll({ target: aboutRef, offset: ["start 100%", "start 38%"] });
  const workScroll = useScroll({ target: workRef, offset: ["start 100%", "start 38%"] });
  const experienceScroll = useScroll({ target: experienceRef, offset: ["start 100%", "start 38%"] });
  const contactScroll = useScroll({ target: contactRef, offset: ["start 100%", "start 38%"] });
  const aboutY = useTransform(aboutScroll.scrollYProgress, [0, 0.5, 1], [260, 85, 0]);
  const aboutScale = useTransform(aboutScroll.scrollYProgress, [0, 0.5, 1], [0.72, 0.91, 1]);
  const aboutRotate = useTransform(aboutScroll.scrollYProgress, [0, 0.5, 1], [13, 5, 0]);
  const aboutClip = useTransform(aboutScroll.scrollYProgress, [0, 0.5, 1], ["inset(28% 13% 10% 13% round 70px)", "inset(7% 3% 2% 3% round 30px)", "inset(0% 0% 0% 0% round 0px)"]);
  const workY = useTransform(workScroll.scrollYProgress, [0, 0.5, 1], [260, 85, 0]);
  const workScale = useTransform(workScroll.scrollYProgress, [0, 0.5, 1], [0.72, 0.91, 1]);
  const workRotate = useTransform(workScroll.scrollYProgress, [0, 0.5, 1], [13, 5, 0]);
  const workClip = useTransform(workScroll.scrollYProgress, [0, 0.5, 1], ["inset(28% 13% 10% 13% round 70px)", "inset(7% 3% 2% 3% round 30px)", "inset(0% 0% 0% 0% round 0px)"]);
  const experienceY = useTransform(experienceScroll.scrollYProgress, [0, 0.5, 1], [260, 85, 0]);
  const experienceScale = useTransform(experienceScroll.scrollYProgress, [0, 0.5, 1], [0.72, 0.91, 1]);
  const experienceRotate = useTransform(experienceScroll.scrollYProgress, [0, 0.5, 1], [13, 5, 0]);
  const experienceClip = useTransform(experienceScroll.scrollYProgress, [0, 0.5, 1], ["inset(28% 13% 10% 13% round 70px)", "inset(7% 3% 2% 3% round 30px)", "inset(0% 0% 0% 0% round 0px)"]);
  const contactY = useTransform(contactScroll.scrollYProgress, [0, 0.5, 1], [260, 85, 0]);
  const contactScale = useTransform(contactScroll.scrollYProgress, [0, 0.5, 1], [0.72, 0.91, 1]);
  const contactRotate = useTransform(contactScroll.scrollYProgress, [0, 0.5, 1], [13, 5, 0]);
  const contactClip = useTransform(contactScroll.scrollYProgress, [0, 0.5, 1], ["inset(28% 13% 10% 13% round 70px)", "inset(7% 3% 2% 3% round 30px)", "inset(0% 0% 0% 0% round 0px)"]);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroTextY = useTransform(heroProgress, [0, 1], [0, -150]);
  const heroTextOpacity = useTransform(heroProgress, [0, 0.9], [1, 0.3]);
  const heroPhotoY = useTransform(heroProgress, [0, 1], [0, -110]);
  const heroPhotoScale = useTransform(heroProgress, [0, 1], [1, 1.32]);
  const heroPhotoRotate = useTransform(heroProgress, [0, 1], [0, -10]);
  const goToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
  };

  const currentProject = projects[activeProject];
  const ProjectIcon = currentProject.icon;
  const visibleExperience = showAllExperience
    ? experience
    : experience.slice(0, 5);

  return (
    <main className="va-site">
      <header className="va-header">
        <div className="va-shell va-header-inner">
          <a href="#home" onClick={goToTop} className="va-logo">
            BOJOURN<span>®</span>
          </a>

          <nav className={menuOpen ? "va-nav open" : "va-nav"}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Selected Work</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>

          <a className="va-header-cta" href="mailto:bojourn3@gmail.com">
            LET'S TALK <ArrowUpRight size={15} />
          </a>

          <button
            className="va-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section ref={heroRef} id="home" className="va-hero">
        <div className="va-shell va-hero-grid">
          <motion.div className="va-hero-content" style={reduceMotion ? undefined : { y: heroTextY, opacity: heroTextOpacity }}>
            <div className="va-eyebrow">
              <span className="va-status-dot" />
              VIRTUAL ASSISTANT / DIGITAL OPERATIONS
            </div>

            <h1>
              Your business.
              <br />
              <span>My backend.</span>
            </h1>

            <p className="va-hero-description">
              Hi, I'm <strong>Bojourn.</strong> A multi-skilled Virtual
              Assistant helping businesses stay organized, make sense of
              their data, manage digital operations, and get things done.
            </p>

            <div className="va-hero-actions">
              <a href="#work" className="va-primary-button">
                EXPLORE MY WORK <ArrowUpRight size={18} />
              </a>
              <a href="#contact" className="va-secondary-button">
                WORK WITH ME <ArrowRight size={17} />
              </a>
            </div>

            <div className="va-hero-meta">
              <span><MapPin size={14} /> CAGAYAN DE ORO, PH</span>
              <span><span className="va-mini-dot" /> OPEN TO REMOTE OPPORTUNITIES</span>
            </div>
          </motion.div>

          <motion.div className="va-hero-photo-wrap" style={reduceMotion ? undefined : { y: heroPhotoY, scale: heroPhotoScale, rotate: heroPhotoRotate }}>
            <div className="va-photo">
              <img
                src="/portrait.png"
                alt="Portrait of Bojourn"
                className="va-photo-image"
              />
              <div className="va-photo-bottom">
                <span>BOJOURN / VIRTUAL ASSISTANT</span>
                <span>001 — PROFILE</span>
              </div>
            </div>
            <div className="va-photo-stamp">
              <Sparkles size={20} />
              <span>YOUR EXTRA<br />PAIR OF HANDS</span>
            </div>
            <div className="va-photo-side-label">BEHIND THE SCENES, AHEAD OF THE GAME.</div>
          </motion.div>
        </div>
        <div className="va-hero-bottom va-shell">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDownRight size={18} />
          <span>PORTFOLIO / 2026</span>
        </div>
      </section>

      <motion.section ref={aboutRef} id="about" className="va-about va-morph-section" style={reduceMotion ? undefined : { y: aboutY, scale: aboutScale, rotateX: aboutRotate, clipPath: aboutClip } }>
        <div className="va-shell">
          <div className="va-section-topline">
            <span>01 / WHAT I BRING TO THE TABLE</span>
            <span>MORE THAN JUST ADMIN SUPPORT</span>
          </div>

          <div className="va-about-layout">
            <div>
              <h2>
                The work behind
                <br />
                <em>the work.</em>
              </h2>
              <p className="va-about-intro">
                From executive inboxes to Excel reports and website updates,
                I help keep the moving parts of a business moving.
              </p>
            </div>

            <div className="va-about-right">
              <p>
                My background spans virtual assistance, reporting, website
                operations, and digital marketing support. I enjoy figuring
                out how things work, improving everyday processes, and
                handling the details that make a difference.
              </p>
              <div className="va-skills">
                {skills.map((skill, index) => (
                  <div className="va-skill" key={skill}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{skill}</strong>
                    <ArrowUpRight size={15} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section ref={workRef} id="work" className="va-work va-morph-section" style={reduceMotion ? undefined : { y: workY, scale: workScale, rotateX: workRotate, clipPath: workClip } }>
        <div className="va-shell">
          <div className="va-section-topline va-section-topline-dark">
            <span>02 / SELECTED WORK</span>
            <span>OPERATIONS. INITIATIVE. EXECUTION.</span>
          </div>

          <div className="va-work-heading">
            <div>
              <p className="va-kicker">A FEW THINGS I'VE WORKED ON</p>
              <h2>Proof of <span>work.</span></h2>
            </div>
            <p>
              A look at the kind of work I do, from everyday business
              operations to building something of my own.
            </p>
          </div>

          <LayoutGroup id="portfolio-project-tabs">
            <div className="va-project-tabs" role="tablist" aria-label="Project selection">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  role="tab"
                  id={`project-tab-${index}`}
                  aria-selected={activeProject === index}
                  aria-controls="project-panel"
                  className={activeProject === index ? "va-project-tab active" : "va-project-tab"}
                  onClick={() => setActiveProject(index)}
                >
                  {activeProject === index && (
                    <motion.span
                      layoutId="selected-project-tab"
                      className="va-tab-morph-bg"
                      transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span className="va-tab-content">
                    <span className="va-tab-number">{project.id}</span>
                    <span>{project.name}</span>
                    <ArrowUpRight size={17} />
                  </span>
                </button>
              ))}
            </div>
          </LayoutGroup>

          <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className={`va-project-panel ${currentProject.theme}`}
            key={currentProject.id}
            id="project-panel"
            role="tabpanel"
            aria-labelledby={`project-tab-${activeProject}`}
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.975, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -16, scale: 0.985, filter: "blur(5px)" }}
            transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 210, damping: 27, mass: 0.9 }}
          >
            <div className="va-project-visual">
              <div className="va-project-visual-top">
                <span>PROJECT / {currentProject.id}</span>
                <span>BOJOURN®</span>
              </div>

              <div className="va-project-art">
                <div className="va-project-art-icon">
                  <ProjectIcon size={45} strokeWidth={1.3} />
                </div>
                <span className="va-project-art-label">{currentProject.type}</span>
                <strong>{currentProject.name}</strong>
                <div className="va-art-lines">
                  <span /><span /><span />
                </div>
              </div>

              <div className="va-project-visual-bottom">
                <span>CASE STUDY {currentProject.id} / 03</span>
                <MousePointer2 size={18} />
              </div>
            </div>

            <div className="va-project-detail">
              <div className="va-project-detail-label">
                <span>{currentProject.type}</span>
                <span>{currentProject.id} / 03</span>
              </div>
              <h3>{currentProject.headline}</h3>
              <p>{currentProject.description}</p>
              <div className="va-project-tags">
                {currentProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              {currentProject.link ? (
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="va-project-link"
                >
                  VIEW LIVE PROJECT <ExternalLink size={17} />
                </a>
              ) : (
                <span className="va-project-note">
                  Work samples available upon request, subject to confidentiality.
                </span>
              )}
            </div>
          </motion.div>
          </AnimatePresence>

          <div className="va-project-progress">
            <span>0{activeProject + 1} / 03</span>
            <div className="va-progress-bars">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  aria-label={`Show ${project.name}`}
                  className={index === activeProject ? "active" : ""}
                  onClick={() => setActiveProject(index)}
                />
              ))}
            </div>
            <button
              type="button"
              className="va-next-project"
              onClick={() => setActiveProject((activeProject + 1) % projects.length)}
            >
              NEXT PROJECT <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </motion.section>

      <motion.section ref={experienceRef} id="experience" className="va-experience va-morph-section" style={reduceMotion ? undefined : { y: experienceY, scale: experienceScale, rotateX: experienceRotate, clipPath: experienceClip } }>
        <div className="va-shell">
          <div className="va-section-topline">
            <span>03 / CAREER TIMELINE</span>
            <span>THE JOURNEY SO FAR</span>
          </div>

          <div className="va-experience-heading">
            <div>
              <p className="va-kicker">WHERE I'VE MADE AN IMPACT</p>
              <h2>Experience<span>®</span></h2>
            </div>
            <p>
              A mix of virtual assistance, reporting, digital operations,
              and earlier professional roles.
            </p>
          </div>

          <div className="va-timeline">
            {visibleExperience.map((item, index) => (
              <motion.div layout="position" className="va-timeline-item" key={`${item.company}-${item.date}`}>
                <button
                  type="button"
                  className="va-timeline-main"
                  aria-expanded={expandedExperience === index}
                  onClick={() =>
                    setExpandedExperience(expandedExperience === index ? null : index)
                  }
                >
                  <span className="va-timeline-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="va-timeline-company">
                    <strong>{item.company}</strong>
                    <small>{item.role}</small>
                  </span>
                  <span className="va-timeline-date">{item.date}</span>
                  <ChevronDown
                    size={19}
                    className={expandedExperience === index ? "rotated" : ""}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {expandedExperience === index && (
                    <motion.div
                      className="va-timeline-detail"
                      key="expanded-detail"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 250, damping: 30 }}
                      style={{ overflow: "hidden" }}
                    >
                      <p>{item.detail}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <button
            className="va-show-more"
            type="button"
            onClick={() => {
              setShowAllExperience(!showAllExperience);
              setExpandedExperience(null);
            }}
          >
            {showAllExperience ? "SHOW LESS EXPERIENCE" : "VIEW ALL EXPERIENCE"}
            {showAllExperience ? <X size={16} /> : <ArrowDownRight size={17} />}
          </button>
        </div>
      </motion.section>

      <motion.section ref={contactRef} id="contact" className="va-contact va-morph-section" style={reduceMotion ? undefined : { y: contactY, scale: contactScale, rotateX: contactRotate, clipPath: contactClip } }>
        <div className="va-shell">
          <div className="va-section-topline va-contact-line">
            <span>04 / LET'S CONNECT</span>
            <span>YOUR NEXT RELIABLE TEAMMATE?</span>
          </div>

          <div className="va-contact-grid">
            <div>
              <p className="va-kicker">GOT SOMETHING ON YOUR PLATE?</p>
              <h2>
                Let's make
                <br />
                <em>it happen.</em>
              </h2>
            </div>
            <div className="va-contact-right">
              <p>
                Need someone dependable to handle the details, support your
                operations, and keep things organized? I'd love to hear
                what you're working on.
              </p>
              <a className="va-email-link" href="mailto:bojourn3@gmail.com">
                bojourn3@gmail.com <ArrowUpRight size={24} />
              </a>
              <a
                className="va-github-link"
                href="https://github.com/bojojojow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={17} /> GITHUB <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <footer className="va-footer">
        <div className="va-shell va-footer-inner">
          <span>© 2026 BOJOURN®</span>
          <span>VIRTUAL ASSISTANT / DIGITAL OPERATIONS</span>
          <a href="#home" onClick={goToTop}>BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
