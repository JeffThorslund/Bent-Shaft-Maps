/*--Modules--*/
const compression = require("compression");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");

/*--Import Routes--*/
const handlers = require("./routes/api/Handlers");
const actions = require("./routes/api/Actions");

/*--Server--*/
const app = express();
const http = require("http").createServer(app);

/*--Middleware--*/
require("dotenv").config();
app.use(compression());
app.use(bodyParser.json({ limit: "50mb" }));

/*--Use Routes--*/
app.use("/api", handlers);
app.use("/api", actions);

/*--Connect to Mongo--*/
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/*--Socket--*/
var io = require("socket.io")(http);
io.on("connection", (socket) => {
  console.log("a user connected");
});

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
http.listen(port);

console.log(`Server is started baby!`);
