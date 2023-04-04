require("dotenv").config();
const express = require('express');
const app = express ();
const PORT = process.env.PORT || 3000;

app.get ("/" ,(req ,res) => {
  res.send("hello i am server");
});

app.listen(PORT, ( ) => {
  console.log(`sercer is running at http://localhost:${PORT}`);
});
