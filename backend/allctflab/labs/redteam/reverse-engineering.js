const { getFlag } = require("../../utils/flags");

const LEVEL_HINTS = {
  1: "Extract readable strings from the binary.",
  2: "Static analysis: functions, imports, control flow without running.",
  3: "Find logic bug / flawed check in code path.",
  4: "Detect packer / obfuscation layer.",
  5: "Full RE summary combining strings + static + logic.",
};

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function validateReverseEngineering(level, payload) {
  const p = normalize(payload);

  switch (Number(level)) {
    case 1:
      return (
        p.includes("strings") ||
        p.includes("ascii") ||
        p.includes("flag{") ||
        p.includes("password") ||
        p.includes("hardcoded")
      );
    case 2:
      return (
        p.includes("static") ||
        p.includes("ghidra") ||
        p.includes("ida") ||
        p.includes("disassembl") ||
        p.includes("import") ||
        p.includes("function")
      );
    case 3:
      return (
        p.includes("logic") ||
        p.includes("bypass") ||
        p.includes("strcmp") ||
        p.includes("check") ||
        p.includes("branch") ||
        p.includes("condition")
      );
    case 4:
      return (
        p.includes("packer") ||
        p.includes("upx") ||
        p.includes("obfuscat") ||
        p.includes("packed") ||
        p.includes("unpack")
      );
    case 5:
      return (
        p.includes("reverse") ||
        p.includes("full") ||
        p.includes("analysis") ||
        p.includes("decompile") ||
        p.includes("solved") ||
        p.includes("key")
      );
    default:
      return false;
  }
}

function submitReverseEngineering(level, payload) {
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

  const flag = getFlag("redteam", "reverse-engineering", id);
  if (!flag) {
    return {
      success: false,
      message:
        "Lab flag is not configured. Check flags.js redteam.reverse-engineering",
    };
  }

  if (!validateReverseEngineering(id, payload)) {
    return {
      success: false,
      message: "Incorrect. Refine your reverse engineering answer.",
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

module.exports = { submitReverseEngineering };