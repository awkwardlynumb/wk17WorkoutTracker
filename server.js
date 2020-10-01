const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const db = require("./models");
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", {
  useNewUrlParser: true,
});

//need routes to display html pages
app.get("/", res => {
  res.sendFile("index.html")
})

app.get("/stats", res => {
  res.sendFile("stats.html")
})

app.get("/excercise", res => {
  res.sendFile("excercise.html")
})

//routes to interact with API and make the app work

app.get("/excercise?")

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`)
})


