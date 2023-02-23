const express = require("express");
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.post("/user", (req,res) =>{
//       const name = req.body.name;
//       const age = req.body.age;
//       res.send(`welcome ${name}.your are ${age}.`);
// });
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/register", (req, res) => {
  const fullName = req.body.fullName;
  const age = req.body.age;
  res.send(`<h2> Your name is ${fullName} and age is ${age} </h2>`);
});

app.post("/register", (req, res) => {
  res.sendFile();
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
