import React from "react";
import "./Post.css";


const Post = props => (
    <div className="container">
        <div className="row">
            <div className="col-md-1">
                <div className="row text-center">
                    <span role="img">⭐</span>
                </div>
                <div className="row text-center" id="stars">
                    <span>{props.stars}</span>
                </div>
            </div>
            <div className="col-md-11">
                {// posts
                }
                <div className="card" onClick={ () => props.handleClick(props.id)}> 
                    {console.log(props)}
                    <div className="card-header">
                        {props.postTitle}
                    </div>
                    <div className="card-body">
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
                <p className="text-right">USER</p>
            </div>
        </div>
    </div>
);

export default Post;