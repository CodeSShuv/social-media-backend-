const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const {handelUserRegister} = require("../Controllers/user.js")
const userRouter = express.Router();

userRouter.post('/register',handelUserRegister);

module.exports = { userRouter}