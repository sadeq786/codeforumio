const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./models");
const PORT = process.env.PORT || 3001;
const app = express();

// Configure body parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ROUTES

// Get route that retrieves all the posts from Post collection in the Mongo database
app.get("/api/posts", (req, res) => {
  console.log("hit API get");
  db.Post.find({})
    .then(results => res.json(results))
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
  
});

// Post route that adds a new post to the Post collection
app.post("/api/post", (req, res) => {
  const newPost = {
    postTitle: req.body.postTitle,
    description: req.body.description,
    stars: req.body.stars,
    category: req.body.category,
    comments: req.body.comments
  };
  db.Post.create(newPost)
    .then(results => res.json(results))
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
});

// Get an individual post by id. not sure about this one. 
app.get("/api/posts/:id", (req, res) => {
  console.log("hit :id");
  db.Post.findById(req.params.id)
  .then(results => {
    console.log("results for individual post: ", results);
      res.json(results);
    })
    .catch(err => {
      console.log(err);
      res.status(422).json(err);
    });
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to Mongoose production mongo database
mongoose.connect(process.env.MONGODB_URL || "mongodb://prod:prod123@ds213199.mlab.com:13199/heroku_7f7chzrm");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
