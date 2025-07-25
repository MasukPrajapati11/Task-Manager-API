const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send("User route is working");
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).send({ user, message: "User registered successfully" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET_KEY
    );
    res.send({ user, token, message: "Login successful" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

//register a new user
//login a user

module.exports = router;
