const Post = require("../models/Post")
const Comment = require("../models/Comment")


module.exports = {

    createComment: async (req, res) => {
        try {
            await Comment.create({
                message: req.body.comment,
                likes: 0,
                post: req.params.id
            });
            console.log("Created comment");
            res.redirect(`/post/${req.params.id}`);
        } catch (err) {
            console.log(err);
        }
    }
}