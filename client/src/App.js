import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import All from "./pages/All";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/All" render={props => <All {...props} />}
/>      <Route exact path="/Login" component={Login} />
      <Route exact path="/Signup" component={Signup} />
      
    </div>
  </Router>
)

export default App;
