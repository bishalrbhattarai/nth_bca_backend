const verifyToken = (req, res, next) => {
  const token = req.body.token;
  if (token) {
    console.log(token);
    res.json({ message: "token is available", authentication: true });
  } else {
    res.json({ message: "token is not available", authentication: false });
  }
};
export default verifyToken;
