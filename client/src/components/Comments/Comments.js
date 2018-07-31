import React from "react";
import "./Comments.css";


const Comments = props => (
    <div className="container">
        <div className="row">
            <div className="col-md-1">
                <div className="row text-center">
                    {/* <span role="img">⭐</span> */}
                </div>
                <div className="row text-center" id="stars">
                    {/* <span>{props.stars}</span> */}
                </div>
            </div>
            <div className="col-md-11">
                {// comments
                }
                {/* <p>
                    {props.text}
                </p>
                <p className="text-right">{props.loggedInUser}</p> */}
                <div className="card"> 
                    <div className="card-header">
                        Contributor: {props.loggedInUser}
                    </div>
                    <div className="card-body">
                        <p className="card-text">{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Comments;