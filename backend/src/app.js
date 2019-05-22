const express = require("express");
const mongoose = require("./db.js");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();

app.use(bodyParser.json());
app.use(logger("dev"));

//ROUTES
import { router } from "./config/routes";
app.use("/api", router);

//INVALID ROUTE MIDDLEWARE
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.message = "Invalid route";
  error.status = 404;
  next(error);
});

//ERROR HANDLING MIDDLEWARE
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message
    }
  });
});

//SERVER
app.listen(3000, () => console.log("server running on port: 3000"));
