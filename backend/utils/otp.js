const crypto = require("crypto");

const generateOTP = () => {
  return crypto
    .randomInt(100000, 1000000)
    .toString();
};

const hashOTP = (otp) => {
  return crypto
    .createHash("sha256")
    .update(otp)
    .digest("hex");
};

const verifyOTP = (otp, hashedOTP) => {
  const hash = hashOTP(otp);

  return crypto.timingSafeEqual(
    Buffer.from(hash),
    Buffer.from(hashedOTP)
  );
};

module.exports = {
  generateOTP,
  hashOTP,
  verifyOTP,
};