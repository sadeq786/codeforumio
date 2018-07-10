const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    
    text: {
        type: String,
        required: true
    },
    // stars: {
    //     type: Number,
    //     default: 0,
    //     required: true
    // },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;