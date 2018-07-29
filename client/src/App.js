import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import All from "./pages/All";
import IndividualPost from "./pages/IndividualPost";
import Account from "./pages/Account";
import PasswordChange from "./pages/PasswordChange";
import PasswordForget from "./pages/PasswordForget";
import SignOutButton from "./pages/SignOut";
import NewPost from "./pages/NewPost";
import UserDashboard from "./pages/UserDashboard";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/All" render={props => <All {...props} />}/>
      <Route exact path="/Signin" component={Signin} />
      <Route exact path="/Signup" component={Signup} />
      <Route exact path="/IndividualPost" render={props => <IndividualPost {...props} />}/>
      <Route exact path="/Account" component={Account} />
      <Route exact path="/PasswordChange" component={PasswordChange} />
      <Route exact path="/PasswordForget" component={PasswordForget} />
      <Route exact path="/SignOut" component={SignOutButton} />
      <Route exact path="/NewPost" component={NewPost} />
      <Route exact path="/UserDashboard" component={UserDashboard} />
      

      
    </div>
  </Router>
)

export default App;
