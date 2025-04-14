const { hash, compare } = require("bcryptjs");

const generateHash  = async (password) => {
 
    try {
        const hashedPassword = await hash(password, 10);
        return hashedPassword;
    } catch (error) {
        console.error("Error hashing text:", error);
        throw error;
    }
}

const compareHash = async(password, hashedPassword)=>{
    const value = await compare(password , hashedPassword);
    return value;
}
module.exports = {generateHash, compareHash};