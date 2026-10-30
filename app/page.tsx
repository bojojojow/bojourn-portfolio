
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

const workTrials = [
  {
    title: "AI-Assisted Apps",
    label: "BUILD SOMETHING USEFUL",
    challenge: "You have an idea for a tool, but no existing app or technical team to build it.",
    approach: "I turn the idea into a clear feature plan, use AI-assisted development to build a working prototype, test real workflows, troubleshoot issues, and iterate based on feedback.",
    deliverable: "A working prototype, tested workflows, and a practical improvement roadmap.",
    note: "From travel planners and trackers to internal dashboards, lightweight CRMs, and custom workflow tools. Scope depends on the project.",
    icon: Code2,
  },
  {
    title: "Excel Reporting",
    label: "MAKE THE NUMBERS CLEAR",
    challenge: "A manager needs a quick overview of sales and representative performance.",
    approach: "I organize the source data, validate calculations, and build a clear summary of the metrics that matter.",
    deliverable: "A sample reporting dashboard with readable KPIs.",
    note: "Built around the Excel reporting and scorecard work I already do.",
    icon: FileSpreadsheet,
  },
  {
    title: "Executive Support",
    label: "BRING ORDER TO THE INBOX",
    challenge: "An executive has competing requests, follow-ups, and time-sensitive messages.",
    approach: "I sort by urgency and impact, identify dependencies, and prepare an actionable priority list.",
    deliverable: "A sample inbox triage and follow-up plan.",
    note: "A practical demonstration using fictional business scenarios.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Website Operations",
    label: "UPDATE WITHOUT THE CHAOS",
    challenge: "A WordPress website needs changes without breaking existing pages.",
    approach: "I review the existing structure, make controlled content updates, and check desktop and mobile layouts.",
    deliverable: "A sample website update and quality-check checklist.",
    note: "Focused on ongoing maintenance and operational support.",
    icon: Globe2,
  },
];

const appConcepts = [
  { name: "CRM", type: "SALES WORKSPACE", headline: "Keep every lead moving.", description: "A lightweight contact and deal tracker for small teams.", metrics: [["ACTIVE LEADS", "24"], ["FOLLOW-UPS", "08"], ["PIPELINE", "5 stages"]], tasks: ["New inquiry captured", "Discovery call scheduled", "Proposal follow-up"], features: ["Contact records", "Deal stages", "Follow-up queue"] },
  { name: "Expense Tracker", type: "FINANCE WORKSPACE", headline: "Know where money goes.", description: "Track spending, outstanding payments, and budget categories.", metrics: [["THIS MONTH", "$4,280"], ["PENDING", "$620"], ["CATEGORIES", "06"]], tasks: ["Software subscription", "Vendor invoice", "Travel reimbursement"], features: ["Expense log", "Paid / pending status", "Category summaries"] },
  { name: "Booking System", type: "SCHEDULING WORKSPACE", headline: "Make bookings effortless.", description: "A simple appointment workflow with clear statuses and customer details.", metrics: [["THIS WEEK", "18"], ["CONFIRMED", "14"], ["REQUESTS", "04"]], tasks: ["Initial consultation", "Client check-in", "Project kickoff"], features: ["Booking calendar", "Customer details", "Confirmation tracking"] },
  { name: "Dashboard", type: "OPERATIONS WORKSPACE", headline: "See the whole picture.", description: "Turn everyday operational data into a quick performance overview.", metrics: [["TASKS DONE", "86%"], ["OPEN ITEMS", "12"], ["REPORTS", "04"]], tasks: ["Weekly performance", "Team workload", "Monthly KPI review"], features: ["KPI cards", "Performance trends", "Quick filters"] },
  { name: "Travel Planner", type: "TRAVEL WORKSPACE", headline: "One trip. One workspace.", description: "Coordinate plans, people, and shared expenses in one place.", metrics: [["TRIP DAYS", "15"], ["TRAVELERS", "11"], ["PLANS", "28"]], tasks: ["Daily itinerary", "Traveler list", "Shared expense tracking"], features: ["Collaborative itinerary", "Traveler access", "Expense management"] },
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


// Self-contained fictional demo workspaces; changes stay in the visitor's browser session.
function InteractiveAppPreview({ kind }: { kind: number }) {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([
    [{ name: "Northstar Studio", sub: "Website redesign · $4,800", status: "Qualified" }, { name: "Orbit Labs", sub: "Automation setup · $2,400", status: "Proposal" }, { name: "Willow & Co.", sub: "Discovery call · $1,200", status: "New" }, { name: "Atlas Retail", sub: "Monthly support · $950", status: "Won" }],
    [{ name: "Figma subscription", sub: "Software · Oct 25", status: "Paid", amount: 24 }, { name: "Contractor invoice", sub: "Services · Oct 24", status: "Pending", amount: 420 }, { name: "Office supplies", sub: "Operations · Oct 21", status: "Paid", amount: 86 }, { name: "Travel reimbursement", sub: "Travel · Oct 19", status: "Pending", amount: 175 }],
    [{ name: "Maya Chen", sub: "09:00 AM · Discovery call", status: "Confirmed" }, { name: "Daniel Rivera", sub: "10:30 AM · Strategy session", status: "Requested" }, { name: "Avery Smith", sub: "01:00 PM · Project kickoff", status: "Confirmed" }, { name: "Jamie Lee", sub: "03:30 PM · Follow-up", status: "Requested" }],
    [{ name: "Client onboarding", sub: "Operations · Owner: Alex", status: "Done" }, { name: "October reporting", sub: "Analytics · Owner: Sam", status: "In progress" }, { name: "Website QA", sub: "Website · Owner: Taylor", status: "Done" }, { name: "CRM cleanup", sub: "Sales · Owner: Jordan", status: "In progress" }],
    [{ name: "Explore The Bund", sub: "Day 01 · Shanghai", status: "Done" }, { name: "High-speed train to Beijing", sub: "Day 04 · Transfer", status: "Planned" }, { name: "Forbidden City visit", sub: "Day 05 · Beijing", status: "Planned" }, { name: "Harbin Ice & Snow World", sub: "Day 10 · Harbin", status: "Planned" }],
  ]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState("");
  const [selectedDay, setSelectedDay] = useState(2);
  const [chartRange, setChartRange] = useState("Week");
  const statuses = [["New", "Qualified", "Proposal", "Won"], ["Pending", "Paid"], ["Requested", "Confirmed"], ["In progress", "Done"], ["Planned", "Done"]][kind];
  const rows = items[kind];
  const visible = rows.filter((r) => (activeFilter === "All" || r.status === activeFilter) && `${r.name} ${r.sub}`.toLowerCase().includes(query.toLowerCase()));
  const updateStatus = (name: string) => setItems((prev) => prev.map((group, index) => index !== kind ? group : group.map((row) => row.name === name ? { ...row, status: statuses[(statuses.indexOf(row.status) + 1) % statuses.length] } : row)));
  const addItem = () => {
    if (!newName.trim()) return;
    setItems((prev) => prev.map((group, index) => index === kind ? [{ name: newName.trim(), sub: "Just added · Demo entry", status: statuses[0], ...(kind === 1 ? { amount: 50 } : {}) }, ...group] : group));
    setNewName(""); setShowAdd(false); setActiveFilter("All"); setQuery("");
  };
  const labels = ["Contacts", "Transactions", "Appointments", "Work items", "Trip itinerary"];
  const actionLabels = ["Add lead", "Add expense", "New booking", "Add task", "Add activity"];
  const total = rows.length;
  const completed = rows.filter((r) => ["Won", "Paid", "Confirmed", "Done"].includes(r.status)).length;
  const bars = chartRange === "Week" ? [36, 54, 42, 72, 62, 88, 68] : [42, 66, 58, 79, 61, 91, 76];
  return (
    <div className="va-real-demo">
      <div className="va-real-sidebar"><div className="va-real-logo">B<span>.</span></div><span className="va-real-side-item is-selected">▦</span><span className="va-real-side-item">◷</span><span className="va-real-side-item">☷</span><span className="va-real-side-bottom">DEMO</span></div>
      <div className="va-real-main">
        <div className="va-real-top"><div><span className="va-real-crumb">WORKSPACE / {labels[kind].toUpperCase()}</span><h5>{labels[kind]}</h5></div><div className="va-real-top-right"><span className="va-real-live"><span /> Interactive sandbox</span><span className="va-real-avatar">BJ</span></div></div>
        <div className="va-real-kpis">
          <div><span>{kind === 1 ? "TOTAL RECORDED" : kind === 4 ? "ITINERARY STOPS" : "TOTAL RECORDS"}</span><strong>{kind === 1 ? `$${rows.reduce((sum, r) => sum + (r.amount || 0), 0).toLocaleString()}` : String(total).padStart(2,"0")}</strong><small>Live sample data</small></div>
          <div><span>{["DEALS WON", "PAID ENTRIES", "CONFIRMED", "COMPLETED", "VISITED"][kind]}</span><strong>{String(completed).padStart(2,"0")}</strong><small>Click a status to update</small></div>
          <div><span>{["OPEN OPPORTUNITIES", "UNPAID ENTRIES", "AWAITING CONFIRMATION", "IN PROGRESS", "UPCOMING"][kind]}</span><strong>{String(total - completed).padStart(2,"0")}</strong><small>Automatically recalculated</small></div>
        </div>
        {kind === 2 && <div className="va-real-calendar"><div className="va-real-calendar-label">OCTOBER 2026 <span>Choose a date</span></div><div className="va-real-days">{["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d, i) => <button key={d} type="button" onClick={() => setSelectedDay(i)} className={selectedDay === i ? "is-active" : ""}><span>{d}</span><strong>{26+i}</strong></button>)}</div></div>}
        {kind === 3 && <div className="va-real-chart"><div className="va-real-chart-top"><div><strong>Activity overview</strong><span>Illustrative performance trend</span></div><div className="va-real-toggle">{["Week","Month"].map(v => <button type="button" key={v} className={chartRange===v ? "is-active" : ""} onClick={()=>setChartRange(v)}>{v}</button>)}</div></div><div className="va-real-bars">{bars.map((v,i) => <div key={i}><span style={{height:`${v}%`}}/><small>{["M","T","W","T","F","S","S"][i]}</small></div>)}</div></div>}
        {kind === 4 && <div className="va-real-trip"><div><span>ACTIVE TRIP</span><strong>China Winter Adventure</strong><small>Shanghai → Beijing → Harbin</small></div><span className="va-real-trip-pill">15 DAYS · SAMPLE</span></div>}
        <div className="va-real-table-head"><div><strong>{["Sales pipeline", "Recent expenses", "Booking queue", "Team workboard", "Upcoming itinerary"][kind]}</strong><small>{visible.length} visible entries</small></div><button type="button" className="va-real-add" onClick={() => setShowAdd((v)=>!v)}>{showAdd ? "Cancel" : `+ ${actionLabels[kind]}`}</button></div>
        {showAdd && <form className="va-real-add-form" onSubmit={(e)=>{e.preventDefault();addItem();}}><input aria-label={`New ${labels[kind]} entry`} placeholder={["Lead or company name", "Expense description", "Customer name", "Task name", "Activity name"][kind]} value={newName} onChange={(e)=>setNewName(e.target.value)} autoFocus/><button type="submit" disabled={!newName.trim()}>Save entry</button></form>}
        <div className="va-real-tools"><input type="search" aria-label="Search sample records" placeholder="Search records..." value={query} onChange={(e)=>setQuery(e.target.value)}/><select aria-label="Filter by status" value={activeFilter} onChange={(e)=>setActiveFilter(e.target.value)}><option value="All">All statuses</option>{statuses.map(s=><option key={s} value={s}>{s}</option>)}</select></div>
        <div className="va-real-table"><div className="va-real-table-labels"><span>{kind === 1 ? "EXPENSE" : kind === 2 ? "CLIENT" : kind === 4 ? "ACTIVITY" : "NAME"}</span><span>{kind === 1 ? "AMOUNT" : "DETAILS"}</span><span>STATUS ↻</span></div>{visible.length ? visible.map((r,i)=><div className="va-real-table-row" key={`${r.name}-${i}`}><div className="va-real-record"><span className="va-real-record-icon">{r.name.slice(0,1)}</span><strong>{r.name}</strong></div><span className="va-real-record-detail">{kind === 1 ? `$${(r.amount || 0).toLocaleString()} · ${r.sub}` : r.sub}</span><button type="button" title="Click to change status" onClick={()=>updateStatus(r.name)} className={`va-real-status ${["Paid","Confirmed","Done","Won"].includes(r.status) ? "is-done" : ""}`}>{r.status} <span>↻</span></button></div>) : <p className="va-real-empty">No matches. Try another search or filter.</p>}</div>
        <p className="va-real-hint">TRY IT: Add a record, search, filter, or click any status to move it forward. Changes are temporary sample data.</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeTrial, setActiveTrial] = useState(0);
  const [activeConcept, setActiveConcept] = useState(0);
  const [conceptView, setConceptView] = useState<"preview" | "process">("preview");
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

  const selectedTrial = workTrials[activeTrial];
  const TrialIcon = selectedTrial.icon;
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

      <section id="work-trial" className="va-trial">
        <div className="va-shell">
          <div className="va-trial-heading">
            <div>
              <p className="va-trial-overline">THE WORK TRIAL / 04 SCENARIOS</p>
              <h2>See how <span>I work.</span></h2>
            </div>
            <p>Less talk, more problem-solving. Pick a real-world scenario and see how I'd approach it.</p>
          </div>
          <div className="va-trial-frame">
            <div className="va-trial-tabs" role="tablist" aria-label="Work trial scenarios">
              {workTrials.map((trial, index) => (
                <button
                  key={trial.title}
                  id={`trial-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={activeTrial === index}
                  aria-controls="trial-panel"
                  className={activeTrial === index ? "va-trial-tab is-active" : "va-trial-tab"}
                  onClick={() => setActiveTrial(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {trial.title}
                  <ArrowUpRight size={16} />
                </button>
              ))}
            </div>
            <div className="va-trial-stage">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeTrial}
                  id="trial-panel"
                  role="tabpanel"
                  aria-labelledby={`trial-tab-${activeTrial}`}
                  className="va-trial-panel"
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
                  transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeOut" }}
                >
                  <div className="va-trial-visual">
                    <div className="va-trial-icon"><TrialIcon size={43} strokeWidth={1.4} /></div>
                    <span className="va-trial-label">{selectedTrial.label}</span>
                    <h3>{selectedTrial.title}</h3>
                    <p>{selectedTrial.note}</p>
                    {activeTrial === 0 && (
                      <a href="https://byahetabai.vercel.app/" target="_blank" rel="noopener noreferrer" className="va-trial-live">
                        EXPLORE MY LIVE APP <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <div className="va-trial-steps">
                    <div><span>01 / THE CHALLENGE</span><p>{selectedTrial.challenge}</p></div>
                    <div><span>02 / MY APPROACH</span><p>{selectedTrial.approach}</p></div>
                    <div><span>03 / THE DELIVERABLE</span><p>{selectedTrial.deliverable}</p></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {activeTrial === 0 && (
            <div className="va-app-lab" aria-label="AI-assisted app concept explorer">
              <div className="va-app-lab-heading">
                <div>
                  <span className="va-app-lab-eyebrow">INTERACTIVE CONCEPT EXPLORER</span>
                  <h3>What could we <em>build?</em></h3>
                </div>
                <p>Choose a business need to preview a possible app. These are illustrative concepts, not finished client products.</p>
              </div>
              <div className="va-app-lab-choices" aria-label="App concepts">
                {appConcepts.map((concept, index) => (
                  <button key={concept.name} type="button" className={activeConcept === index ? "va-app-choice is-active" : "va-app-choice"} aria-pressed={activeConcept === index} onClick={() => { setActiveConcept(index); setConceptView("preview"); }}>
                    <span>{String(index + 1).padStart(2, "0")}</span>{concept.name}
                  </button>
                ))}
              </div>
              <div className="va-app-lab-window">
                <div className="va-app-window-top"><span><span className="va-app-window-dot" /> BOJOURN / APP LAB</span><span>ILLUSTRATIVE DEMO</span></div>
                <div className="va-app-window-body">
                  <div className="va-app-window-heading">
                    <div><span className="va-app-lab-eyebrow">{appConcepts[activeConcept].type}</span><h4>{appConcepts[activeConcept].headline}</h4><p>{appConcepts[activeConcept].description}</p></div>
                    <div className="va-app-view-switch" aria-label="Concept view">
                      <button type="button" className={conceptView === "preview" ? "is-active" : ""} aria-pressed={conceptView === "preview"} onClick={() => setConceptView("preview")}>App preview</button>
                      <button type="button" className={conceptView === "process" ? "is-active" : ""} aria-pressed={conceptView === "process"} onClick={() => setConceptView("process")}>How I'd build it</button>
                    </div>
                  </div>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div key={`${activeConcept}-${conceptView}`} initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} exit={reduceMotion ? {opacity:1} : {opacity:0,y:-8}} transition={{duration:reduceMotion ? 0 : .22}}>
                      {conceptView === "preview" ? (
                        <InteractiveAppPreview key={activeConcept} kind={activeConcept} />
                      ) : (
                        <div className="va-app-process"><div><span>01 / PLAN</span><p>Define the users, workflow, and essential features before building.</p></div><div><span>02 / BUILD WITH AI</span><p>Use AI-assisted development to create a working first version and connect the necessary pieces.</p></div><div><span>03 / TEST & IMPROVE</span><p>Test real tasks, troubleshoot issues, and refine based on feedback.</p></div></div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                  <div className="va-app-feature-strip"><strong>FEATURE IDEAS</strong>{appConcepts[activeConcept].features.map(feature => <span key={feature}>{feature}</span>)}</div>
                  {activeConcept === 4 && <a className="va-app-real-link" href="https://byahetabai.vercel.app/" target="_blank" rel="noopener noreferrer">SEE MY REAL TRAVEL APP <ExternalLink size={15}/></a>}
                </div>
              </div>
              <p className="va-app-lab-footnote">Concept screens use fictional sample data. ByaheTaBai is my real, independently linked AI-assisted personal project.</p>
            </div>
          )}
          <p className="va-trial-disclaimer">Illustrative scenarios based on my skills and experience. The AI-assisted app example links to a real personal project.</p>
        </div>
      </section>

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
