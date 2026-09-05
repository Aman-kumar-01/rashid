const { getFlag } = require("../../utils/flags");
const { validateXXE } = require("../../utils/validators");

function submitXXE(level, payload) {
  const id = Number(level);
  const isCorrect = validateXXE(id, payload);

  const requests = {
    1: `POST /upload-xml HTTP/1.1
Content-Type: application/xml

${payload.substring(0, 200)}`,
    2: `POST /parse HTTP/1.1
Content-Type: application/xml

${payload.substring(0, 200)}`,
    3: `POST /import HTTP/1.1
Content-Type: application/xml

${payload.substring(0, 200)}`,
    4: `POST /blind-xxe HTTP/1.1
Content-Type: application/xml

${payload.substring(0, 200)}`,
    5: `POST /filtered-xml HTTP/1.1
Content-Type: application/xml

${payload.substring(0, 200)}`,
  };

  const successResponses = {
    1: `HTTP/1.1 200 OK
XXE triggered. External entity resolved.`,
    2: `HTTP/1.1 200 OK
File contents returned via XXE (e.g. /etc/passwd).`,
    3: `HTTP/1.1 200 OK
SSRF via XXE — internal resource fetched.`,
    4: `HTTP/1.1 200 OK
Blind XXE — out-of-band interaction detected.`,
    5: `HTTP/1.1 200 OK
Filter bypassed. XXE still executed.`,
  };

  const failResponses = {
    1: `HTTP/1.1 400 Bad Request\nInvalid XML`,
    2: `HTTP/1.1 403 Forbidden\nExternal entities disabled`,
    3: `HTTP/1.1 400 Bad Request`,
    4: `HTTP/1.1 200 OK\nNo OOB interaction`,
    5: `HTTP/1.1 403 Forbidden\nBlocked by filter`,
  };

  if (!isCorrect) {
    return {
      success: false,
      message: "Payload did not trigger XXE.",
      request: requests[id] || `Payload: ${payload.substring(0, 100)}`,
      response: failResponses[id] || "No vulnerability triggered",
    };
  }

  return {
    success: true,
    message: "Challenge solved successfully!",
    flag: getFlag("web", "xxe", id),
    request: requests[id] || `Payload: ${payload.substring(0, 100)}`,
    response: successResponses[id] || "XXE successful",
  };
}

module.exports = { submitXXE };