const Post  = require("../Models/Post.js");
const handelGetFeed = async (req,res)=>{
    try{
        console.log("Hello world");
        const page = parseInt(req.query.page) || 1;
        console.log(page);
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1 ) * limit;
        const result = await Post.find({})
        .sort({createdAt: -1})
        .skip(skip)
        .limit(limit);
        console.log(result);
        res.status(200).json({posts:result});
        
    }catch{

        res.status(500).json({msg:"Internal Server Error"});
    }

} 

const handelPostAPost= async(req,res)  => {
    const {content} = req.body;
    const userId = req.user.userId;
  
    
    try{
         const newPost =  new Post({userId: userId, content:content });
         
        await newPost.save();
        res.status(200).json({msg:"Uploaded"});
     }catch(e){
        console.log(e);
        res.status(500).json({msg:"Internal Server Error"});
    }
}




module.exports = {
    handelGetFeed,
    handelPostAPost
}