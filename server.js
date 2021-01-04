/*--Modules--*/
const compression = require("compression");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
require("dotenv").config();

/*--Import Routes--*/
const actions = require("./routes/api/Actions");
const authorization = require("./routes/auth/Authorization");

/*--Server--*/
const app = express();
const http = require("http").createServer(app);

/*--Middleware--*/
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

/*--Use Routes--*/
app.use("/api", actions);
app.use("/auth", authorization);

/*--Connect to Mongo--*/
const mongoURI = process.env.MONGO_URI;
if (mongoURI) {
	mongoose
		.connect(mongoURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log("MongoDB Connected"))
		.catch((err) => console.log(err));
} else {
	console.log(
		"\u001b[1;31m No connection string detected - using local data set"
	);
}
app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
http.listen(port);

console.log(`Server is started.`);
