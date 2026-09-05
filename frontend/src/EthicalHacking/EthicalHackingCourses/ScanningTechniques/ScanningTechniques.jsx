import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import "./ScanningTechniques.css";

/* =========================================================
   KHAN SPLOIT — Scanning Techniques Course
   Deep chapters + Quiz + Progress + Congrats Modal
   Note: Concepts for authorized ethical hacking / lab use only
========================================================= */

const STORAGE_KEY = "khansploit_scanning_techniques_completed";

const chapters = [
  // ====================== 01 ======================
  {
    id: "what-is-scanning",
    title: "01 What is Scanning?",
    content: (
      <>
        <h2>What is Scanning?</h2>
        <p>
          Scanning is the phase of an ethical hacking or penetration testing
          engagement where the tester actively probes <strong>authorized</strong>{" "}
          targets to discover live systems, open ports, running services, and
          potential points of interest.
        </p>
        <p>
          It builds on reconnaissance by moving from public information to
          direct (but controlled) interaction with in-scope systems. The purpose
          is visibility and prioritization — not disruption.
        </p>
        <p>
          In professional work, scanning sits between passive/open-source
          research and deeper enumeration or vulnerability analysis. Poorly
          planned scanning creates noise, incomplete maps, or accidental impact.
          Well-planned scanning produces a clear, evidence-backed picture of the
          live surface.
        </p>

        <h3>Primary Goals of Scanning</h3>
        <ul>
          <li>Identify which hosts are alive within scope</li>
          <li>Discover open ports and listening services</li>
          <li>Gather basic service and version information when authorized</li>
          <li>Support prioritization for later testing phases</li>
          <li>Remain strictly within approved scope and rules of engagement</li>
          <li>Document methods, timing, and results for the report</li>
        </ul>

        <h3>What Scanning Is Not</h3>
        <ul>
          <li>It is not permissionless probing of random internet hosts</li>
          <li>It is not the same as full exploitation</li>
          <li>It is not a substitute for careful interpretation</li>
          <li>It is not “run one tool at maximum speed and finish”</li>
        </ul>

        <h3>Important Principles</h3>
        <ul>
          <li>Scanning must be authorized in writing</li>
          <li>Aggressive or noisy scanning can cause impact or detection</li>
          <li>Results should be carefully documented and interpreted</li>
          <li>Client operations and stability come first</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Scanning turns reconnaissance data into a clearer picture of the
            live attack surface. It must always be performed within legal and
            contractual boundaries, with controlled intensity and clean notes.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is the main purpose of scanning in an authorized engagement?",
      options: [
        "To attack random systems without approval",
        "To discover live hosts, ports, and services within approved scope",
        "To replace all reporting work",
        "To skip reconnaissance entirely forever",
      ],
      correct:
        "To discover live hosts, ports, and services within approved scope",
    },
  },

  // ====================== 02 ======================
  {
    id: "types-of-scanning",
    title: "02 Types of Scanning",
    content: (
      <>
        <h2>Types of Scanning</h2>
        <p>
          Different scanning approaches serve different purposes. Understanding
          the categories helps choose the right technique for the engagement,
          the environment, and the rules of engagement.
        </p>
        <p>
          Professionals rarely do “one giant scan.” They sequence discovery:
          first confirm what is alive, then map ports, then identify services,
          then (if in scope) gather richer detail.
        </p>

        <h3>Common Categories</h3>
        <ul>
          <li>
            <strong>Host Discovery</strong> — Determining which systems are online
          </li>
          <li>
            <strong>Port Scanning</strong> — Identifying open, closed, or filtered ports
          </li>
          <li>
            <strong>Service and Version Detection</strong> — Learning what is running on open ports
          </li>
          <li>
            <strong>OS Detection (Fingerprinting)</strong> — Estimating the operating system
          </li>
          <li>
            <strong>Vulnerability Scanning</strong> — Looking for known weakness signatures
            (covered more deeply in later courses)
          </li>
        </ul>

        <h3>How Categories Connect</h3>
        <ul>
          <li>Host discovery reduces wasted port scanning on empty addresses</li>
          <li>Port scanning defines reachable service endpoints</li>
          <li>Service/version data improves prioritization and research</li>
          <li>OS hints support context, not absolute certainty</li>
        </ul>

        <h3>Practical Guidance</h3>
        <ul>
          <li>Start with lighter techniques when appropriate</li>
          <li>Increase depth only as needed and as permitted</li>
          <li>Balance thoroughness with noise and potential impact</li>
          <li>Record which technique produced which finding</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Different scan types answer different questions. Matching the
            technique to the goal produces cleaner results and better
            professionalism.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Why do professionals separate host discovery, port scanning, and service detection?",
      options: [
        "Because tools forbid combining any steps",
        "Because each step answers a different question and improves focus and control",
        "Because port scanning never finds services",
        "Because host discovery is illegal even when authorized",
      ],
      correct:
        "Because each step answers a different question and improves focus and control",
    },
  },

  // ====================== 03 ======================
  {
    id: "host-discovery",
    title: "03 Host Discovery Concepts",
    content: (
      <>
        <h2>Host Discovery Concepts</h2>
        <p>
          Host discovery aims to determine which IP addresses in a given range
          correspond to live systems. This helps focus later effort on systems
          that actually exist and respond.
        </p>
        <p>
          In filtered or hardened networks, discovery is imperfect. A host may
          be alive and still not answer certain probes. That is why careful
          interpretation matters more than a single green checkmark.
        </p>

        <h3>High-Level Approaches</h3>
        <ul>
          <li>Checking for responses to common probes</li>
          <li>Observing whether systems reply to basic network requests</li>
          <li>Using multiple methods when one technique is blocked or filtered</li>
          <li>Comparing results across time windows when allowed</li>
        </ul>

        <h3>Important Considerations</h3>
        <ul>
          <li>Firewalls and filtering can hide live hosts</li>
          <li>Some environments intentionally limit responses</li>
          <li>Results should be interpreted carefully, not treated as absolute</li>
          <li>Scope must always be respected — never expand ranges casually</li>
        </ul>

        <h3>Documentation Tip</h3>
        <ul>
          <li>Note the discovery method used</li>
          <li>Record which addresses responded and which did not</li>
          <li>Flag uncertain cases instead of forcing a false conclusion</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Host discovery reduces wasted effort by identifying systems that are
            worth further investigation. Incomplete results are common in
            filtered environments and should be reported honestly.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Why can host discovery results be incomplete in real environments?",
      options: [
        "Because live hosts never exist on networks",
        "Because firewalls and filtering can hide systems that are actually online",
        "Because IP addresses are illegal to write down",
        "Because discovery always lists every device worldwide",
      ],
      correct:
        "Because firewalls and filtering can hide systems that are actually online",
    },
  },

  // ====================== 04 ======================
  {
    id: "port-scanning-basics",
    title: "04 Port Scanning Basics",
    content: (
      <>
        <h2>Port Scanning Basics</h2>
        <p>
          Port scanning identifies which ports on a target system are open,
          closed, or filtered. Open ports indicate services that may be reachable
          and therefore form part of the attack surface — within the authorized
          scope.
        </p>
        <p>
          Ports are endpoints. Understanding their state is more valuable than
          collecting a huge list without meaning. A short list of confirmed open
          services with context beats a noisy dump of uncertain results.
        </p>

        <h3>Port States (Conceptual)</h3>
        <ul>
          <li>
            <strong>Open</strong> — A service is accepting connections
          </li>
          <li>
            <strong>Closed</strong> — No service is listening, but the host is reachable
          </li>
          <li>
            <strong>Filtered</strong> — Probes are blocked or do not receive a clear response
          </li>
        </ul>

        <h3>Why Port Scanning Matters</h3>
        <ul>
          <li>Reveals reachable services</li>
          <li>Supports prioritization of further testing</li>
          <li>Helps map the exposed surface of a system</li>
          <li>Feeds into service identification and later analysis</li>
        </ul>

        <h3>Professional Notes</h3>
        <ul>
          <li>Prefer clarity over maximum speed</li>
          <li>Align intensity with rules of engagement</li>
          <li>Unexpected critical services should be validated carefully</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Port scanning is a core discovery technique. Understanding port states
            and interpreting results carefully is more important than running the
            fastest possible scan.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What does an “open” port typically indicate during authorized scanning?",
      options: [
        "The host is guaranteed fully compromised",
        "A service is accepting connections on that port",
        "The port is filtered by every firewall worldwide",
        "No service can ever run on that system",
      ],
      correct: "A service is accepting connections on that port",
    },
  },

  // ====================== 05 ======================
  {
    id: "tcp-udp-scanning",
    title: "05 TCP and UDP Scanning Concepts",
    content: (
      <>
        <h2>TCP and UDP Scanning Concepts</h2>
        <p>
          TCP and UDP behave differently, so scanning approaches and result
          interpretation also differ. Treating them as identical is a common
          beginner mistake.
        </p>

        <h3>TCP Scanning Concepts</h3>
        <ul>
          <li>TCP is connection-oriented</li>
          <li>Common techniques observe how systems respond to connection attempts</li>
          <li>Results are often clearer than UDP in many environments</li>
          <li>Many business services use TCP (web, remote admin, mail, etc.)</li>
        </ul>

        <h3>UDP Scanning Concepts</h3>
        <ul>
          <li>UDP is connectionless</li>
          <li>Responses (or lack of responses) can be harder to interpret</li>
          <li>Scanning can be slower and noisier</li>
          <li>Many important services still use UDP (for example DNS-related services)</li>
        </ul>

        <h3>Practical Notes</h3>
        <ul>
          <li>Both protocols may need to be considered depending on scope</li>
          <li>Filtering and rate limiting affect results</li>
          <li>Patience and careful interpretation are required</li>
          <li>Document protocol-specific uncertainty in your notes</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            TCP and UDP scanning answer related but different questions. Knowing
            the characteristics of each protocol improves the quality of analysis.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Why is UDP scanning often harder to interpret than TCP scanning?",
      options: [
        "Because UDP is connectionless and responses may be unclear or absent",
        "Because UDP is never used by any service",
        "Because TCP cannot show open ports",
        "Because UDP requires no network access at all",
      ],
      correct:
        "Because UDP is connectionless and responses may be unclear or absent",
    },
  },

  // ====================== 06 ======================
  {
    id: "service-version-detection",
    title: "06 Service & Version Detection",
    content: (
      <>
        <h2>Service & Version Detection</h2>
        <p>
          Once open ports are identified, the next step is often to determine
          what service is running and, where possible, what product or version
          is in use — still within authorization and with minimal unnecessary
          impact.
        </p>

        <h3>Why This Information Matters</h3>
        <ul>
          <li>Helps prioritize further research</li>
          <li>Supports mapping to known weakness categories later</li>
          <li>Improves the accuracy of reporting</li>
          <li>Assists in understanding the technology environment</li>
        </ul>

        <h3>Important Cautions</h3>
        <ul>
          <li>Version detection is not always accurate</li>
          <li>Banners can be misleading or intentionally altered</li>
          <li>Results should be treated as indicators, not absolute proof</li>
          <li>Aggressive probing should only be done when authorized</li>
        </ul>

        <h3>Reporting Language</h3>
        <ul>
          <li>Prefer “indicates” or “reports as” when confidence is medium</li>
          <li>Validate critical claims with additional evidence when possible</li>
          <li>Separate observed facts from inferred conclusions</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Service and version information adds valuable context to open ports.
            Always verify critical findings and avoid overconfidence in automated
            results.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "How should service/version detection results typically be treated?",
      options: [
        "As absolute proof that never needs validation",
        "As useful indicators that may be incomplete or misleading",
        "As a reason to ignore open ports",
        "As authorization to test out-of-scope systems",
      ],
      correct:
        "As useful indicators that may be incomplete or misleading",
    },
  },

  // ====================== 07 ======================
  {
    id: "os-detection",
    title: "07 Operating System Detection",
    content: (
      <>
        <h2>Operating System Detection</h2>
        <p>
          OS detection (or OS fingerprinting) attempts to estimate the operating
          system running on a target based on network behavior and responses.
          It is supporting context, not a courtroom fact by itself.
        </p>

        <h3>Conceptual Value</h3>
        <ul>
          <li>Helps tailor later testing approaches</li>
          <li>Supports more accurate risk discussion</li>
          <li>Provides context for configuration and hardening expectations</li>
        </ul>

        <h3>Limitations</h3>
        <ul>
          <li>Results are often probabilistic, not certain</li>
          <li>Network filtering can reduce accuracy</li>
          <li>Virtualization and hardened systems can confuse detection</li>
          <li>Should be treated as supporting information</li>
        </ul>

        <h3>Professional Use</h3>
        <ul>
          <li>Combine OS hints with service banners and other evidence</li>
          <li>Do not build an entire narrative on one uncertain fingerprint</li>
          <li>State confidence level in notes and reports</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            OS detection is useful context, not a definitive answer. Combine it
            with other evidence for better overall understanding.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "What is a major limitation of OS detection?",
      options: [
        "It always provides 100% certain results",
        "Results are often probabilistic and can be affected by filtering or virtualization",
        "It replaces the need for port scanning",
        "It only works without authorization",
      ],
      correct:
        "Results are often probabilistic and can be affected by filtering or virtualization",
    },
  },

  // ====================== 08 ======================
  {
    id: "scan-timing-noise",
    title: "08 Timing, Noise & Stealth Considerations",
    content: (
      <>
        <h2>Timing, Noise & Stealth Considerations</h2>
        <p>
          Scanning generates network traffic. How fast and how aggressively
          scans are performed affects both results and the likelihood of
          detection or disruption.
        </p>
        <p>
          In professional engagements, “fastest” is not always “best.” Controlled
          intensity, clear communication, and respect for production stability
          define good practice.
        </p>

        <h3>Key Concepts</h3>
        <ul>
          <li>Faster scans finish sooner but create more noise</li>
          <li>Slower scans are quieter but take longer</li>
          <li>Some environments rate-limit or block aggressive probing</li>
          <li>Rules of engagement often define acceptable intensity</li>
        </ul>

        <h3>Professional Approach</h3>
        <ul>
          <li>Match scan intensity to the environment and authorization</li>
          <li>Prefer controlled, deliberate scanning over maximum speed</li>
          <li>Monitor for unexpected impact</li>
          <li>Communicate with the client if issues arise</li>
        </ul>

        <h3>Mindset</h3>
        <ul>
          <li>Discovery with control</li>
          <li>Evidence with minimal unnecessary traffic</li>
          <li>Client trust over personal convenience</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Scanning is not only about discovery — it is also about control.
            Timing and noise management are part of professional conduct.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What should guide scan intensity in a professional engagement?",
      options: [
        "Always maximum speed regardless of impact",
        "Environment sensitivity, authorization, and rules of engagement",
        "Whatever creates the most noise",
        "Ignoring the client completely",
      ],
      correct:
        "Environment sensitivity, authorization, and rules of engagement",
    },
  },

  // ====================== 09 ======================
  {
    id: "interpreting-results",
    title: "09 Interpreting Scan Results",
    content: (
      <>
        <h2>Interpreting Scan Results</h2>
        <p>
          Raw scan output is only useful when interpreted correctly. Many
          beginners over-trust automated results or misunderstand filtered states.
        </p>

        <h3>Good Interpretation Habits</h3>
        <ul>
          <li>Understand the difference between open, closed, and filtered</li>
          <li>Recognize that absence of evidence is not evidence of absence</li>
          <li>Cross-check important findings when possible</li>
          <li>Consider network architecture and security controls</li>
          <li>Document assumptions clearly</li>
        </ul>

        <h3>Common Pitfalls</h3>
        <ul>
          <li>Treating every open port as critical</li>
          <li>Ignoring filtered results</li>
          <li>Assuming version detection is always accurate</li>
          <li>Failing to relate findings back to business context</li>
        </ul>

        <h3>From Data to Meaning</h3>
        <ul>
          <li>Ask what the result changes about risk understanding</li>
          <li>Group related findings for clearer reporting</li>
          <li>Separate confirmed observations from hypotheses</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Interpretation skill separates tool operators from professional
            assessors. Always think about what the results actually mean.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which habit improves interpretation of scan results?",
      options: [
        "Treat every open port as equally critical with no context",
        "Distinguish open/closed/filtered and avoid over-trusting automation",
        "Delete all filtered results without notes",
        "Never document assumptions",
      ],
      correct:
        "Distinguish open/closed/filtered and avoid over-trusting automation",
    },
  },

  // ====================== 10 ======================
  {
    id: "documentation",
    title: "10 Documentation During Scanning",
    content: (
      <>
        <h2>Documentation During Scanning</h2>
        <p>
          Scanning produces data that must be organized for later phases and
          for the final report. Weak notes create weak conclusions.
        </p>

        <h3>What to Record</h3>
        <ul>
          <li>Targets scanned and time windows</li>
          <li>Techniques and intensity used</li>
          <li>Live hosts and open ports</li>
          <li>Service and version information</li>
          <li>Unusual or unexpected results</li>
          <li>Any issues or impact observed</li>
        </ul>

        <h3>Why Documentation Matters</h3>
        <ul>
          <li>Supports accurate reporting</li>
          <li>Enables reproducibility</li>
          <li>Helps hand off work between team members</li>
          <li>Provides evidence if questions arise later</li>
        </ul>

        <h3>Quality Tips</h3>
        <ul>
          <li>Use consistent naming for hosts and findings</li>
          <li>Keep raw tool output and your interpreted summary separate</li>
          <li>Mark confidence levels on uncertain items</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Clean documentation turns scanning activity into professional
            deliverable material. Capture what you did, what you found, and what
            it might mean.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What should scanning documentation typically include?",
      options: [
        "Only screenshots with no targets or timestamps",
        "Targets, methods, results, unusual findings, and any observed impact",
        "Only the tool name and nothing else",
        "Personal opinions with no evidence",
      ],
      correct:
        "Targets, methods, results, unusual findings, and any observed impact",
    },
  },

  // ====================== 11 ======================
  {
    id: "legal-ethical",
    title: "11 Legal & Ethical Considerations",
    content: (
      <>
        <h2>Legal & Ethical Considerations</h2>
        <p>
          Scanning is an active technique. Performing it without authorization
          can be illegal and harmful. Professional ethical hacking exists only
          inside clear permission.
        </p>

        <h3>Non-Negotiable Requirements</h3>
        <ul>
          <li>Written authorization covering the targets</li>
          <li>Clear scope (IP ranges, domains, time windows)</li>
          <li>Agreed rules of engagement</li>
          <li>Respect for production stability and business operations</li>
        </ul>

        <h3>Professional Conduct</h3>
        <ul>
          <li>Do not expand scope without approval</li>
          <li>Stop or reduce intensity if unexpected impact occurs</li>
          <li>Protect any sensitive data discovered</li>
          <li>Report findings responsibly</li>
        </ul>

        <h3>Trust</h3>
        <ul>
          <li>Clients grant access based on trust</li>
          <li>Ethical failures damage careers and organizations</li>
          <li>Good judgment is part of technical excellence</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Authorization defines the boundary between professional testing and
            illegal activity. Never scan systems you do not have permission to
            test.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is required before scanning systems in a professional engagement?",
      options: [
        "Curiosity alone",
        "Written authorization, clear scope, and agreed rules of engagement",
        "Only a social media post",
        "No permission if you use common tools",
      ],
      correct:
        "Written authorization, clear scope, and agreed rules of engagement",
    },
  },

  // ====================== 12 ======================
  {
    id: "best-practices",
    title: "12 Best Practices & Mindset",
    content: (
      <>
        <h2>Best Practices & Mindset</h2>
        <p>
          Effective scanning is deliberate, controlled, and focused on useful
          outcomes rather than maximum noise or maximum speed.
        </p>

        <h3>Recommended Practices</h3>
        <ul>
          <li>Confirm scope before starting</li>
          <li>Begin with lighter techniques when appropriate</li>
          <li>Document targets, methods, and results carefully</li>
          <li>Interpret results with healthy skepticism</li>
          <li>Communicate issues early</li>
          <li>Relate findings to risk and business context</li>
        </ul>

        <h3>Professional Mindset</h3>
        <ul>
          <li>Control over speed</li>
          <li>Clarity over volume</li>
          <li>Accuracy over assumptions</li>
          <li>Client safety and trust first</li>
        </ul>

        <h3>Course Takeaways</h3>
        <ul>
          <li>Know the main scan types and what question each answers</li>
          <li>Understand open, closed, and filtered states</li>
          <li>Treat banners and OS fingerprints as indicators</li>
          <li>Manage noise and impact deliberately</li>
          <li>Stay inside authorization at all times</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Scanning is a core technical skill, but professionalism determines
            whether it produces real value. Stay authorized, stay controlled, and
            stay focused on meaningful results.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which mindset best matches professional scanning practice?",
      options: [
        "Maximum noise and minimum notes",
        "Control over speed, clarity over volume, and client safety first",
        "Expand scope without asking",
        "Trust every automated result blindly",
      ],
      correct:
        "Control over speed, clarity over volume, and client safety first",
    },
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const ScanningTechniques = () => {
  const [activeChapter, setActiveChapter] = useState(chapters[0]);
  const [selectedOption, setSelectedOption] = useState("");
  const [quizError, setQuizError] = useState("");
  const [showCongrats, setShowCongrats] = useState(false);
  const [completedChapters, setCompletedChapters] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedChapters));
  }, [completedChapters]);

  const completedCount = completedChapters.length;
  const totalChapters = chapters.length;
  const progress = Math.round((completedCount / totalChapters) * 100);

  const handleChapterSelect = (chapter) => {
    setActiveChapter(chapter);
    setSelectedOption("");
    setQuizError("");
  };

  const handleSubmit = () => {
    if (!activeChapter.quiz) return;
    if (!selectedOption) {
      setQuizError("Please select an option first.");
      return;
    }
    if (selectedOption === activeChapter.quiz.correct) {
      setQuizError("");
      setShowCongrats(true);
      if (!completedChapters.includes(activeChapter.id)) {
        setCompletedChapters([...completedChapters, activeChapter.id]);
      }
    } else {
      setQuizError("Wrong answer. Re-read the section and try again.");
    }
  };

  const closeCongrats = () => {
    setShowCongrats(false);
    setSelectedOption("");
    setQuizError("");
  };

  const goNextChapter = () => {
    const idx = chapters.findIndex((c) => c.id === activeChapter.id);
    closeCongrats();
    if (idx >= 0 && idx < chapters.length - 1) {
      handleChapterSelect(chapters[idx + 1]);
    }
  };

  const isLastChapter =
    chapters[chapters.length - 1]?.id === activeChapter.id;

  return (
    <div className="article-page">
      <Navbar />

      <section className="article-header">
        <div className="article-header-content">
          <Link to="/ethical-hacking" className="back-link">
            ← Back to Ethical Hacking Courses
          </Link>
          <h1>
            The ultimate guide to{" "}
            <span className="gradient-text">Scanning Techniques</span>
          </h1>
          <p className="article-date">Updated • 2026</p>
          <p className="article-date" style={{ marginTop: 8 }}>
            Progress: {completedCount}/{totalChapters} chapters · {progress}%
          </p>
        </div>
      </section>

      <section className="article-banner">
        <img
          src="/images/courses/eh-scanning.png"
          alt="Scanning Techniques"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1200x420/1a0b2e/a855f7?text=Scanning+Techniques";
          }}
        />
      </section>

      <section className="article-body">
        <div className="article-container">
          <aside className="article-sidebar">
            <h3>Course Content</h3>
            <ul>
              {chapters.map((chapter) => (
                <li
                  key={chapter.id}
                  className={`${
                    activeChapter.id === chapter.id ? "active" : ""
                  } ${
                    completedChapters.includes(chapter.id) ? "completed" : ""
                  }`}
                  onClick={() => handleChapterSelect(chapter)}
                >
                  {chapter.title}
                  {completedChapters.includes(chapter.id) && (
                    <span className="check-mark">✓</span>
                  )}
                </li>
              ))}
            </ul>
          </aside>

          <div className="article-content">
            {activeChapter.content}

            {activeChapter.quiz && (
              <div className="quiz-box">
                <h3>Quick Check</h3>
                <p className="quiz-question">{activeChapter.quiz.question}</p>
                <div className="quiz-options">
                  {activeChapter.quiz.options.map((opt, i) => (
                    <label key={i} className="quiz-option">
                      <input
                        type="radio"
                        name="quiz"
                        value={opt}
                        checked={selectedOption === opt}
                        onChange={(e) => {
                          setSelectedOption(e.target.value);
                          setQuizError("");
                        }}
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
                {quizError && (
                  <p
                    className="quiz-error"
                    style={{ color: "#f9a8d4", marginTop: 12, fontSize: 14 }}
                  >
                    {quizError}
                  </p>
                )}
                <button className="quiz-submit" onClick={handleSubmit}>
                  Submit Answer
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {showCongrats && (
        <div className="congrats-overlay">
          <div className="congrats-modal">
            <div className="congrats-icon">🎉</div>
            <h2>Congratulations!</h2>
            <p>
              You completed <strong>{activeChapter.title}</strong> successfully.
            </p>
            <p style={{ opacity: 0.85, fontSize: 14 }}>
              Progress: {completedCount}/{totalChapters}
            </p>
            <div
              style={{
                display: "flex",
                gap: 10,
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: 16,
              }}
            >
              <button onClick={closeCongrats}>Continue Reading</button>
              {!isLastChapter && (
                <button onClick={goNextChapter}>Next Chapter →</button>
              )}
              {isLastChapter && completedCount >= totalChapters && (
                <button onClick={closeCongrats}>Course Complete ✓</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScanningTechniques;