import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const  Navbar = () => {


  const LogOut=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('uid');
    }

  return (
    <>

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

        <div className="container">

          <a href="index.html" className="navbar-expand text-warning">
            <i className="fa fa-snowflake"></i>
            OP
          </a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#pu-navbar">
            <span className="navbar-toggler-icon"></span>
          </button>   

          <div className="collapse navbar-collapse" id="pu-navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="fa fa-chart-bar text-muted"></i> Dashboard
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="orders">
                  <i className="fa fa-list text-muted"></i> Orders
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="products">
                  <i className="fa fa-sitemap text-muted"></i> Products
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="users">
                  <i className="fa fa-users text-muted"></i> Users
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  <i className="fa fa-user-circle text-muted"></i> Profile
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/" onClick={LogOut}>
                  <i className="fa fa-sign-out-alt text-muted"></i> LogOut
                </a>
              </li>
            </ul>

          </div>

        </div>
        
      </nav>

    </>
  );
}

export default Navbar;
