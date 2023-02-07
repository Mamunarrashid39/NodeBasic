const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  const id = req.header("id");
  const name = req.header("name");

  res.send(`<h1>Student id is : ${id}, name is : ${name}</h1>`);
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
