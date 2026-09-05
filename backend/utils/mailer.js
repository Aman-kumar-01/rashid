const { Resend } = require("resend");

if (!process.env.RESEND_API_KEY) {
  console.warn("⚠️ RESEND_API_KEY is missing");
}

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";


// ======================================================
// SEND OTP EMAIL
// ======================================================

async function sendOTPEmail(to, otp, type = "verification") {
  let subject = "KHAN SPLOIT Verification Code";
  let title = "Verify Your Account";
  let message = "Use this OTP to verify your KHAN SPLOIT account.";

  if (type === "login") {
    subject = "KHAN SPLOIT Login OTP";
    title = "Login Verification";
    message = "Use this OTP to complete your login.";
  }

  if (type === "reset") {
    subject = "KHAN SPLOIT Password Reset OTP";
    title = "Reset Your Password";
    message = "Use this OTP to reset your KHAN SPLOIT password.";
  }

  const { data, error } = await resend.emails.send({
    from: `KHAN SPLOIT <${FROM_EMAIL}>`,
    to: [to],
    subject,
    html: `
      <!DOCTYPE html>
      <html>
        <body style="
          margin:0;
          padding:0;
          background:#08030f;
          font-family:Arial,sans-serif;
        ">

          <div style="
            max-width:520px;
            margin:40px auto;
            padding:30px;
            background:#12091f;
            border:1px solid #6d28d9;
            border-radius:14px;
            color:#ffffff;
          ">

            <h1 style="
              color:#a855f7;
              text-align:center;
              margin-bottom:10px;
            ">
              KHAN SPLOIT
            </h1>

            <h2 style="
              text-align:center;
              color:#ffffff;
            ">
              ${title}
            </h2>

            <p style="
              color:#c4b5fd;
              text-align:center;
              line-height:1.6;
            ">
              ${message}
            </p>

            <div style="
              margin:30px auto;
              padding:20px;
              background:#090510;
              border:1px solid #7c3aed;
              border-radius:10px;
              text-align:center;
            ">

              <div style="
                font-size:34px;
                font-weight:bold;
                letter-spacing:10px;
                color:#c084fc;
              ">
                ${otp}
              </div>

            </div>

            <p style="
              color:#a78bfa;
              text-align:center;
              font-size:14px;
            ">
              This OTP expires in 10 minutes.
            </p>

            <p style="
              color:#6b7280;
              text-align:center;
              font-size:12px;
              margin-top:30px;
            ">
              If you did not request this code, you can safely ignore
              this email.
            </p>

          </div>

        </body>
      </html>
    `,
  });

  if (error) {
    console.error("❌ Resend email error:", error);
    throw new Error(error.message || "Unable to send email");
  }

  console.log("✅ OTP email sent:", data.id);

  return data;
}


// ======================================================
// TEST EMAIL
// ======================================================

async function sendTestEmail(to) {
  const { data, error } = await resend.emails.send({
    from: `KHAN SPLOIT <${FROM_EMAIL}>`,
    to: [to],
    subject: "KHAN SPLOIT Email Test",
    html: `
      <h1>KHAN SPLOIT</h1>
      <p>Resend email configuration is working successfully.</p>
    `,
  });

  if (error) {
    console.error("❌ Resend test error:", error);
    throw new Error(error.message || "Unable to send test email");
  }

  console.log("✅ Test email sent:", data.id);

  return data;
}


module.exports = {
  sendOTPEmail,
  sendTestEmail,
};