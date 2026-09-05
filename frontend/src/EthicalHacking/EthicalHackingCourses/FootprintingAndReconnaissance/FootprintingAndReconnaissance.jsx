import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import "./FootprintingAndReconnaissance.css";

/* =========================================================
   KHAN SPLOIT — Footprinting & Reconnaissance
   Chapters + Quiz + Progress + Congrats
========================================================= */

const STORAGE_KEY = "khansploit_footprinting_recon_course_completed";

const chapters = [
  // ====================== 01 ======================
  {
    id: "what-is-footprinting",
    title: "01 What is Footprinting & Reconnaissance?",
    content: (
      <>
        <h2>What is Footprinting & Reconnaissance?</h2>
        <p>
          Footprinting and reconnaissance are the information-gathering phases
          of an ethical hacking or penetration testing engagement. The goal is
          to collect as much relevant information as possible about the target
          organization, systems, and infrastructure — within the approved scope
          and legal boundaries.
        </p>
        <p>
          Good reconnaissance reduces noise later in the assessment, helps
          prioritize targets, and improves the overall quality of findings and
          recommendations.
        </p>

        <h3>Core Objectives</h3>
        <ul>
          <li>Identify the attack surface</li>
          <li>Discover publicly available information</li>
          <li>Map organizational structure and technologies</li>
          <li>Support later scanning and testing phases</li>
          <li>Stay strictly inside the agreed scope</li>
        </ul>

        <h3>Important Principle</h3>
        <ul>
          <li>Reconnaissance must always be authorized</li>
          <li>Passive techniques are generally preferred first</li>
          <li>Active techniques require clear permission and careful execution</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Footprinting and reconnaissance form the foundation of a professional
            assessment. Quality information gathering leads to more accurate and
            valuable results.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is the primary goal of footprinting and reconnaissance in an ethical engagement?",
      options: [
        "To attack systems without permission",
        "To collect relevant information within approved scope and legal boundaries",
        "To delete logs and hide activity",
        "To only use social media for entertainment",
      ],
      correct:
        "To collect relevant information within approved scope and legal boundaries",
    },
  },

  // ====================== 02 ======================
  {
    id: "passive-vs-active",
    title: "02 Passive vs Active Reconnaissance",
    content: (
      <>
        <h2>Passive vs Active Reconnaissance</h2>
        <p>
          Reconnaissance is commonly divided into passive and active approaches.
          Understanding the difference is essential for staying within scope and
          minimizing unnecessary impact.
        </p>

        <h3>Passive Reconnaissance</h3>
        <ul>
          <li>Relies on publicly available information</li>
          <li>Does not directly interact with the target systems in an intrusive way</li>
          <li>Lower risk of detection or disruption</li>
          <li>Examples include public websites, search engines, DNS records, and open-source intelligence</li>
        </ul>

        <h3>Active Reconnaissance</h3>
        <ul>
          <li>Involves direct interaction with target systems or infrastructure</li>
          <li>Can include network probes and service discovery</li>
          <li>Higher chance of being logged or noticed</li>
          <li>Must be explicitly authorized and carefully controlled</li>
        </ul>

        <h3>Professional Guidance</h3>
        <ul>
          <li>Start with passive methods whenever possible</li>
          <li>Move to active techniques only when permitted by the rules of engagement</li>
          <li>Document both the methods used and the information obtained</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Passive reconnaissance gathers information without touching the target.
            Active reconnaissance interacts with systems and therefore requires
            clear authorization and caution.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is a key difference between passive and active reconnaissance?",
      options: [
        "Passive always requires root access",
        "Passive relies on public information with less direct interaction; active involves direct interaction and needs clear authorization",
        "Active is always safer than passive",
        "There is no difference between them",
      ],
      correct:
        "Passive relies on public information with less direct interaction; active involves direct interaction and needs clear authorization",
    },
  },

  // ====================== 03 ======================
  {
    id: "osint-fundamentals",
    title: "03 OSINT Fundamentals",
    content: (
      <>
        <h2>OSINT Fundamentals</h2>
        <p>
          Open-Source Intelligence (OSINT) refers to information collected from
          publicly available sources. It is a major component of modern
          reconnaissance.
        </p>

        <h3>Common OSINT Categories</h3>
        <ul>
          <li>Search engine results and advanced search techniques</li>
          <li>Company websites and public documentation</li>
          <li>Social media and professional networking platforms</li>
          <li>Domain and DNS related public records</li>
          <li>Public code repositories and technical blogs</li>
          <li>Job postings and technology stack hints</li>
          <li>News articles, press releases, and regulatory filings</li>
        </ul>

        <h3>Value of OSINT</h3>
        <ul>
          <li>Reveals organizational structure and key people</li>
          <li>Helps identify technologies in use</li>
          <li>Can uncover exposed documents or misconfigurations</li>
          <li>Supports realistic threat modeling</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            OSINT is powerful because it uses information the organization has
            already made public. Ethical use of OSINT stays within legal and
            authorized boundaries.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "What does OSINT primarily rely on?",
      options: [
        "Unauthorized access to private databases",
        "Information collected from publicly available sources",
        "Only internal company emails",
        "Physical break-ins",
      ],
      correct: "Information collected from publicly available sources",
    },
  },

  // ====================== 04 ======================
  {
    id: "domain-dns-recon",
    title: "04 Domain & DNS Reconnaissance",
    content: (
      <>
        <h2>Domain & DNS Reconnaissance</h2>
        <p>
          Domain names and DNS records often provide a rich source of information
          about an organization’s online presence and infrastructure.
        </p>

        <h3>Useful Information Sources</h3>
        <ul>
          <li>WHOIS and domain registration details (where publicly available)</li>
          <li>DNS record types (A, AAAA, MX, NS, TXT, CNAME, etc.)</li>
          <li>Subdomain discovery through public sources</li>
          <li>Historical DNS and domain data</li>
          <li>Certificate transparency logs</li>
        </ul>

        <h3>What Analysts Look For</h3>
        <ul>
          <li>Related domains and subdomains</li>
          <li>Mail and name server infrastructure</li>
          <li>Hints about hosting providers and technologies</li>
          <li>Potential exposure of internal naming conventions</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            DNS and domain information is often one of the first and most useful
            starting points in reconnaissance. Always respect scope and legal limits.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which of the following is commonly used in domain & DNS reconnaissance?",
      options: [
        "Only deleting DNS records",
        "WHOIS details, DNS records, subdomain discovery, and certificate transparency logs",
        "Ignoring all public DNS data",
        "Only physical network cables",
      ],
      correct:
        "WHOIS details, DNS records, subdomain discovery, and certificate transparency logs",
    },
  },

  // ====================== 05 ======================
  {
    id: "search-engines",
    title: "05 Search Engines & Public Data",
    content: (
      <>
        <h2>Search Engines & Public Data</h2>
        <p>
          Search engines and public data sources can reveal a surprising amount
          of information when used carefully and creatively.
        </p>

        <h3>Common Approaches</h3>
        <ul>
          <li>Targeted search queries related to the organization</li>
          <li>Looking for publicly indexed documents and files</li>
          <li>Identifying exposed login portals or administrative interfaces</li>
          <li>Finding technology-specific information and error messages</li>
          <li>Reviewing cached or archived versions of pages</li>
        </ul>

        <h3>Professional Considerations</h3>
        <ul>
          <li>Stay within the authorized scope</li>
          <li>Avoid aggressive automated querying that may violate terms of service</li>
          <li>Document sources of information for reporting</li>
          <li>Treat discovered sensitive data carefully and report it responsibly</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Public search data is a valuable reconnaissance resource. Skillful
            use of search techniques can surface information that supports later
            testing phases.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is an important professional consideration when using search engines for reconnaissance?",
      options: [
        "Ignore scope and query everything possible",
        "Stay within authorized scope and avoid aggressive querying that may violate terms of service",
        "Never document any sources",
        "Always publish found credentials publicly",
      ],
      correct:
        "Stay within authorized scope and avoid aggressive querying that may violate terms of service",
    },
  },

  // ====================== 06 ======================
  {
    id: "organizational-mapping",
    title: "06 Organizational & People Mapping",
    content: (
      <>
        <h2>Organizational & People Mapping</h2>
        <p>
          Understanding the structure of an organization and key personnel can
          support realistic assessment scenarios and help identify potential
          social engineering risks (always within ethical and legal limits).
        </p>

        <h3>Useful Information Types</h3>
        <ul>
          <li>Company structure and business units</li>
          <li>Key roles and departments</li>
          <li>Public employee profiles and professional information</li>
          <li>Email format patterns (when publicly observable)</li>
          <li>Partnerships, vendors, and third-party relationships</li>
        </ul>

        <h3>Ethical Boundaries</h3>
        <ul>
          <li>Only use publicly available information unless otherwise authorized</li>
          <li>Respect privacy and applicable laws</li>
          <li>Do not engage in unauthorized contact or social engineering unless explicitly permitted</li>
          <li>Focus on information that supports security improvement</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Organizational mapping provides context. It should always be performed
            ethically and within the rules of engagement.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is a key ethical boundary in organizational & people mapping?",
      options: [
        "Use any private data without permission",
        "Only use publicly available information unless otherwise authorized, and respect privacy laws",
        "Contact employees without any authorization",
        "Ignore all legal restrictions",
      ],
      correct:
        "Only use publicly available information unless otherwise authorized, and respect privacy laws",
    },
  },

  // ====================== 07 ======================
  {
    id: "technology-identification",
    title: "07 Technology Stack Identification",
    content: (
      <>
        <h2>Technology Stack Identification</h2>
        <p>
          Identifying the technologies used by a target helps prioritize later
          testing and understand potential classes of issues.
        </p>

        <h3>Common Indicators</h3>
        <ul>
          <li>HTTP headers and server responses</li>
          <li>Publicly visible software versions or product names</li>
          <li>JavaScript libraries and frameworks</li>
          <li>Cloud provider clues</li>
          <li>Job postings and technical blog content</li>
          <li>Error messages and default pages</li>
        </ul>

        <h3>Why This Matters</h3>
        <ul>
          <li>Helps focus research on relevant technologies</li>
          <li>Supports realistic risk discussions</li>
          <li>Assists in mapping findings to known weakness categories</li>
          <li>Improves the quality of remediation advice</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Technology identification turns raw data into actionable context.
            Accuracy and careful interpretation are more important than volume.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Why is technology stack identification useful during reconnaissance?",
      options: [
        "It has no practical value",
        "It helps prioritize later testing and understand potential classes of issues",
        "It only serves marketing purposes",
        "It replaces the need for any authorization",
      ],
      correct:
        "It helps prioritize later testing and understand potential classes of issues",
    },
  },

  // ====================== 08 ======================
  {
    id: "network-range-discovery",
    title: "08 Network Range & Infrastructure Clues",
    content: (
      <>
        <h2>Network Range & Infrastructure Clues</h2>
        <p>
          During reconnaissance, analysts often attempt to understand the rough
          boundaries of an organization’s network presence using publicly
          available information.
        </p>

        <h3>Possible Sources of Clues</h3>
        <ul>
          <li>Public DNS records</li>
          <li>Hosting and cloud provider information</li>
          <li>Certificate data</li>
          <li>Publicly documented IP ranges (where available)</li>
          <li>Historical and passive DNS data</li>
        </ul>

        <h3>Important Constraints</h3>
        <ul>
          <li>Scope documents usually define exact in-scope ranges</li>
          <li>Do not expand testing beyond approved targets</li>
          <li>Passive discovery is preferred before any active probing</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Understanding potential network boundaries helps planning, but actual
            testing must remain strictly inside the authorized scope.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is an important constraint when discovering network range clues?",
      options: [
        "Always expand testing far beyond the approved scope",
        "Stay strictly inside the authorized scope; scope documents define in-scope ranges",
        "Ignore all passive data",
        "Never look at public DNS records",
      ],
      correct:
        "Stay strictly inside the authorized scope; scope documents define in-scope ranges",
    },
  },

  // ====================== 09 ======================
  {
    id: "documentation-note-taking",
    title: "09 Documentation & Note-Taking",
    content: (
      <>
        <h2>Documentation & Note-Taking</h2>
        <p>
          Reconnaissance produces large amounts of information. Professional
          results depend on clear, organized documentation.
        </p>

        <h3>What to Capture</h3>
        <ul>
          <li>Sources of information</li>
          <li>Domains, subdomains, and related assets</li>
          <li>Technologies and version hints</li>
          <li>Interesting findings and open questions</li>
          <li>Timestamps and methods used</li>
        </ul>

        <h3>Good Practices</h3>
        <ul>
          <li>Keep notes structured and searchable</li>
          <li>Separate confirmed facts from assumptions</li>
          <li>Record both successful and negative results</li>
          <li>Prepare information so it can feed directly into the final report</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Strong documentation turns reconnaissance from scattered notes into
            professional, reusable intelligence for the rest of the engagement.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is a good practice for documentation during reconnaissance?",
      options: [
        "Keep everything unorganized and never record sources",
        "Keep notes structured, separate facts from assumptions, and record sources and methods",
        "Only remember things mentally",
        "Delete all notes after every session",
      ],
      correct:
        "Keep notes structured, separate facts from assumptions, and record sources and methods",
    },
  },

  // ====================== 10 ======================
  {
    id: "tools-categories",
    title: "10 Tool Categories (High-Level)",
    content: (
      <>
        <h2>Tool Categories (High-Level)</h2>
        <p>
          Many tools support reconnaissance. Understanding categories is more
          useful than memorizing every tool name.
        </p>

        <h3>Common Categories</h3>
        <ul>
          <li>Search and OSINT collection tools</li>
          <li>DNS and domain enumeration utilities</li>
          <li>Subdomain discovery tools</li>
          <li>Public data and archive search tools</li>
          <li>Technology fingerprinting helpers</li>
          <li>Note-taking and knowledge management tools</li>
        </ul>

        <h3>Mindset</h3>
        <ul>
          <li>Tools support the process — they do not replace thinking</li>
          <li>Always verify important findings manually when needed</li>
          <li>Respect rate limits, terms of service, and scope</li>
          <li>Prefer passive approaches first</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Choose tools based on the information you need and the constraints of
            the engagement. Methodology comes first; tools come second.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is the recommended mindset regarding tools in reconnaissance?",
      options: [
        "Tools replace all thinking and methodology",
        "Tools support the process; methodology comes first and findings should be verified when needed",
        "Never use any tools",
        "Ignore rate limits and scope completely",
      ],
      correct:
        "Tools support the process; methodology comes first and findings should be verified when needed",
    },
  },

  // ====================== 11 ======================
  {
    id: "legal-ethical-boundaries",
    title: "11 Legal & Ethical Boundaries",
    content: (
      <>
        <h2>Legal & Ethical Boundaries</h2>
        <p>
          Reconnaissance can feel low-risk because much of it uses public data,
          but legal and ethical boundaries still apply.
        </p>

        <h3>Key Rules</h3>
        <ul>
          <li>Only gather information within the authorized scope</li>
          <li>Do not access systems or data you are not permitted to access</li>
          <li>Respect privacy laws and platform terms of service</li>
          <li>Do not use discovered information for unauthorized purposes</li>
          <li>Report sensitive exposures responsibly</li>
        </ul>

        <h3>Professional Conduct</h3>
        <ul>
          <li>When in doubt, ask the client or engagement lead</li>
          <li>Document your methods clearly</li>
          <li>Avoid aggressive techniques that could cause impact</li>
          <li>Treat all discovered data as confidential</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Even passive reconnaissance must be performed ethically and within
            legal limits. Authorization and professionalism remain non-negotiable.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which statement best reflects legal & ethical boundaries in reconnaissance?",
      options: [
        "Public data means no rules apply",
        "Only gather information within authorized scope, respect privacy and laws, and report sensitive findings responsibly",
        "Always access any system you find interesting",
        "Never document methods",
      ],
      correct:
        "Only gather information within authorized scope, respect privacy and laws, and report sensitive findings responsibly",
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
          Effective reconnaissance is systematic, careful, and focused on value
          rather than volume.
        </p>

        <h3>Recommended Practices</h3>
        <ul>
          <li>Start passive, expand only as authorized</li>
          <li>Define clear goals for each reconnaissance activity</li>
          <li>Validate important findings from multiple sources when possible</li>
          <li>Keep thorough, organized notes</li>
          <li>Map findings back to business context and risk</li>
          <li>Communicate early if something sensitive or unexpected is discovered</li>
        </ul>

        <h3>Professional Mindset</h3>
        <ul>
          <li>Curiosity balanced with restraint</li>
          <li>Accuracy over speed</li>
          <li>Clarity over complexity</li>
          <li>Support for the client’s security improvement</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            High-quality footprinting and reconnaissance set the tone for the
            entire assessment. Discipline, documentation, and ethics produce
            professional results.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which practice best matches professional reconnaissance mindset?",
      options: [
        "Collect maximum volume with no goals or validation",
        "Start passive, define clear goals, validate findings, keep organized notes, and stay ethical",
        "Ignore scope and move straight to aggressive techniques",
        "Never communicate sensitive discoveries",
      ],
      correct:
        "Start passive, define clear goals, validate findings, keep organized notes, and stay ethical",
    },
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const FootprintingAndReconnaissance = () => {
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
            <span className="gradient-text">Footprinting & Reconnaissance</span>
          </h1>
          <p className="article-date">Updated • 2026</p>
          <p className="article-date" style={{ marginTop: 8 }}>
            Progress: {completedCount}/{totalChapters} chapters · {progress}%
          </p>
        </div>
      </section>

      <section className="article-banner">
        <img
          src="/images/courses/eh-footprinting.png"
          alt="Footprinting and Reconnaissance"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1200x420/1a0b2e/a855f7?text=Footprinting+%26+Reconnaissance";
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

export default FootprintingAndReconnaissance;