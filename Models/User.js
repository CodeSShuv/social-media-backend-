const mongoose = require('mongoose');
const userScheama = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 50
    },
    username: {
        type: String,
        required: true,
        unique: true,
        maxlength: 30
    },
    age:{
        tyepe: Number,
        required: true,
        min: 18,
    },
    bio: {
        type: String,
        required: true,
        default: "Hello, I'm new here!",
        maxlength: 50
    },
    gender: 
    {
        type: String,
        required:true,

    },
    profilePicture: {
        type: String,
        default: "https://example.com/default-profile.png"
    },
    followers: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        default: []
    },
    following: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        default: []
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim:true,
        lowercase:true,    
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });


userScheama.virtual('posts', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'userId'
});
const User = mongoose.model('User', userScheama);
module.exports = User;