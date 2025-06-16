const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  //Step 1: Calculate the Token
  const token = req.cookies.token;

  // Step 2: If there is no Token User is not Logged in
  if (!token) {
    return res.json({ status: false });
  }

  //Step 3: Verify the token 
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } 
    else {
      const user = await User.findById(data.id)
      if (user) return res.json({ status: true, user: user.username })
      else return res.json({ status: false })
    }
  })
};
