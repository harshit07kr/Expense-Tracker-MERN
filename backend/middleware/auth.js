const jwt = require("jsonwebtoken");
const User = require("../models/usermodel");

async function requireAuth(req, res, next) {
  try {
    // Read token off cookies
    const token = req.cookies.Authorization;

    // Decode the token
    const decoded = jwt.verify(token, process.env.SECRET);

    // Check expiration
    if (Date.now() > decoded.exp * 1000) return res.sendStatus(401);

    // Find user using decoded sub
    const user = await User.findById(decoded.sub);
    if (!user) return res.sendStatus(401);

    // attach user to req
    req.user = user;

    // continue on
    next();
  } catch (err) {
    console.error('Authentication error:', err);
    return res.sendStatus(401);
  }
  
}

module.exports = requireAuth;