import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import "./LinuxBasicsForHackers.css";

/* =========================================================
   KHAN SPLOIT — Linux Basics for Hackers
   Chapters + Quiz + Progress + Congrats
========================================================= */

const STORAGE_KEY = "khansploit_linux_basics_course_completed";

const chapters = [
  // ====================== 01 ======================
  {
    id: "why-linux-matters",
    title: "01 Why Linux Matters for Ethical Hackers",
    content: (
      <>
        <h2>Why Linux Matters for Ethical Hackers</h2>
        <p>
          Linux is the dominant operating system in cybersecurity labs, servers,
          cloud environments, and security tooling. Most professional ethical
          hacking distributions, testing platforms, and many production systems
          run on Linux or Linux-based environments.
        </p>
        <p>
          A solid understanding of Linux fundamentals gives ethical hackers the
          ability to navigate systems efficiently, understand how services run,
          manage permissions, automate tasks, and work comfortably in
          command-line environments.
        </p>
        <p>
          You do not need to become a full-time system administrator overnight.
          You do need enough fluency to move confidently in terminals, read
          basic system state, and avoid dangerous mistakes on systems you are
          authorized to test.
        </p>

        <h3>Key Reasons Linux is Essential</h3>
        <ul>
          <li>Most security tools and frameworks are built for or run best on Linux</li>
          <li>Servers, cloud instances, and containers frequently use Linux</li>
          <li>Command-line proficiency is required for professional assessments</li>
          <li>File permissions, processes, and networking concepts are clearer on Linux</li>
          <li>Many intentionally vulnerable labs and CTF platforms are Linux-based</li>
        </ul>

        <h3>Mindset for Learning</h3>
        <ul>
          <li>Focus on understanding concepts rather than memorizing every command</li>
          <li>Practice in legal, isolated environments only</li>
          <li>Build muscle memory through regular terminal use</li>
          <li>Learn how the system works, not just how to run tools</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Linux fluency is a foundational skill for ethical hackers. Strong
            command-line and system knowledge makes every later topic easier and
            more effective.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Why is Linux especially important for ethical hackers and security labs?",
      options: [
        "Because Linux cannot run security tools",
        "Because many labs, servers, tools, and CTF platforms are Linux-based",
        "Because Linux has no permissions model",
        "Because ethical hacking only works on mobile devices",
      ],
      correct:
        "Because many labs, servers, tools, and CTF platforms are Linux-based",
    },
  },

  // ====================== 02 ======================
  {
    id: "linux-distributions",
    title: "02 Linux Distributions Overview",
    content: (
      <>
        <h2>Linux Distributions Overview</h2>
        <p>
          A Linux distribution (distro) packages the Linux kernel with system
          tools, package managers, and default software. Different distributions
          serve different purposes, but core concepts transfer between them.
        </p>

        <h3>Common Categories</h3>
        <ul>
          <li>
            <strong>General Purpose</strong> — Ubuntu, Fedora, Debian, Linux Mint
          </li>
          <li>
            <strong>Security & Penetration Testing Oriented</strong> — Specialized
            distributions that come with many security tools pre-installed
          </li>
          <li>
            <strong>Server Focused</strong> — CentOS Stream, Rocky Linux, AlmaLinux,
            Debian Server
          </li>
          <li>
            <strong>Minimal / Container Oriented</strong> — Alpine and lightweight
            variants used in containers
          </li>
        </ul>

        <h3>What Matters for Ethical Hackers</h3>
        <ul>
          <li>Comfort with the terminal and package management</li>
          <li>Understanding differences between Debian-based and RHEL-based systems</li>
          <li>Ability to work on both desktop and server-style environments</li>
          <li>Knowing how to keep a system updated and relatively clean</li>
        </ul>

        <h3>Learning Strategy</h3>
        <ul>
          <li>Pick one primary lab distro and learn it deeply</li>
          <li>Note package manager differences when you switch families</li>
          <li>Focus on concepts: users, files, processes, network, services</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            You do not need to master every distribution. Learn one well (often
            a Debian-based system), then expand to others as needed. Concepts
            transfer across most distributions.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is the best early learning strategy for Linux distributions?",
      options: [
        "Memorize every distro equally before using a terminal",
        "Learn one distribution well, then transfer concepts to others",
        "Avoid package managers completely",
        "Only use graphical tools and never the terminal",
      ],
      correct:
        "Learn one distribution well, then transfer concepts to others",
    },
  },

  // ====================== 03 ======================
  {
    id: "filesystem-hierarchy",
    title: "03 Filesystem Hierarchy",
    content: (
      <>
        <h2>Filesystem Hierarchy</h2>
        <p>
          Linux organizes files in a hierarchical tree starting from the root
          directory <code>/</code>. Understanding the purpose of major directories
          helps with navigation, troubleshooting, and system analysis.
        </p>

        <h3>Important Directories</h3>
        <ul>
          <li>
            <strong>/</strong> — Root of the filesystem
          </li>
          <li>
            <strong>/home</strong> — User home directories
          </li>
          <li>
            <strong>/etc</strong> — System configuration files
          </li>
          <li>
            <strong>/var</strong> — Variable data (logs, caches, spool)
          </li>
          <li>
            <strong>/tmp</strong> — Temporary files
          </li>
          <li>
            <strong>/usr</strong> — User programs and utilities
          </li>
          <li>
            <strong>/bin and /sbin</strong> — Essential binaries and system binaries
          </li>
          <li>
            <strong>/opt</strong> — Optional / third-party software
          </li>
          <li>
            <strong>/proc and /sys</strong> — Virtual filesystems with process and
            kernel information
          </li>
        </ul>

        <h3>Practical Importance</h3>
        <ul>
          <li>Knowing where configuration files usually live</li>
          <li>Understanding where logs are commonly stored</li>
          <li>Recognizing temporary vs persistent locations</li>
          <li>Navigating efficiently during assessments and labs</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            The Linux filesystem hierarchy is logical once learned. Familiarity
            with key directories speeds up both daily work and security-related
            tasks.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which directory commonly stores system configuration files on Linux?",
      options: [
        "/home",
        "/etc",
        "/tmp only",
        "/media only",
      ],
      correct: "/etc",
    },
  },

  // ====================== 04 ======================
  {
    id: "basic-navigation",
    title: "04 Basic Navigation & File Operations",
    content: (
      <>
        <h2>Basic Navigation & File Operations</h2>
        <p>
          Comfortable navigation and file management are the first practical
          skills every Linux user needs. These operations form the foundation
          for almost everything else on the command line.
        </p>

        <h3>Core Navigation Concepts</h3>
        <ul>
          <li>Current working directory</li>
          <li>Absolute vs relative paths</li>
          <li>Moving between directories</li>
          <li>Listing directory contents with useful options</li>
          <li>Understanding hidden files (names starting with a dot)</li>
        </ul>

        <h3>Essential File Operations</h3>
        <ul>
          <li>Creating, copying, moving, and removing files and directories</li>
          <li>Viewing file contents (especially text files)</li>
          <li>Searching for files by name or location</li>
          <li>Understanding the difference between files and directories</li>
        </ul>

        <h3>Good Habits</h3>
        <ul>
          <li>Use tab completion to reduce typing errors</li>
          <li>Prefer relative paths when practical</li>
          <li>Be careful with recursive delete operations</li>
          <li>Verify location with <code>pwd</code> when unsure</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Navigation and basic file operations should become second nature.
            Speed and accuracy here free mental energy for more complex tasks.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is a safe habit when you are unsure of your current directory?",
      options: [
        "Run recursive delete immediately",
        "Verify location with pwd before making changes",
        "Ignore paths and type random commands",
        "Always operate as root for convenience",
      ],
      correct: "Verify location with pwd before making changes",
    },
  },

  // ====================== 05 ======================
  {
    id: "permissions-ownership",
    title: "05 Permissions & Ownership",
    content: (
      <>
        <h2>Permissions & Ownership</h2>
        <p>
          Linux access control is built around users, groups, and permission
          bits. Understanding permissions is critical for both system
          administration and security assessment work.
        </p>

        <h3>Core Concepts</h3>
        <ul>
          <li>
            <strong>Owner (User)</strong> — The user who owns the file or directory
          </li>
          <li>
            <strong>Group</strong> — The group associated with the file
          </li>
          <li>
            <strong>Others</strong> — Everyone else
          </li>
          <li>
            <strong>Read, Write, Execute</strong> — The three basic permission types
          </li>
        </ul>

        <h3>Permission Representation</h3>
        <ul>
          <li>Symbolic form (e.g., rwxr-xr-x)</li>
          <li>Numeric (octal) form (e.g., 755, 644)</li>
          <li>Special bits (setuid, setgid, sticky bit) at a high level</li>
        </ul>

        <h3>Why This Matters for Security</h3>
        <ul>
          <li>Misconfigured permissions can lead to privilege issues</li>
          <li>Understanding ownership helps during system reviews</li>
          <li>Writable locations and overly permissive files are common findings</li>
          <li>Correct permissions are a fundamental hardening control</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Permissions and ownership form the basic access control model of
            Linux. Mastering them is essential for both safe system use and
            meaningful security analysis.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which three basic permission types does Linux use for files and directories?",
      options: [
        "Create, Destroy, Encrypt",
        "Read, Write, Execute",
        "Open, Close, Sync",
        "Owner, Root, Kernel only",
      ],
      correct: "Read, Write, Execute",
    },
  },

  // ====================== 06 ======================
  {
    id: "users-groups",
    title: "06 Users, Groups & Privilege",
    content: (
      <>
        <h2>Users, Groups & Privilege</h2>
        <p>
          Linux is a multi-user system. Understanding how users and groups work,
          and how privilege is managed, is foundational for both daily use and
          security work.
        </p>

        <h3>Key Ideas</h3>
        <ul>
          <li>Every process runs as a specific user</li>
          <li>The root user has unrestricted privileges</li>
          <li>Regular users have limited privileges by design</li>
          <li>Groups allow shared access without sharing accounts</li>
          <li>Privilege issues often involve misconfigurations</li>
        </ul>

        <h3>Practical Knowledge Areas</h3>
        <ul>
          <li>Checking the current user and groups</li>
          <li>Understanding the difference between login shells and other sessions</li>
          <li>Using elevated privileges safely and only when needed</li>
          <li>Recognizing service accounts and system users</li>
        </ul>

        <h3>Security Perspective</h3>
        <ul>
          <li>Principle of least privilege</li>
          <li>Avoiding unnecessary use of root</li>
          <li>Understanding how services run under specific accounts</li>
          <li>Reviewing who has access to what</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Users, groups, and privilege levels define what actions are possible
            on a system. Clear understanding here supports both safe administration
            and effective security assessment.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What does the principle of least privilege recommend?",
      options: [
        "Always log in as root for speed",
        "Grant only the access needed to perform a task",
        "Share one admin password with the whole team",
        "Disable all user accounts",
      ],
      correct: "Grant only the access needed to perform a task",
    },
  },

  // ====================== 07 ======================
  {
    id: "processes-services",
    title: "07 Processes & Services",
    content: (
      <>
        <h2>Processes & Services</h2>
        <p>
          Everything that runs on a Linux system is a process. Services are
          long-running processes that provide functionality such as web servers,
          databases, or remote access.
        </p>

        <h3>Core Concepts</h3>
        <ul>
          <li>Process ID (PID) and parent process relationships</li>
          <li>Foreground vs background processes</li>
          <li>Viewing running processes and resource usage</li>
          <li>Starting, stopping, and restarting services</li>
          <li>Understanding how services are managed (systemd on most modern systems)</li>
        </ul>

        <h3>Why This Matters</h3>
        <ul>
          <li>Identifying what is running on a system</li>
          <li>Understanding service accounts and permissions</li>
          <li>Recognizing unusual or unexpected processes</li>
          <li>Managing services during testing and administration</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Process and service awareness is essential for system understanding.
            It helps during troubleshooting, hardening, and security reviews.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is a service on Linux in practical terms?",
      options: [
        "A temporary desktop wallpaper",
        "A long-running process that provides system or network functionality",
        "Only a graphical application",
        "A type of hard disk partition",
      ],
      correct:
        "A long-running process that provides system or network functionality",
    },
  },

  // ====================== 08 ======================
  {
    id: "networking-basics-linux",
    title: "08 Networking Basics on Linux",
    content: (
      <>
        <h2>Networking Basics on Linux</h2>
        <p>
          Linux provides powerful networking capabilities from the command line.
          Ethical hackers need to understand how to inspect and work with
          network configuration and connectivity in authorized environments.
        </p>

        <h3>Important Areas</h3>
        <ul>
          <li>Viewing network interfaces and addresses</li>
          <li>Checking connectivity and routing</li>
          <li>Understanding listening ports and established connections</li>
          <li>Basic name resolution concepts</li>
          <li>Firewall concepts at a high level (what is allowed or blocked)</li>
        </ul>

        <h3>Practical Skills</h3>
        <ul>
          <li>Identifying the system’s IP addresses</li>
          <li>Checking whether a host or port is reachable</li>
          <li>Listing open network services</li>
          <li>Understanding the difference between local and remote connections</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Networking knowledge on Linux bridges system administration and
            security testing. Comfort with basic network inspection is a core
            skill.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which skill is part of basic Linux networking for ethical hackers?",
      options: [
        "Ignoring all listening ports",
        "Viewing interfaces, addresses, and checking reachability within authorized scope",
        "Only configuring printers",
        "Disabling all logs permanently",
      ],
      correct:
        "Viewing interfaces, addresses, and checking reachability within authorized scope",
    },
  },

  // ====================== 09 ======================
  {
    id: "package-management",
    title: "09 Package Management",
    content: (
      <>
        <h2>Package Management</h2>
        <p>
          Software on Linux is typically installed, updated, and removed through
          package managers. Different families of distributions use different
          package management systems.
        </p>

        <h3>Common Package Managers</h3>
        <ul>
          <li>
            <strong>APT</strong> — Used on Debian, Ubuntu, and derivatives
          </li>
          <li>
            <strong>DNF / YUM</strong> — Used on Fedora, RHEL, Rocky, AlmaLinux
          </li>
          <li>
            <strong>Pacman</strong> — Used on Arch Linux and derivatives
          </li>
        </ul>

        <h3>Key Operations</h3>
        <ul>
          <li>Updating package lists / repositories</li>
          <li>Installing and removing packages</li>
          <li>Searching for available software</li>
          <li>Keeping the system reasonably up to date</li>
        </ul>

        <h3>Security Relevance</h3>
        <ul>
          <li>Outdated packages can contain known vulnerabilities</li>
          <li>Understanding what is installed helps during reviews</li>
          <li>Package integrity and trusted repositories matter</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Package management is a daily skill. Knowing how to install, update,
            and query packages cleanly is essential for both lab environments and
            real systems.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which package manager is commonly used on Debian and Ubuntu systems?",
      options: [
        "APT",
        "Only Pacman",
        "Only Homebrew on Linux kernel",
        "No package manager exists on Debian",
      ],
      correct: "APT",
    },
  },

  // ====================== 10 ======================
  {
    id: "text-processing",
    title: "10 Text Processing & Piping",
    content: (
      <>
        <h2>Text Processing & Piping</h2>
        <p>
          Much of Linux power comes from combining small tools. Text processing
          utilities and the ability to pipe output from one command to another
          are fundamental for efficient work.
        </p>

        <h3>Core Ideas</h3>
        <ul>
          <li>Standard input, standard output, and standard error</li>
          <li>Redirecting output to files</li>
          <li>Piping the output of one command into another</li>
          <li>Filtering, searching, and transforming text</li>
        </ul>

        <h3>Common Use Cases</h3>
        <ul>
          <li>Searching through logs and configuration files</li>
          <li>Extracting specific information from command output</li>
          <li>Building simple one-liners for repetitive tasks</li>
          <li>Preparing data for further analysis</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Text processing and piping turn the command line into a flexible
            toolkit. These skills dramatically increase efficiency and are used
            constantly in security work.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What does piping do in the Linux command line?",
      options: [
        "Deletes the hard drive automatically",
        "Sends the output of one command as input to another command",
        "Only changes the desktop theme",
        "Disables networking",
      ],
      correct:
        "Sends the output of one command as input to another command",
    },
  },

  // ====================== 11 ======================
  {
    id: "scripting-intro",
    title: "11 Introduction to Shell Scripting",
    content: (
      <>
        <h2>Introduction to Shell Scripting</h2>
        <p>
          Shell scripting allows automation of repetitive tasks. Even basic
          scripting skills provide large productivity gains and help in building
          custom workflows for labs and authorized testing environments.
        </p>

        <h3>What to Learn First</h3>
        <ul>
          <li>Writing and executing simple scripts</li>
          <li>Using variables</li>
          <li>Basic conditionals and loops</li>
          <li>Reading input and producing output</li>
          <li>Calling other commands from within a script</li>
        </ul>

        <h3>Practical Value</h3>
        <ul>
          <li>Automating lab setup and cleanup</li>
          <li>Repeating common checks consistently</li>
          <li>Building small helper tools</li>
          <li>Understanding how many existing tools work</li>
        </ul>

        <h3>Good Practices</h3>
        <ul>
          <li>Start simple and grow complexity gradually</li>
          <li>Make scripts readable</li>
          <li>Test in safe environments</li>
          <li>Avoid hard-coding sensitive information</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Basic shell scripting is a high-leverage skill. It reduces manual
            work and builds a deeper understanding of how the system can be
            controlled programmatically.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "What is a good early practice when learning shell scripting?",
      options: [
        "Start simple, keep scripts readable, and test only in safe environments",
        "Hard-code production passwords into every script",
        "Run untested scripts on client production servers first",
        "Avoid variables and comments forever",
      ],
      correct:
        "Start simple, keep scripts readable, and test only in safe environments",
    },
  },

  // ====================== 12 ======================
  {
    id: "best-practices-linux",
    title: "12 Practical Best Practices",
    content: (
      <>
        <h2>Practical Best Practices</h2>
        <p>
          Developing good habits early makes Linux both safer and more productive
          to use, especially in security-related contexts and authorized labs.
        </p>

        <h3>Recommended Habits</h3>
        <ul>
          <li>Work primarily as a regular user; elevate privileges only when needed</li>
          <li>Keep systems updated in a controlled manner</li>
          <li>Use version control for important scripts and configurations</li>
          <li>Document custom setups and non-obvious changes</li>
          <li>Practice in isolated virtual machines or containers</li>
          <li>Learn to read man pages and built-in help</li>
          <li>Back up important work before major changes</li>
        </ul>

        <h3>Security-Oriented Practices</h3>
        <ul>
          <li>Minimize unnecessary services</li>
          <li>Review permissions on sensitive files and directories</li>
          <li>Understand what is listening on the network</li>
          <li>Treat production systems with extreme care</li>
          <li>Never experiment with destructive commands on systems you do not own or lack authorization to test</li>
        </ul>

        <div className="info-box">
          <h4>Summary</h4>
          <p>
            Strong Linux fundamentals combined with disciplined habits create a
            reliable foundation for ethical hacking work. Focus on understanding,
            safety, and continuous practice.
          </p>
        </div>
      </>
    ),
    quiz: {
      question:
        "Which practice best matches safe Linux use for ethical hacking students?",
      options: [
        "Experiment with destructive commands on random internet hosts",
        "Practice in isolated labs/VMs and elevate privileges only when needed",
        "Always remain root for convenience",
        "Disable all logging and backups",
      ],
      correct:
        "Practice in isolated labs/VMs and elevate privileges only when needed",
    },
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const LinuxBasicsForHackers = () => {
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
            <span className="gradient-text">Linux Basics for Hackers</span>
          </h1>
          <p className="article-date">Updated • 2026</p>
          <p className="article-date" style={{ marginTop: 8 }}>
            Progress: {completedCount}/{totalChapters} chapters · {progress}%
          </p>
        </div>
      </section>

      <section className="article-banner">
        <img
          src="/images/courses/eh-linux.png"
          alt="Linux Basics for Hackers"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1200x420/1a0b2e/a855f7?text=Linux+Basics+for+Hackers";
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

export default LinuxBasicsForHackers;