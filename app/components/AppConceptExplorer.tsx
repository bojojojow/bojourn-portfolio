"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ExternalLink } from "lucide-react";
import InteractiveAppPreview from "./InteractiveAppPreview";

const appConcepts = [
  { name: "CRM", type: "SALES WORKSPACE", headline: "Keep every lead moving.", description: "A lightweight contact and deal tracker for small teams.", metrics: [["ACTIVE LEADS", "24"], ["FOLLOW-UPS", "08"], ["PIPELINE", "5 stages"]], tasks: ["New inquiry captured", "Discovery call scheduled", "Proposal follow-up"], features: ["Contact records", "Deal stages", "Follow-up queue"] },
  { name: "Expense Tracker", type: "FINANCE WORKSPACE", headline: "Know where money goes.", description: "Track spending, outstanding payments, and budget categories.", metrics: [["THIS MONTH", "$4,280"], ["PENDING", "$620"], ["CATEGORIES", "06"]], tasks: ["Software subscription", "Vendor invoice", "Travel reimbursement"], features: ["Expense log", "Paid / pending status", "Category summaries"] },
  { name: "Booking System", type: "SCHEDULING WORKSPACE", headline: "Make bookings effortless.", description: "A simple appointment workflow with clear statuses and customer details.", metrics: [["THIS WEEK", "18"], ["CONFIRMED", "14"], ["REQUESTS", "04"]], tasks: ["Initial consultation", "Client check-in", "Project kickoff"], features: ["Booking calendar", "Customer details", "Confirmation tracking"] },
  { name: "Dashboard", type: "OPERATIONS WORKSPACE", headline: "See the whole picture.", description: "Turn everyday operational data into a quick performance overview.", metrics: [["TASKS DONE", "86%"], ["OPEN ITEMS", "12"], ["REPORTS", "04"]], tasks: ["Weekly performance", "Team workload", "Monthly KPI review"], features: ["KPI cards", "Performance trends", "Quick filters"] },
  { name: "Travel Planner", type: "TRAVEL WORKSPACE", headline: "One trip. One workspace.", description: "Coordinate plans, people, and shared expenses in one place.", metrics: [["TRIP DAYS", "15"], ["TRAVELERS", "11"], ["PLANS", "28"]], tasks: ["Daily itinerary", "Traveler list", "Shared expense tracking"], features: ["Collaborative itinerary", "Traveler access", "Expense management"] },
];

export default function AppConceptExplorer() {
  const [activeConcept, setActiveConcept] = useState(0);
  const [conceptView, setConceptView] = useState<"preview" | "process">("preview");
  const reduceMotion = useReducedMotion();

  return (
            <div id="app-lab" className="va-app-lab" aria-label="AI-assisted app concept explorer">
              <div className="va-app-lab-heading">
                <div>
                  <span className="va-app-lab-eyebrow">INTERACTIVE CONCEPT EXPLORER</span>
                  <h3>A lab for <em>real ideas.</em></h3>
                </div>
                <p>Five working experiments. Pick a workflow, then try the controls. Every demo runs on fictional data.</p>
              </div>
              <div className="va-app-lab-choices" role="tablist" aria-label="App concepts">
                {appConcepts.map((concept, index) => (
                  <button key={concept.name} type="button" className={activeConcept === index ? "va-app-choice is-active" : "va-app-choice"} role="tab" aria-selected={activeConcept === index} onClick={() => { setActiveConcept(index); setConceptView("preview"); }}>
                    <span>{String(index + 1).padStart(2, "0")}</span>{concept.name}
                  </button>
                ))}
              </div>
              <div className="va-app-lab-window">
                <div className="va-app-window-top"><span>BOJOURN® / SOFTWARE EXPERIMENTS</span><span>05 WORKING DEMOS — LOCAL ONLY</span></div>
                <div className="va-app-window-body">
                  <div className="va-app-window-heading">
                    <div><span className="va-app-lab-eyebrow">{appConcepts[activeConcept].type}</span><h4>{appConcepts[activeConcept].headline}</h4><p>{appConcepts[activeConcept].description}</p></div>
                    <div className="va-app-view-switch" aria-label="Concept view">
                      <button type="button" className={conceptView === "preview" ? "is-active" : ""} aria-pressed={conceptView === "preview"} onClick={() => setConceptView("preview")}>Try the demo</button>
                      <button type="button" className={conceptView === "process" ? "is-active" : ""} aria-pressed={conceptView === "process"} onClick={() => setConceptView("process")}>Build notes</button>
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
  );
}
