const { JWT_SECRET } = require("../JWTSECRET.js");
const jwt = require("jsonwebtoken");
const User = require("../database/User");

 const usermiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: "Authorization header missing" });
    }

    const words = token.split(" ");
    const jwttoken = words[1];

    if (!jwttoken) {
      return res.status(401).json({ error: "JWT token missing" });
    }

    const decodedvalue = jwt.verify(jwttoken, JWT_SECRET);

    if (!decodedvalue ) {
      return res.status(401).json({ error: "Invalid OR WRONG  JWT token" });
    }

    req.user = await User.findById(decodedvalue._id);
    next();
  } catch (error) {
    return res.status(401).json({ error: "Not a good JWT token" });
  }
};
exports.usermiddleware = usermiddleware;