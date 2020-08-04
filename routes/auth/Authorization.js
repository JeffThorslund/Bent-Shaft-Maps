const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../../validation");

//CREATE USER
router.post("/register", async (req, res) => {
  //VALIDATE USER DATA
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //CHECK IS USER EXISTS IN DATABASE
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  //HASH PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //CREATE NEW USER
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send({ user });
  } catch (err) {
    res.status(400).send(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  //VALIDATE USER DATA
  const { error } = loginValidation(req.body);
  if (error) return res.status(401).send(error.details[0].message);

  //CHECK IS USER EXISTS IN DATABASE
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(401).send("Email does not exist.");

  //CHECK IF PASSWORD IS CORRECT
  console.log(req.body.password, user.password);
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(401).send("Incorrect password.");

  //CREATE TOKEN
  const token = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET);
  res.header("auth-token", token).status(200).send(user);
});

//VERIFY TOKEN
router.get("/verify", async (req, res) => {
  try {
    //DECODE JWT
    var decoded = jwt.verify(req.query.token, process.env.ACCESS_TOKEN_SECRET);

    //GET USER FROM _id
    const user = await User.findOne({ _id: decoded._id });

    //RESPOND
    return res.status(200).send(user);
  } catch (err) {
    //JWT COULD NOT BE DECODED
    return res.status(400).send(err);
  }
});

module.exports = router;
