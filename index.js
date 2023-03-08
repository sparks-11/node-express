const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const apiRouter = require("./src/routes");
const { connectToDb } = require("./src/configs/db.config");
const app = express();
const port = process.env.PORT || 1337;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// establishing DB connection
connectToDb();
// syncDatabase();

// making Connection to pass every routes
// app.use(function (req, res, next) {
//   req.con = con;
//   next();
// });

app.use("/api", apiRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
