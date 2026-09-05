import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import "./IntroductionToEthicalHacking.css";

/* =========================================================
   KHAN SPLOIT — Introduction to Ethical Hacking
   Chapters + Quiz + Progress + Congrats
========================================================= */

const STORAGE_KEY = "khansploit_intro_ethical_hacking_completed";

const chapters = [
  // ====================== 01 ======================
  {
    id: "what-is-ethical-hacking",
    title: "01 What is Ethical Hacking?",
    content: (
      <>
        <h2>What is Ethical Hacking?</h2>
        <p>
          Ethical hacking is the authorized and legal practice of testing computer
          systems, networks, applications, and infrastructure to identify security
          weaknesses before malicious actors can exploit them. Ethical hackers
          (also known as white-hat hackers) operate with explicit permission and
          within clearly defined rules of engagement.
        </p>
        <p>
          The primary objective is not to cause damage, but to improve an
          organization’s security posture, reduce risk, support compliance
          requirements, and provide actionable recommendations that strengthen
          defenses.
        </p>

        <h3>Core Characteristics of Ethical Hacking</h3>
        <ul>
          <li>Performed only with proper written authorization</li>
          <li>Strictly limited to the approved scope and targets</li>
          <li>Focused on risk identification and remediation guidance</li>
          <li>Conducted with professionalism and confidentiality</li>
          <li>Documented thoroughly for stakeholders and decision makers</li>
        </ul>

        <h3>Why Organizations Need Ethical Hacking</h3>
        <ul>
          <li>Discover vulnerabilities before attackers do</li>
          <li>Validate the effectiveness of existing security controls</li>
          <li>Meet regulatory and compliance requirements</li>
          <li>Improve incident response readiness</li>
          <li>Build a culture of continuous security improvement</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Ethical hacking is a controlled, legal, and professional activity.
            Authorization, scope, and ethics form the foundation of every
            engagement. Without these elements, the same technical activities
            become illegal.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is the single most important requirement that makes hacking ethical?",
      options: [
        "Using only open-source tools",
        "Proper written authorization and defined scope",
        "Having a high social media following",
        "Working only at night",
      ],
      correct: "Proper written authorization and defined scope",
    },
  },

  // ====================== 02 ======================
  {
    id: "types-of-hackers",
    title: "02 Types of Hackers",
    content: (
      <>
        <h2>Types of Hackers</h2>
        <p>
          Understanding different categories of hackers helps clarify motivations,
          skill levels, and the context in which ethical hacking operates. These
          classifications are widely used in cybersecurity education and industry
          discussions.
        </p>

        <h3>Primary Categories</h3>
        <ul>
          <li>
            <strong>White Hat Hackers</strong> — Ethical professionals who test
            systems with permission to improve security. They follow laws, contracts,
            and professional codes of conduct.
          </li>
          <li>
            <strong>Black Hat Hackers</strong> — Malicious actors who attack systems
            without authorization for personal gain, data theft, disruption, or other
            harmful purposes.
          </li>
          <li>
            <strong>Grey Hat Hackers</strong> — Individuals who may identify and
            report vulnerabilities without prior authorization. Their actions often
            fall into a legal grey area.
          </li>
          <li>
            <strong>Script Kiddies</strong> — Inexperienced individuals who rely on
            pre-built tools and scripts without deep technical understanding.
          </li>
          <li>
            <strong>Hacktivists</strong> — Motivated by political, social, or
            ideological goals rather than pure financial gain.
          </li>
          <li>
            <strong>State-Sponsored / Advanced Persistent Threats (APTs)</strong> —
            Highly resourced groups often linked to nation-states, capable of
            long-term, sophisticated campaigns.
          </li>
        </ul>

        <h3>Why the Distinction Matters</h3>
        <ul>
          <li>Authorization is the key difference between ethical and illegal activity</li>
          <li>Motivations influence attack patterns and targets</li>
          <li>Skill level affects the complexity of threats organizations face</li>
          <li>Understanding roles helps in designing better defenses and training</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Ethical hackers belong firmly in the white-hat category. Clear
            authorization, professional conduct, and respect for legal boundaries
            separate ethical work from criminal activity.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which category best describes professional ethical hackers?",
      options: [
        "Black Hat Hackers",
        "White Hat Hackers",
        "Script Kiddies only",
        "Hacktivists by default",
      ],
      correct: "White Hat Hackers",
    },
  },

  // ====================== 03 ======================
  {
    id: "hacking-phases",
    title: "03 Phases of Ethical Hacking",
    content: (
      <>
        <h2>Phases of Ethical Hacking</h2>
        <p>
          Professional ethical hacking and penetration testing engagements follow
          a structured methodology. This ensures thorough coverage, repeatability,
          and clear communication of results to stakeholders.
        </p>

        <h3>Standard High-Level Phases</h3>
        <ul>
          <li>
            <strong>1. Reconnaissance (Information Gathering)</strong> — Collecting
            publicly available information about the target organization, systems,
            and infrastructure.
          </li>
          <li>
            <strong>2. Scanning</strong> — Identifying live hosts, open ports,
            services, and potential entry points.
          </li>
          <li>
            <strong>3. Enumeration</strong> — Gathering more detailed information
            such as user accounts, shares, and system details.
          </li>
          <li>
            <strong>4. Vulnerability Analysis</strong> — Identifying known
            weaknesses and misconfigurations that could be relevant to the target.
          </li>
          <li>
            <strong>5. Controlled Exploitation</strong> — Attempting to validate
            findings within the approved scope and rules of engagement.
          </li>
          <li>
            <strong>6. Post-Exploitation (Impact Assessment)</strong> — Understanding
            the potential impact of successful access while remaining inside scope.
          </li>
          <li>
            <strong>7. Reporting & Remediation Guidance</strong> — Documenting
            findings, risk ratings, evidence, and clear recommendations.
          </li>
        </ul>

        <h3>Important Notes on Methodology</h3>
        <ul>
          <li>Every phase must stay strictly within the agreed scope</li>
          <li>Not every engagement requires full exploitation</li>
          <li>Reporting quality is as important as technical discovery</li>
          <li>Communication with the client throughout the engagement is essential</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            A structured methodology provides consistency, professionalism, and
            measurable value. The goal is always risk reduction and clear,
            actionable reporting — not just finding as many issues as possible.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which phase focuses on documenting findings, risk ratings, and recommendations?",
      options: [
        "Reconnaissance only",
        "Scanning",
        "Reporting & Remediation Guidance",
        "Script writing",
      ],
      correct: "Reporting & Remediation Guidance",
    },
  },

  // ====================== 04 ======================
  {
    id: "legal-ethical-framework",
    title: "04 Legal & Ethical Framework",
    content: (
      <>
        <h2>Legal & Ethical Framework</h2>
        <p>
          Ethical hacking exists only inside a legal and contractual boundary.
          The same technical skills used without authorization can result in
          serious legal consequences.
        </p>

        <h3>Essential Legal Requirements</h3>
        <ul>
          <li>Written authorization from the system or data owner</li>
          <li>Clearly defined scope (IP ranges, applications, time windows)</li>
          <li>Rules of engagement and approved testing techniques</li>
          <li>Non-disclosure and data protection agreements</li>
          <li>Compliance with applicable local and international laws</li>
        </ul>

        <h3>Ethical Responsibilities</h3>
        <ul>
          <li>Never exceed the approved scope</li>
          <li>Protect any sensitive information discovered during testing</li>
          <li>Avoid actions that could disrupt production systems unless explicitly permitted</li>
          <li>Report findings accurately and without exaggeration</li>
          <li>Maintain professional integrity and confidentiality</li>
        </ul>

        <h3>Consequences of Unauthorized Activity</h3>
        <ul>
          <li>Criminal charges under computer misuse and cybercrime laws</li>
          <li>Civil liability and financial damages</li>
          <li>Professional reputation damage</li>
          <li>Loss of certifications and career opportunities</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Authorization is not optional — it is the defining element of ethical
            hacking. Technical ability without legal and ethical grounding is
            dangerous and illegal.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is the defining legal requirement for ethical hacking?",
      options: [
        "Using free tools only",
        "Written authorization from the system or data owner",
        "Posting results publicly immediately",
        "Working without any contracts",
      ],
      correct: "Written authorization from the system or data owner",
    },
  },

  // ====================== 05 ======================
  {
    id: "roles-and-skills",
    title: "05 Roles, Skills & Career Paths",
    content: (
      <>
        <h2>Roles, Skills & Career Paths</h2>
        <p>
          Ethical hacking is part of a broader cybersecurity ecosystem. Different
          roles require overlapping but distinct skill sets.
        </p>

        <h3>Common Related Roles</h3>
        <ul>
          <li>
            <strong>Penetration Tester</strong> — Focuses on identifying and
            validating security weaknesses in systems and applications
          </li>
          <li>
            <strong>Red Team Operator</strong> — Simulates real-world adversaries
            with broader objectives and longer engagement timelines
          </li>
          <li>
            <strong>Security Analyst / SOC Analyst</strong> — Monitors, detects,
            and responds to threats
          </li>
          <li>
            <strong>Vulnerability Management Specialist</strong> — Manages scanning,
            prioritization, and remediation tracking
          </li>
          <li>
            <strong>Security Consultant / Advisor</strong> — Provides strategic
            guidance and assessment services
          </li>
        </ul>

        <h3>Foundational Skills</h3>
        <ul>
          <li>Strong understanding of networking and TCP/IP</li>
          <li>Linux and Windows operating system knowledge</li>
          <li>Basic scripting and automation ability</li>
          <li>Knowledge of common security concepts and controls</li>
          <li>Clear written and verbal communication skills</li>
          <li>Professional report writing ability</li>
        </ul>

        <h3>Soft Skills That Matter</h3>
        <ul>
          <li>Ethics and integrity</li>
          <li>Curiosity combined with discipline</li>
          <li>Ability to explain technical findings to non-technical audiences</li>
          <li>Continuous learning mindset</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Technical skills open the door, but professionalism, communication,
            and ethical judgment determine long-term success in ethical hacking
            careers.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which soft skill is especially important for long-term success in ethical hacking?",
      options: [
        "Never documenting findings",
        "Ability to explain technical findings to non-technical audiences",
        "Avoiding all communication with clients",
        "Ignoring ethics when results look good",
      ],
      correct:
        "Ability to explain technical findings to non-technical audiences",
    },
  },

  // ====================== 06 ======================
  {
    id: "methodology-overview",
    title: "06 Common Methodologies & Standards",
    content: (
      <>
        <h2>Common Methodologies & Standards</h2>
        <p>
          Professional ethical hacking work is guided by established frameworks
          and methodologies. These provide structure, consistency, and credibility.
        </p>

        <h3>Widely Referenced Approaches</h3>
        <ul>
          <li>
            <strong>PTES (Penetration Testing Execution Standard)</strong> —
            Comprehensive framework covering the full testing lifecycle
          </li>
          <li>
            <strong>OWASP Testing Guide</strong> — Focused on web application
            security testing
          </li>
          <li>
            <strong>NIST SP 800-115</strong> — Technical guide to information
            security testing and assessment
          </li>
          <li>
            <strong>OSSTMM</strong> — Open Source Security Testing Methodology Manual
          </li>
          <li>
            <strong>MITRE ATT&CK</strong> — Knowledge base of adversary tactics
            and techniques (useful for mapping findings)
          </li>
        </ul>

        <h3>Benefits of Using a Methodology</h3>
        <ul>
          <li>Ensures consistent and repeatable testing</li>
          <li>Helps avoid scope gaps</li>
          <li>Improves quality of reporting</li>
          <li>Supports client trust and professional credibility</li>
          <li>Makes findings easier to map to risk and business impact</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Methodologies turn ad-hoc testing into professional, defensible work.
            They help both the tester and the client understand what was covered
            and what the results mean.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which framework is especially focused on web application security testing?",
      options: [
        "Only hardware manuals",
        "OWASP Testing Guide",
        "Desktop wallpaper standards",
        "Social media guidelines",
      ],
      correct: "OWASP Testing Guide",
    },
  },

  // ====================== 07 ======================
  {
    id: "rules-of-engagement",
    title: "07 Rules of Engagement",
    content: (
      <>
        <h2>Rules of Engagement</h2>
        <p>
          Rules of Engagement (RoE) define the boundaries, permissions, and
          constraints of an ethical hacking engagement. They protect both the
          tester and the client.
        </p>

        <h3>Typical Elements in Rules of Engagement</h3>
        <ul>
          <li>Approved target systems, IP ranges, and applications</li>
          <li>Testing time windows and blackout periods</li>
          <li>Allowed and prohibited testing techniques</li>
          <li>Contact and escalation procedures</li>
          <li>Data handling and confidentiality requirements</li>
          <li>Emergency stop conditions</li>
          <li>Reporting format and delivery timeline</li>
        </ul>

        <h3>Why Clear RoE Matters</h3>
        <ul>
          <li>Prevents accidental impact on production systems</li>
          <li>Creates shared understanding between tester and client</li>
          <li>Provides legal protection when activities are authorized</li>
          <li>Helps manage expectations about depth and coverage</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Well-written Rules of Engagement are a critical professional tool.
            They turn goodwill and verbal agreements into clear, enforceable
            boundaries.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is one key purpose of Rules of Engagement (RoE)?",
      options: [
        "To allow unlimited testing on any system",
        "To clearly define boundaries, permissions, and constraints of the engagement",
        "To hide findings from the client",
        "To remove all legal responsibility",
      ],
      correct:
        "To clearly define boundaries, permissions, and constraints of the engagement",
    },
  },

  // ====================== 08 ======================
  {
    id: "tools-overview",
    title: "08 Tools Landscape (High-Level)",
    content: (
      <>
        <h2>Tools Landscape (High-Level Overview)</h2>
        <p>
          Ethical hackers use a wide range of tools. Understanding categories is
          more important than memorizing every individual tool name.
        </p>

        <h3>Common Tool Categories</h3>
        <ul>
          <li>
            <strong>Information Gathering</strong> — Tools used for passive and
            active reconnaissance
          </li>
          <li>
            <strong>Network Scanners</strong> — Used to discover hosts, ports, and
            services
          </li>
          <li>
            <strong>Vulnerability Scanners</strong> — Help identify known weaknesses
            and misconfigurations
          </li>
          <li>
            <strong>Web Application Testing Tools</strong> — Support assessment of
            web apps and APIs
          </li>
          <li>
            <strong>Password Testing Tools</strong> — Used in authorized assessments
            of authentication strength
          </li>
          <li>
            <strong>Exploitation Frameworks</strong> — Assist in controlled
            validation of findings (strictly within scope)
          </li>
          <li>
            <strong>Reporting & Documentation Tools</strong> — Support professional
            delivery of results
          </li>
        </ul>

        <h3>Important Mindset</h3>
        <ul>
          <li>Tools are force multipliers, not replacements for understanding</li>
          <li>Knowing why a tool is used is more valuable than knowing every option</li>
          <li>Manual verification of automated findings is often necessary</li>
          <li>Tool choice should always align with scope and RoE</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Tools support the methodology — they do not define it. Strong ethical
            hackers understand concepts first and use tools as needed to execute
            authorized testing efficiently.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is the correct professional mindset toward tools in ethical hacking?",
      options: [
        "Tools completely replace the need to understand concepts",
        "Tools are force multipliers, not replacements for understanding",
        "Only one tool should ever be used",
        "Tools should be used without any scope limits",
      ],
      correct:
        "Tools are force multipliers, not replacements for understanding",
    },
  },

  // ====================== 09 ======================
  {
    id: "reporting-basics",
    title: "09 Reporting Fundamentals",
    content: (
      <>
        <h2>Reporting Fundamentals</h2>
        <p>
          A high-quality report is often the most valuable deliverable of an
          ethical hacking engagement. Technical findings have limited impact if
          they cannot be understood and acted upon by the client.
        </p>

        <h3>Key Elements of a Professional Report</h3>
        <ul>
          <li>Executive summary for non-technical stakeholders</li>
          <li>Clear description of scope and methodology</li>
          <li>Findings with evidence and risk ratings</li>
          <li>Business impact explanation where possible</li>
          <li>Actionable remediation recommendations</li>
          <li>Technical appendices for deeper detail</li>
        </ul>

        <h3>Good Reporting Practices</h3>
        <ul>
          <li>Write for both technical and business audiences</li>
          <li>Avoid unnecessary jargon or hype</li>
          <li>Prioritize findings by real risk, not just severity scores</li>
          <li>Be precise and evidence-based</li>
          <li>Provide clear next steps for remediation</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Reporting is a core professional skill. The ability to communicate
            risk clearly often determines whether findings lead to real security
            improvements.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Why is a high-quality report considered one of the most valuable deliverables?",
      options: [
        "Because technical findings alone always create change",
        "Because findings have limited impact if clients cannot understand and act on them",
        "Because reports are only needed for legal reasons",
        "Because clients never read reports",
      ],
      correct:
        "Because findings have limited impact if clients cannot understand and act on them",
    },
  },

  // ====================== 10 ======================
  {
    id: "common-mistakes",
    title: "10 Common Beginner Mistakes",
    content: (
      <>
        <h2>Common Beginner Mistakes</h2>
        <p>
          Many people new to ethical hacking make predictable mistakes. Awareness
          of these issues helps accelerate professional growth.
        </p>

        <h3>Frequent Pitfalls</h3>
        <ul>
          <li>Focusing only on tools instead of understanding concepts</li>
          <li>Ignoring legal and authorization requirements</li>
          <li>Testing outside the approved scope</li>
          <li>Poor documentation and weak reporting</li>
          <li>Over-reliance on automated scanners without verification</li>
          <li>Treating every finding as critical without context</li>
          <li>Neglecting communication with the client during the engagement</li>
          <li>Failing to consider business impact when prioritizing issues</li>
        </ul>

        <h3>Better Habits to Develop Early</h3>
        <ul>
          <li>Always confirm scope and authorization first</li>
          <li>Learn networking and operating systems deeply</li>
          <li>Practice clear, structured note-taking</li>
          <li>Verify findings manually when needed</li>
          <li>Study real reports and professional methodologies</li>
          <li>Focus on risk and remediation, not just discovery</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Avoiding common beginner mistakes accelerates the transition from
            tool user to professional ethical hacker. Discipline and methodology
            matter as much as technical skill.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which of the following is a common beginner mistake?",
      options: [
        "Always confirming scope and authorization first",
        "Focusing only on tools instead of understanding concepts",
        "Writing clear and structured reports",
        "Verifying automated findings manually",
      ],
      correct: "Focusing only on tools instead of understanding concepts",
    },
  },

  // ====================== 11 ======================
  {
    id: "learning-path",
    title: "11 Recommended Learning Path",
    content: (
      <>
        <h2>Recommended Learning Path</h2>
        <p>
          Building a solid foundation is more effective than jumping directly into
          advanced techniques. A structured learning path produces better long-term
          results.
        </p>

        <h3>Suggested Progression</h3>
        <ol>
          <li>
            <strong>Fundamentals</strong> — Networking, Linux, Windows, and basic
            security concepts
          </li>
          <li>
            <strong>Reconnaissance & Scanning</strong> — Information gathering and
            discovery techniques
          </li>
          <li>
            <strong>Web Application Basics</strong> — Understanding how modern
            applications work and common weakness categories
          </li>
          <li>
            <strong>Vulnerability Assessment</strong> — Learning to identify and
            prioritize issues
          </li>
          <li>
            <strong>Controlled Testing Practice</strong> — Using legal labs and
            intentionally vulnerable environments
          </li>
          <li>
            <strong>Reporting & Communication</strong> — Developing professional
            documentation skills
          </li>
          <li>
            <strong>Specialization</strong> — Choosing areas such as web, network,
            cloud, or red teaming
          </li>
        </ol>

        <h3>Learning Principles</h3>
        <ul>
          <li>Practice only in legal and authorized environments</li>
          <li>Focus on understanding “why” before “how”</li>
          <li>Build projects and document your process</li>
          <li>Study real-world case studies and reports</li>
          <li>Join communities that emphasize ethics and professionalism</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            A strong foundation in networking, systems, and methodology creates
            lasting capability. Tools and advanced techniques become far more
            effective when built on solid fundamentals.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What should come first in a recommended learning path for ethical hacking?",
      options: [
        "Advanced exploitation frameworks only",
        "Fundamentals: networking, Linux, Windows, and basic security concepts",
        "Ignoring all legal labs",
        "Jumping straight into specialization",
      ],
      correct:
        "Fundamentals: networking, Linux, Windows, and basic security concepts",
    },
  },

  // ====================== 12 ======================
  {
    id: "best-practices",
    title: "12 Professional Best Practices",
    content: (
      <>
        <h2>Professional Best Practices</h2>
        <p>
          Long-term success in ethical hacking depends on consistent professional
          habits as much as technical ability.
        </p>

        <h3>Core Best Practices</h3>
        <ul>
          <li>Always obtain and respect written authorization</li>
          <li>Stay strictly inside the defined scope</li>
          <li>Document everything relevant during testing</li>
          <li>Communicate clearly and early with stakeholders</li>
          <li>Prioritize findings by real risk and business impact</li>
          <li>Protect client data with the highest care</li>
          <li>Continuously update knowledge of threats and defenses</li>
          <li>Maintain personal ethics even when no one is watching</li>
        </ul>

        <h3>Mindset of a Professional Ethical Hacker</h3>
        <ul>
          <li>Curiosity balanced with responsibility</li>
          <li>Focus on helping the organization improve</li>
          <li>Humility — acknowledge limitations and unknowns</li>
          <li>Clear communication over technical showmanship</li>
          <li>Long-term reputation over short-term results</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Ethical hacking is a professional discipline. The combination of
            technical skill, clear methodology, strong ethics, and excellent
            communication creates real value for organizations and sustainable
            careers for practitioners.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which practice is fundamental for professional ethical hackers?",
      options: [
        "Always obtain and respect written authorization",
        "Ignore scope when interesting findings appear",
        "Never document testing activities",
        "Share client data freely for learning",
      ],
      correct: "Always obtain and respect written authorization",
    },
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const IntroductionToEthicalHacking = () => {
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
            <span className="gradient-text">Introduction to Ethical Hacking</span>
          </h1>
          <p className="article-date">Updated • 2026</p>
          <p className="article-date" style={{ marginTop: 8 }}>
            Progress: {completedCount}/{totalChapters} chapters · {progress}%
          </p>
        </div>
      </section>

      <section className="article-banner">
        <img
          src="/images/courses/eh-introduction.png"
          alt="Introduction to Ethical Hacking"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1200x420/1a0b2e/a855f7?text=Introduction+to+Ethical+Hacking";
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
                        name={`quiz-${activeChapter.id}`}
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

export default IntroductionToEthicalHacking;