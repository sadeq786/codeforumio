import React, { Component } from "react";
import API from "../utils/API";
import Post from "../components/Post"
import "./All.css";
import { Redirect } from 'react-router-dom';
import IndividualPost from "../pages/IndividualPost";
import { Link } from 'react-router-dom';


class All extends Component {
    state = {
        posts: [],
       
    };

    componentDidMount() {
        console.log("hello");
        API.getPosts()
            .then(res => {
                console.log("is this running? ");
                this.setState({ posts: res.data })
            })
            .catch(err => console.log("hey this is the error: ", err));
    }

    handleClick = (id) => {
        console.log('clicked');
        console.log('id : ', id);
        //loadIndividualPost reroute
        API.getIndividualPost(id)
        console.log("about to redirect");
        // reroute to individual post page here
        console.log('this.props: ', this.props);
        this.props.history.push("/IndividualPost")
        

    }

    render() {
        return (
            <div className="container">
                <div className="col-md-12">
                    {console.log(this.state.posts)}
                    {/* load posts */}
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-11">
                            <h3>Latest Posts</h3>
                        </div>
                    </div>
                    {this.state.posts.map(item => (
                        <Post
                            key={item._id}
                            id={item._id}
                            postTitle={item.postTitle}
                            description={item.description}
                            stars={item.stars}
                            comments={item.comments}
                            category={item.category}
                            handleClick={this.handleClick}
                        />
                    ))}

                </div>
            </div>
        )
    }
}

export default All;
