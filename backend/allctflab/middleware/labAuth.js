const jwt = require("jsonwebtoken");

// Optional: agar login required ho to use karo
// Abhi basic version — baad me strict bana sakte ho
const labAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    // Guest allow (PortSwigger jaisa — bina login bhi lab chal sakti hai)
    if (!token) {
      req.user = { id: "guest", role: "guest" };
      return next();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    // Invalid token → guest treat karo
    req.user = { id: "guest", role: "guest" };
    next();
  }
};

module.exports = labAuth;