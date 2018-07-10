import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import All from "./pages/All";
import IndividualPost from "./pages/IndividualPost";
// import Jumbotron from "./components/Jumbotron";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/All" render={props => <All {...props} />}/>
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/IndividualPost" render={props => <IndividualPost {...props} />}/>

      
    </div>
  </Router>
)

export default App;
