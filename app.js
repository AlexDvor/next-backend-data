const express = require("express");
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const mayoralRouter = require("./routes/api/mayoral");
const dataRouter = require("./routes/api/items");
const cvRouter = require("./routes/api/cv");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/mayoral", mayoralRouter);
app.use("/api/data", dataRouter);
app.use("/api/cv", cvRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server Error" } = err;
  res.status(status).json({ message: err.message });
});

module.exports = app;
