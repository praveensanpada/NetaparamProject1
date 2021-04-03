import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const  Profile = () => {

  return (
    <>
    	<section class="p-3 bg-light">
    		<div class="container">

      			<div class="row">
       				<div class="col-md-4 bun">
                <a href="/editProfile" className="nav-link">
          				<button class="btn btn-primary btn-block">
            				<i class="fa fa-plus-circle"></i> Edit Profile
            				<hr/> 
            				123
          				</button>
                </a>
        			</div>
        			<div class="col-md-4 bun">
                <a href="/changePassword" className="nav-link">
          				<button class="btn btn-success btn-block">
            				<i class="fa fa-plus-circle"></i> Change Password
            				<hr/> 
            				123
          				</button>
                </a>
        			</div>
        			<div class="col-md-4 bun">
                <a href="/" className="nav-link">
          				<button class="btn btn-warning btn-block">
            				<i class="fa fa-plus-circle"></i> Logout
            				<hr/> 
            				123
          				</button>
                </a>
        			</div>
      			</div>

    		</div>
  		</section>





      <hr/>

      <div className="text-center">
        <h4>Name:- Praveen Sanpada</h4>
        <h4>Email:- praveensanpada@gmail.com</h4>
        <h4>Phone Number:- 7225854655</h4>
      </div>
    </>
  );
}

export default Profile;
