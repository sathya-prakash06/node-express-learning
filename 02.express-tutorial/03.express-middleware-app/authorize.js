const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "admin") {
    req.user = { name: "admin", id: 11 };
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authorize;
