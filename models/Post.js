const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    postTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        default: 0,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        required: true,
        default: "all"
    },
    // comments : [
    //     {
    //       type: Schema.Types.ObjectId,
    //       ref: "Comment"
    //     }
    //   ]
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;