import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Jumbotron from "../components/Jumbotron";

const Homepage = () => (
    
    <Router>
        <div>
            <Jumbotron />
        </div>
    </Router>
)

export default Homepage;