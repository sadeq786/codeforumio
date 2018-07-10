import React from "react";
import { Link } from "react-router-dom";
import "./Jumbotron.css"
// import { BrowserRouter as Router, Route } from "react-router-dom";



const Jumbotron = () => (
    
    <div className="jumbotron">
        <h1 className="display-4">Welcome to CodeForum</h1>
        <p className="lead">
            <Link to="/all" className="btn btn-secondary btn-lg">Browse latest topics and posts</Link>
        </p>
    </div>
    
)

export default Jumbotron;