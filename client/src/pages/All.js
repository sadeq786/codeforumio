import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

const All = () => (
  <Router>
    <div>
      <Navbar />
      This is the /r/all page
    </div>
  </Router>
)

export default All;