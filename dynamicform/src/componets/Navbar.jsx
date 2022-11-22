import React from 'react'
import "./Nabar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar-navbar">
     <Link style={{color: 'white',textDecoration: 'none',textAlign: 'center',fontSize:"25px",padding:"10px"}} to="/">Form</Link>
     <Link style={{color: 'white',textDecoration: 'none',textAlign: 'center',fontSize:"25px",padding:"10px"}} to="/users">Users</Link>
    </div>
  )
}

export default Navbar