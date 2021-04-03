import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

const  ChangePassword = () => {

  const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [newPass1, setNewPass1] = useState("");

  const AdminU = () => {
       Axios.post("http://localhost:8089/userAmin/AdminU",{oldPass: oldPass , newPass: newPass, newPass1: newPass1}).then((response)=>{
          console.log("Done");
         // alert(state)
        })
      }

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


      <div className="container">
          <br/><br/>
            <form>
              
                <div className="form-group">
                  <label for="inputEmail4">Old Password</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="Old Password" onChange={(e)=>{
                      setOldPass(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                  <label for="inputPassword4">New Password</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="New Password"  onChange={(e)=>{
                      setNewPass(e.target.value);
                    }}/>
                </div>
              

              
                <div className="form-group">
                  <label for="inputEmail4">New Password</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="New Password" onChange={(e)=>{
                      setNewPass1(e.target.value);
                    }}/>
                </div>
                
            <button type="submit" className="btn btn-primary"  onClick={AdminU}>Change Password</button>
          </form>
        </div>
    </>
  );
}

export default ChangePassword;
