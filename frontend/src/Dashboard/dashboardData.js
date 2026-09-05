// =============================================
// dashboardData.js
// Icons stored as COMPONENT REFERENCES (no JSX!)
// Rendered in Dashboard.jsx as: <Icon />
// =============================================

import {
  FaBriefcase,
  FaShieldAlt,
  FaBug,
  FaRobot,
  FaUserSecret,
  FaFlask,
} from "react-icons/fa";

export const dashboardCards = [
  {
    id: 1,
    icon: FaBriefcase,
    title: "Portfolio",
    description: "Explore my cybersecurity projects and real-world experience.",
  },
  {
    id: 2,
    icon: FaShieldAlt,
    title: "Bug Bounty",
    description: "Responsible disclosure and vulnerability research reports.",
  },
  {
    id: 3,
    icon: FaBug,
    title: "Red Teaming",
    description: "Adversary simulation, C2 operations and attack path mapping.",
  },
  {
    id: 4,
    icon: FaRobot,
    title: "AI Red Teaming",
    description: "LLM security, prompt injection and GenAI threat modeling.",
  },
  {
    id: 5,
    icon: FaUserSecret,
    title: "Ethical Hacking",
    description: "Web, mobile and network assessments with clean remediation reports.",
  },

  {
  id: 6,
  icon: FaFlask,
  title: "All-CTF-Lab",
  description: "Hands-on CTF challenges, labs and real-world attack scenarios for practice.",
},
  

];