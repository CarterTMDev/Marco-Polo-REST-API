require('dotenv').config();
const express = require('express');

const app = express();

app.get("/marco", (req, res) => {
    res.send("Polo");
});

app.listen(process.env.PORT || 3000, () => console.log("Server online"));