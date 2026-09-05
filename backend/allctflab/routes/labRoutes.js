const express = require("express");
const router = express.Router();
const labAuth = require("../middleware/labAuth");
const { getFlag } = require("../utils/flags");
const { validateLab } = require("../utils/validators");

// Mobile
const { submitAndroid } = require("../labs/mobile/android");
const { submitiOS } = require("../labs/mobile/ios");
const { submitAPK } = require("../labs/mobile/apk");

// Cloud
const { submitAWS } = require("../labs/cloud/aws");
const { submitAzure } = require("../labs/cloud/azure");
const { submitGCP } = require("../labs/cloud/gcp");

// Web
const { submitCSRF } = require("../labs/web/csrf");
const { submitXSS } = require("../labs/web/xss");
const { submitSQLi } = require("../labs/web/sqli");
const { submitXXE } = require("../labs/web/xxe");
const { submitSSRF } = require("../labs/web/ssrf");
const { submitIDOR } = require("../labs/web/idor");
const { submitFileUpload } = require("../labs/web/fileupload");

// AI
const { submitPromptInjection } = require("../labs/Ai/prompt-injection");
const { submitLLMJailbreak } = require("../labs/Ai/llm-jailbreak");
const { submitRAGSecurity } = require("../labs/Ai/rag-security");

const { submitCustomerSupport } = require("../labs/Ai/customer-support");
const { submitSystemPromptLeak } = require("../labs/Ai/system-prompt-leak");
const { submitIndirectInjection } = require("../labs/Ai/indirect-injection");
const { submitToolAbuse } = require("../labs/Ai/tool-abuse");
const { submitGuardrailBypass } = require("../labs/Ai/guardrail-bypass");
const { submitMultiTurnJailbreak } = require("../labs/Ai/multi-turn-jailbreak");


// === REDTEAM === //

const { submitWebRedTeam } = require("../labs/redteam/web-redteam");
const { submitNetworkPentesting } = require("../labs/redteam/network-pentesting");
const { submitSystemHacking } = require("../labs/redteam/system-hacking");
const { submitSocialEngineering } = require("../labs/redteam/social-engineering");
const { submitReverseEngineering } = require("../labs/redteam/reverse-engineering");


// ← add this

router.post("/:category/:lab/:level/submit", labAuth, async (req, res) => {  try {
    const { category, lab, level } = req.params;
    const { payload } = req.body;

    if (!payload || typeof payload !== "string") {
      return res.status(400).json({
        success: false,
        message: "Payload is required",
      });
    }

    // ===== MOBILE =====
    if (category === "mobile") {
      let result;
      if (lab === "android") result = submitAndroid(level, payload);
      else if (lab === "ios") result = submitiOS(level, payload);
      else if (lab === "apk") result = submitAPK(level, payload);
      else return res.status(404).json({ success: false, message: "Lab not found" });
      return res.json(result);
    }

    // ===== CLOUD =====
    if (category === "cloud") {
      let result;
      if (lab === "aws") result = submitAWS(level, payload);
      else if (lab === "azure") result = submitAzure(level, payload);
      else if (lab === "gcp") result = submitGCP(level, payload);
      else return res.status(404).json({ success: false, message: "Lab not found" });
      return res.json(result);
    }

    // ===== WEB =====
    if (category === "web") {
      let result;
      if (lab === "csrf") result = submitCSRF(level, payload);
      else if (lab === "xss") result = submitXSS(level, payload);
      else if (lab === "sqli") result = submitSQLi(level, payload);
      else if (lab === "xxe") result = submitXXE(level, payload);
      else if (lab === "ssrf") result = submitSSRF(level, payload);
      else if (lab === "idor") result = submitIDOR(level, payload);
      else if (lab === "fileupload") result = submitFileUpload(level, payload);
      else return res.status(404).json({ success: false, message: "Lab not found" });
      return res.json(result);
    }



  


  // ===== AI =====
if (category === "ai") {
  let result;

  if (lab === "prompt-injection") {
    result = await submitPromptInjection(level, payload);
  }

  else if (lab === "llm-jailbreak") {
    result = await submitLLMJailbreak(level, payload);
  }

  else if (lab === "rag-security") {
    result = await submitRAGSecurity(level, payload);
  }

  else if (lab === "customer-support") {
    result = await submitCustomerSupport(
      level,
      payload,
      req.body.apiKey
    );
  }
  // AI section ke andar
else if (lab === "system-prompt-leak") {
  result = await submitSystemPromptLeak(level, payload, req.body.apiKey);
}else if (lab === "indirect-injection") {
    result = await submitIndirectInjection(level, payload, req.body.apiKey);
  }else if (lab === "tool-abuse") {
    result = await submitToolAbuse(level, payload, req.body.apiKey);
  }else if (lab === "guardrail-bypass") {
    result = await submitGuardrailBypass(level, payload, req.body.apiKey);
  }else if (lab === "multi-turn-jailbreak") {
  result = await submitMultiTurnJailbreak(
    level,
    payload,
    req.body.apiKey,
    req.body.history || []
  );
}

  else {
    return res.status(404).json({
      success: false,
      message: "Lab not found",
    });
  }

  return res.json(result);
}

// ===== REDTEAM =====
  if (category === "redteam") {
    let result;

    if (lab === "web-redteam") {
      result = submitWebRedTeam(level, payload);
    } else if (lab === "network-pentesting") {
      result = submitNetworkPentesting(level, payload);
    } else if (lab === "system-hacking") {
      result = submitSystemHacking(level, payload);
    } else if (lab === "social-engineering") {
      result = submitSocialEngineering(level, payload);
    } else if (lab === "reverse-engineering") {
      result = submitReverseEngineering(level, payload);
    } else {
      return res.status(404).json({
        success: false,
        message: "Lab not found",
      });
    }

    return res.json(result);
  }


    // Unknown category
    return res.status(404).json({ success: false, message: "Category not found" });
  } catch (err) {
    console.error("Lab submit error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;