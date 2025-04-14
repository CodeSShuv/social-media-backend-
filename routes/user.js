const express = require('express');

const {handelUserRegister, handleUserLogin} = require("../Controllers/user.js")
const userRouter = express.Router();

userRouter.post('/register',handelUserRegister);
userRouter.post("/login", handleUserLogin);
module.exports = { userRouter}