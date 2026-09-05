const { getFlag } = require("../../utils/flags");

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function validateWebRedTeam(level, payload) {
  const p = normalize(payload);

  switch (Number(level)) {
    case 1:
      return (
        p.includes("robots.txt") ||
        p.includes("/admin") ||
        p.includes("hidden") ||
        p.includes("apache") ||
        p.includes("x-powered-by") ||
        p.includes("directory listing") ||
        p.includes("recon")
      );
    case 2:
      return (
        p.includes("admin:admin") ||
        p.includes("' or '1'='1") ||
        p.includes("or 1=1") ||
        p.includes("default password") ||
        p.includes("auth bypass") ||
        p.includes("forced browsing")
      );
    case 3:
      return (
        p.includes("id=2") ||
        p.includes("user_id") ||
        p.includes("idor") ||
        p.includes("/api/user") ||
        p.includes("horizontal") ||
        p.includes("another user")
      );
    case 4:
      return (
        p.includes(".php") ||
        p.includes(".jsp") ||
        p.includes(".aspx") ||
        p.includes("php.jpg") ||
        p.includes("double extension") ||
        p.includes("webshell") ||
        p.includes("content-type")
      );
    case 5:
      return (
        p.includes(";") ||
        p.includes("&&") ||
        p.includes("whoami") ||
        p.includes("command injection") ||
        p.includes("rce") ||
        p.includes("|")
      );
    default:
      return false;
  }
}

function submitWebRedTeam(level, payload) {
  const id = Number(level);

  if (!Number.isInteger(id) || id < 1 || id > 5) {
    return { success: false, message: "Invalid lab level." };
  }

  if (!payload || typeof payload !== "string") {
    return { success: false, message: "Payload is required." };
  }

  const flag = getFlag("redteam", "web-redteam", id);

  console.log("[web-redteam] level:", id);
  console.log("[web-redteam] payload:", payload);
  console.log("[web-redteam] flag from getFlag:", flag);

  if (!flag) {
    return {
      success: false,
      message: "Lab flag is not configured. Check flags.js redteam.web-redteam",
    };
  }

  const ok = validateWebRedTeam(id, payload);
  console.log("[web-redteam] validated:", ok);

  if (!ok) {
    return {
      success: false,
      message: "Incorrect answer. Try another recon/technique keyword.",
      level: id,
      request: payload,
      response: "VALIDATION_FAILED",
    };
  }

  // SUCCESS — flag MUST be here
  return {
    success: true,
    message: "Challenge solved successfully!",
    level: id,
    flag: flag,
    request: payload,
    response: `OK\nFLAG=${flag}`,
  };
}

module.exports = { submitWebRedTeam };