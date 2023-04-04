const express = require("express");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("<h1> <center> calling from  router home page</center> </h1> ");
// });

router.get("/about", (req, res) => {
  res.send("i am get request at about router ");
});

// router.get("/register", (req, res) => {
//   res.send("<h1>Hello i'm from register </h1> ");
// });

module.exports = router;
