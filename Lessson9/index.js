const express = require ("express");
const app = express ();
const PORT = 3001;

app.get("/", (req , res) => {
 const {id,name} = req.query;
    res.send(`<h1>Student id is:${name}, id is :${id}</h1>`);
});

app.listen(PORT, () => {
    console.log (`server is running at http://localhost:${PORT}`);

});