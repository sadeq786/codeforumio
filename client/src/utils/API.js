import axios from "axios";

export default {
    // Get posts from the /api/posts route on the express server
    getPosts: function () {
        return axios.get("/api/posts");
    },

    // Create a post by making a POST request to /api/post route on the express server
    createNewPost: function (newPost) {
        return axios.post("/api/post", newPost);
    },

    // Edit/update route

    // Delete route

    // Get Individual Post
    getIndividualPost: function (id) {
        return axios.get("/api/posts/" + id)
    },

    // Get comments from the "/api/comments" route on the express server
    getComments: function (id) {
        return axios.get("/api/comments/" + id);
    },

    // Text is an object here
    submitComment: function (text) {
        return axios.post("/api/postComment", text);
    },


}