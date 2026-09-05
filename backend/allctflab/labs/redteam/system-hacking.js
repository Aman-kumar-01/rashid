const { getFlag } = require("../../utils/flags");

const LEVEL_HINTS = {
  1: "System enum: users, processes, network, systeminfo style findings.",
  2: "Weak / default password or credential reuse idea.",
  3: "Sudo misconfiguration / sudo -l style privilege path.",
  4: "Cron job abuse / writable script in scheduled task.",
  5: "Full path to root (enum → creds/sudo/cron → root).",
};

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function validateSystemHacking(level, payload) {
  const p = normalize(payload);

  switch (Number(level)) {
    case 1:
      return (
        p.includes("enum") ||
        p.includes("whoami") ||
        p.includes("id") ||
        p.includes("systeminfo") ||
        p.includes("uname") ||
        p.includes("process") ||
        p.includes("user")
      );
    case 2:
      return (
        p.includes("password") ||
        p.includes("default") ||
        p.includes("weak") ||
        p.includes("credential") ||
        p.includes("admin:admin") ||
        p.includes("reuse")
      );
    case 3:
      return (
        p.includes("sudo") ||
        p.includes("sudoers") ||
        p.includes("nopasswd") ||
        p.includes("privilege") ||
        p.includes("gtfo")
      );
    case 4:
      return (
        p.includes("cron") ||
        p.includes("crontab") ||
        p.includes("scheduled") ||
        p.includes("writable") ||
        p.includes("timer")
      );
    case 5:
      return (
        p.includes("root") ||
        p.includes("uid=0") ||
        p.includes("privilege escalation") ||
        p.includes("privesc") ||
        p.includes("full compromise")
      );
    default:
      return false;
  }
}

function submitSystemHacking(level, payload) {
  const id = Number(level);

  if (!Number.isInteger(id) || id < 1 || id > 5) {
    return { success: false, message: "Invalid lab level." };
  }
  if (!payload || typeof payload !== "string") {
    return { success: false, message: "Payload / answer is required." };
  }
  if (payload.length > 5000) {
    return { success: false, message: "Payload too long." };
  }

  const flag = getFlag("redteam", "system-hacking", id);
  if (!flag) {
    return {
      success: false,
      message: "Lab flag is not configured. Check flags.js redteam.system-hacking",
    };
  }

  if (!validateSystemHacking(id, payload)) {
    return {
      success: false,
      message: "Incorrect. Refine your system hacking answer.",
      level: id,
      hint: LEVEL_HINTS[id],
      request: payload,
      response: "VALIDATION_FAILED",
    };
  }

  return {
    success: true,
    message: "Challenge solved successfully!",
    level: id,
    flag,
    request: payload,
    response: `OK\nFLAG=${flag}`,
  };
}

module.exports = { submitSystemHacking };