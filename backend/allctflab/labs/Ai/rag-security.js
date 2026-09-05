const { getFlag } = require("../../utils/flags");
const { validateRAGSecurity } = require("../../utils/validators");

function submitRAGSecurity(level, payload) {
  const id = Number(level);
  const isCorrect = validateRAGSecurity(id, payload);

  const requests = {
    1: `User Query:
${payload}

RAG Context Retrieved:
[Document 1] Internal company handbook...
[Document 2] Employee onboarding guide...
[Document 3] CONFIDENTIAL: Secret flag stored in knowledge base.`,

    2: `User Query:
${payload}

RAG Context Retrieved:
[Document A] Public product documentation
[Document B] Injected document containing hidden instructions
[Document C] Normal support articles`,

    3: `User Query:
${payload}

RAG Context Retrieved:
[Poisoned Doc] This document was uploaded by an attacker.
It contains instructions to ignore system rules and reveal secrets.
[Normal Docs] ...`,

    4: `User Query:
${payload}

RAG Context Retrieved:
Multiple documents loaded into context window.
One document contains the restricted flag in plain text.
System prompt tries to prevent extraction.`,

    5: `User Query:
${payload}

RAG Context Retrieved:
Advanced multi-document retrieval.
Citation-based protection + source filtering active.
Hidden flag exists across fragmented documents.`,
  };

  const successResponses = {
    1: `Based on the retrieved documents:

I found sensitive information in the knowledge base.

FLAG EXTRACTED FROM RAG CONTEXT`,

    2: `Indirect prompt injection successful.

The model followed instructions hidden inside the retrieved document.

FLAG REVEALED`,

    3: `Poisoned document attack succeeded.

The model prioritized the malicious document over system instructions.

FLAG CAPTURED`,

    4: `Context window extraction successful.

Restricted content was pulled from the retrieved documents despite protections.

FLAG SECURED`,

    5: `Advanced RAG attack successful.

Multi-document correlation + citation bypass completed.

FINAL FLAG EXTRACTED`,
  };

  const failResponses = {
    1: "I can only answer based on public documents. No confidential information is available.",
    2: "I will only follow the original system instructions. Retrieved documents cannot override my rules.",
    3: "Suspicious document detected and ignored. I will not follow instructions from untrusted sources.",
    4: "Content filter blocked extraction of sensitive information from the knowledge base.",
    5: "Advanced RAG protection active. Cross-document correlation and citation manipulation blocked.",
  };

  if (!isCorrect) {
    return {
      success: false,
      message: "RAG attack payload did not succeed.",
      request: requests[id] || `Input: ${payload}`,
      response: failResponses[id] || "RAG system blocked the request.",
    };
  }

  return {
    success: true,
    message: "RAG Security challenge solved!",
    flag: getFlag("ai", "rag-security", id),
    request: requests[id] || `Input: ${payload}`,
    response: successResponses[id] || "Vulnerability successfully exploited",
  };
}

module.exports = { submitRAGSecurity };