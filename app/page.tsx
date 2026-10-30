
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Github,
  Globe2,
  Mail,
  MapPin,
  Plane,
  Sparkles,
} from "lucide-react";

const experience = [
  {
    company: "MoveBees",
    role: "Data & Reports Analyst / Virtual Assistant",
    period: "2024 — Present",
    description:
      "Excel reporting, sales performance tracking, dashboards, and scorecards.",
  },
  {
    company: "Digital Agency Support",
    role: "Junior WordPress Developer",
    period: "2026 — Present",
    description:
      "WordPress maintenance, Elementor, Oxygen Builder, and content updates.",
  },
  {
    company: "AjileMedia",
    role: "Executive & Digital Marketing Assistant",
    period: "2025 — 2026",
    description:
      "Executive support, Google Ads operations, and client communications.",
  },
  {
    company: "Forsyth Advisors",
    role: "General Virtual Assistant",
    period: "2021 — 2022",
    description:
      "CRM maintenance, investor research, lead generation, and administration.",
  },
];

const skills = [
  "Excel Reporting",
  "PivotTables & Formulas",
  "WordPress",
  "Elementor & Oxygen",
  "Digital Marketing",
  "Executive Assistance",
  "CRM Management",
  "AI-Assisted Workflows",
];

export default function Home() {
  return (
    <main>
      <header className="premium-nav">
        <div className="premium-container nav-inner">
          <a href="#home" className="brand">
            BOJOURN<span>®</span>
          </a>

          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
          </nav>

          <a className="nav-cta" href="mailto:bojourn3@gmail.com">
            LET'S TALK <ArrowUpRight size={16} />
          </a>
        </div>
      </header>

      <section className="premium-hero" id="home">
        <div className="premium-container hero-layout">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              DIGITAL OPERATIONS & VIRTUAL ASSISTANCE
            </div>

            <h1>
              WORK
              <br />
              SMARTER<span className="hero-period">.</span>
              <br />
              <span className="outline-word">GO FURTHER.</span>
            </h1>

            <p className="premium-intro">
              Hey, I'm <strong>Bojourn Franco.</strong> I help businesses
              stay organized, maintain digital systems, and make sense of
              their data.
            </p>

            <div className="hero-buttons">
              <a className="lime-button" href="#projects">
                EXPLORE MY WORK <ArrowUpRight size={18} />
              </a>
              <a className="hero-text-link" href="#about">
                GET TO KNOW ME <ArrowDownRight size={18} />
              </a>
            </div>

            <div className="hero-location">
              <MapPin size={15} />
              BASED IN CAGAYAN DE ORO, PHILIPPINES
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                src="/portrait.png"
                alt="Portrait of Bojourn Franco"
                className="hero-portrait"
              />
              <div className="portrait-caption">
                <span>BOJOURN FRANCO</span>
                <span>OPERATIONS / DIGITAL / DATA</span>
              </div>
            </div>
            <div className="floating-sticker">
              <Sparkles size={19} />
              ALWAYS
              <br />
              LEARNING
            </div>
          </div>
        </div>

        <div className="hero-ticker" aria-hidden="true">
          <div className="ticker-track">
            EXCEL REPORTING ✳ WORDPRESS ✳ DIGITAL OPERATIONS ✳
            AI-ASSISTED PROJECTS ✳ EXCEL REPORTING ✳ WORDPRESS ✳
            DIGITAL OPERATIONS ✳ AI-ASSISTED PROJECTS ✳
          </div>
        </div>
      </section>

      <section className="premium-section about-premium" id="about">
        <div className="premium-container">
          <div className="section-label">
            <span>01 / THE INTRODUCTION</span>
            <span>WHO I AM</span>
          </div>

          <div className="about-premium-grid">
            <h2>
              NOT JUST
              <br />
              <span>GETTING</span>
              <br />
              THINGS DONE.
            </h2>

            <div className="about-premium-copy">
              <p>
                I'm a digital operations and virtual assistant specialist
                working across data reporting, website management, digital
                marketing, and executive support.
              </p>
              <p>
                From maintaining Excel sales dashboards to updating
                WordPress websites, I focus on the details that keep
                businesses running.
              </p>
              <p>
                Outside my client work, I experiment with AI-assisted
                development to turn everyday problems into useful tools.
              </p>

              <a href="#experience" className="underline-link">
                EXPLORE MY BACKGROUND <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="premium-section projects-premium" id="projects">
        <div className="premium-container">
          <div className="section-label">
            <span>02 / SELECTED WORK</span>
            <span>PROJECTS & EXPERIENCE</span>
          </div>

          <div className="projects-heading">
            <h2>
              PROOF OF
              <br />
              <span>WORK.</span>
            </h2>
            <p>
              Real workflows, personal projects, and the digital tools
              I work with.
            </p>
          </div>

          <article className="featured-project">
            <div className="featured-project-visual">
              <div className="mock-browser">
                <div className="mock-browser-top">
                  <span>● ● ●</span>
                  <span>byahetabai.vercel.app</span>
                </div>
                <div className="mock-browser-content">
                  <Plane size={45} strokeWidth={1.3} />
                  <span>BYAHETABAI</span>
                  <h3>YOUR TRIPS.
                    <br />ONE PLACE.</h3>
                  <p>Plan together. Travel better.</p>
                </div>
              </div>
            </div>

            <div className="featured-project-info">
              <span className="project-number">FEATURED PROJECT / 001</span>
              <h3>BYAHETABAI<span>↗</span></h3>
              <p>
                A group travel planning application created through
                AI-assisted development, bringing itineraries,
                traveler coordination, and expense tracking together.
              </p>
              <div className="project-pills">
                <span>PRODUCT PLANNING</span>
                <span>AI-ASSISTED DEVELOPMENT</span>
                <span>TESTING</span>
              </div>
              <a
                href="https://byahetabai.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-visit"
              >
                EXPLORE LIVE PROJECT <ArrowUpRight size={18} />
              </a>
            </div>
          </article>

          <div className="secondary-projects">
            <article className="secondary-project">
              <div className="secondary-project-art excel-art">
                <BarChart3 size={60} strokeWidth={1.2} />
                <span>REPORTING / PERFORMANCE / DATA</span>
                <div className="art-title">THE NUMBERS
                  <br />MATTER.</div>
              </div>
              <div className="secondary-project-info">
                <span>002 / DATA OPERATIONS</span>
                <h3>Sales Performance Reporting</h3>
                <p>
                  Maintaining Excel dashboards, booking conversion
                  reports, leaderboards, and sales scorecards.
                </p>
                <div className="project-pills">
                  <span>EXCEL</span>
                  <span>PIVOTTABLES</span>
                  <span>REPORTING</span>
                </div>
              </div>
            </article>

            <article className="secondary-project">
              <div className="secondary-project-art wordpress-art">
                <Globe2 size={60} strokeWidth={1.2} />
                <span>WEB OPERATIONS / CONTENT / CMS</span>
                <div className="art-title">KEEPING
                  <br />SITES FRESH.</div>
              </div>
              <div className="secondary-project-info">
                <span>003 / WEB OPERATIONS</span>
                <h3>WordPress Website Operations</h3>
                <p>
                  Maintaining existing WordPress websites, managing
                  content, plugins, and visual page-builder updates.
                </p>
                <div className="project-pills">
                  <span>WORDPRESS</span>
                  <span>ELEMENTOR</span>
                  <span>OXYGEN</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="premium-section experience-premium" id="experience">
        <div className="premium-container">
          <div className="section-label">
            <span>03 / CAREER</span>
            <span>WHERE I'VE WORKED</span>
          </div>

          <div className="experience-heading">
            <h2>THE JOURNEY<span>.</span></h2>
            <BriefcaseBusiness size={34} strokeWidth={1.3} />
          </div>

          <div className="premium-experience-list">
            {experience.map((job, index) => (
              <div className="premium-experience-row" key={job.company}>
                <span className="experience-index">
                  0{index + 1}
                </span>
                <div>
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
                </div>
                <div className="experience-right">
                  <span>{job.period}</span>
                  <p>{job.description}</p>
                </div>
                <ArrowUpRight className="experience-arrow" size={21} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-section expertise-premium">
        <div className="premium-container">
          <div className="section-label">
            <span>04 / EXPERTISE</span>
            <span>WHAT I BRING</span>
          </div>

          <h2>THE TOOLKIT<span>®</span></h2>

          <div className="premium-skills">
            {skills.map((skill, index) => (
              <div key={skill} className="premium-skill">
                <span>0{index + 1}</span>
                {skill}
                <ArrowRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-contact" id="contact">
        <div className="premium-container">
          <div className="section-label">
            <span>05 / LET'S CONNECT</span>
            <span>YOUR NEXT MOVE</span>
          </div>

          <h2>
            LET'S MAKE
            <br />
            <span>IT HAPPEN.</span>
          </h2>

          <a className="big-email" href="mailto:bojourn3@gmail.com">
            BOJOURN3@GMAIL.COM <ArrowUpRight size={28} />
          </a>

          <div className="contact-bottom">
            <p>GOOD WORK STARTS WITH A CONVERSATION.</p>
            <a
              href="https://github.com/bojojojow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} /> GITHUB
            </a>
          </div>
        </div>
      </section>

      <footer className="premium-footer">
        <div className="premium-container">
          <span>© {new Date().getFullYear()} BOJOURN FRANCO</span>
          <span>MADE WITH CURIOSITY & INTENTION.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
