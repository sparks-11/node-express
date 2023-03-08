const express = require("express");
const apiRouter = express();
const testRoute = require("./test.route");

apiRouter.use("/test", testRoute);

module.exports = apiRouter;
