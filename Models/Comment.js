const mongoose = require('mongoose');
const commentScheama = new mongoose.Schema({
    postId: {type: mongoose.Schema.Types.ObjectId ,ref: "Post" },
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    content: {type:String, required:true},
    likes: {
        type: [{type:mongoose.Schema.Types.ObjectId, ref: "User"}],
        default:[]
}
});
const Comment = mongoose.model("Post", commentScheama);
module.exports = Comment;