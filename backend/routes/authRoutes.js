const express = require("express");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

/*
========================================================
CONFIG
========================================================
*/

const OTP_EXPIRY_MINUTES = 10;
const MAX_OTP_ATTEMPTS = 5;
const JWT_EXPIRES_IN = "7d";

const RESEND_API_URL = "https://api.resend.com/emails";

const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ||
  "onboarding@resend.dev";

/*
========================================================
HELPERS
========================================================
*/

// Normalize email
function normalizeEmail(email) {
  return String(email || "")
    .trim()
    .toLowerCase();
}

// Generate secure 6 digit OTP
function generateOTP() {
  return crypto
    .randomInt(100000, 1000000)
    .toString();
}

// Hash OTP before storing in MongoDB
function hashOTP(otp) {
  return crypto
    .createHash("sha256")
    .update(String(otp))
    .digest("hex");
}

// OTP expiry
function getOTPExpiry() {
  return new Date(
    Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000
  );
}

// Safe OTP comparison
function verifyOTP(inputOTP, storedHash) {
  if (!inputOTP || !storedHash) {
    return false;
  }

  const inputHash = hashOTP(inputOTP);

  return crypto.timingSafeEqual(
    Buffer.from(inputHash, "hex"),
    Buffer.from(storedHash, "hex")
  );
}

// JWT
function createToken(user) {
  return jwt.sign(
    {
      id: user._id.toString(),
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: JWT_EXPIRES_IN,
    }
  );
}

// Remove sensitive fields
function publicUser(user) {
  return {
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    isVerified: user.isVerified,
  };
}

/*
========================================================
RESEND EMAIL
========================================================
*/
async function sendEmail({
  to,
  subject,
  html,
  otp,
}) {
  // ==========================================
  // LOCAL DEVELOPMENT
  // ==========================================
  if (
    process.env.NODE_ENV === "development" &&
    process.env.DEV_OTP_MODE === "true"
  ) {
    console.log("");
    console.log("======================================");
    console.log("🔐 KHAN SPLOIT LOCAL OTP");
    console.log("======================================");
    console.log("📧 Email :", to);
    console.log("🔑 OTP   :", otp);
    console.log("⏳ Expires:", OTP_EXPIRY_MINUTES, "minutes");
    console.log("======================================");
    console.log("");

    return {
      success: true,
      development: true,
    };
  }

  // ==========================================
  // PRODUCTION - RESEND
  // ==========================================
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is missing");
  }

  const response = await fetch(
    RESEND_API_URL,
    {
      method: "POST",

      headers: {
        Authorization:
          `Bearer ${process.env.RESEND_API_KEY}`,

        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [to],
        subject,
        html,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("Resend API error:", data);

    throw new Error(
      data?.message ||
      "Email service failed"
    );
  }

  console.log("✅ Email sent:", to);

  return {
    success: true,
    data,
  };
}
/*
========================================================
OTP EMAIL
========================================================
*/

async function sendOTPEmail(
  email,
  otp,
  type
) {
  let subject = "";
  let title = "";

  if (type === "signup") {
    subject =
      "KHAN SPLOIT - Verify your account";

    title =
      "Verify your KHAN SPLOIT account";
  }

  if (type === "login") {
    subject =
      "KHAN SPLOIT - Login verification code";

    title =
      "Login verification code";
  }

  if (type === "forgot") {
    subject =
      "KHAN SPLOIT - Password reset code";

    title =
      "Password reset verification";
  }

  const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${subject}</title>
</head>

<body style="
  margin:0;
  padding:0;
  background:#08050f;
  font-family:Arial,sans-serif;
">

<div style="
  max-width:600px;
  margin:40px auto;
  padding:30px;
  background:#120b22;
  border:1px solid #6d28d9;
  border-radius:12px;
  color:#ffffff;
">

  <h1 style="
    color:#a855f7;
    margin-bottom:10px;
  ">
    KHAN SPLOIT
  </h1>

  <h2>
    ${title}
  </h2>

  <p style="color:#c4b5fd;">
    Your verification code is:
  </p>

  <div style="
    margin:25px 0;
    padding:20px;
    text-align:center;
    background:#0b0714;
    border-radius:10px;
    border:1px solid #7c3aed;
  ">

    <span style="
      font-size:36px;
      font-weight:bold;
      letter-spacing:10px;
      color:#c084fc;
    ">
      ${otp}
    </span>

  </div>

  <p style="color:#aaa;">
    This OTP expires in
    <strong>${OTP_EXPIRY_MINUTES} minutes</strong>.
  </p>

  <p style="color:#aaa;">
    Never share this verification code with anyone.
  </p>

  <hr style="
    border:0;
    border-top:1px solid #302044;
  ">

  <p style="
    color:#777;
    font-size:12px;
  ">
    This is an automated message from KHAN SPLOIT.
  </p>

</div>

</body>
</html>
`;

  return sendEmail({
    to: email,
    subject,
    html,
    otp,
  });
}

/*
========================================================
1. SIGNUP
========================================================
*/

router.post(
  "/signup",
  async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
      } = req.body;

      if (
        !firstName ||
        !lastName ||
        !email ||
        !password
      ) {
        return res.status(400).json({
          success: false,
          message:
            "All fields are required",
        });
      }

      if (password.length < 8) {
        return res.status(400).json({
          success: false,
          message:
            "Password must be at least 8 characters",
        });
      }

      const normalizedEmail =
        normalizeEmail(email);

      let user = await User.findOne({
        email: normalizedEmail,
      });

      // Already verified
      if (user && user.isVerified) {
        return res.status(409).json({
          success: false,
          message:
            "Email already registered",
        });
      }

      const otp = generateOTP();
      const otpHash = hashOTP(otp);
      const expires = getOTPExpiry();

      const hashedPassword =
        await bcrypt.hash(
          password,
          12
        );

      // Existing unverified account
      if (user) {
        user.firstName =
          firstName.trim();

        user.lastName =
          lastName.trim();

        user.password =
          hashedPassword;

        user.verificationOtpHash =
          otpHash;

        user.verificationOtpExpires =
          expires;

        user.verificationOtpAttempts =
          0;

        await user.save();
      }

      // New account
      else {
        user =
          await User.create({
            firstName:
              firstName.trim(),

            lastName:
              lastName.trim(),

            email:
              normalizedEmail,

            password:
              hashedPassword,

            isVerified:
              false,

            verificationOtpHash:
              otpHash,

            verificationOtpExpires:
              expires,

            verificationOtpAttempts:
              0,
          });
      }

      await sendOTPEmail(
        normalizedEmail,
        otp,
        "signup"
      );

      return res.status(201).json({
        success: true,
        message:
          "Verification OTP sent",
        email:
          normalizedEmail,
      });

    } catch (error) {
      console.error(
        "SIGNUP ERROR:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          "Unable to create account",
      });
    }
  }
);

/*
========================================================
2. VERIFY SIGNUP OTP
========================================================
*/

router.post(
  "/verify-signup-otp",
  async (req, res) => {
    try {
      const {
        email,
        otp,
      } = req.body;

      const normalizedEmail =
        normalizeEmail(email);

      if (
        !normalizedEmail ||
        !/^\d{6}$/.test(String(otp))
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Valid 6-digit OTP is required",
        });
      }

      const user =
        await User.findOne({
          email: normalizedEmail,
        });

      if (!user) {
        return res.status(404).json({
          success: false,
          message:
            "Invalid verification request",
        });
      }

      if (user.isVerified) {
        return res.status(400).json({
          success: false,
          message:
            "Account is already verified",
        });
      }

      if (
        !user.verificationOtpExpires ||
        user.verificationOtpExpires <
          new Date()
      ) {
        return res.status(400).json({
          success: false,
          message:
            "OTP has expired",
        });
      }

      if (
        user.verificationOtpAttempts >=
        MAX_OTP_ATTEMPTS
      ) {
        return res.status(429).json({
          success: false,
          message:
            "Too many OTP attempts. Request a new OTP.",
        });
      }

      const valid =
        verifyOTP(
          otp,
          user.verificationOtpHash
        );

      if (!valid) {
        user.verificationOtpAttempts += 1;

        await user.save();

        return res.status(400).json({
          success: false,
          message:
            "Invalid OTP",
        });
      }

      user.isVerified = true;

      user.verificationOtpHash =
        null;

      user.verificationOtpExpires =
        null;

      user.verificationOtpAttempts =
        0;

      await user.save();

      const token =
        createToken(user);

      return res.status(200).json({
        success: true,
        message:
          "Account verified successfully",
        user:
          publicUser(user),
        token,
      });

    } catch (error) {
      console.error(
        "VERIFY SIGNUP OTP ERROR:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          "Unable to verify OTP",
      });
    }
  }
);

/*
========================================================
3. NORMAL PASSWORD LOGIN
========================================================
*/

router.post(
  "/login",
  async (req, res) => {
    try {
      const {
        email,
        password,
      } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message:
            "Email and password are required",
        });
      }

      const normalizedEmail =
        normalizeEmail(email);

      const user =
        await User.findOne({
          email: normalizedEmail,
        });

      // Generic response
      if (!user) {
        return res.status(401).json({
          success: false,
          message:
            "Invalid email or password",
        });
      }

      if (!user.isVerified) {
        return res.status(403).json({
          success: false,
          message:
            "Please verify your email first",
        });
      }

      const validPassword =
        await bcrypt.compare(
          password,
          user.password
        );

      if (!validPassword) {
        return res.status(401).json({
          success: false,
          message:
            "Invalid email or password",
        });
      }

      const token =
        createToken(user);

      return res.status(200).json({
        success: true,
        message:
          "Login successful",
        user:
          publicUser(user),
        token,
      });

    } catch (error) {
      console.error(
        "LOGIN ERROR:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          "Unable to login",
      });
    }
  }
);

/*
========================================================
4. SEND LOGIN OTP
========================================================
*/

router.post(
  "/login/send-otp",
  async (req, res) => {
    try {
      const {
        email,
      } = req.body;

      const normalizedEmail =
        normalizeEmail(email);

      if (!normalizedEmail) {
        return res.status(400).json({
          success: false,
          message:
            "Email is required",
        });
      }

      const user =
        await User.findOne({
          email: normalizedEmail,
        });

      if (
        !user ||
        !user.isVerified
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Unable to send login OTP",
        });
      }

      const otp =
        generateOTP();

      user.loginOtpHash =
        hashOTP(otp);

      user.loginOtpExpires =
        getOTPExpiry();

      user.loginOtpAttempts =
        0;

      await user.save();

      await sendOTPEmail(
        normalizedEmail,
        otp,
        "login"
      );

      return res.status(200).json({
        success: true,
        message:
          "Login OTP sent",
      });

    } catch (error) {
      console.error(
        "LOGIN OTP ERROR:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          "Unable to send login OTP",
      });
    }
  }
);

/*
========================================================
5. VERIFY LOGIN OTP
========================================================
*/

router.post(
  "/login/verify-otp",
  async (req, res) => {
    try {
      const {
        email,
        otp,
      } = req.body;

      const normalizedEmail =
        normalizeEmail(email);

      if (
        !normalizedEmail ||
        !/^\d{6}$/.test(String(otp))
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Valid 6-digit OTP is required",
        });
      }

      const user =
        await User.findOne({
          email: normalizedEmail,
        });

      if (!user || !user.isVerified) {
        return res.status(401).json({
          success: false,
          message:
            "Invalid login request",
        });
      }

      if (
        !user.loginOtpExpires ||
        user.loginOtpExpires <
          new Date()
      ) {
        return res.status(400).json({
          success: false,
          message:
            "OTP has expired",
        });
      }

      if (
        user.loginOtpAttempts >=
        MAX_OTP_ATTEMPTS
      ) {
        return res.status(429).json({
          success: false,
          message:
            "Too many OTP attempts",
        });
      }

      const valid =
        verifyOTP(
          otp,
          user.loginOtpHash
        );

      if (!valid) {
        user.loginOtpAttempts += 1;

        await user.save();

        return res.status(400).json({
          success: false,
          message:
            "Invalid OTP",
        });
      }

      user.loginOtpHash =
        null;

      user.loginOtpExpires =
        null;

      user.loginOtpAttempts =
        0;

      await user.save();

      const token =
        createToken(user);

      return res.status(200).json({
        success: true,
        message:
          "OTP login successful",
        user:
          publicUser(user),
        token,
      });

    } catch (error) {
      console.error(
        "VERIFY LOGIN OTP ERROR:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          "Unable to verify login OTP",
      });
    }
  }
);

/*
========================================================
6. FORGOT PASSWORD
========================================================
*/

router.post(
  "/forgot-password",
  async (req, res) => {
    try {
      const {
        email,
      } = req.body;

      const normalizedEmail =
        normalizeEmail(email);

      if (!normalizedEmail) {
        return res.status(400).json({
          success: false,
          message:
            "Email is required",
        });
      }

      const user =
        await User.findOne({
          email: normalizedEmail,
        });

      /*
        Generic response prevents
        account enumeration.
      */

      if (!user) {
        return res.status(200).json({
          success: true,
          message:
            "If the email exists, a reset OTP has been sent",
        });
      }

      const otp =
        generateOTP();

      user.resetOtpHash =
        hashOTP(otp);

      user.resetOtpExpires =
        getOTPExpiry();

      user.resetOtpAttempts =
        0;

      await user.save();

      await sendOTPEmail(
        normalizedEmail,
        otp,
        "forgot"
      );

      return res.status(200).json({
        success: true,
        message:
          "If the email exists, a reset OTP has been sent",
      });

    } catch (error) {
      console.error(
        "FORGOT PASSWORD ERROR:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          "Unable to process password reset",
      });
    }
  }
);

/*
========================================================
7. VERIFY RESET OTP
========================================================
*/

router.post(
  "/verify-reset-otp",
  async (req, res) => {
    try {
      const {
        email,
        otp,
      } = req.body;

      const normalizedEmail =
        normalizeEmail(email);

      if (
        !normalizedEmail ||
        !/^\d{6}$/.test(String(otp))
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Valid 6-digit OTP is required",
        });
      }

      const user =
        await User.findOne({
          email: normalizedEmail,
        });

      if (!user) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid or expired OTP",
        });
      }

      if (
        !user.resetOtpExpires ||
        user.resetOtpExpires <
          new Date()
      ) {
        return res.status(400).json({
          success: false,
          message:
            "OTP has expired",
        });
      }

      if (
        user.resetOtpAttempts >=
        MAX_OTP_ATTEMPTS
      ) {
        return res.status(429).json({
          success: false,
          message:
            "Too many OTP attempts",
        });
      }

      const valid =
        verifyOTP(
          otp,
          user.resetOtpHash
        );

      if (!valid) {
        user.resetOtpAttempts += 1;

        await user.save();

        return res.status(400).json({
          success: false,
          message:
            "Invalid OTP",
        });
      }

      /*
        OTP is valid.
        Do not issue JWT here.
        Frontend proceeds to password reset.
      */

      user.resetOtpAttempts = 0;

      await user.save();

      return res.status(200).json({
        success: true,
        message:
          "OTP verified successfully",
      });

    } catch (error) {
      console.error(
        "VERIFY RESET OTP ERROR:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          "Unable to verify reset OTP",
      });
    }
  }
);

/*
========================================================
8. RESET PASSWORD
========================================================
*/

router.post(
  "/reset-password",
  async (req, res) => {
    try {
      const {
        email,
        otp,
        newPassword,
      } = req.body;

      const normalizedEmail =
        normalizeEmail(email);

      if (
        !normalizedEmail ||
        !otp ||
        !newPassword
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Email, OTP and new password are required",
        });
      }

      if (
        !/^\d{6}$/.test(String(otp))
      ) {
        return res.status(400).json({
          success: false,
          message:
            "OTP must be 6 digits",
        });
      }

      if (newPassword.length < 8) {
        return res.status(400).json({
          success: false,
          message:
            "Password must be at least 8 characters",
        });
      }

      const user =
        await User.findOne({
          email: normalizedEmail,
        });

      if (!user) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid password reset request",
        });
      }

      if (
        !user.resetOtpExpires ||
        user.resetOtpExpires <
          new Date()
      ) {
        return res.status(400).json({
          success: false,
          message:
            "OTP has expired",
        });
      }

      if (
        user.resetOtpAttempts >=
        MAX_OTP_ATTEMPTS
      ) {
        return res.status(429).json({
          success: false,
          message:
            "Too many OTP attempts",
        });
      }

      const valid =
        verifyOTP(
          otp,
          user.resetOtpHash
        );

      if (!valid) {
        user.resetOtpAttempts += 1;

        await user.save();

        return res.status(400).json({
          success: false,
          message:
            "Invalid OTP",
        });
      }

      const hashedPassword =
        await bcrypt.hash(
          newPassword,
          12
        );

      user.password =
        hashedPassword;

      // Clear reset OTP
      user.resetOtpHash =
        null;

      user.resetOtpExpires =
        null;

      user.resetOtpAttempts =
        0;

      await user.save();

      return res.status(200).json({
        success: true,
        message:
          "Password reset successfully",
      });

    } catch (error) {
      console.error(
        "RESET PASSWORD ERROR:",
        error
      );

      return res.status(500).json({
        success: false,
        message:
          "Unable to reset password",
      });
    }
  }
);

/*
========================================================
EXPORT
========================================================
*/

module.exports = router;