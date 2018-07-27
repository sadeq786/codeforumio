const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    
    text: {
        type: String,
        required: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        // required: true
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

// objective: create comments that belong to specific post

/* 
    1. Redefine comment Schema to require postId  check ✅
    2. Modify comment creation query to include postId
    3. Verify no errors by manually looking at db. 
    4. Write algorithm to render comments by postId
    5. Clear localStorage so it can work for the next query. 
*/