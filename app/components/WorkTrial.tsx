"use client";

import { useState } from "react";
import AppConceptExplorer from "./AppConceptExplorer";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, BriefcaseBusiness, Code2, ExternalLink, FileSpreadsheet, Globe2, Check, ChevronRight } from "lucide-react";

const workTrials = [
  { title: "AI-Assisted Apps", file: "prototype.build", label: "BUILD SOMETHING USEFUL", challenge: "You have an idea for a tool, but no existing app or technical team to build it.", approach: "I turn the idea into a clear feature plan, use AI-assisted development to build a working prototype, test real workflows, troubleshoot issues, and iterate based on feedback.", deliverable: "A working prototype, tested workflows, and a practical improvement roadmap.", note: "From travel planners and trackers to internal dashboards, lightweight CRMs, and custom workflow tools. Scope depends on the project.", icon: Code2 },
  { title: "Excel Reporting", file: "sales_report.xlsx", label: "MAKE THE NUMBERS CLEAR", challenge: "A manager needs a quick overview of sales and representative performance.", approach: "I organize the source data, validate calculations, and build a clear summary of the metrics that matter.", deliverable: "A sample reporting dashboard with readable KPIs.", note: "Built around the Excel reporting and scorecard work I already do.", icon: FileSpreadsheet },
  { title: "Executive Support", file: "inbox_priority.msg", label: "BRING ORDER TO THE INBOX", challenge: "An executive has competing requests, follow-ups, and time-sensitive messages.", approach: "I sort by urgency and impact, identify dependencies, and prepare an actionable priority list.", deliverable: "A sample inbox triage and follow-up plan.", note: "A practical demonstration using fictional business scenarios.", icon: BriefcaseBusiness },
  { title: "Website Operations", file: "site_maintenance.log", label: "UPDATE WITHOUT THE CHAOS", challenge: "A WordPress website needs changes without breaking existing pages.", approach: "I review the existing structure, make controlled content updates, and check desktop and mobile layouts.", deliverable: "A sample website update and quality-check checklist.", note: "Focused on ongoing maintenance and operational support.", icon: Globe2 },
];

export default function WorkTrial() {
  const [activeTrial, setActiveTrial] = useState(0);
  const reduceMotion = useReducedMotion();
  const trial = workTrials[activeTrial];
  const TrialIcon = trial.icon;
  return (
    <section id="work-trial" className="va-trial va-trial-v4">
      <div className="va-shell">
        <div className="v4-trial-intro">
          <div><span className="v4-eyebrow"><span className="v4-status-dot" /> INTERACTIVE WORK SAMPLES / 004</span><h2>Open a task.<br /><span>See how I work.</span></h2></div>
          <p>Four realistic situations. Pick a file, follow the process, and see the kind of work I can handle.</p>
        </div>
        <div className="v4-desktop" aria-label="Interactive work trial workspace">
          <div className="v4-desktop-titlebar"><span className="v4-window-symbol">▣</span><strong>BOJOURN / WORKSPACE</strong><span className="v4-window-controls" aria-hidden="true">─ &nbsp; □ &nbsp; ×</span></div>
          <div className="v4-desktop-toolbar"><span>FILE</span><span>VIEW</span><span>SCENARIOS</span><span className="v4-toolbar-path">C:\\PORTFOLIO\\WORK_TRIALS</span></div>
          <div className="v4-desktop-content">
            <div className="v4-file-browser" role="tablist" aria-label="Work trial scenarios">
              <div className="v4-file-browser-heading">TASK FILES <span>04 ITEMS</span></div>
              {workTrials.map((item, index) => { const Icon = item.icon; return <button type="button" role="tab" id={`trial-tab-${index}`} aria-selected={activeTrial === index} aria-controls="trial-panel" className={`v4-file ${activeTrial === index ? "is-active" : ""}`} key={item.file} onClick={() => setActiveTrial(index)}><Icon size={23} strokeWidth={1.8}/><span><strong>{item.title}</strong><small>{item.file}</small></span><ChevronRight size={16}/></button>; })}
              <div className="v4-browser-footer">SELECT A FILE TO OPEN ↗</div>
            </div>
            <div className="v4-task-viewer">
              <div className="v4-task-tabs"><span className="is-current">{trial.file} <span aria-hidden="true">×</span></span><span className="v4-task-tab-empty">+</span></div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={activeTrial} id="trial-panel" role="tabpanel" aria-labelledby={`trial-tab-${activeTrial}`} className="v4-task-document" initial={reduceMotion ? false : { opacity: 0, x: 46, clipPath: "inset(0 0 0 14%)" }} animate={{ opacity: 1, x: 0, clipPath: "inset(0 0 0 0%)" }} exit={reduceMotion ? {opacity:1} : { opacity: 0, x: -24, clipPath: "inset(0 12% 0 0)" }} transition={{ duration: reduceMotion ? 0 : .38, ease: [0.22,1,0.36,1] }}>
                  <div className="v4-document-top"><span>CASE FILE {String(activeTrial+1).padStart(2,"0")} / 04</span><span className="v4-ready"><Check size={12}/> READY TO REVIEW</span></div>
                  <div className="v4-document-title"><div className="v4-document-icon"><TrialIcon size={30} strokeWidth={1.6}/></div><div><span>{trial.label}</span><h3>{trial.title}</h3></div></div>
                  <p className="v4-document-note">{trial.note}</p>
                  <div className="v4-task-steps"><div><span className="v4-step-index">01</span><div><strong>THE REQUEST</strong><p>{trial.challenge}</p></div></div><div><span className="v4-step-index">02</span><div><strong>MY PROCESS</strong><p>{trial.approach}</p></div></div><div><span className="v4-step-index">03</span><div><strong>WHAT YOU GET</strong><p>{trial.deliverable}</p></div></div></div>
                  {activeTrial===0 && <a href="https://byahetabai.vercel.app/" target="_blank" rel="noopener noreferrer" className="v4-task-link">OPEN LIVE PROJECT <ExternalLink size={15}/></a>}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="v4-desktop-status"><span><span className="v4-status-dot"/> SYSTEM READY</span><span>{String(activeTrial+1).padStart(2,"0")} / 04 OPEN</span></div>
        </div>
        {activeTrial===0 && <AppConceptExplorer/>}
        <p className="va-trial-disclaimer">Illustrative scenarios based on my skills and experience. The AI-assisted app example links to a real personal project.</p>
      </div>
    </section>
  );
}
