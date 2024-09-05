// create express js server
const express = require("express");

const app = express();
const port = 3000;  

app.get("/", (req, res) => {
    res.send("Hello World!. Welcome to Tech365");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

