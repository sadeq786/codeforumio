import axios from "axios";

export default {
    // Get posts from the /api/posts route on the express server
    getPosts: function () {
        return axios.get("/api/todos");
    },

    // Create a post by making a POST request to /api/post route on the express server
    createNewPost: function () {
        return axios.post("/api/post", "newPost");
    }
}