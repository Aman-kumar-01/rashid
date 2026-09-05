import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import "./NetworkingFundamentals.css";

const STORAGE_KEY = "khansploit_networking_fundamentals_completed";

const chapters = [
  {
    id: "why-networking-matters",
    title: "01 Why Networking Matters",
    content: (
      <>
        <h2>Why Networking Matters for Ethical Hackers</h2>
        <p>
          Almost every modern system communicates over a network. Understanding
          how data moves, how devices find each other, and how protocols work is
          essential for effective ethical hacking and security assessment work.
        </p>
        <p>
          Without solid networking knowledge, scanning results, traffic analysis,
          and many security findings become difficult to interpret correctly.
        </p>
        <h3>Key Reasons Networking Knowledge is Critical</h3>
        <ul>
          <li>Most attacks and defenses operate over networks</li>
          <li>Scanning, enumeration, and traffic analysis depend on protocol understanding</li>
          <li>Misconfigurations often appear at the network and service layers</li>
          <li>Cloud, containers, and modern infrastructure still rely on networking fundamentals</li>
          <li>Clear communication of findings requires accurate technical language</li>
        </ul>
        <h3>Learning Approach</h3>
        <ul>
          <li>Focus on concepts before tools</li>
          <li>Understand both theory and practical observation</li>
          <li>Practice in legal lab environments only</li>
          <li>Connect networking knowledge to real security scenarios</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Networking is a core foundation. Strong fundamentals make every later
            security topic clearer and more actionable.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Why is networking knowledge critical for ethical hackers?",
      options: [
        "Because security tools never use networks",
        "Because scanning, enumeration, and many findings depend on understanding how systems communicate",
        "Because networking only matters for hardware repair",
        "Because ethical hacking ignores protocols",
      ],
      correct:
        "Because scanning, enumeration, and many findings depend on understanding how systems communicate",
    },
  },
  {
    id: "osi-model",
    title: "02 The OSI Model",
    content: (
      <>
        <h2>The OSI Model</h2>
        <p>
          The Open Systems Interconnection (OSI) model is a conceptual framework
          that divides network communication into seven layers. It helps organize
          how data moves from one application to another across a network.
        </p>
        <h3>The Seven Layers</h3>
        <ul>
          <li><strong>Layer 7 – Application</strong> — Interfaces with software (HTTP, DNS, FTP concepts)</li>
          <li><strong>Layer 6 – Presentation</strong> — Data translation, encryption, compression</li>
          <li><strong>Layer 5 – Session</strong> — Manages sessions between applications</li>
          <li><strong>Layer 4 – Transport</strong> — End-to-end delivery (TCP, UDP)</li>
          <li><strong>Layer 3 – Network</strong> — Logical addressing and routing (IP)</li>
          <li><strong>Layer 2 – Data Link</strong> — Framing and physical addressing (MAC)</li>
          <li><strong>Layer 1 – Physical</strong> — Cables, signals, hardware transmission</li>
        </ul>
        <h3>Why the OSI Model is Useful</h3>
        <ul>
          <li>Provides a common language for discussing network issues</li>
          <li>Helps isolate where problems or security controls operate</li>
          <li>Supports structured troubleshooting and analysis</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            The OSI model is a mental map. You do not need to memorize every detail,
            but you should be able to place common protocols and problems into the
            correct layers.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "At which OSI layer do TCP and UDP primarily operate?",
      options: [
        "Layer 1 – Physical",
        "Layer 2 – Data Link",
        "Layer 4 – Transport",
        "Layer 7 – Application only",
      ],
      correct: "Layer 4 – Transport",
    },
  },
  {
    id: "tcp-ip-model",
    title: "03 TCP/IP Model",
    content: (
      <>
        <h2>TCP/IP Model</h2>
        <p>
          While the OSI model is useful for teaching, the real-world Internet is
          built on the TCP/IP model. It is more practical and maps closely to how
          systems actually communicate.
        </p>
        <h3>TCP/IP Layers (Simplified)</h3>
        <ul>
          <li><strong>Application Layer</strong> — Combines OSI Application, Presentation, and Session concepts</li>
          <li><strong>Transport Layer</strong> — TCP and UDP</li>
          <li><strong>Internet Layer</strong> — IP addressing and routing</li>
          <li><strong>Network Access Layer</strong> — Data Link + Physical concerns</li>
        </ul>
        <h3>Practical Importance</h3>
        <ul>
          <li>Most tools and documentation refer to TCP/IP concepts</li>
          <li>Understanding this model helps interpret packet captures and scan results</li>
          <li>Security controls often map cleanly to these layers</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Learn both models. Use OSI for structured thinking and TCP/IP for
            real-world application.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "How should learners use OSI and TCP/IP together?",
      options: [
        "Ignore TCP/IP completely",
        "Use OSI for structured thinking and TCP/IP for real-world application",
        "Only memorize vendor logos",
        "Replace both models with social media tips",
      ],
      correct:
        "Use OSI for structured thinking and TCP/IP for real-world application",
    },
  },
  {
    id: "ip-addressing",
    title: "04 IP Addressing Fundamentals",
    content: (
      <>
        <h2>IP Addressing Fundamentals</h2>
        <p>
          IP addresses uniquely identify devices on a network and enable routing
          of traffic between networks. Understanding addressing is required for
          almost every network-related security task.
        </p>
        <h3>IPv4 Basics</h3>
        <ul>
          <li>32-bit addresses written in dotted decimal notation</li>
          <li>Public vs private address ranges</li>
          <li>Network portion vs host portion</li>
          <li>Special addresses (loopback, broadcast, etc.)</li>
        </ul>
        <h3>IPv6 Awareness</h3>
        <ul>
          <li>128-bit addresses</li>
          <li>Growing adoption in modern networks</li>
          <li>Different notation and some different behaviors</li>
        </ul>
        <h3>Why Addressing Matters in Security</h3>
        <ul>
          <li>Scope definition for assessments often uses IP ranges</li>
          <li>Understanding private vs public helps interpret findings</li>
          <li>Misconfigured addressing can create unexpected exposure</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            IP addressing is the foundation of network communication. Clear
            understanding of public/private ranges and basic structure is essential.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "Which statement about IPv4 is correct?",
      options: [
        "IPv4 addresses are 128-bit",
        "IPv4 uses 32-bit addresses in dotted decimal notation",
        "IPv4 has no private ranges",
        "IPv4 is only used offline",
      ],
      correct:
        "IPv4 uses 32-bit addresses in dotted decimal notation",
    },
  },
  {
    id: "subnetting",
    title: "05 Subnetting Concepts",
    content: (
      <>
        <h2>Subnetting Concepts</h2>
        <p>
          Subnetting divides a larger network into smaller, manageable segments.
          It improves organization, supports security boundaries, and is a core
          skill for network analysis.
        </p>
        <h3>Core Ideas</h3>
        <ul>
          <li>Subnet mask defines the network and host portions</li>
          <li>CIDR notation (e.g., /24, /16) is widely used</li>
          <li>Smaller subnets reduce broadcast domains</li>
          <li>Subnetting supports network segmentation</li>
        </ul>
        <h3>Practical Relevance</h3>
        <ul>
          <li>Reading and understanding network ranges in scope documents</li>
          <li>Recognizing how networks are segmented</li>
          <li>Interpreting scan targets and results more accurately</li>
          <li>Supporting discussions about network architecture and security zones</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            You do not need to be a subnetting expert on day one, but you should
            understand CIDR notation and be able to reason about network size and
            boundaries.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "What does CIDR notation help express?",
      options: [
        "Only cable colors",
        "Network prefix length and address range boundaries (e.g., /24)",
        "Only Wi-Fi passwords",
        "Only email subjects",
      ],
      correct:
        "Network prefix length and address range boundaries (e.g., /24)",
    },
  },
  {
    id: "tcp-udp",
    title: "06 TCP vs UDP",
    content: (
      <>
        <h2>TCP vs UDP</h2>
        <p>
          Transport layer protocols determine how data is delivered between
          applications. TCP and UDP are the two primary protocols you will
          encounter constantly.
        </p>
        <h3>TCP Characteristics</h3>
        <ul>
          <li>Connection-oriented</li>
          <li>Reliable delivery with acknowledgments</li>
          <li>Ordered data transfer</li>
          <li>Higher overhead</li>
          <li>Used by many common services (web, email, remote access, etc.)</li>
        </ul>
        <h3>UDP Characteristics</h3>
        <ul>
          <li>Connectionless</li>
          <li>No guaranteed delivery</li>
          <li>Lower overhead and lower latency</li>
          <li>Used by DNS, many streaming and real-time applications, and some discovery protocols</li>
        </ul>
        <h3>Security Perspective</h3>
        <ul>
          <li>Different scanning and analysis approaches for TCP vs UDP</li>
          <li>Understanding reliability vs speed trade-offs</li>
          <li>Recognizing which services typically use which protocol</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Knowing when traffic is TCP or UDP, and what that implies, is a basic
            but powerful skill for network security work.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "Which statement correctly contrasts TCP and UDP?",
      options: [
        "UDP is always connection-oriented and reliable",
        "TCP is connection-oriented and aims for reliable delivery; UDP is connectionless",
        "TCP cannot be used for web traffic",
        "UDP requires acknowledgments for every packet always",
      ],
      correct:
        "TCP is connection-oriented and aims for reliable delivery; UDP is connectionless",
    },
  },
  {
    id: "ports-and-services",
    title: "07 Ports and Common Services",
    content: (
      <>
        <h2>Ports and Common Services</h2>
        <p>
          Ports allow multiple services to run on the same IP address. Knowing
          common port numbers and the services associated with them is essential
          for interpreting scan results and understanding attack surfaces.
        </p>
        <h3>Port Ranges</h3>
        <ul>
          <li><strong>Well-known ports (0–1023)</strong> — Common system and network services</li>
          <li><strong>Registered ports (1024–49151)</strong> — Registered for specific applications</li>
          <li><strong>Dynamic / private ports (49152–65535)</strong> — Often used for temporary connections</li>
        </ul>
        <h3>Common Ports to Recognize</h3>
        <ul>
          <li>22 – SSH</li>
          <li>53 – DNS</li>
          <li>80 – HTTP</li>
          <li>443 – HTTPS</li>
          <li>3389 – RDP</li>
          <li>And many others depending on the environment</li>
        </ul>
        <h3>Security Relevance</h3>
        <ul>
          <li>Open ports represent potential attack surface</li>
          <li>Unexpected open ports are often worth investigating</li>
          <li>Service version and configuration matter as much as the port itself</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Port knowledge is practical and high-value. Combine it with service
            identification and configuration awareness for better assessments.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "Which port is commonly associated with HTTPS?",
      options: ["22", "80", "443", "21"],
      correct: "443",
    },
  },
  {
    id: "dns-basics",
    title: "08 DNS Fundamentals",
    content: (
      <>
        <h2>DNS Fundamentals</h2>
        <p>
          The Domain Name System (DNS) translates human-readable names into IP
          addresses. It is critical infrastructure and a frequent area of both
          operational importance and security interest.
        </p>
        <h3>Core Concepts</h3>
        <ul>
          <li>Domain names and hierarchy</li>
          <li>Resolvers and authoritative name servers</li>
          <li>Common record types (A, AAAA, MX, NS, TXT, CNAME, etc.)</li>
          <li>Recursive vs iterative resolution at a high level</li>
        </ul>
        <h3>Why DNS Matters in Security</h3>
        <ul>
          <li>Reconnaissance often starts with DNS information</li>
          <li>Misconfigured DNS can expose internal details</li>
          <li>DNS is used in many legitimate and malicious communication patterns</li>
          <li>Understanding DNS helps with both offensive and defensive analysis</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            DNS is foundational Internet infrastructure. Ethical hackers should
            understand how name resolution works and what information DNS can reveal.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "What is the primary role of DNS?",
      options: [
        "Encrypt all hard drives",
        "Translate human-readable names into IP addresses",
        "Replace firewalls",
        "Only store email passwords",
      ],
      correct: "Translate human-readable names into IP addresses",
    },
  },
  {
    id: "routing-switching",
    title: "09 Switching & Routing Basics",
    content: (
      <>
        <h2>Switching & Routing Basics</h2>
        <p>
          Switches and routers move traffic within and between networks. A
          conceptual understanding of their roles helps interpret network
          architecture and segmentation.
        </p>
        <h3>Switching (Layer 2)</h3>
        <ul>
          <li>Forwards frames based on MAC addresses</li>
          <li>Operates primarily within a local network segment</li>
          <li>VLANs provide logical separation at Layer 2</li>
        </ul>
        <h3>Routing (Layer 3)</h3>
        <ul>
          <li>Forwards packets based on IP addresses</li>
          <li>Connects different networks</li>
          <li>Uses routing tables and protocols to determine paths</li>
        </ul>
        <h3>Security Relevance</h3>
        <ul>
          <li>Network segmentation is a major defensive control</li>
          <li>Understanding trust boundaries between segments is important</li>
          <li>Misconfigured routing or switching can create unexpected access paths</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            You do not need deep vendor-specific knowledge early on, but you should
            understand the difference between switching and routing and why
            segmentation matters.
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "What is a primary difference between switching and routing?",
      options: [
        "Switches forward based on MAC within a segment; routers forward between networks using IP",
        "Routers only use MAC addresses",
        "Switches only connect different countries",
        "There is no difference",
      ],
      correct:
        "Switches forward based on MAC within a segment; routers forward between networks using IP",
    },
  },
  {
    id: "common-protocols",
    title: "10 Common Protocols Overview",
    content: (
      <>
        <h2>Common Protocols Overview</h2>
        <p>
          Protocols define the rules of communication. Familiarity with widely
          used protocols helps you recognize services, understand traffic, and
          reason about security implications.
        </p>
        <h3>Frequently Encountered Protocols</h3>
        <ul>
          <li><strong>HTTP / HTTPS</strong> — Web communication</li>
          <li><strong>DNS</strong> — Name resolution</li>
          <li><strong>SSH</strong> — Secure remote access</li>
          <li><strong>FTP / SFTP</strong> — File transfer concepts</li>
          <li><strong>SMTP / IMAP / POP3</strong> — Email related</li>
          <li><strong>SMB</strong> — File and printer sharing concepts</li>
          <li><strong>RDP</strong> — Remote desktop access</li>
          <li><strong>SNMP</strong> — Network device management</li>
        </ul>
        <h3>Learning Approach</h3>
        <ul>
          <li>Understand the purpose of each protocol</li>
          <li>Know typical ports</li>
          <li>Recognize whether traffic is usually encrypted or cleartext</li>
          <li>Relate protocols to potential security concerns at a high level</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Protocol knowledge turns raw port numbers into meaningful service
            understanding. Build this knowledge gradually through practice and
            observation.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which protocol is commonly associated with secure remote command-line access?",
      options: ["HTTP", "SSH", "FTP only", "SNMP only"],
      correct: "SSH",
    },
  },
  {
    id: "network-security-concepts",
    title: "11 Network Security Concepts",
    content: (
      <>
        <h2>Network Security Concepts</h2>
        <p>
          Networking and security are tightly linked. Several high-level concepts
          appear repeatedly in ethical hacking and defensive work.
        </p>
        <h3>Important Concepts</h3>
        <ul>
          <li><strong>Segmentation</strong> — Dividing networks to limit lateral movement</li>
          <li><strong>Firewalls</strong> — Controlling traffic between zones</li>
          <li><strong>DMZ</strong> — Isolated zone for public-facing services</li>
          <li><strong>NAT</strong> — Network Address Translation and its implications</li>
          <li><strong>VPNs</strong> — Secure remote connectivity concepts</li>
          <li><strong>Zero Trust ideas</strong> — Reducing implicit trust in networks</li>
        </ul>
        <h3>Why These Matter</h3>
        <ul>
          <li>They shape the attack surface and possible movement paths</li>
          <li>Findings often relate to weak segmentation or overly permissive rules</li>
          <li>Understanding architecture improves the quality of recommendations</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Network security concepts help you move from “what is open” to “what
            does this mean for risk and architecture.”
          </p>
        </div>
      </>
    ),
    quiz: {
      question: "What is a main security benefit of network segmentation?",
      options: [
        "It removes the need for any passwords",
        "It helps limit lateral movement between network zones",
        "It makes DNS unnecessary",
        "It disables all logging",
      ],
      correct:
        "It helps limit lateral movement between network zones",
    },
  },
  {
    id: "practical-learning",
    title: "12 Practical Learning Advice",
    content: (
      <>
        <h2>Practical Learning Advice</h2>
        <p>
          Networking is best learned through a combination of theory and hands-on
          observation in safe environments.
        </p>
        <h3>Recommended Approach</h3>
        <ol>
          <li>Learn the OSI and TCP/IP models conceptually</li>
          <li>Practice reading IP addresses and CIDR notation</li>
          <li>Study common ports and services</li>
          <li>Observe traffic in lab environments (legally)</li>
          <li>Connect networking knowledge to scanning and enumeration results</li>
          <li>Review real network diagrams and architecture discussions</li>
        </ol>
        <h3>Good Habits</h3>
        <ul>
          <li>Always practice in isolated labs or systems you own/have permission to use</li>
          <li>Take notes on protocols and ports as you encounter them</li>
          <li>Ask “what layer does this operate at?” when learning new topics</li>
          <li>Focus on understanding over memorization</li>
        </ul>
        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Strong networking fundamentals make you faster, more accurate, and more
            professional in ethical hacking work. Invest time here — it pays off
            across every later course.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is a recommended habit when learning networking for ethical hacking?",
      options: [
        "Practice only on random public systems without permission",
        "Practice in isolated labs and focus on understanding over pure memorization",
        "Skip ports and protocols entirely",
        "Avoid connecting theory to scan results",
      ],
      correct:
        "Practice in isolated labs and focus on understanding over pure memorization",
    },
  },
];

const NetworkingFundamentals = () => {
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
            <span className="gradient-text">Networking Fundamentals</span>
          </h1>
          <p className="article-date">Updated • 2026</p>
          <p className="article-date" style={{ marginTop: 8 }}>
            Progress: {completedCount}/{totalChapters} chapters · {progress}%
          </p>
        </div>
      </section>

      <section className="article-banner">
        <img
          src="/images/courses/eh-networking.png"
          alt="Networking Fundamentals"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1200x420/1a0b2e/a855f7?text=Networking+Fundamentals";
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

export default NetworkingFundamentals;