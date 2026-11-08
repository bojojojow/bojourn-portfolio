
"use client";

import { useRef, useState } from "react";
import WorkTrial from "./components/WorkTrial";
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
      "Prepared and improved daily sales reports and scorecards, including booking rates and representative performance. Helped design, test, and troubleshoot partial reporting automation.",
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
    date: "DATES TO CONFIRM",
    detail:
      "Prepared four daily sales reports for 11–20 representatives; improved reporting layouts, accuracy, and partial automation workflows.",
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
      "Supported the Chief Digital Officer with inbox management and client communications, plus Google Ads, Local Services Ads verification, and Google Business Profile operations.",
  },
  {
    company: "Digital Agency Support",
    role: "Website QA & Administrative Assistant",
    date: "OCT 2024 — JUN 2025",
    detail:
      "Managed company inboxes, reviewed service and location pages for quality and accuracy, published blog content, and supported client communication.",
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
    role: "Aftercare Executive",
    date: "DATES TO CONFIRM",
    detail:
      "Earlier professional experience. Additional position details can be provided upon request.",
  },
  {
    company: "Concentrix",
    role: "Advisor — Transaction Processing",
    date: "DATES TO CONFIRM",
    detail:
      "Earlier professional experience. Additional position details can be provided upon request.",
  },
  {
    company: "Flatworld Solutions",
    role: "Retention Specialist",
    date: "DATES TO CONFIRM",
    detail:
      "Earlier professional experience. Additional position details can be provided upon request.",
  },
  {
    company: "Teleperformance",
    role: "Customer Service Representative → Fraud Prevention Officer",
    date: "DATES TO CONFIRM",
    detail:
      "Earlier professional experience. Additional position details can be provided upon request.",
  },
  {
    company: "iQor",
    role: "Customer Sales Representative",
    date: "DATES TO CONFIRM",
    detail:
      "Earlier professional experience. Additional position details can be provided upon request.",
  },
];



// Each transition is driven by actual page scroll progress, not an on-enter fade.
// Sticky stages morph the same visual object across a section boundary.
function ScrollMorphBridge({ from, to, index }: { from: string; to: string; index: number }) {
  const track = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: track, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0.65, 1, 1.22, 0.84, 0.55]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-9, 0, 8]);
  const radius = useTransform(scrollYProgress, [0, 0.48, 1], ["3px", "40px", "3px"]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], ["-28vw", "0vw", "28vw"]);
  const fill = useTransform(scrollYProgress, [0, 0.5, 1], ["#d9dfc8", "#176e45", "#263c30"]);
  const firstOpacity = useTransform(scrollYProgress, [0.12, 0.35, 0.5], [1, 1, 0]);
  const secondOpacity = useTransform(scrollYProgress, [0.5, 0.68, 0.88], [0, 1, 1]);
  if (reduced) return <div className="v6-bridge-reduced" aria-hidden="true"><span>{String(index).padStart(2,"0")} / {to}</span></div>;
  return <div className="v6-morph-track" ref={track} aria-hidden="true">
    <div className="v6-morph-sticky">
      <div className="v6-morph-index">BOJOURN / TRANSITION {String(index).padStart(2,"0")}</div>
      <div className="v6-morph-axis"><span>{from}</span><span>↓ SCROLL TO TRANSFORM</span><span>{to}</span></div>
      <motion.div className="v6-morph-object" style={{ scale, rotate, borderRadius: radius, x, backgroundColor: fill }}>
        <div className="v6-morph-grid" />
        <motion.div className="v6-morph-object-label" style={{opacity:firstOpacity}}>{from}<span>↗</span></motion.div>
        <motion.div className="v6-morph-object-label v6-morph-object-next" style={{opacity:secondOpacity}}>{to}<span>↘</span></motion.div>
      </motion.div>
      <div className="v6-morph-bottom"><span>DESIGN × DEVELOPMENT × OPERATIONS</span><span>0{index} / 05</span></div>
    </div>
  </div>;
}

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

  const goToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
  };

  const entrance = reduceMotion ? {} : { initial: { opacity: 0, y: 38 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.12 }, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } };
  const currentProject = projects[activeProject];
  const visibleExperience = showAllExperience
    ? experience
    : experience.slice(0, 5);

  return (
    <main className="va-site">
      <header className="va-header">
        <div className="va-shell va-header-inner">
          <a href="#home" onClick={goToTop} className="va-logo"><span className="pixel-avatar" aria-hidden="true">👨🏻‍💻</span> Bojourn Franco</a>
          <nav className={menuOpen ? "va-nav open" : "va-nav"}>
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#app-lab" onClick={() => setMenuOpen(false)}>App Lab</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <button className="va-menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </header>
      <section ref={heroRef} id="home" className="va-hero">
        <div className="va-shell va-hero-grid">
          <motion.div className="va-hero-content" initial={reduceMotion ? false : { opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.75, ease: "easeOut" }}>
            <h1>Virtual Support,<br />Digital Operations,<br />and Practical Tools.<span className="cursor-block" aria-hidden="true" /></h1>
            <p className="va-hero-description">I help businesses stay organized, streamline workflows, and build useful digital solutions.</p>
            <div className="va-hero-actions">
              <a href="#work" className="va-primary-button">View Selected Work <ArrowRight size={16} /></a>
              <a href="#about" className="va-secondary-button">About Me</a>
            </div>
          </motion.div>
          <motion.div className="pixel-hero-art" initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.18, duration: 0.85, ease: "easeOut" }}><img src="/pixel-workspace.svg" alt="Pixel art desktop computer with books, coffee mug and plant" /></motion.div>
        </div>
        <div className="va-shell pixel-selected-work">
          <div className="pixel-selected-heading"><span className="pixel-green-dot" /> SELECTED WORK <span className="pixel-rule" /></div>
          <motion.div className="pixel-selected-grid" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.55 }}>
            <a href="#work"><span>01</span><div><strong>MoveBees Reporting</strong><small>Sales data, reports, and workflow ops</small></div></a>
            <a href="#work"><span>02</span><div><strong>WordPress Operations</strong><small>Website updates, maintenance, and support</small></div></a>
            <a href="#work"><span>03</span><div><strong>ByaheTaBai</strong><small>Travel planning web app</small></div></a>
          </motion.div>
        </div>
      </section>

      <ScrollMorphBridge from="INTRODUCTION" to="ABOUT" index={1} />
      <motion.section ref={aboutRef} id="about" className="va-about va-morph-section" {...entrance}>
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
              <motion.figure className="va-portrait-window" initial={reduceMotion ? false : { opacity: 0, y: 45, rotate: -3 }} whileInView={{ opacity: 1, y: 0, rotate: -1.5 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
                <div className="va-portrait-title"><span className="va-portrait-led" /> BOJOURN.JPG <span>— □ ×</span></div>
                <img src="/bojourn-pixel-portrait.png" alt="Pixel-art portrait of Bojourn Franco inside a retro computer window" loading="lazy" />
                <figcaption>THE HUMAN BEHIND THE WORK <span>↗</span></figcaption>
              </motion.figure>
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

      <ScrollMorphBridge from="ABOUT" to="SELECTED WORK" index={2} />
      <motion.section ref={workRef} id="work" className="va-work va-morph-section" {...entrance}>
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
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.975, filter: "blur(0px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -16, scale: 0.985, filter: "blur(0px)" }}
            transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 210, damping: 27, mass: 0.9 }}
          >
            <div className="va-project-visual">
              <div className="va-project-visual-top">
                <span>PROJECT / {currentProject.id}</span>
                <span>BOJOURN®</span>
              </div>

              <div className="va-project-art">
                {currentProject.theme === "excel" ? (
                  <div className="va-scene va-scene-sheet" aria-hidden="true"><div className="va-scene-bar"><span>● ● ●</span> sales-report.xlsx</div><div className="va-scene-sheet-grid">{Array.from({length: 28}, (_,i) => <span key={i} className={i % 7 === 0 ? "va-scene-highlight" : ""}>{i % 7 === 0 ? ["LEADS","BOOKED","RATE","SALES"][Math.floor(i/7)] : i % 4 === 0 ? "•••" : ""}</span>)}</div><div className="va-scene-sheet-foot">REPORT STATUS <strong>READY ✓</strong></div></div>
                ) : currentProject.theme === "wordpress" ? (
                  <div className="va-scene va-scene-browser" aria-hidden="true"><div className="va-scene-bar"><span>● ● ●</span> client-site.com / dashboard</div><div className="va-scene-browser-inner"><div className="va-scene-side"><span>W</span><i/><i/><i/></div><div className="va-scene-page"><div className="va-scene-page-hero"/><div className="va-scene-page-line"/><div className="va-scene-page-line short"/><div className="va-scene-page-cards"><i/><i/><i/></div></div></div><div className="va-scene-browser-foot">PLUGINS UPDATED <span>● SITE ONLINE</span></div></div>
                ) : (
                  <div className="va-scene va-scene-travel" aria-hidden="true"><div className="va-scene-travel-top">BYAHETABAI <span>TRIP OS ↗</span></div><div className="va-scene-route"><span>SHA</span><div className="va-scene-route-line">✦ ─ ─ ─ ✦</div><span>HRB</span></div><div className="va-scene-travel-cards"><div>ITINERARY<strong>08 DAYS</strong></div><div>TRAVELERS<strong>GROUP VIEW</strong></div></div><div className="va-scene-travel-bottom">PLAN • TRACK • EXPLORE</div></div>
                )}
                <span className="va-project-art-label">{currentProject.type}</span>
                <strong>{currentProject.name}</strong>
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

      <ScrollMorphBridge from="SELECTED WORK" to="WORK TRIAL + APP LAB" index={3} />
      <WorkTrial />
      <ScrollMorphBridge from="WORK TRIAL + APP LAB" to="EXPERIENCE" index={4} />

      <motion.section ref={experienceRef} id="experience" className="va-experience va-morph-section" {...entrance}>
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

      <ScrollMorphBridge from="EXPERIENCE" to="CONTACT" index={5} />
      <motion.section ref={contactRef} id="contact" className="va-contact va-morph-section" {...entrance}>
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
              <div className="va-contact-services" aria-label="Ways I can help">
                <span>EXECUTIVE SUPPORT</span>
                <span>REPORTING & SPREADSHEETS</span>
                <span>WEBSITE OPERATIONS</span>
                <span>AI-ASSISTED APP PROTOTYPES</span>
              </div>
              <a className="va-contact-primary" href="mailto:bojourn3@gmail.com?subject=Let's%20work%20together%20%E2%80%94%20BOJOURN&body=Hi%20Bojourn%2C%0A%0AI'm%20looking%20for%20help%20with%3A%20%0A%0AMy%20timeline%3A%20%0A%0AThanks!">
                TELL ME ABOUT YOUR PROJECT <ArrowUpRight size={18} />
              </a>
              <a className="va-email-link" href="mailto:bojourn3@gmail.com">
                bojourn3@gmail.com <ArrowUpRight size={24} />
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
