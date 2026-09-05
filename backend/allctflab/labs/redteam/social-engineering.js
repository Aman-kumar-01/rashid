const { getFlag } = require("../../utils/flags");

const LEVEL_HINTS = {
  1: "Phishing indicators: spoofed sender, urgent CTA, fake link.",
  2: "Pretext: invented scenario to gain trust.",
  3: "Vishing: voice-based social engineering concepts.",
  4: "USB drop / physical bait scenario.",
  5: "Full campaign combining multiple SE techniques.",
};

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function validateSocialEngineering(level, payload) {
  const p = normalize(payload);

  switch (Number(level)) {
    case 1:
      return (
        p.includes("phish") ||
        p.includes("spoof") ||
        p.includes("urgent") ||
        p.includes("fake link") ||
        p.includes("credential harvest") ||
        p.includes("email")
      );
    case 2:
      return (
        p.includes("pretext") ||
        p.includes("helpdesk") ||
        p.includes("it support") ||
        p.includes("scenario") ||
        p.includes("impersonat")
      );
    case 3:
      return (
        p.includes("vishing") ||
        p.includes("voice") ||
        p.includes("phone") ||
        p.includes("call") ||
        p.includes("otp")
      );
    case 4:
      return (
        p.includes("usb") ||
        p.includes("drop") ||
        p.includes("bait") ||
        p.includes("physical") ||
        p.includes("autorun")
      );
    case 5:
      return (
        p.includes("campaign") ||
        p.includes("multi") ||
        p.includes("phish") ||
        p.includes("pretext") ||
        p.includes("full") ||
        p.includes("combined")
      );
    default:
      return false;
  }
}

function submitSocialEngineering(level, payload) {
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

  const flag = getFlag("redteam", "social-engineering", id);
  if (!flag) {
    return {
      success: false,
      message: "Lab flag is not configured. Check flags.js redteam.social-engineering",
    };
  }

  if (!validateSocialEngineering(id, payload)) {
    return {
      success: false,
      message: "Incorrect. Refine your social engineering answer.",
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

module.exports = { submitSocialEngineering };