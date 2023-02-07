const express = require ("express");
const app = express ();
const PORT = 3001;

app.get("/userId/:id/userAge/:age", (req , res) => {
    const id =req.params.id;
    const age =req.params.age;

    res.send(`<h1>Student id is : ${id}, age is : ${age}</h1>`);
});

app.listen(PORT, () => {
    console.log (`server is running at http://localhost:${PORT}`);

});