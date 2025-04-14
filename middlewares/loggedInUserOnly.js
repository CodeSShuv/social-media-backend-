const { verifyToken  } = require("../services/auth.js");


const loggedInUserOnly =  (req,res,next)=>{
    console.log(req.set-cookie);
    next()
}


module.exports = {loggedInUserOnly}
