
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Download,
  Github,
  Globe2,
  Mail,
  MapPin,
  Plane,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "DATA & REPORTING",
    title: "Sales Performance Reporting",
    description:
      "Maintaining Excel-based sales reports, conversion metrics, leaderboards, and performance scorecards to support daily business operations.",
    tags: ["Microsoft Excel", "PivotTables", "Reporting"],
    icon: BarChart3,
    link: null,
    linkText: "Portfolio demonstration",
  },
  {
    number: "02",
    category: "PERSONAL PROJECT",
    title: "ByaheTaBai",
    description:
      "An AI-assisted group travel planning application that brings itineraries, traveler management, and expense tracking into one place.",
    tags: ["Next.js", "Supabase", "AI-Assisted Development"],
    icon: Plane,
    link: "https://byahetabai.vercel.app/",
    linkText: "Visit live application",
  },
  {
    number: "03",
    category: "WEB OPERATIONS",
    title: "WordPress Website Operations",
    description:
      "Updating and maintaining existing WordPress websites, publishing content, managing plugins, and working with visual page builders.",
    tags: ["WordPress", "Elementor", "Oxygen Builder"],
    icon: Globe2,
    link: null,
    linkText: "Professional experience",
  },
];

const experience = [
  {
    company: "MoveBees",
    role: "Data & Reports Analyst / Virtual Assistant",
    period: "Jan 2024 — Present",
    description:
      "Maintain recurring Excel reports, sales dashboards, conversion metrics, and performance scorecards.",
  },
  {
    company: "Digital Agency Support",
    role: "Junior WordPress Developer",
    period: "Jun 2026 — Present",
    description:
      "Maintain WordPress websites using Elementor and Oxygen Builder, manage plugins, and publish website content.",
  },
  {
    company: "AjileMedia",
    role: "Executive & Digital Marketing Assistant",
    period: "Jul 2025 — Jun 2026",
    description:
      "Supported executive inbox management, client communications, Google Ads, Local Services Ads, and Google Business Profile operations.",
  },
  {
    company: "Forsyth Advisors",
    role: "General Virtual Assistant",
    period: "Aug 2021 — May 2022",
    description:
      "Supported CRM management, investor research, lead generation, and administrative operations.",
  },
];

const skills = [
  "Microsoft Excel",
  "Google Sheets",
  "PivotTables & Formulas",
  "Sales Reporting",
  "WordPress",
  "Elementor",
  "Oxygen Builder",
  "Google Ads Support",
  "Google Business Profile",
  "CRM Management",
  "Executive Assistance",
  "AI-Assisted Workflows",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav">
          <a className="logo" href="#home">
            BF<span>.</span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="nav-contact" href="mailto:bojourn3@gmail.com">
            Let's talk <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <section className="hero container" id="home">
        <div className="eyebrow">
          <span className="status-dot" />
          DIGITAL OPERATIONS · VIRTUAL ASSISTANCE
        </div>

        <h1>
          Making everyday
          <br />
          work <span>work better.</span>
        </h1>

        <p className="hero-description">
          I'm <strong>Bojourn Franco</strong>, a digital operations and virtual
          assistant specialist helping businesses stay organized through data
          reporting, website management, and reliable operational support.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore my work <ArrowUpRight size={17} />
          </a>
          <a className="button button-secondary" href="mailto:bojourn3@gmail.com">
            Get in touch <Mail size={17} />
          </a>
        </div>

        <div className="hero-bottom">
          <span>
            <MapPin size={15} /> Cagayan de Oro, Philippines
          </span>
          <span>Working remotely with global teams</span>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div>
            <p className="section-kicker">01 / ABOUT</p>
            <h2>
              Practical support.
              <br />
              Digital thinking.
            </h2>
          </div>

          <div className="about-content">
            <p>
              I work at the intersection of business operations, reporting,
              and digital tools. My experience spans maintaining Excel sales
              dashboards, supporting executive workflows, and keeping
              WordPress websites up to date.
            </p>
            <p>
              I also explore AI-assisted product development, turning
              practical ideas into useful digital projects through planning,
              testing, and iteration.
            </p>

            <a className="text-link" href="#experience">
              More about my experience <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">02 / SELECTED WORK</p>
              <h2>Things I've worked on.</h2>
            </div>
            <p>
              A mix of professional workflows, practical digital skills,
              and personal projects.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article className="project-card" key={project.number}>
                  <div className="project-top">
                    <span>{project.number} / {project.category}</span>
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-footer">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.linkText} <ArrowUpRight size={17} />
                      </a>
                    ) : (
                      <span>{project.linkText}</span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">03 / EXPERIENCE</p>
              <h2>Where I've contributed.</h2>
            </div>
            <BriefcaseBusiness size={28} strokeWidth={1.4} />
          </div>

          <div className="experience-list">
            {experience.map((job) => (
              <div className="experience-item" key={job.company}>
                <div className="experience-company">
                  <h3>{job.company}</h3>
                  <span>{job.period}</span>
                </div>
                <div className="experience-details">
                  <h4>{job.role}</h4>
                  <p>{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <p className="section-kicker">04 / TOOLKIT</p>
          <h2>Skills & tools.</h2>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-item" key={skill}>
                <Code2 size={15} />
                {skill}
              </div>
            ))}
          </div>

          <div className="resume-strip">
            <div>
              <h3>Looking for the full picture?</h3>
              <p>Explore my experience, responsibilities, and background.</p>
            </div>
            <a
              className="button button-secondary"
              href="mailto:bojourn3@gmail.com?subject=Resume%20Request"
            >
              Request my resume <Download size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container">
          <p className="section-kicker">05 / CONTACT</p>
          <h2>
            Have something
            <br />
            in mind<span>?</span>
          </h2>
          <p>
            Whether you need reliable operations support, help with
            reporting, or someone to keep your digital workflows moving,
            I'd love to hear about it.
          </p>

          <a className="contact-email" href="mailto:bojourn3@gmail.com">
            bojourn3@gmail.com <ArrowUpRight size={28} />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Bojourn Franco</span>
          <span>Built with intention.</span>
          <div className="footer-links">
            <a href="https://github.com/bojojojow" target="_blank" rel="noopener noreferrer">
              <Github size={17} /> GitHub
            </a>
            <a href="mailto:bojourn3@gmail.com">
              <Mail size={17} /> Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
