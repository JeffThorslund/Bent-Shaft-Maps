const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../../validation");

//CREATE USER
router.post("/register", async (req, res) => {
  //Validate User Data
  const { error } = registerValidation(req.body);
  if (error) return res.send(error.details[0].message);

  //Check if user is in db
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.send("Email already exists");

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create New User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user.name });
  } catch (err) {
    res.send(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(401).send(error.details[0].message);

  //Check if user is in db
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(401).send("Email does not exist.");

  //PASSWORD IS CORRECT
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(401).send("Incorrect password.");

  //CREATE TOKEN
  const token = await jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET);
  res.header("auth-token", token).status(200).send("token header set")
});

module.exports = router;
