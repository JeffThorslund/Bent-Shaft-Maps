/*--Modules--*/
const compression = require("compression");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
require("dotenv").config();

/*--Import Routes--*/
const actions = require("./routes/api/Actions");
const imageUpload = require("./routes/api/ImageUpload");
const authorization = require("./routes/auth/Authorization")

/*--Server--*/
const app = express();
const http = require("http").createServer(app);

/*--Middleware--*/
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

/*--Use Routes--*/
app.use("/api", actions);
app.use("/api", imageUpload);
app.use("/auth", authorization);

/*--Connect to Mongo--*/
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
http.listen(port);

console.log(`Server is started.`);
