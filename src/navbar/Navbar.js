import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartPlusFill } from 'react-icons/bs';

function Navbar() {
  const navLinkStyle = {
    fontWeight: 'bold',
    fontSize:"18px"
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light" style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',padding:"20px" }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/cart" className="nav-link " style={navLinkStyle}>
                  <BsFillCartPlusFill size={25} color="black"  />
                </Link>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo03" style={{marginLeft:"4%"}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to="/" className="nav-link" style={navLinkStyle}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link" style={navLinkStyle}>
                  cart
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      
    </div>
  );
}

export default Navbar;
