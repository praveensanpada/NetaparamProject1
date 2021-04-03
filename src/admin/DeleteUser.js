import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

const  DeleteUser = () => {


  const [id1, setId1] = useState([]);
  const [id2, setId2] = useState([]);

  const DelU = () => {
       Axios.post("http://localhost:8089/ProductAdmin/Delete",{id1: id1 , id2: id2}).then((response)=>{
          console.log("Done");
          //alert(state)
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

                <div className="form-group">
                  <label for="inputCity">User Id</label>
                    <input type="text" className="form-control" id="inputCity" onChange={(e)=>{
                      setId1(e.target.value);
                    }}/>
                </div>   
              
            <button type="submit" className="btn btn-primary" onClick={DelU}>Delete Product</button>
          </form>
        </div>
    </>
  );
}

export default DeleteUser;
