const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res, next) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    userID: req.body.userID,
  };
  //create token
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  //return token
  res.send(accessToken);
});

router.get("/authorize", checkToken, (req, res) => {
  //verify the JWT token generated for the user
  
  jwt.verify(
    req.token,
    process.env.ACCESS_TOKEN_SECRET,
    (err, authorizedData) => {
      if (err) {
        //If error send Forbidden (403)
        console.log("ERROR: Could not connect to the protected route");
        res.sendStatus(403);
      } else {
        //If token is successfully verified, we can send the autorized data
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
    console.log(bearer, token)
    req.token = token;
    next();
  } else {
    //If header is undefined return Forbidden (403)
    console.log("ERROR: checkToken could not verify.");
    res.sendStatus(403);
  }
}
