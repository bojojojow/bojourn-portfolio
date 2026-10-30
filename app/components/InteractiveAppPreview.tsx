"use client";

import { useState } from "react";

// Self-contained fictional demo workspaces; changes stay in the visitor's browser session.
type DemoRow = { name: string; sub: string; status: string; amount?: number };
export default function InteractiveAppPreview({ kind }: { kind: number }) {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<DemoRow[][]>([
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
          <div><span>{kind === 1 ? "TOTAL RECORDED" : kind === 4 ? "ITINERARY STOPS" : "TOTAL RECORDS"}</span><strong>{kind === 1 ? `$${rows.reduce((sum, r) => sum + (r.amount ?? 0), 0).toLocaleString()}` : String(total).padStart(2,"0")}</strong><small>Live sample data</small></div>
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

