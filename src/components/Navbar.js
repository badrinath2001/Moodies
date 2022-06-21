import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { Container } from "react-bootstrap";
import logo from './logo2.png';
function NavBar() {
 

  
  return (
   <Container>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/Moodies" className="nav-logo">
           <img src={logo} alt="logo" id="logo"/>
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink
                exact
                to="/Moodies"
                
                className="nav-links"
               
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/type:"
                
                className="nav-links"
               
              >
                Select Mood
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/random"
                
                className="nav-links"
               
              >
                Shuffle
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/AboutUs"
               
                className="nav-links"
               
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/ContactUs"
                
                className="nav-links"
               
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon">
            <i className=  "fas fa-bars"></i>
          </div>
        </div>
      </nav></Container>
   
  );
}

export default NavBar;