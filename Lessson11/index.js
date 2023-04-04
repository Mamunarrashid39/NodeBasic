const express = require("express");
const app = express();
const PORT = 3000;

const myMiddelware = (req, res, next) => {
  console.log("middileware function");
  req.currentTime =new Date(Data.now());
  next();
};
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

app.get("/", myMiddelware, (req, res) => {
  console.log("i am a home." +req.currentTime);
  res.send("<h1>hello i am home router </h1>");
});
app.get("/about", myMiddelware, (req, res) => {
  console.log("i am a about." +req.currentTime);
  res.send("<h1>hello i am about route </h1>");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
