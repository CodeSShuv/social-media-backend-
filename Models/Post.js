const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    desc: {
        type: String,
        required: true,
        maxlength: 500
    },
    img: {
        type: String,
        default: ""
    },
    likes: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        default: []
    }
}, { timestamps: true });
const Post = mongoose.model("Post", postSchema);
module.exports = Post;