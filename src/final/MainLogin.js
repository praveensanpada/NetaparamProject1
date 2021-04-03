import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './MainLogin.css';

const  MainLogin = () => {

  const authd=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
    }

  return (
    <>
        <nav className="navbar navbar-expand-md bg-success navbar-dark maxWidthClass">
          <div className="container">
            <div className="dropdown">
              <button className="btn btn-success dropdown-toggle btn-dark-green" data-toggle="dropdown">
                <span className="navbar-toggler-icon"></span>
                  Products
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/product1">Kitchen Accessories</a>
                <a className="dropdown-item" href="/product2">Bath Products</a>
                <a className="dropdown-item" href="/product3">Skin Care Items</a>
                <a className="dropdown-item" href="/product4">Dried Fruits</a>
              </div>
            </div>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Privacy</a>
                </li>
                <li className="nav-item">
                  <div class="dropdown">
                    <button class="dropbtn nav-link">My Account</button>
                      <div class="dropdown-content">
                        <a href="/myorder">My Order</a>
                        <a href="/mywallet">My Wallet</a>
                        <a href="/myprofile">My Profile</a>
                        <a href="/updateaccount">Update Account</a>
                        <a href="/deleteaccount">Delete Account</a>
                        <a href="/" onClick={authd}>Logout</a>
                      </div>
                    </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" onClick={authd}>Logout</a>
                </li>    
            </ul>
          </div>  
        </div>  
    </nav>
    </>
  );
}

export default MainLogin;
