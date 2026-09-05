const { getFlag } = require("../../utils/flags");
const { validateFileUpload } = require("../../utils/validators");

function submitFileUpload(level, payload) {
  const id = Number(level);
  const isCorrect = validateFileUpload(id, payload);

  const requests = {
    1: `POST /upload HTTP/1.1
Content-Type: multipart/form-data

filename=${payload.substring(0, 60)}`,
    2: `POST /upload HTTP/1.1
Content-Type: multipart/form-data

filename=${payload.substring(0, 60)}
# Blacklist bypass`,
    3: `POST /upload HTTP/1.1
Content-Type: multipart/form-data

filename=${payload.substring(0, 60)}
Content-Type: image/jpeg`,
    4: `POST /upload HTTP/1.1
Content-Type: multipart/form-data

filename=${payload.substring(0, 60)}
# Null byte / double extension`,
    5: `POST /upload HTTP/1.1
Content-Type: multipart/form-data

filename=${payload.substring(0, 60)}
# Advanced bypass`,
  };

  const successResponses = {
    1: `HTTP/1.1 200 OK
{"status":"uploaded","path":"/uploads/shell.php"}
Webshell uploaded.`,
    2: `HTTP/1.1 200 OK
Blacklist bypassed. File accepted.`,
    3: `HTTP/1.1 200 OK
MIME type check bypassed.`,
    4: `HTTP/1.1 200 OK
Null byte / double extension worked.`,
    5: `HTTP/1.1 200 OK
Advanced bypass successful. File executable.`,
  };

  const failResponses = {
    1: `HTTP/1.1 400 Bad Request\nInvalid file type`,
    2: `HTTP/1.1 400 Bad Request\nExtension blocked`,
    3: `HTTP/1.1 400 Bad Request\nMIME not allowed`,
    4: `HTTP/1.1 400 Bad Request`,
    5: `HTTP/1.1 403 Forbidden\nUpload blocked`,
  };

  if (!isCorrect) {
    return {
      success: false,
      message: "Payload did not bypass upload restrictions.",
      request: requests[id] || `Payload: ${payload.substring(0, 100)}`,
      response: failResponses[id] || "No vulnerability triggered",
    };
  }

  return {
    success: true,
    message: "Challenge solved successfully!",
    flag: getFlag("web", "fileupload", id),
    request: requests[id] || `Payload: ${payload.substring(0, 100)}`,
    response: successResponses[id] || "File upload successful",
  };
}

module.exports = { submitFileUpload };