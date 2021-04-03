import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

const  UpdateUser = () => {


  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [add1, setAdd1] = useState("");
    const [add2, setAdd2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pin, setPin] = useState("");

    const UpdateU = () => {
       Axios.post("http://localhost:8089/userAmin/UpdateU",{name: name , email: email, mobile: mobile, password: password, add1: add1, add2: add2, city: city, state: state, pin: pin}).then((response)=>{
          console.log("Done");
          alert(state)
        })
      }

  return (
    <>
      <section class="p-3 bg-light">
        <div class="container">

            <div class="row">
              <div class="col-md-4 bun">
                <a href="/addUser" className="nav-link">
                  <button class="btn btn-primary btn-block">
                    <i class="fa fa-plus-circle"></i> Add New User
                    <hr/> 
                    123
                  </button>
                </a>
              </div>
              <div class="col-md-4 bun">
                <a href="/updateUser" className="nav-link">
                  <button class="btn btn-success btn-block">
                    <i class="fa fa-plus-circle"></i> Edit User
                    <hr/> 
                    123
                  </button>
                </a>
              </div>
              <div class="col-md-4 bun">
                <a href="/deleteUser" className="nav-link">
                  <button class="btn btn-warning btn-block">
                    <i class="fa fa-plus-circle"></i> Delete User
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
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Full Name</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="Full Name" onChange={(e)=>{
                      setName(e.target.value);
                    }}/>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Mobile Number</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="Mobile"  onChange={(e)=>{
                      setMobile(e.target.value);
                    }}/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={(e)=>{
                      setEmail(e.target.value);
                    }}/>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={(e)=>{
                      setPassword(e.target.value);
                    }}/>
                </div>
              </div>
              <div className="form-group">
                <label for="inputAddress">Address 1</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e)=>{
                    setAdd1(e.target.value);
                  }}/>
              </div>
              <div className="form-group">
                <label for="inputAddress2">Address 2</label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={(e)=>{
                    setAdd2(e.target.value);
                  }}/>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity" onChange={(e)=>{
                      setCity(e.target.value);
                    }}/>
                </div>
                <div className="form-group col-md-4">
                  <label for="inputState">State</label>
                    <select id="inputState" className="form-control"  onChange={(e)=>{
                      setState(e.target.value);
                    }}>
                      <option value="RJ" selected>Rajsthan</option>
                      <option value="MP">MP</option>
                      <option value="UP">UP</option>
                      <option value="AP">AP</option>
                      <option value="Delhi">Delhi</option>
                      </select>
                </div>
                <div className="form-group col-md-2">
                  <label for="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" onChange={(e)=>{
                setPin(e.target.value);
              }}/>
          </div>
          </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                  <label className="form-check-label" for="gridCheck">
                    Check me out
                  </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary"  onClick={UpdateU}>Sign in</button>
          </form>
        </div>
    </>
  );
}

export default UpdateUser;
