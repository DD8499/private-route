import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <NavLink to='/'>Home Page</NavLink>
      <NavLink to='/about'>About Page</NavLink>
      <NavLink to='/contact'>Contact Page</NavLink>
    </div>
  )
};

export default Navbar;
