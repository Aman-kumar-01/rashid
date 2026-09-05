import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import "./SocialEngineering.css";

const STORAGE_KEY = "khansploit_social_engineering_course_completed";

const chapters = [
  {
    id: "what-is-social-engineering",
    title: "01 What is Social Engineering?",
    content: (
      <>
        <h2>What is Social Engineering?</h2>
        <p>
          Social engineering is the practice of influencing or manipulating
          people into taking actions or revealing information that may compromise
          security. Unlike purely technical attacks, it targets human decision
          making, trust, and behavior.
        </p>
        <p>
          In ethical hacking and security awareness contexts, social engineering
          is studied so organizations can understand risks, test defenses (only
          with authorization), and improve training and processes.
        </p>
        <h3>Core Idea</h3>
        <ul>
          <li>People can be the weakest or strongest link in security</li>
          <li>Trust, urgency, authority, and helpfulness are commonly leveraged</li>
          <li>Technical controls alone cannot fully stop human-targeted attacks</li>
          <li>Awareness and process design are essential defenses</li>
        </ul>
        <h3>Ethical Context</h3>
        <ul>
          <li>Any real-world testing requires explicit authorization</li>
          <li>The goal is education and improvement, not harm</li>
          <li>Sensitive personal information must be handled carefully</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Social engineering focuses on human factors. Understanding it helps
            organizations build better awareness, processes, and technical
            safeguards.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What makes social engineering different from purely technical attacks?",
      options: [
        "It only targets firewalls and never people",
        "It targets human decision-making, trust, and behavior",
        "It never requires authorization to test",
        "It only works offline with no communication",
      ],
      correct:
        "It targets human decision-making, trust, and behavior",
    },
  },
  {
    id: "why-it-works",
    title: "02 Why Social Engineering Works",
    content: (
      <>
        <h2>Why Social Engineering Works</h2>
        <p>
          Social engineering succeeds because it aligns with normal human
          psychology and workplace behavior. People are generally helpful,
          respect authority, and respond to urgency.
        </p>
        <h3>Common Psychological Factors</h3>
        <ul>
          <li><strong>Authority</strong> — People tend to comply with perceived authority figures</li>
          <li><strong>Urgency</strong> — Time pressure reduces careful verification</li>
          <li><strong>Trust</strong> — Familiar brands, names, or internal references increase compliance</li>
          <li><strong>Helpfulness</strong> — Employees often want to assist colleagues or customers</li>
          <li><strong>Fear of negative consequences</strong> — Threats of lockout, job impact, or escalation</li>
          <li><strong>Curiosity</strong> — Interesting or unexpected messages can lower caution</li>
        </ul>
        <h3>Organizational Factors</h3>
        <ul>
          <li>Complex processes and high workload</li>
          <li>Inconsistent verification procedures</li>
          <li>Limited security awareness training</li>
          <li>Over-reliance on technical controls alone</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Social engineering exploits normal human and organizational behavior.
            Defenses must address both people and processes, not only technology.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which factor often reduces careful verification during social engineering attempts?",
      options: [
        "Urgency and time pressure",
        "Mandatory dual approval always being used",
        "Complete absence of email",
        "Unlimited time to verify every request",
      ],
      correct: "Urgency and time pressure",
    },
  },
  {
    id: "common-types",
    title: "03 Common Types of Social Engineering",
    content: (
      <>
        <h2>Common Types of Social Engineering</h2>
        <p>
          Social engineering appears in many forms. Understanding the categories
          helps organizations recognize patterns and design better defenses.
        </p>
        <h3>Major Categories</h3>
        <ul>
          <li><strong>Phishing</strong> — Fraudulent messages designed to steal credentials or deliver malware</li>
          <li><strong>Spear Phishing</strong> — Targeted phishing aimed at specific individuals or roles</li>
          <li><strong>Vishing</strong> — Voice-based social engineering (phone calls)</li>
          <li><strong>Smishing</strong> — SMS or messaging-based social engineering</li>
          <li><strong>Pretexting</strong> — Creating a fabricated scenario to obtain information or access</li>
          <li><strong>Baiting</strong> — Offering something enticing to trigger unsafe actions</li>
          <li><strong>Impersonation</strong> — Pretending to be a trusted person or role</li>
          <li><strong>Physical social engineering</strong> — In-person influence (only in authorized physical assessments)</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Different channels share the same underlying goal: influence human
            behavior. Pattern recognition is a key defensive skill.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "What is spear phishing?",
      options: [
        "A type of firewall rule",
        "Targeted phishing aimed at specific individuals or roles",
        "Only physical tailgating",
        "A secure email encryption standard",
      ],
      correct:
        "Targeted phishing aimed at specific individuals or roles",
    },
  },
  {
    id: "phishing-concepts",
    title: "04 Phishing Concepts",
    content: (
      <>
        <h2>Phishing Concepts</h2>
        <p>
          Phishing remains one of the most common social engineering methods. It
          typically uses email or similar messaging channels to create a sense of
          legitimacy and urgency.
        </p>
        <h3>Typical Characteristics</h3>
        <ul>
          <li>Messages that appear to come from trusted organizations or colleagues</li>
          <li>Requests for credentials, approvals, payments, or clicks</li>
          <li>Urgent language or consequences for inaction</li>
          <li>Links or attachments leading to deceptive destinations</li>
        </ul>
        <h3>Why It Remains Effective</h3>
        <ul>
          <li>High volume and continuous improvement by attackers</li>
          <li>Realistic branding and language</li>
          <li>Busy users with limited time to verify every message</li>
          <li>Compromise of one account can enable further attacks</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Phishing combines technical delivery with psychological influence.
            Defenses require awareness, process controls, and technical filtering
            together.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which combination best describes effective phishing defense?",
      options: [
        "Technology only, with no user awareness",
        "Awareness, process controls, and technical filtering together",
        "Ignoring all email forever",
        "Sharing passwords in chat for speed",
      ],
      correct:
        "Awareness, process controls, and technical filtering together",
    },
  },
  {
    id: "pretexting-impersonation",
    title: "05 Pretexting & Impersonation",
    content: (
      <>
        <h2>Pretexting & Impersonation</h2>
        <p>
          Pretexting involves creating a believable story or scenario to gain
          trust and obtain information or actions. Impersonation is closely
          related and often part of the same approach.
        </p>
        <h3>Common Themes</h3>
        <ul>
          <li>Posing as IT support, management, vendors, or partners</li>
          <li>Claiming urgent business need or system issues</li>
          <li>Using publicly available information to appear credible</li>
          <li>Requesting resets, approvals, data, or physical access</li>
        </ul>
        <h3>Defensive Implications</h3>
        <ul>
          <li>Verification procedures for sensitive requests</li>
          <li>Clear escalation paths for unusual asks</li>
          <li>Training that includes realistic scenarios</li>
          <li>Limits on what information staff should provide over phone or chat</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Pretexting succeeds when verification is weak. Strong processes and
            a culture of safe challenge reduce risk significantly.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What reduces risk from pretexting and impersonation the most in practice?",
      options: [
        "Never training employees",
        "Verification procedures and a culture of safe challenge",
        "Believing every urgent caller automatically",
        "Publishing internal directories publicly",
      ],
      correct:
        "Verification procedures and a culture of safe challenge",
    },
  },
  {
    id: "vishing-smishing",
    title: "06 Vishing & Smishing",
    content: (
      <>
        <h2>Vishing & Smishing</h2>
        <p>
          Social engineering is not limited to email. Voice calls (vishing) and
          SMS or messaging apps (smishing) are widely used channels.
        </p>
        <h3>Vishing (Voice)</h3>
        <ul>
          <li>Callers may claim to be from banks, IT, vendors, or internal teams</li>
          <li>Urgency and authority are frequently used</li>
          <li>Call-backs to official numbers are a key defense</li>
        </ul>
        <h3>Smishing (SMS / Messaging)</h3>
        <ul>
          <li>Short messages with links or urgent requests</li>
          <li>Often impersonate delivery services, banks, or internal alerts</li>
          <li>Mobile context can make careful verification harder</li>
        </ul>
        <h3>Shared Defenses</h3>
        <ul>
          <li>Independent verification through known channels</li>
          <li>Skepticism toward unexpected urgent requests</li>
          <li>Clear internal reporting paths for suspicious contact</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Multi-channel social engineering requires multi-channel awareness.
            Employees should know how to verify requests regardless of the medium.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is a strong defense against suspicious phone-based requests?",
      options: [
        "Call back using official known numbers, not numbers provided in the suspicious call",
        "Always give OTP codes to any caller",
        "Ignore all company policies",
        "Share credentials to “verify identity” quickly",
      ],
      correct:
        "Call back using official known numbers, not numbers provided in the suspicious call",
    },
  },
  {
    id: "physical-aspects",
    title: "07 Physical Social Engineering Concepts",
    content: (
      <>
        <h2>Physical Social Engineering Concepts</h2>
        <p>
          Some social engineering involves physical presence, such as tailgating
          or impersonating staff or contractors. These topics are relevant mainly
          in authorized physical security assessments and awareness programs.
        </p>
        <h3>High-Level Themes</h3>
        <ul>
          <li>Exploiting politeness and access habits</li>
          <li>Impersonating delivery, maintenance, or staff roles</li>
          <li>Using visual trust signals (badges, uniforms, confidence)</li>
        </ul>
        <h3>Defensive Focus</h3>
        <ul>
          <li>Badge and visitor processes</li>
          <li>Challenge culture for unknown individuals</li>
          <li>Physical access controls and monitoring</li>
          <li>Training that includes physical scenarios</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Physical social engineering highlights that security is not only
            digital. Process discipline and awareness apply in the physical world
            as well.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which control helps against physical social engineering?",
      options: [
        "No visitor process and open doors always",
        "Badge/visitor processes and a challenge culture for unknown people",
        "Publishing badge templates online",
        "Disabling all cameras and logs",
      ],
      correct:
        "Badge/visitor processes and a challenge culture for unknown people",
    },
  },
  {
    id: "attack-lifecycle",
    title: "08 Typical Social Engineering Lifecycle",
    content: (
      <>
        <h2>Typical Social Engineering Lifecycle</h2>
        <p>
          Many social engineering attempts follow a recognizable progression.
          Understanding the stages helps both detection and defense design.
        </p>
        <h3>Common Stages</h3>
        <ol>
          <li><strong>Research</strong> — Gathering public information about the organization or individuals</li>
          <li><strong>Planning</strong> — Choosing channel, pretext, and target role</li>
          <li><strong>Contact</strong> — Initiating communication</li>
          <li><strong>Influence</strong> — Building trust or urgency</li>
          <li><strong>Action</strong> — Obtaining credentials, approvals, data, or access</li>
          <li><strong>Follow-through</strong> — Using the result for further objectives</li>
        </ol>
        <h3>Defensive Opportunity</h3>
        <ul>
          <li>Break the chain at verification points</li>
          <li>Encourage reporting of suspicious contact early</li>
          <li>Reduce the usefulness of publicly available sensitive details</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Social engineering is a process, not a single moment. Defenses work
            best when they interrupt the process at multiple stages.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Where can defenders often interrupt a social engineering attempt?",
      options: [
        "Only after full data loss",
        "At verification points and early reporting stages",
        "Never — it cannot be interrupted",
        "Only by removing all employees",
      ],
      correct:
        "At verification points and early reporting stages",
    },
  },
  {
    id: "indicators",
    title: "09 Indicators & Red Flags",
    content: (
      <>
        <h2>Indicators & Red Flags</h2>
        <p>
          Training people to recognize warning signs is one of the most practical
          defenses against social engineering.
        </p>
        <h3>Common Red Flags</h3>
        <ul>
          <li>Unexpected urgent requests for credentials, money, or access</li>
          <li>Pressure to bypass normal procedures</li>
          <li>Slightly incorrect email addresses, domains, or names</li>
          <li>Generic greetings combined with sensitive requests</li>
          <li>Requests to keep the conversation secret</li>
          <li>Unusual payment or data transfer instructions</li>
          <li>Messages that create fear of immediate negative consequences</li>
        </ul>
        <h3>Healthy Response Habits</h3>
        <ul>
          <li>Pause and verify through a known official channel</li>
          <li>Do not use contact details provided in the suspicious message</li>
          <li>Report the incident internally</li>
          <li>When unsure, ask a colleague or security team</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Recognition plus verification is more effective than recognition alone.
            Clear reporting paths turn individual awareness into organizational defense.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What should you do with contact details from a suspicious urgent message?",
      options: [
        "Always use them to reply quickly",
        "Avoid using them; verify via known official channels instead",
        "Post them publicly",
        "Share your password to confirm identity",
      ],
      correct:
        "Avoid using them; verify via known official channels instead",
    },
  },
  {
    id: "defenses",
    title: "10 Defenses & Controls",
    content: (
      <>
        <h2>Defenses & Controls</h2>
        <p>
          Effective defense against social engineering combines people, process,
          and technology.
        </p>
        <h3>People-Focused Controls</h3>
        <ul>
          <li>Regular, realistic security awareness training</li>
          <li>Phishing simulations (when authorized and carefully designed)</li>
          <li>Culture that supports reporting without blame</li>
          <li>Role-specific guidance for high-risk functions</li>
        </ul>
        <h3>Process Controls</h3>
        <ul>
          <li>Verification procedures for sensitive requests</li>
          <li>Dual approval for financial and access changes</li>
          <li>Clear escalation and incident reporting paths</li>
          <li>Visitor and physical access procedures</li>
        </ul>
        <h3>Technical Controls</h3>
        <ul>
          <li>Email filtering and anti-phishing protections</li>
          <li>Multi-factor authentication</li>
          <li>Least-privilege access</li>
          <li>Monitoring for suspicious account activity</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            No single control is enough. Layered defenses addressing human
            behavior, process gaps, and technical weaknesses provide the strongest
            protection.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is the strongest overall approach to social engineering defense?",
      options: [
        "Only one training email per year",
        "Layered people, process, and technical controls",
        "Technical controls with zero awareness",
        "No reporting culture",
      ],
      correct:
        "Layered people, process, and technical controls",
    },
  },
  {
    id: "ethical-testing",
    title: "11 Ethical Testing Considerations",
    content: (
      <>
        <h2>Ethical Testing Considerations</h2>
        <p>
          Social engineering testing can be valuable, but it is sensitive and
          must be handled with strict ethics, authorization, and care.
        </p>
        <h3>Requirements for Ethical Testing</h3>
        <ul>
          <li>Explicit written authorization</li>
          <li>Clearly defined scope and rules of engagement</li>
          <li>Agreed boundaries on what can be requested or collected</li>
          <li>Protection of any personal or sensitive data obtained</li>
          <li>Responsible reporting focused on improvement, not embarrassment</li>
        </ul>
        <h3>Professional Guidelines</h3>
        <ul>
          <li>Avoid techniques that cause unnecessary distress</li>
          <li>Coordinate with stakeholders when appropriate</li>
          <li>Use results to improve training and processes</li>
          <li>Never reuse collected information outside the engagement</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Social engineering assessments are high-impact and high-sensitivity.
            Authorization, ethics, and constructive outcomes must guide every step.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is required before real-world social engineering testing?",
      options: [
        "Curiosity alone",
        "Explicit written authorization and clear rules of engagement",
        "Only a verbal joke from a friend",
        "No rules if the goal is learning",
      ],
      correct:
        "Explicit written authorization and clear rules of engagement",
    },
  },
  {
    id: "best-practices",
    title: "12 Best Practices & Mindset",
    content: (
      <>
        <h2>Best Practices & Mindset</h2>
        <p>
          Building resilience against social engineering is an ongoing
          organizational effort, not a one-time training event.
        </p>
        <h3>Recommended Practices</h3>
        <ul>
          <li>Train regularly with realistic and relevant scenarios</li>
          <li>Make verification the default for sensitive requests</li>
          <li>Encourage rapid internal reporting of suspicious contact</li>
          <li>Protect high-risk roles with stronger process controls</li>
          <li>Combine awareness with strong technical safeguards</li>
          <li>Review and improve processes after real or simulated incidents</li>
        </ul>
        <h3>Healthy Organizational Mindset</h3>
        <ul>
          <li>Security is a shared responsibility</li>
          <li>Reporting is valued, not punished</li>
          <li>Humans will make mistakes — systems should reduce impact</li>
          <li>Continuous improvement beats one-time campaigns</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Social engineering risk is managed best by organizations that combine
            awareness, clear processes, technical controls, and a culture of
            safe verification and reporting.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which mindset best supports long-term social engineering resilience?",
      options: [
        "Punish all reporters of suspicious messages",
        "Continuous improvement with verification culture and layered controls",
        "One training session forever",
        "Trust every urgent request by default",
      ],
      correct:
        "Continuous improvement with verification culture and layered controls",
    },
  },
];

const SocialEngineering = () => {
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
            <span className="gradient-text">Social Engineering</span>
          </h1>
          <p className="article-date">Updated • 2026</p>
          <p className="article-date" style={{ marginTop: 8 }}>
            Progress: {completedCount}/{totalChapters} chapters · {progress}%
          </p>
        </div>
      </section>

      <section className="article-banner">
        <img
          src="/images/courses/eh-social-engineering.png"
          alt="Social Engineering"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1200x420/1a0b2e/a855f7?text=Social+Engineering";
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

export default SocialEngineering;