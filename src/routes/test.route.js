const express = require("express");
const { getTasks, registerUser } = require("../controllers/test.controller");

const testRoute = express.Router();

testRoute.get("/", getTasks);
testRoute.post("/", registerUser);
// testRoute.patch("/");
// testRoute.delete("/");

module.exports = testRoute;
