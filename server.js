const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./models");
const PORT = process.env.PORT || 3001;
const app = express();
const {ObjectId} = require('mongodb');
// Configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ROUTES

// Get route that retrieves all the posts from Post collection in the Mongo database
app.get("/api/posts", (req, res) => {
  console.log('=========================================================================');
  console.log("LATEST POSTS: Get route that retrieves all the posts from Post collection");
  db.Post.find({})
    .then(results => res.json(results))
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
});

// Post route that adds a new post to the Post collection
// Not used yet. Will be used for adding new post. 
app.post("/api/post", (req, res) => {
  console.log('=========================================================================');
  console.log("=================== SUBMIT NEW POST =====================================");
  const newPost = {
    postTitle: req.body.postTitle,
    description: req.body.description,
    // stars: req.body.stars,
    // category: req.body.category,
    // comments: req.body.comments
  };
  console.log('newPost to be submitted: ');
  console.log(newPost);
  db.Post.create(newPost)
    .then(results => {
      console.log('The following are results from the newPost submission: ');
      console.log(results);
      res.json(results)
    })
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
});

// Get an individual post by id 
app.get("/api/posts/:id", (req, res) => {
  console.log('=========================================================================');
  console.log("INDIVIDUAL POST: Get route. REQ.PARAMS.ID : ", req.params.id);
  db.Post.findById(req.params.id)
    // ******* does this populate work? **********
    // .populate("comments")
    .then(results => {
      console.log("Results._id for individual post: ", results._id);
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
});

// Get route that retrieves all the comments from Comment collection in the Mongo database
app.get("/api/comments/:id", (req, res) => {
  console.log('=========================================================================');
  console.log("Get route that retrieves all the comments from Comment collection");
  console.log("Req.params.id to pull comments belonging to particular post: ", req.params.id);
  console.log("req.params.id : ", req.params.id);
  db.Comment.find({ "postId": ObjectId(req.params.id) })
    // .populate("postId")
    .then(results => {
      console.log("COMMENTS belonging to this post: ");
      console.log(results);
      res.json(results)
    })
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
});

// Post route that adds a new comment to the Comment collection
app.post("/api/postComment", (req, res) => {
  console.log('=========================================================================');
  // console.log("=================req.body=====================", req.body);
  console.log("=================req.body.myComment===========", req.body.myComment);

  const newComment = {
    text: req.body.myComment,   
    postId: req.body.uniqueId
  };
  console.log("Preparing to post the following comment");
  console.log(newComment);
  db.Comment.create(newComment)
    .then(results => {
      console.log("NewComment that was just submitted");  
      console.log('==========results from comment POST route ===========');
      console.log(results);
      res.json(results)
    })
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
});

// Route for updating an Post's associated Comment
app.put("/comments/:id", function(req, res) {
  // Create a new note and pass the req.body to the entry
  db.Comment.findOneAndUpdate({ _id: req.params.id }, req.body , { new: true })
    .then(function(dbPost) {
      // If we were able to successfully update an Post, send it back to the client
      res.json(dbPost);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Route for deleting an Post's associated Comment
app.delete("/comments/:id", function(req, res) {
  // Create a new note and pass the req.body to the entry
  db.Comment.findById({ _id: req.params.id })
    .then(dbComment => dbComment.remove())
    .then(function(dbPost) {
      // If we were able to successfully update an Post, send it back to the client
      res.json(dbPost);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to Mongoose production mongo database
mongoose.connect(process.env.MONGODB_URL || "mongodb://prod:prod123@ds213199.mlab.com:13199/heroku_7f7chzrm");

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
