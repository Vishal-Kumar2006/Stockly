const User = require("../model/UserModel");
const { createSecretToken } = require("../Utils/SecretToken");
const bcrypt = require("bcryptjs");

const SignUp = async (req, res, next) => {
  try {

    // Step 1: Check if anything is missing from {email, password, userName}
    const { email, password, username, createdAt } = req.body;
    if (!email || !password|| !username) {
      return res.json({ message: "All fields are required" });
    }

    // Step 2: Check if is user already exist witn this email   
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    // Step 3: Craete a new user with the given values
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);

    // Step 4: Genrate token for user 
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    // Step 5: Send status 201 for frontend 
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

const Login = async (req, res, next) => {
  try {
    // Step 1: Check if both Email and Possward is given
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }

    // Step 2: Find the user with the given email
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }

    // Step 3: Verify the password
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }

    // Step 4: Geneate Token for user with that Email
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    // Step 5: Send Response to Frontend
    res.status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = { SignUp, Login};
