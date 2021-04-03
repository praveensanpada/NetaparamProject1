import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

const  EditProfile = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");


    const AdminU = () => {
       Axios.post("http://localhost:8089/userAmin/AdminU",{name: name , email: email, mobile: mobile}).then((response)=>{
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
                  <label for="inputEmail4">Full Name</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="Full Name" onChange={(e)=>{
                      setName(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                  <label for="inputPassword4">Mobile Number</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="Mobile"  onChange={(e)=>{
                      setMobile(e.target.value);
                    }}/>
                </div>
              

              
                <div className="form-group">
                  <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={(e)=>{
                      setEmail(e.target.value);
                    }}/>
                </div>
                
            <button type="submit" className="btn btn-primary"  onClick={AdminU}>Update</button>
          </form>
        </div>


    </>
  );
}

export default EditProfile;
