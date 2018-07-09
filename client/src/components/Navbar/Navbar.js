import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-dark">
        <Link to="/" className="navbar-brand">CodeForum.io</Link>
        <Link to="/all" className="navbar-brand">Latest Posts</Link>
        <Link to="/login" className="navbar-brand">Login</Link>
        <Link to="/signup" className="navbar-brand">SignUp</Link>
        <Link to="/topic/:topic" className="navbar-brand">Topic</Link>
    </nav>

)

export default Navbar;