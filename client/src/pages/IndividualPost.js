import React, { Component } from "react";
import Post from "../components/Post";
import API from "../utils/API";

class IndividualPost extends Component {
    state = {
        post: [],
       
    };


    componentDidMount() {
        const id = localStorage.getItem("postId");
        
        // console.log("props: ", props);
        console.log("local storage get item: ", id);
        API.getIndividualPost(id)
            .then(res => {
                console.log("results of api call: ", res.data);
                this.setState({ post: res.data })
            })
            .catch(err => console.log("hey this is the error: ", err));
    }

    render() {
        return(
            <div>
                {console.log("in individual post now")}
                {/* {console.log(results)} */}
                <Post 
                key={this.state.post._id}
                id={this.state.post._id}
                postTitle={this.state.post.postTitle}
                description={this.state.post.description}
                stars={this.state.post.stars}
                comments={this.state.post.comments}
                category={this.state.post.category}
                />
            </div>
        )
    }
}



export default IndividualPost;