const { hash } = require("bcryptjs");

const generateHash  = async (password) => {
 
    try {
        const hashedPassword = await hash(password, 10);
        return hashedPassword;
    } catch (error) {
        console.error("Error hashing text:", error);
        throw error;
    }
}
module.exports = generateHash;