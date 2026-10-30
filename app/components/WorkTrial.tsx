"use client";

import { useState } from "react";
import AppConceptExplorer from "./AppConceptExplorer";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, BriefcaseBusiness, Code2, ExternalLink, FileSpreadsheet, Globe2 } from "lucide-react";

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


export default function WorkTrial() {
  const [activeTrial, setActiveTrial] = useState(0);
  const reduceMotion = useReducedMotion();
  const selectedTrial = workTrials[activeTrial];
  const TrialIcon = selectedTrial.icon;

  return (
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
            <AppConceptExplorer />
          )}
          <p className="va-trial-disclaimer">Illustrative scenarios based on my skills and experience. The AI-assisted app example links to a real personal project.</p>
        </div>
      </section>
  );
}
