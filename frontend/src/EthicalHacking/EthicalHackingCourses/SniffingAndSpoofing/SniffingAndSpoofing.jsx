import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import "./SniffingAndSpoofing.css";

/* =========================================================
   KHAN SPLOIT — Sniffing & Spoofing
   Chapters + Quiz + Progress + Congrats
========================================================= */

const STORAGE_KEY = "khansploit_sniffing_spoofing_course_completed";

const chapters = [
  // ====================== 01 ======================
  {
    id: "what-is-sniffing",
    title: "01 What is Sniffing?",
    content: (
      <>
        <h2>What is Sniffing?</h2>
        <p>
          Sniffing refers to the capture and inspection of network traffic as it
          travels across a network. In ethical hacking and security assessment
          contexts, traffic analysis is used to understand communication patterns,
          identify cleartext protocols, and evaluate the effectiveness of
          encryption and network controls — only within authorized scope.
        </p>
        <p>
          The goal is defensive insight and risk identification, not unauthorized
          interception of private communications.
        </p>

        <h3>Core Ideas</h3>
        <ul>
          <li>Network traffic can reveal protocols, destinations, and sometimes sensitive data</li>
          <li>Encrypted traffic is much harder to interpret meaningfully</li>
          <li>Network position and architecture strongly affect what can be observed</li>
          <li>Authorization is mandatory for any active or passive capture activity</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Sniffing is traffic observation. In professional work it is used to
            assess exposure and controls, never to violate privacy or exceed scope.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "What is the primary legitimate purpose of sniffing in ethical hacking?",
      options: [
        "To intercept private communications without permission",
        "To assess exposure, identify cleartext risks, and evaluate controls within authorized scope",
        "To permanently disable encryption on all networks",
        "To only capture traffic on mobile devices",
      ],
      correct:
        "To assess exposure, identify cleartext risks, and evaluate controls within authorized scope",
    },
  },

  // ====================== 02 ======================
  {
    id: "what-is-spoofing",
    title: "02 What is Spoofing?",
    content: (
      <>
        <h2>What is Spoofing?</h2>
        <p>
          Spoofing is the act of falsifying identity information in network
          communications so that traffic appears to come from a different source
          than it actually does. Common examples include IP spoofing, MAC
          spoofing, and various forms of identity deception at different layers.
        </p>

        <h3>High-Level Purpose in Attacks</h3>
        <ul>
          <li>Hide the real origin of traffic</li>
          <li>Impersonate trusted systems or addresses</li>
          <li>Bypass simple address-based controls</li>
          <li>Support other attack techniques</li>
        </ul>

        <h3>Ethical Context</h3>
        <ul>
          <li>Studied to understand risks and improve detection</li>
          <li>Any practical testing requires explicit authorization</li>
          <li>Focus remains on defense, detection, and secure design</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Spoofing falsifies identity on the network. Understanding it helps
            organizations design better authentication, filtering, and monitoring.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "What does spoofing primarily involve?",
      options: [
        "Encrypting all network traffic automatically",
        "Falsifying identity information so traffic appears to come from a different source",
        "Only changing desktop wallpapers",
        "Deleting log files permanently",
      ],
      correct:
        "Falsifying identity information so traffic appears to come from a different source",
    },
  },

  // ====================== 03 ======================
  {
    id: "why-these-topics-matter",
    title: "03 Why These Topics Matter",
    content: (
      <>
        <h2>Why These Topics Matter</h2>
        <p>
          Sniffing and spoofing concepts appear repeatedly in real-world
          security incidents and professional assessments. They influence how
          organizations design networks, enforce encryption, and detect abuse.
        </p>

        <h3>Security Relevance</h3>
        <ul>
          <li>Cleartext protocols can expose credentials and sensitive data</li>
          <li>Weak network segmentation increases observation opportunities</li>
          <li>Address-based trust is fragile when identities can be faked</li>
          <li>Monitoring and anomaly detection depend on understanding normal traffic</li>
        </ul>

        <h3>Professional Value</h3>
        <ul>
          <li>Helps explain why encryption and strong authentication matter</li>
          <li>Supports better architecture and control recommendations</li>
          <li>Improves quality of findings related to network exposure</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            These topics connect network behavior to real risk. They strengthen
            both technical understanding and practical security advice.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "Why are sniffing and spoofing concepts important for security professionals?",
      options: [
        "Because they only affect printers",
        "They influence network design, encryption use, and detection of abuse",
        "Because they eliminate the need for any authentication",
        "Because they only apply to wireless networks from 1995",
      ],
      correct:
        "They influence network design, encryption use, and detection of abuse",
    },
  },

  // ====================== 04 ======================
  {
    id: "passive-vs-active",
    title: "04 Passive vs Active Observation",
    content: (
      <>
        <h2>Passive vs Active Observation</h2>
        <p>
          Traffic observation can be passive or involve more active techniques.
          The distinction is important for authorization, impact, and detection
          risk.
        </p>

        <h3>Passive Observation</h3>
        <ul>
          <li>Captures traffic that already reaches the observer’s network position</li>
          <li>Does not inject or modify traffic</li>
          <li>Lower impact when performed in authorized environments</li>
        </ul>

        <h3>Active Techniques</h3>
        <ul>
          <li>May involve influencing how traffic flows</li>
          <li>Can increase visibility but also increase risk and detectability</li>
          <li>Require clear permission and careful control</li>
        </ul>

        <h3>Professional Guidance</h3>
        <ul>
          <li>Prefer the least intrusive method that meets the assessment goal</li>
          <li>Stay inside the rules of engagement</li>
          <li>Document methods and any observed impact</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Passive observation is generally safer and quieter. Active techniques
            need stronger justification, tighter controls, and explicit approval.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "What is a key difference between passive and active observation?",
      options: [
        "Passive observation always requires root access on every host",
        "Passive captures existing traffic without injecting or modifying it; active techniques may influence traffic flow",
        "Active observation is always illegal even with authorization",
        "There is no difference between the two approaches",
      ],
      correct:
        "Passive captures existing traffic without injecting or modifying it; active techniques may influence traffic flow",
    },
  },

  // ====================== 05 ======================
  {
    id: "network-position",
    title: "05 Network Position & Visibility",
    content: (
      <>
        <h2>Network Position & Visibility</h2>
        <p>
          What traffic can be observed depends heavily on where an observer is
          located in the network architecture.
        </p>

        <h3>Key Ideas</h3>
        <ul>
          <li>Switched networks limit casual visibility compared to older shared media</li>
          <li>Traffic mirroring, taps, or privileged positions change what is visible</li>
          <li>Segmentation and VLANs affect which conversations can be seen</li>
          <li>Cloud and virtualized environments introduce additional complexity</li>
        </ul>

        <h3>Security Implications</h3>
        <ul>
          <li>Assume sensitive traffic may be observable on paths it traverses</li>
          <li>Encryption protects content even if traffic is seen</li>
          <li>Architecture and trust boundaries matter as much as individual hosts</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Visibility is a function of network design. Strong segmentation and
            end-to-end encryption reduce the value of traffic observation.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "What primarily determines how much traffic an observer can see?",
      options: [
        "Only the brand of the network cable",
        "Network position, architecture, segmentation, and any mirroring/taps in place",
        "The color of the server LEDs",
        "Whether the observer uses a graphical interface",
      ],
      correct:
        "Network position, architecture, segmentation, and any mirroring/taps in place",
    },
  },

  // ====================== 06 ======================
  {
    id: "cleartext-vs-encrypted",
    title: "06 Cleartext vs Encrypted Traffic",
    content: (
      <>
        <h2>Cleartext vs Encrypted Traffic</h2>
        <p>
          One of the most important outcomes of traffic analysis is determining
          whether sensitive information travels in cleartext or is protected by
          encryption.
        </p>

        <h3>Cleartext Risks</h3>
        <ul>
          <li>Credentials and tokens may be exposed</li>
          <li>Personal or business data can be read if intercepted</li>
          <li>Session identifiers and application data may leak</li>
        </ul>

        <h3>Encryption Benefits</h3>
        <ul>
          <li>Protects content confidentiality in transit</li>
          <li>Reduces the impact of network observation</li>
          <li>Supports stronger overall security posture</li>
        </ul>

        <h3>Assessment Focus</h3>
        <ul>
          <li>Identify protocols that still use cleartext</li>
          <li>Recommend encryption upgrades where appropriate</li>
          <li>Verify that encryption is correctly implemented and enforced</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Encryption is a primary defense against traffic observation. Finding
            and reducing cleartext sensitive protocols is high-value work.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "Why is finding cleartext sensitive protocols considered high-value work?",
      options: [
        "Because cleartext is always faster than encryption",
        "Because encryption protects content even if traffic is observed, while cleartext can expose credentials and data",
        "Because encryption is illegal in most countries",
        "Because cleartext protocols cannot be monitored",
      ],
      correct:
        "Because encryption protects content even if traffic is observed, while cleartext can expose credentials and data",
    },
  },

  // ====================== 07 ======================
  {
    id: "mac-and-ip-spoofing",
    title: "07 MAC & IP Spoofing Concepts",
    content: (
      <>
        <h2>MAC & IP Spoofing Concepts</h2>
        <p>
          Address spoofing involves presenting a false hardware (MAC) or network
          (IP) address. These techniques are studied to understand the limits of
          address-based trust.
        </p>

        <h3>MAC Spoofing (Conceptual)</h3>
        <ul>
          <li>Changes the apparent hardware address of an interface</li>
          <li>May affect local network behavior and filtering</li>
          <li>Highlights why MAC-based controls alone are insufficient</li>
        </ul>

        <h3>IP Spoofing (Conceptual)</h3>
        <ul>
          <li>Falsifies the source IP address in packets</li>
          <li>Can complicate attribution and simple filtering</li>
          <li>Often limited by network anti-spoofing controls</li>
        </ul>

        <h3>Defensive Takeaways</h3>
        <ul>
          <li>Do not rely solely on source addresses for security decisions</li>
          <li>Use strong authentication and integrity protections</li>
          <li>Apply anti-spoofing filters where appropriate</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Address spoofing demonstrates that identity on the network must be
            verified, not assumed from packet headers alone.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "What is the main defensive lesson from MAC and IP spoofing concepts?",
      options: [
        "Source addresses in packets can always be trusted completely",
        "Identity should be verified with strong authentication rather than assumed from addresses alone",
        "MAC addresses can never be changed under any circumstances",
        "IP spoofing only works on wireless networks",
      ],
      correct:
        "Identity should be verified with strong authentication rather than assumed from addresses alone",
    },
  },

  // ====================== 08 ======================
  {
    id: "arp-related-concepts",
    title: "08 ARP-Related Concepts",
    content: (
      <>
        <h2>ARP-Related Concepts</h2>
        <p>
          The Address Resolution Protocol (ARP) maps IP addresses to MAC
          addresses on local networks. Weaknesses in trust around ARP have
          historically enabled certain local network attacks.
        </p>

        <h3>Why ARP Matters</h3>
        <ul>
          <li>It is fundamental to local network communication</li>
          <li>It was not designed with strong authentication</li>
          <li>Local attackers may abuse trust in ARP responses</li>
        </ul>

        <h3>Security Perspective</h3>
        <ul>
          <li>Local network trust assumptions can be fragile</li>
          <li>Segmentation and monitoring reduce risk</li>
          <li>Modern defenses and detection help identify anomalies</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            ARP-related issues illustrate the importance of local network
            hygiene, segmentation, and not trusting lower-layer identity blindly.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "Why is ARP considered relevant to local network security?",
      options: [
        "Because ARP encrypts all local traffic by default",
        "Because it lacks strong authentication and trust in ARP responses can be abused on local networks",
        "Because ARP only works on the internet, not local networks",
        "Because ARP replaces the need for IP addresses",
      ],
      correct:
        "Because it lacks strong authentication and trust in ARP responses can be abused on local networks",
    },
  },

  // ====================== 09 ======================
  {
    id: "detection-signals",
    title: "09 Detection & Monitoring Signals",
    content: (
      <>
        <h2>Detection & Monitoring Signals</h2>
        <p>
          Organizations can detect many sniffing and spoofing related activities
          through monitoring, logging, and anomaly detection.
        </p>

        <h3>Useful Signals</h3>
        <ul>
          <li>Unexpected changes in ARP or neighbor tables</li>
          <li>Duplicate address conflicts</li>
          <li>Unusual traffic patterns or mirrored flows</li>
          <li>Authentication failures and anomalous access patterns</li>
          <li>Cleartext protocol usage where encryption is expected</li>
        </ul>

        <h3>Defensive Practices</h3>
        <ul>
          <li>Centralized logging and alerting</li>
          <li>Network anomaly detection where feasible</li>
          <li>Regular review of critical network segments</li>
          <li>Baseline understanding of normal traffic</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Detection depends on visibility and baselines. Monitoring turns
            theoretical risks into actionable operational defense.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "Which of the following is a useful detection signal related to these topics?",
      options: [
        "Perfectly normal and expected ARP table behavior only",
        "Unexpected ARP/neighbor table changes, duplicate addresses, or cleartext where encryption is expected",
        "Only successful user logins",
        "The temperature of the server room",
      ],
      correct:
        "Unexpected ARP/neighbor table changes, duplicate addresses, or cleartext where encryption is expected",
    },
  },

  // ====================== 10 ======================
  {
    id: "defenses",
    title: "10 Defenses & Hardening",
    content: (
      <>
        <h2>Defenses & Hardening</h2>
        <p>
          Defending against the risks associated with sniffing and spoofing
          requires layered controls across architecture, protocols, and operations.
        </p>

        <h3>Key Defenses</h3>
        <ul>
          <li>Encrypt sensitive traffic end-to-end</li>
          <li>Eliminate or restrict cleartext protocols</li>
          <li>Segment networks and limit trust between zones</li>
          <li>Use strong authentication rather than address-based trust</li>
          <li>Apply anti-spoofing filters at network boundaries</li>
          <li>Monitor for anomalies and address conflicts</li>
          <li>Control administrative access to network infrastructure</li>
        </ul>

        <h3>Design Principle</h3>
        <ul>
          <li>Assume traffic may be observed on the path</li>
          <li>Assume addresses can be forged</li>
          <li>Protect data and identity with cryptography and strong auth</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            The strongest defenses reduce the value of observation and the
            effectiveness of identity forgery through encryption, segmentation,
            and robust authentication.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "Which set of controls best defends against sniffing and spoofing risks?",
      options: [
        "Rely only on source IP addresses for all security decisions",
        "End-to-end encryption, network segmentation, strong authentication, and anti-spoofing filters",
        "Disable all logging permanently",
        "Use only cleartext protocols for simplicity",
      ],
      correct:
        "End-to-end encryption, network segmentation, strong authentication, and anti-spoofing filters",
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
          Capturing or manipulating network traffic without authorization can be
          illegal and highly invasive. Professional work requires strict
          boundaries.
        </p>

        <h3>Non-Negotiable Requirements</h3>
        <ul>
          <li>Written authorization covering systems and activities</li>
          <li>Clear scope and rules of engagement</li>
          <li>Respect for privacy and data protection obligations</li>
          <li>Secure handling of any captured data</li>
        </ul>

        <h3>Professional Conduct</h3>
        <ul>
          <li>Do not capture traffic outside approved targets</li>
          <li>Minimize collection of sensitive content</li>
          <li>Delete or protect data according to agreement</li>
          <li>Report findings focused on risk reduction</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Traffic capture and related techniques are sensitive. Authorization,
            minimization, and confidentiality define ethical practice.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "What is a non-negotiable requirement before any traffic capture activity?",
      options: [
        "Verbal permission from a random employee",
        "Written authorization covering systems and activities, plus clear scope",
        "No authorization is ever needed for educational purposes",
        "Only a verbal agreement with the network vendor",
      ],
      correct:
        "Written authorization covering systems and activities, plus clear scope",
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
          Effective work in this area balances technical understanding with
          strong professional judgment.
        </p>

        <h3>Recommended Practices</h3>
        <ul>
          <li>Always confirm authorization before any traffic-related activity</li>
          <li>Prefer encryption and architecture improvements in recommendations</li>
          <li>Document methods, scope, and findings clearly</li>
          <li>Focus on risk and business impact, not tool output alone</li>
          <li>Protect any sensitive data encountered during testing</li>
        </ul>

        <h3>Professional Mindset</h3>
        <ul>
          <li>Privacy-aware and minimization-focused</li>
          <li>Defense-oriented recommendations</li>
          <li>Accuracy and restraint over aggressive techniques</li>
          <li>Clear communication with stakeholders</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Sniffing and spoofing knowledge is most valuable when it leads to
            stronger encryption, better segmentation, improved monitoring, and
            reduced reliance on weak identity assumptions.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "What mindset best serves professional work related to sniffing and spoofing?",
      options: [
        "Aggressive techniques without documentation or authorization",
        "Privacy-aware, defense-oriented, focused on risk reduction and clear communication",
        "Collect as much sensitive data as possible and keep it forever",
        "Ignore encryption recommendations completely",
      ],
      correct:
        "Privacy-aware, defense-oriented, focused on risk reduction and clear communication",
    },
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const SniffingAndSpoofing = () => {
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
      if (!completedChapters.includes(activeChapter.id)) {
        setCompletedChapters((prev) => [...prev, activeChapter.id]);
      }
      setShowCongrats(true);
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

  const isLastChapter = chapters[chapters.length - 1]?.id === activeChapter.id;
  const isChapterCompleted = completedChapters.includes(activeChapter.id);

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
            <span className="gradient-text">Sniffing & Spoofing</span>
          </h1>
          <p className="article-date">Updated • 2026</p>
          <p className="article-date" style={{ marginTop: 8 }}>
            Progress: {completedCount}/{totalChapters} chapters · {progress}%
          </p>
        </div>
      </section>

      <section className="article-banner">
        <img
          src="/images/courses/eh-sniffing.png"
          alt="Sniffing and Spoofing"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1200x420/1a0b2e/a855f7?text=Sniffing+%26+Spoofing";
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
              <div className={`quiz-box ${isChapterCompleted ? "completed" : ""}`}>
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
                        disabled={isChapterCompleted}
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
                <button
                  className="quiz-submit"
                  onClick={handleSubmit}
                  disabled={isChapterCompleted}
                >
                  {isChapterCompleted ? "Completed ✓" : "Submit Answer"}
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
              Progress: {completedChapters.includes(activeChapter.id) ? completedCount : completedCount + 1}/{totalChapters}
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
              {isLastChapter && completedCount >= totalChapters - 1 && (
                <button onClick={closeCongrats}>Course Complete ✓</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SniffingAndSpoofing;