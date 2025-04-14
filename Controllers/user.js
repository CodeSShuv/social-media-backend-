
const User = require("../Models/User");
const {generateHash, compareHash} = require("../services/generateHash");
const {createAToken} = require("../services/auth.js")

///handler for creating the user .
const handelUserRegister  = async  (req, res) => {
    const {firstName, lastName , age , email , userName, gender, password} = req.body;

    const  hashedPassword = await generateHash(password);

    const newUser = new User({
        firstName:firstName,
        lastName:lastName,
        age:age,
        email:email,
        userName: userName,
        gender:gender,
        password:hashedPassword
    });
    try{

        await newUser.save()
        res.json({newUser});
    }catch(error){
        res.json({msg:"Something went wrong"});
    }
}

// handler for logining the user ..


const handleUserLogin = async (req,res) =>{
    const {email, password} = req.body;
    
    try {
        const user =await  User.findOne({email: email});
 
        if(!user) res.status(404).json({msg:"user not found"})
        let result = await compareHash(password, user.password);
        if(result ){
           const token  =  createAToken({
                userName:user.userName,
                firstName:user.firstName,
                lastName:user.lastName,
                age:user.age,
                email:user.email,
            });
            res.status(200).cookie("token", token, {
              
            }).json({
                userName:user.userName,
                firstName:user.firstName,
                lastName:user.lastName,
                age:user.age,
                email:user.email,
            });
        }else{
            res.status(404).json({msg:"Invalid email or password"});
        }
    } catch (error) {
        res.status(500).json({msg:"Something went Wrong" });
    }
   

}

module.exports = {handelUserRegister, handleUserLogin}