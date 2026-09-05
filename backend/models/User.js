const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    // Signup verification
    isVerified: {
      type: Boolean,
      default: false,
    },

    verificationOtpHash: {
      type: String,
      default: null,
    },

    verificationOtpExpires: {
      type: Date,
      default: null,
    },

    verificationOtpAttempts: {
      type: Number,
      default: 0,
    },

    // Login OTP
    loginOtpHash: {
      type: String,
      default: null,
    },

    loginOtpExpires: {
      type: Date,
      default: null,
    },

    loginOtpAttempts: {
      type: Number,
      default: 0,
    },

    // Forgot password OTP
    resetOtpHash: {
      type: String,
      default: null,
    },

    resetOtpExpires: {
      type: Date,
      default: null,
    },

    resetOtpAttempts: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);