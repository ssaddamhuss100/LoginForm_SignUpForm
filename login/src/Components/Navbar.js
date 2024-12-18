import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/" 
              style={({ isActive }) => ({
                color: isActive ? 'green' : 'yellow', // Change color when active
                fontWeight: isActive ? 'bold' : 'normal' // Make active link bold
              })}
            >
              Signup
            </NavLink>

            <NavLink 
              to="/login" 
              style={({ isActive }) => ({
                color: isActive ? 'green' : 'yellow', // Change color when active
                fontWeight: isActive ? 'bold' : 'normal' // Make active link bold
              })}
            >
              Login
            </NavLink>

            <NavLink 
              to="/home" 
              style={({ isActive }) => ({
                color: isActive ? 'green' : 'yellow', // Change color when active
                fontWeight: isActive ? 'bold' : 'normal' // Make active link bold
              })}
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
