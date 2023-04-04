const express = require("express");
const userRouter = require("./routes/users.route");
const app = express();

  app.use(userRouter);

app.use("/api/user", userRouter);

app.use("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/register", (req, res) => {
  res.statusCode = 300;
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/register", (req, res) => {
  res.status(200).json({
    message: "i'm register Page",
    statusCode: 200,
  });
  res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.send("i am get request at login router ");
  res.cookie("Name ", "Mamun Ar Rashid");
  res.cookie("age", "24");
  res.end();
});

app.use((req, res) => {
  res.send(" <h1>404  Page not a valid url </h1> ");
});

module.exports = app;
