import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import All from "../pages/All";

const Homepage = () => (
    <div>
        <Jumbotron />
        <Router>
            <div>
                <Route exact path="/All" render={props => <All {...props} />}/>
                {/* <Route exact path="/All" component={All} /> */}


            </div>
        </Router>
    </div>
)

export default Homepage;