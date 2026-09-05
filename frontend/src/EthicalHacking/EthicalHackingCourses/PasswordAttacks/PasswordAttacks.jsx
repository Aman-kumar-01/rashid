import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import "./PasswordAttacks.css";

/* =========================================================
   KHAN SPLOIT — Password Attacks
   Chapters + Quiz + Progress + Congrats
========================================================= */

const STORAGE_KEY = "khansploit_password_attacks_course_completed";

const chapters = [
  // ====================== 01 ======================
  {
    id: "what-are-password-attacks",
    title: "01 What are Password Attacks?",
    content: (
      <>
        <h2>What are Password Attacks?</h2>
        <p>
          Password attacks target authentication systems by attempting to obtain,
          guess, or reuse valid credentials. They remain one of the most common
          real-world attack methods because passwords are still widely used and
          often weakly managed.
        </p>
        <p>
          In ethical hacking, this topic is studied to understand risks, improve
          authentication design, and support authorized testing of password
          strength and related controls.
        </p>

        <h3>Core Ideas</h3>
        <ul>
          <li>Passwords are shared secrets between users and systems</li>
          <li>Weak, reused, or exposed passwords create high risk</li>
          <li>Attackers may try guessing, cracking stored hashes, or using leaked credentials</li>
          <li>Strong authentication design reduces reliance on passwords alone</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Password attacks exploit weaknesses in credential choice, storage,
            transmission, and policy. Understanding them helps build stronger
            authentication systems.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What do password attacks primarily target?",
      options: [
        "Only physical hardware locks",
        "Authentication systems by obtaining, guessing, or reusing valid credentials",
        "Only network cables",
        "Public blog posts",
      ],
      correct:
        "Authentication systems by obtaining, guessing, or reusing valid credentials",
    },
  },

  // ====================== 02 ======================
  {
    id: "why-passwords-remain-targets",
    title: "02 Why Passwords Remain Targets",
    content: (
      <>
        <h2>Why Passwords Remain Targets</h2>
        <p>
          Despite years of security guidance, passwords continue to be a major
          attack surface for both opportunistic and targeted threat actors.
        </p>

        <h3>Contributing Factors</h3>
        <ul>
          <li>Users often choose weak or predictable passwords</li>
          <li>Password reuse across multiple services is common</li>
          <li>Large credential leaks increase the value of password spraying and stuffing</li>
          <li>Legacy systems may still store or transmit credentials poorly</li>
          <li>Convenience frequently wins over security in daily practice</li>
        </ul>

        <h3>Business Impact</h3>
        <ul>
          <li>Account takeover</li>
          <li>Data exposure and fraud</li>
          <li>Lateral movement after initial access</li>
          <li>Reputation and compliance consequences</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Passwords remain valuable targets because human behavior, system
            design, and credential exposure continue to create opportunities for
            attackers.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Why do passwords remain major attack targets?",
      options: [
        "Because they are no longer used anywhere",
        "Due to weak/predictable choices, password reuse, credential leaks, and poor storage/transmission in some systems",
        "Because MFA is always enforced everywhere",
        "Because passwords are never exposed",
      ],
      correct:
        "Due to weak/predictable choices, password reuse, credential leaks, and poor storage/transmission in some systems",
    },
  },

  // ====================== 03 ======================
  {
    id: "types-of-password-attacks",
    title: "03 Types of Password Attacks",
    content: (
      <>
        <h2>Types of Password Attacks</h2>
        <p>
          Password-related attacks appear in several forms. Understanding the
          categories helps organizations prioritize the right defenses.
        </p>

        <h3>Common Categories</h3>
        <ul>
          <li>
            <strong>Guessing / Brute Force</strong> — Trying many password candidates against a login interface
          </li>
          <li>
            <strong>Dictionary Attacks</strong> — Using lists of common or likely passwords
          </li>
          <li>
            <strong>Credential Stuffing</strong> — Reusing username/password pairs from previous breaches
          </li>
          <li>
            <strong>Password Spraying</strong> — Trying a small set of common passwords across many accounts
          </li>
          <li>
            <strong>Offline Hash Cracking</strong> — Attempting to recover passwords from stolen password hashes
          </li>
          <li>
            <strong>Phishing-related credential theft</strong> — Tricking users into revealing passwords
          </li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Different attack types exploit different weaknesses — weak policies,
            reused credentials, exposed hashes, or human trust. Defenses must
            address multiple paths.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which of the following are common types of password attacks?",
      options: [
        "Only physical key duplication",
        "Brute force, dictionary attacks, credential stuffing, password spraying, offline hash cracking, and phishing-related theft",
        "Only SQL injection",
        "Only DDoS attacks",
      ],
      correct:
        "Brute force, dictionary attacks, credential stuffing, password spraying, offline hash cracking, and phishing-related theft",
    },
  },

  // ====================== 04 ======================
  {
    id: "online-vs-offline",
    title: "04 Online vs Offline Attacks",
    content: (
      <>
        <h2>Online vs Offline Attacks</h2>
        <p>
          A useful distinction in password security is whether attempts happen
          against a live authentication service (online) or against stolen
          password data (offline).
        </p>

        <h3>Online Attacks</h3>
        <ul>
          <li>Target a login interface or authentication service</li>
          <li>Can be slowed or blocked by rate limiting and lockouts</li>
          <li>Generate logs and detectable signals</li>
          <li>Include brute force, spraying, and stuffing attempts</li>
        </ul>

        <h3>Offline Attacks</h3>
        <ul>
          <li>Occur after password hashes or credential stores are obtained</li>
          <li>Are not limited by login rate controls</li>
          <li>Depend heavily on hash strength and salting</li>
          <li>Make strong password storage critical</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Online attacks can be slowed by service-side controls. Offline attacks
            place the burden on password storage quality and secret protection.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is a key difference between online and offline password attacks?",
      options: [
        "There is no difference",
        "Online attacks target live login services and can be rate-limited; offline attacks work on stolen hashes and are not limited by login controls",
        "Offline attacks only work on websites",
        "Online attacks never generate logs",
      ],
      correct:
        "Online attacks target live login services and can be rate-limited; offline attacks work on stolen hashes and are not limited by login controls",
    },
  },

  // ====================== 05 ======================
  {
    id: "password-storage",
    title: "05 Password Storage Concepts",
    content: (
      <>
        <h2>Password Storage Concepts</h2>
        <p>
          How systems store passwords has a major effect on the impact of a data
          breach. Storing passwords in reversible or weak forms creates severe risk.
        </p>

        <h3>Core Principles</h3>
        <ul>
          <li>Never store passwords in cleartext</li>
          <li>Use strong, modern, slow hashing algorithms designed for passwords</li>
          <li>Use unique salts per password</li>
          <li>Protect the credential store itself with strong access controls</li>
        </ul>

        <h3>Why Storage Quality Matters</h3>
        <ul>
          <li>Breaches of poorly stored passwords enable large-scale account compromise</li>
          <li>Strong hashing slows offline cracking significantly</li>
          <li>Salting prevents simple precomputed attacks across users</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Password storage is a foundational security control. Weak storage
            converts a single breach into a widespread credential exposure event.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What are core principles of secure password storage?",
      options: [
        "Store passwords in cleartext for easy recovery",
        "Never store in cleartext; use strong modern slow hashing, unique salts, and protect the credential store",
        "Use the same salt for every user",
        "Store reversible encrypted passwords only",
      ],
      correct:
        "Never store in cleartext; use strong modern slow hashing, unique salts, and protect the credential store",
    },
  },

  // ====================== 06 ======================
  {
    id: "password-policy",
    title: "06 Password Policy Fundamentals",
    content: (
      <>
        <h2>Password Policy Fundamentals</h2>
        <p>
          Password policies define expectations for length, complexity, reuse,
          and rotation. Modern guidance emphasizes usability and resistance to
          common attacks rather than overly complex rules that users cannot follow.
        </p>

        <h3>Useful Policy Directions</h3>
        <ul>
          <li>Prefer longer passwords or passphrases over complex short ones</li>
          <li>Block known breached and extremely common passwords</li>
          <li>Avoid forced frequent rotation unless there is evidence of compromise</li>
          <li>Support password managers</li>
          <li>Combine passwords with multi-factor authentication wherever possible</li>
        </ul>

        <h3>Policy Pitfalls</h3>
        <ul>
          <li>Rules that push users toward predictable patterns</li>
          <li>Policies that encourage writing passwords down insecurely</li>
          <li>Ignoring breached-password screening</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Good password policy balances security and usability. Length,
            breach resistance, and MFA matter more than complicated composition
            rules alone.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What does modern password policy guidance emphasize?",
      options: [
        "Only very complex short passwords and forced monthly rotation",
        "Longer passwords/passphrases, blocking breached passwords, supporting password managers, and combining with MFA",
        "Never allowing password managers",
        "Ignoring usability completely",
      ],
      correct:
        "Longer passwords/passphrases, blocking breached passwords, supporting password managers, and combining with MFA",
    },
  },

  // ====================== 07 ======================
  {
    id: "mfa-and-beyond",
    title: "07 Multi-Factor Authentication",
    content: (
      <>
        <h2>Multi-Factor Authentication</h2>
        <p>
          Multi-factor authentication (MFA) significantly reduces the value of
          stolen or guessed passwords by requiring an additional proof of identity.
        </p>

        <h3>Why MFA Matters</h3>
        <ul>
          <li>Limits damage from password reuse and stuffing</li>
          <li>Raises the cost and complexity of account takeover</li>
          <li>Is one of the highest-value controls for authentication security</li>
        </ul>

        <h3>Practical Notes</h3>
        <ul>
          <li>Not all MFA methods are equal in strength</li>
          <li>MFA should be enforced for privileged and remote access paths</li>
          <li>Recovery and backup processes must also be protected</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            MFA is one of the most effective defenses against password-based
            account takeover. It should be treated as a baseline control for
            important systems.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Why is multi-factor authentication (MFA) highly valuable?",
      options: [
        "It completely removes the need for any passwords",
        "It significantly reduces the value of stolen or guessed passwords by requiring additional proof of identity",
        "It only works for mobile apps",
        "It makes all attacks impossible",
      ],
      correct:
        "It significantly reduces the value of stolen or guessed passwords by requiring additional proof of identity",
    },
  },

  // ====================== 08 ======================
  {
    id: "detection-signals",
    title: "08 Detection & Monitoring Signals",
    content: (
      <>
        <h2>Detection & Monitoring Signals</h2>
        <p>
          Many password attacks leave observable signals. Detection reduces the
          time attackers have to succeed or move further.
        </p>

        <h3>Useful Signals</h3>
        <ul>
          <li>High volumes of failed logins</li>
          <li>Login attempts across many accounts from one source</li>
          <li>Successful logins after unusual failure patterns</li>
          <li>Logins from unexpected locations or devices</li>
          <li>Use of known-breached credentials against your services</li>
        </ul>

        <h3>Operational Practices</h3>
        <ul>
          <li>Centralize authentication logs</li>
          <li>Alert on spraying and stuffing patterns</li>
          <li>Support rapid account protection and password resets</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Detection does not replace strong authentication design, but it
            helps contain attacks that still occur.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which signals help detect password attacks?",
      options: [
        "Only successful logins with no failures",
        "High volumes of failed logins, attempts across many accounts, unusual locations/devices, and use of known-breached credentials",
        "Ignoring all authentication logs",
        "Only monitoring page load speed",
      ],
      correct:
        "High volumes of failed logins, attempts across many accounts, unusual locations/devices, and use of known-breached credentials",
    },
  },

  // ====================== 09 ======================
  {
    id: "defenses",
    title: "09 Defenses & Hardening",
    content: (
      <>
        <h2>Defenses & Hardening</h2>
        <p>
          Effective password security is layered. Technical controls, policy,
          and user support all matter.
        </p>

        <h3>Key Defenses</h3>
        <ul>
          <li>Strong, modern password hashing with unique salts</li>
          <li>Multi-factor authentication</li>
          <li>Rate limiting and intelligent lockout or throttling</li>
          <li>Blocking breached and common passwords</li>
          <li>Secure transmission of credentials (encrypted channels)</li>
          <li>Monitoring for online attack patterns</li>
          <li>Privileged access hardening and least privilege</li>
          <li>Support for password managers and good user guidance</li>
        </ul>

        <h3>Design Principle</h3>
        <ul>
          <li>Assume some passwords will be weak or reused</li>
          <li>Reduce the impact of password compromise through MFA and monitoring</li>
          <li>Protect stored credentials as high-value secrets</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            The strongest approach combines better passwords, better storage,
            MFA, attack detection, and reduced reliance on passwords alone.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is the recommended layered approach to password security?",
      options: [
        "Rely only on complex password rules",
        "Strong hashing + MFA + rate limiting + breached-password blocking + monitoring + password manager support",
        "Never use MFA",
        "Store passwords in cleartext for convenience",
      ],
      correct:
        "Strong hashing + MFA + rate limiting + breached-password blocking + monitoring + password manager support",
    },
  },

  // ====================== 10 ======================
  {
    id: "authorized-testing",
    title: "10 Authorized Testing Considerations",
    content: (
      <>
        <h2>Authorized Testing Considerations</h2>
        <p>
          Testing password-related controls can be valuable, but it must be done
          carefully and only with explicit authorization.
        </p>

        <h3>Important Requirements</h3>
        <ul>
          <li>Written permission covering authentication testing</li>
          <li>Clear scope, rate limits, and safety constraints</li>
          <li>Avoidance of unnecessary account lockouts or service disruption</li>
          <li>Protection of any credentials or hashes encountered</li>
        </ul>

        <h3>Professional Guidance</h3>
        <ul>
          <li>Prefer controlled assessments over aggressive online guessing</li>
          <li>Coordinate with stakeholders when testing production authentication</li>
          <li>Focus findings on control quality and risk reduction</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Password testing is sensitive and potentially disruptive.
            Authorization, restraint, and clear communication are mandatory.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is required for authorized password-related testing?",
      options: [
        "No permission needed if the system is public",
        "Written permission, clear scope and rate limits, avoidance of unnecessary disruption, and protection of any credentials found",
        "Only verbal approval from any employee",
        "Unlimited aggressive guessing is always allowed",
      ],
      correct:
        "Written permission, clear scope and rate limits, avoidance of unnecessary disruption, and protection of any credentials found",
    },
  },

  // ====================== 11 ======================
  {
    id: "legal-ethical",
    title: "11 Legal & Ethical Boundaries",
    content: (
      <>
        <h2>Legal & Ethical Boundaries</h2>
        <p>
          Attempting to access accounts or crack credentials without permission
          is illegal. Ethical work stays within contract, law, and professional
          standards.
        </p>

        <h3>Non-Negotiable Rules</h3>
        <ul>
          <li>Only test systems and accounts you are authorized to test</li>
          <li>Do not use discovered credentials outside the engagement</li>
          <li>Protect all sensitive authentication data</li>
          <li>Report findings responsibly</li>
        </ul>

        <h3>Professional Conduct</h3>
        <ul>
          <li>Minimize harm and disruption</li>
          <li>Document methods and limitations clearly</li>
          <li>Prioritize remediation guidance over dramatic proof</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Password-related testing without authorization is not ethical hacking.
            Legal permission and careful handling of secrets define professional practice.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which statement best reflects legal & ethical boundaries for password testing?",
      options: [
        "Any system on the internet can be freely tested",
        "Only test authorized systems/accounts, protect credentials, do not reuse them outside the engagement, and report responsibly",
        "Discovered credentials can be used on other services",
        "No documentation of methods is needed",
      ],
      correct:
        "Only test authorized systems/accounts, protect credentials, do not reuse them outside the engagement, and report responsibly",
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
          Improving password security is both a technical and organizational
          effort. Durable progress comes from layered controls and realistic
          user support.
        </p>

        <h3>Recommended Practices</h3>
        <ul>
          <li>Deploy MFA widely, especially for privileged access</li>
          <li>Store passwords only with strong modern hashing and salting</li>
          <li>Block breached and trivial passwords</li>
          <li>Monitor authentication systems for abuse patterns</li>
          <li>Support password managers and user-friendly guidance</li>
          <li>Reduce dependence on passwords where better options exist</li>
        </ul>

        <h3>Professional Mindset</h3>
        <ul>
          <li>Assume credential exposure will happen eventually</li>
          <li>Design for containment and rapid response</li>
          <li>Balance security with usability</li>
          <li>Measure controls by real risk reduction</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Password attacks remain common, but their impact can be greatly
            reduced through MFA, strong storage, smart policy, monitoring, and
            a defense-in-depth approach to authentication.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which mindset best matches professional password security practice?",
      options: [
        "Assume passwords will never be compromised",
        "Assume credential exposure will happen, design for containment, balance security with usability, and measure real risk reduction",
        "Rely only on complex password rules with no MFA",
        "Ignore monitoring and user support",
      ],
      correct:
        "Assume credential exposure will happen, design for containment, balance security with usability, and measure real risk reduction",
    },
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const PasswordAttacks = () => {
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
            <span className="gradient-text">Password Attacks</span>
          </h1>
          <p className="article-date">Updated • 2026</p>
          <p className="article-date" style={{ marginTop: 8 }}>
            Progress: {completedCount}/{totalChapters} chapters · {progress}%
          </p>
        </div>
      </section>

      <section className="article-banner">
        <img
          src="/images/courses/eh-password.png"
          alt="Password Attacks"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1200x420/1a0b2e/a855f7?text=Password+Attacks";
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

export default PasswordAttacks;