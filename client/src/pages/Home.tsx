import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleHelp,
  Database,
  Moon,
  Sun,
  Filter,
  Gauge,
  Layers3,
  Menu,
  MessageSquareText,
  MoveRight,
  Sparkles,
  Target,
  X,
  Zap,
} from "lucide-react";

/**
 * SignalFlow / Home
 * Quiet Signal: editorial SaaS design with carbon ink, warm bone, and a restrained signal-chartreuse accent.
 * This page uses asymmetric product-led composition, precise hairlines, explicit sample-data labels, and one purposeful insight interaction.
 */

const feedbackItems = [
  {
    label: "Checkout feels like three different products",
    source: "Support conversation · 14 min ago",
    theme: "Checkout friction",
    sentiment: "Frustrated",
    priority: "High",
    score: "91",
    action: "Map the handoff between cart and payment, then remove the extra confirmation step.",
    color: "#F4A261",
  },
  {
    label: "I can’t tell who can edit our workspace",
    source: "Product request · 42 min ago",
    theme: "Team permissions",
    sentiment: "Uncertain",
    priority: "Medium",
    score: "74",
    action: "Create a visible permission summary for each project role before invite is sent.",
    color: "#A78BFA",
  },
  {
    label: "The mobile list freezes after the third scroll",
    source: "In-app feedback · 1 hr ago",
    theme: "Mobile performance",
    sentiment: "Concerned",
    priority: "High",
    score: "86",
    action: "Profile the list virtualization path on mid-range devices and ship a focused fix.",
    color: "#78B7A5",
  },
];

const workflow = [
  { index: "01", title: "Collect", copy: "Bring support threads, requests, and in-product feedback into one calm inbox.", icon: Database },
  { index: "02", title: "Understand", copy: "SignalFlow clusters recurring language and spots sentiment shifts before they become incidents.", icon: Sparkles },
  { index: "03", title: "Prioritize", copy: "Turn themes into scored opportunities your product team can debate and defend.", icon: Target },
  { index: "04", title: "Act", copy: "Give every decision a clear next step, owner, and link back to the customer evidence.", icon: MoveRight },
];

const features = [
  { title: "AI theme detection", copy: "Surface the language that keeps repeating across channels, without forcing every note into a manual tag system.", icon: Sparkles, detail: "12 recurring themes" },
  { title: "Feedback intelligence", copy: "See sentiment and momentum together, so a quiet issue with accelerating volume does not stay quiet for long.", icon: BarChart3, detail: "Momentum · +18%" },
  { title: "Product prioritization", copy: "Compare opportunity, reach, and confidence in one view built for the next product conversation.", icon: Gauge, detail: "Priority model" },
  { title: "Team decision workspace", copy: "Keep the evidence beside the decision, with a lightweight trail your whole team can understand.", icon: Layers3, detail: "Decision trail" },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`logo ${light ? "logo--light" : ""}`} aria-label="SignalFlow home">
      <span className="logo-mark" aria-hidden="true"><i /><i /><i /></span>
      <span className="logo-word">SignalFlow</span>
    </a>
  );
}

function SignalChart() {
  return (
    <div className="signal-chart" aria-label="Sample feedback volume chart">
      <div className="chart-axis"><span>120</span><span>80</span><span>40</span><span>0</span></div>
      <div className="chart-plot">
        <div className="chart-grid"><span /><span /><span /><span /></div>
        <svg viewBox="0 0 600 180" role="img" aria-label="Feedback volume increasing over time">
          <path d="M0 140 C42 126 55 134 89 119 S142 115 171 128 S222 90 251 103 S305 79 339 86 S386 61 416 74 S458 56 487 63 S548 30 600 38" fill="none" stroke="#d8f45a" strokeWidth="4" strokeLinecap="round" />
          <path d="M0 140 C42 126 55 134 89 119 S142 115 171 128 S222 90 251 103 S305 79 339 86 S386 61 416 74 S458 56 487 63 S548 30 600 38 L600 180 L0 180 Z" fill="url(#fade)" opacity=".22" />
          <defs><linearGradient id="fade" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#d8f45a" /><stop offset="1" stopColor="#d8f45a" stopOpacity="0" /></linearGradient></defs>
        </svg>
        <div className="chart-x"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Today</span></div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard-shell">
      <div className="dashboard-topline"><span className="dashboard-brand"><span className="mini-mark"><i /><i /><i /></span> SignalFlow</span><span className="demo-chip">Sample workspace <span>·</span> Demo data</span><span className="dashboard-user">AM <span className="status-dot" /></span></div>
      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <span className="sidebar-label">Workspace</span>
          <a className="side-link side-link--active"><BarChart3 size={15} /> Overview</a>
          <a className="side-link"><MessageSquareText size={15} /> Feedback <b>42</b></a>
          <a className="side-link"><Sparkles size={15} /> Themes</a>
          <a className="side-link"><Target size={15} /> Opportunities</a>
          <span className="sidebar-label sidebar-label--lower">Manage</span>
          <a className="side-link"><Layers3 size={15} /> Sources</a>
          <a className="side-link"><CircleHelp size={15} /> Help center</a>
          <div className="sidebar-bottom"><span className="mini-avatar">AM</span><span><strong>Alex Morgan</strong><small>Product team</small></span><ChevronDown size={14} /></div>
        </aside>
        <main className="dashboard-main">
          <div className="dash-header"><div><span className="eyebrow">Monday, 18 August 2026</span><h3>Good morning, Alex</h3></div><button className="dash-filter"><Filter size={14} /> Last 30 days <ChevronDown size={13} /></button></div>
          <div className="metric-row">
            <div className="metric-card"><span>Feedback volume</span><strong>1,284</strong><small><em>+18.4%</em> vs previous period</small></div>
            <div className="metric-card"><span>Signal confidence</span><strong>82<span className="metric-unit">/100</span></strong><small><em className="purple">+6 pts</em> as themes converge</small></div>
            <div className="metric-card"><span>Opportunities</span><strong>16</strong><small><em className="orange">4 high priority</em> ready for review</small></div>
          </div>
          <div className="dash-grid">
            <div className="dash-panel volume-panel"><div className="panel-heading"><div><span className="panel-kicker">Trend</span><h4>Feedback volume</h4></div><span className="panel-pill">By channel</span></div><SignalChart /></div>
            <div className="dash-panel themes-panel"><div className="panel-heading"><div><span className="panel-kicker">AI summary</span><h4>Top emerging themes</h4></div><button className="text-button" onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}>View all <ArrowUpRight size={13} /></button></div><div className="theme-list"><div><span className="theme-rank">01</span><span className="theme-name">Checkout friction</span><span className="theme-bar"><i style={{ width: "82%" }} /></span><b>82</b></div><div><span className="theme-rank">02</span><span className="theme-name">Team permissions</span><span className="theme-bar"><i style={{ width: "64%" }} /></span><b>64</b></div><div><span className="theme-rank">03</span><span className="theme-name">Mobile performance</span><span className="theme-bar"><i style={{ width: "48%" }} /></span><b>48</b></div></div></div>
          </div>
          <div className="dash-panel opportunities-panel"><div className="panel-heading"><div><span className="panel-kicker">Next best moves</span><h4>Suggested product priorities</h4></div><span className="last-updated">Updated 11 min ago</span></div><div className="opportunity-list"><div className="opportunity-row"><span className="opp-signal opp-signal--high" /><div><strong>Remove duplicate checkout confirmation</strong><small>Checkout friction · 38 signals</small></div><span className="opp-score">91 <small>score</small></span><button aria-label="Open checkout opportunity" onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}><ArrowUpRight size={15} /></button></div><div className="opportunity-row"><span className="opp-signal opp-signal--medium" /><div><strong>Clarify workspace role permissions</strong><small>Team permissions · 24 signals</small></div><span className="opp-score">74 <small>score</small></span><button aria-label="Open permissions opportunity" onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}><ArrowUpRight size={15} /></button></div></div></div>
        </main>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(0);
  const [easterEgg, setEasterEgg] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("signalflow-theme") === "dark";
  });

  useEffect(() => {
    window.localStorage.setItem("signalflow-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "s" && event.shiftKey) setEasterEgg(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const insight = feedbackItems[selectedFeedback];

  return (
    <div id="top" className={darkMode ? "site-shell theme-dark" : "site-shell"}>
      {showSignup && <div className="signup-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) { setShowSignup(false); setSubmitted(false); } }}><section className="signup-dialog" role="dialog" aria-modal="true" aria-labelledby="signup-title"><button className="signup-close" onClick={() => { setShowSignup(false); setSubmitted(false); }} aria-label="Close signup dialog"><X size={18} /></button>{submitted ? <div className="signup-success"><span className="success-mark"><Check size={20} /></span><span className="eyebrow"><span className="eyebrow-line" /> Sample workspace ready</span><h2 id="signup-title">Your first signal is waiting.</h2><p>We saved the demo request locally for this prototype. In a connected product, this is where onboarding would begin.</p><button className="button button--primary" onClick={() => { setShowSignup(false); setSubmitted(false); }}>Explore the demo <ArrowUpRight size={16} /></button></div> : <><span className="eyebrow"><span className="eyebrow-line" /> Start with SignalFlow</span><h2 id="signup-title">Make the next decision clearer.</h2><p>Enter your work email to open a sample workspace. No account or payment is created in this frontend demo.</p><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><label htmlFor="signup-email">Work email</label><input id="signup-email" name="email" type="email" placeholder="you@company.com" required autoFocus /><button className="button button--primary" type="submit">Open sample workspace <ArrowUpRight size={16} /></button></form><small className="signup-footnote"><Check size={13} /> Demo-only interaction · no data is sent</small></>}</section></div>}

      <header className="site-header"><div className="nav-wrap"><Logo /><nav className={menuOpen ? "nav-links nav-links--open" : "nav-links"} aria-label="Primary navigation"><a href="#product" onClick={() => setMenuOpen(false)}>Product</a><a href="#workflow" onClick={() => setMenuOpen(false)}>Solutions</a><a href="#demo" onClick={() => setMenuOpen(false)}>Resources</a><a href="#footer" onClick={() => setMenuOpen(false)}>Pricing</a><a className="mobile-signin" href="#footer" onClick={() => setMenuOpen(false)}>Sign in</a><a className="mobile-cta" href="#start" onClick={(event) => { event.preventDefault(); setMenuOpen(false); setShowSignup(true); }}>Start for free <ArrowUpRight size={15} /></a></nav><div className="nav-actions"><a className="signin" href="#footer">Sign in</a><button className="theme-toggle" onClick={() => setDarkMode((value) => !value)} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} aria-pressed={darkMode}>{darkMode ? <Sun size={15} /> : <Moon size={15} />}<span>{darkMode ? "Light" : "Dark"}</span></button><a className="nav-cta" href="#start" onClick={(event) => { event.preventDefault(); setShowSignup(true); }}>Start for free <ArrowUpRight size={15} /></a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div></div></header>

      <main>
        <section className="hero section-pad"><div className="hero-text"><span className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Feedback intelligence for product teams</span><h1>Turn customer noise into your <span>next best product decision.</span></h1><p className="hero-copy">SignalFlow brings feedback, support conversations, and product requests into one clear view—so your team can see the pattern and decide what to build next.</p><div className="hero-actions"><a className="button button--primary" href="#start" onClick={(event) => { event.preventDefault(); setShowSignup(true); }}>Start for free <ArrowUpRight size={17} /></a><a className="button button--quiet" href="#product">See how it works <MoveRight size={17} /></a></div><p className="hero-note"><Check size={14} /> No credit card required <span /> <Check size={14} /> Sample workspace included</p></div><div className="hero-art"><img className="hero-image hero-image--light" src="/manus-storage/signalflow-hero-texture_82df9ca9.png" alt="Abstract signal lines on a warm paper field" /><img className="hero-image hero-image--dark" src="/manus-storage/signalflow-dark-field_260a302a.png" alt="Abstract signal lines on a dark field" /><div className="hero-art-label"><span>01</span><span>Signal / clarity</span></div><div className="hero-note-card"><span className="pulse-dot" /> <span>New pattern detected</span><strong>Checkout friction</strong><small>38 signals · rising this week</small></div></div></section>

        <section id="product" className="showcase section-pad"><div className="section-intro"><div><span className="eyebrow"><span className="eyebrow-line" /> The product</span><h2>One workspace for the conversations that shape your roadmap.</h2></div><p>SignalFlow turns scattered customer language into a living, inspectable view of what deserves your team’s attention.</p></div><Dashboard /><div className="showcase-caption"><span>Sample workspace / Demo data</span><span>SignalFlow overview <ArrowUpRight size={14} /></span></div><figure className="product-art-strip product-anatomy"><div className="anatomy-card anatomy-card--inbox"><span className="anatomy-kicker">01 / COLLECT</span><strong>Customer voice</strong><i /><i /><i /></div><div className="anatomy-card anatomy-card--theme"><span className="anatomy-kicker">02 / UNDERSTAND</span><strong>Recurring theme</strong><div className="anatomy-node"><b /><b /><b /></div></div><div className="anatomy-card anatomy-card--opportunity"><span className="anatomy-kicker">03 / PRIORITIZE</span><strong>Next best move</strong><span className="anatomy-score">91 <small>score</small></span></div><figcaption><span>Product anatomy</span><span>Feedback → themes → opportunities</span></figcaption></figure></section>

        <section id="workflow" className="workflow-section section-pad"><div className="workflow-image"><img className="workflow-image-light" src="/manus-storage/signalflow-insight-field_b5f9e7bc.png" alt="Abstract connected signal traces on a warm grey background" /><img className="workflow-image-dark" src="/manus-storage/signalflow-dark-field_260a302a.png" alt="Abstract connected signal traces on a dark field" /><div className="image-stamp">FROM NOISE<br /><span>TO SIGNAL</span></div></div><div className="workflow-copy"><span className="eyebrow"><span className="eyebrow-line" /> How it works</span><h2>From noise to signal.</h2><p className="lead-copy">A simple loop for making product decisions with more context and less ceremony.</p><div className="workflow-list">{workflow.map(({ index, title, copy, icon: Icon }) => <div className="workflow-item" key={title}><span className="workflow-index">{index}</span><div className="workflow-icon"><Icon size={17} /></div><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div></div></section>

        <section id="demo" className="interactive-section section-pad"><div className="interactive-header"><div><span className="eyebrow"><span className="eyebrow-line" /> See the signal</span><h2>Feedback in. A next move out.</h2></div><p>Choose a sample note to see how SignalFlow turns one conversation into a product-ready insight.</p></div><div className="insight-demo"><div className="feedback-column"><div className="demo-label">Sample feedback <span>3 notes</span></div>{feedbackItems.map((item, index) => <button className={selectedFeedback === index ? "feedback-item feedback-item--active" : "feedback-item"} onClick={() => setSelectedFeedback(index)} key={item.label}><span className="feedback-dot" style={{ background: item.color }} /><span><strong>{item.label}</strong><small>{item.source}</small></span><ArrowUpRight size={15} /></button>)}</div><div className="insight-column" aria-live="polite"><div className="insight-topline"><span className="insight-kicker"><Sparkles size={14} /> SignalFlow insight</span><span className="insight-confidence">{insight.score}% confidence</span></div><div className="insight-quote">“{insight.label}”</div><div className="insight-rule" /><div className="insight-details"><div><span>Detected theme</span><strong>{insight.theme}</strong></div><div><span>Sentiment</span><strong>{insight.sentiment}</strong></div><div><span>Priority</span><strong className={insight.priority === "High" ? "priority-high" : "priority-medium"}><i /> {insight.priority}</strong></div></div><div className="suggested-action"><span>Suggested action</span><p>{insight.action}</p><a href="#start">Open opportunity <ArrowUpRight size={14} /></a></div></div></div></section>

        <section className="features-section section-pad"><div className="features-heading"><span className="eyebrow"><span className="eyebrow-line" /> Built for the decision</span><h2>Less sorting. More seeing.</h2><p>SignalFlow is opinionated about the work between listening to customers and committing to a direction.</p></div><div className="feature-grid">{features.map(({ title, copy, icon: Icon, detail }, index) => <article className={`feature-card feature-card--${index + 1}`} key={title}><div className="feature-top"><span className="feature-number">0{index + 1}</span><div className="feature-icon"><Icon size={18} /></div></div><h3>{title}</h3><p>{copy}</p><div className="feature-detail"><span className="feature-detail-dot" /> {detail}</div></article>)}</div></section>

        <section id="start" className="closing-section"><img src="/manus-storage/signalflow-footer-grid_7bc33fee.png" alt="Abstract chartreuse signal line on a dark grid" /><div className="closing-content"><span className="eyebrow eyebrow--light"><span className="eyebrow-line" /> Ready when you are</span><h2>Your customers already told you what to build.</h2><p>Give the signal a place to land. Start with a sample workspace and see what your feedback is trying to say.</p><a className="button button--accent" href="#start" onClick={(event) => { event.preventDefault(); setShowSignup(true); }}>Start for free <ArrowUpRight size={17} /></a></div></section>
      </main>

      <footer id="footer" className="site-footer"><div className="footer-main"><div className="footer-brand"><Logo light /><p>Feedback intelligence for teams who care about the next decision.</p><span className="footer-easter">Shift + S <small>{easterEgg ? "Signal found." : ""}</small></span></div><div className="footer-links"><div><span>Product</span><a href="#product">Overview</a><a href="#demo">Feedback intelligence</a><a href="#workflow">How it works</a><a href="#start">Start for free</a></div><div><span>Resources</span><a href="#demo">Product notes</a><a href="#workflow">Signal guide</a><a href="#footer">Changelog</a><a href="#footer">Help center</a></div><div><span>Company</span><a href="#footer">About</a><a href="#footer">Contact</a><a href="#footer">Careers</a><a href="#footer">Sign in</a></div><div><span>Legal</span><a href="#footer">Privacy</a><a href="#footer">Terms</a><a href="#footer">Security</a></div></div></div><div className="footer-bottom"><span>© 2026 SignalFlow. A product concept for demonstration.</span><span>Made for clearer product decisions <span className="footer-signal">—</span></span></div></footer>
    </div>
  );
}
