import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Homepage} />
      {/* <Route exact path="/list" component={List} />
      <Route exact path="/todo/:id" component={Details} /> */}
    </div>
  </Router>
)

export default App;
