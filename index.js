const express = require('express');
const mongoose = require('mongoose');
const  connectToDb = require('./connectToDb');
const cors = require('cors');
// const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.post("/api/data", (req, res) => {
    res.json({ message: "Data received!" });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});