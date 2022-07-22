import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#"><img src={logo} alt="logo" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>       
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto ">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/about">About </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/contact">Contact </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/login">Login  </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/signup">Registration  </NavLink>
        </li>
       
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" to="#">Action</a></li>
            <li><a className="dropdown-item" to="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" to="#">Something else here</a></li>
          </ul>
        </li> */}
        
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
