const {Router} = require("express");
const {handelGetFeed, handelPostAPost} = require("../Controllers/post.js")
// const {loggedInUserOnly} = require("../middlewares/loggedInUserOnly.js")
const postRouter = Router();
postRouter.get("/fetch",handelGetFeed  );
postRouter.post("/upload", handelPostAPost);
module.exports={postRouter}