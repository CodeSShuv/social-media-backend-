const express = require('express');

const connectToDb = require('./connectToDb');
const {userRouter} = require("./routes/user.js")
const {loggedInUserOnly}  = require("./middlewares/loggedInUserOnly.js");
const {postRouter} = require("./routes/post.js");

const cors = require('cors');
// const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectToDb();
// app.use(cors());
app.use('/user', userRouter)

app.use("/post",loggedInUserOnly,postRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});