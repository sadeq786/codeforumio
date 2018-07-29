import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SignOutButton from '../../pages/SignOut';
import * as routes from '../../constants/routes';


// const Navbar = () => (
//     <nav className="navbar navbar-expand-lg navbar-dark">
//         <Link to={routes.LANDING} className="navbar-brand">CodeForum.io</Link>
//         <Link to={routes.ALL} className="navbar-brand">Latest Posts</Link>
//         <Link to={routes.SIGN_IN} className="navbar-brand">Sign In</Link>
//         <Link to={routes.SIGN_UP} className="navbar-brand">Sign Up</Link>
//         <SignOutButton />
//     </nav>
// )


const Navbar = ({ authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
 <nav className="navbar navbar-expand-lg navbar-dark">
     <Link to={routes.LANDING} className="navbar-brand">CodeForum.io</Link>
     <Link to={routes.ALL} className="navbar-brand">Latest Posts</Link>
     <Link to={routes.USERDASHBOARD} className="navbar-brand">User Dashboard</Link>
     <SignOutButton />
</nav>

const NavigationNonAuth = () =>
 <nav className="navbar navbar-expand-lg navbar-dark">
     <Link to={routes.LANDING} className="navbar-brand">CodeForum.io</Link>
     <Link to={routes.ALL} className="navbar-brand">Latest Posts</Link>
     <Link to={routes.SIGN_IN} className="navbar-brand">Sign In</Link>
     <Link to={routes.SIGN_UP} className="navbar-brand">Sign Up</Link>
</nav>

export default Navbar;
