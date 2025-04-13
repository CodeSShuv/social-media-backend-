
const User = require("../Models/User");
const generateHash = require("../services/generateHash");

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
module.exports = {handelUserRegister}