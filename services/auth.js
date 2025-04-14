const jwt = require("jsonwebtoken");
const SECRETE_KEY = "socialmediasite"
const createAToken  =   (user)=>{
    const token  =  jwt.sign(
       user,
       SECRETE_KEY,
       {expiresIn:"72h"}
    );
    return token;

}

const verifyToken = (token)=>{
    try{
        const decoded  = jwt.verify(token , SECRETE_KEY);
        return decoded;
    }catch(err){
        return false;
    }
}


module.exports  =  { createAToken , verifyToken};