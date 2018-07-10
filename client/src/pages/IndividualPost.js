import React, { Component } from "react";
import Post from "../components/Post";
import API from "../utils/API";
import Comment from "../components/Comments"

class IndividualPost extends Component {
    state = {
        post: [],
        myComment: ""

    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`${this.state.myComment}`);
        this.setState({
            myComment: ""
        });

        // Save this comment to the collection of Comments. 
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
        return (
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
                <div className="container">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-11">
                            <form>
                                <div className="form-group">
                                    <label>Comment</label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        value={this.state.myComment}
                                        name="myComment"
                                        onChange={this.handleInputChange}
                                        type="text"
                                    >
                                    </textarea>
                                    <button className="btn-primary mb-2" onClick={this.handleFormSubmit}>Post Comment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-11">
                            {
                                // load comments here.
                                // map thru comments collection to display each comment in a paragraph
                            }
                                <Comment 
                                
                                />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}



export default IndividualPost;