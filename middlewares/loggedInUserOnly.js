const { verifyToken  } = require("../services/auth.js");


const loggedInUserOnly =  (req,res,next)=>{
    try{

        const cookie = (req.headers.cookie.split("=")[1])
        if(!cookie){
           
             
             return res.json({msg:"Please login"});  
            }
            // console.log(req.cookie)
            const result = verifyToken(cookie);
            // console.log(result)
            if(result){
                req.user = result;
                next()
                return 
            }
        
         return  res.status(404).json({msg:"user not found"});
    }catch{
        res.status(500).json({msg:"Internal server error. "});
    }
    
}


module.exports = {loggedInUserOnly}
