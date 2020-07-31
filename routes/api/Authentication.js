const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Authorization = require("../../modules/Authorization");

//Create Web Token on Authentication an Return to Front End
router.post("/login", (req, res, next) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    userID: req.body.userID,
  };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.send(accessToken);
});

//Authorize Token
router.get("/authorize", checkToken, (req, res) => {
  jwt.verify(
    req.token,
    process.env.ACCESS_TOKEN_SECRET,
    async (err, authorizedData) => {
      //Token could not be verified
      if (err) {
        console.log("ERROR: Could not connect to the protected route");
        res.sendStatus(403);
      } else {
        Authorization(authorizedData);
        res.json({
          message: "Successful log in",
          authorizedData,
        });

        console.log("SUCCESS: Connected to protected route");
      }
    }
  );
});

module.exports = router;

function checkToken(req, res, next) {
  const header = req.headers["authorization"];
  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    //If header is undefined return Forbidden (403)
    console.log("ERROR: checkToken could not verify.");
    res.sendStatus(403);
  }
}
