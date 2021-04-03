import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

const  TotalUsers = () => {

  const [userData, setUserData] = useState([]);

  const [TotalUsers, setTotalUsers] = useState([]);

  const [usersData, setUsersData] = useState([]);
  

  useEffect(()=> {    
        Axios.get("http://localhost:8089/admin/count").then((response)=>{
            console.log(response.data);
            setUserData(response.data.count)
        })
    },[]);

  useEffect(()=> {    
        Axios.get("http://localhost:8089/products/fetch").then((response)=>{
            console.log(response.data);
            setTotalUsers(response.data)
        })
    },[]);

  useEffect(()=> {    
        Axios.get("http://localhost:8089/users/getadmin").then((response)=>{
            console.log(response.data);
            setUsersData(response.data)
            //alert(response.data)
        })
    },[]);

  return (
    <>

      <section class="p-3 bg-light">
        <div class="container">

            <div class="row">
              <div class="col-md-4 bun">
                <a href="/totalSales" className="nav-link">
                  <button class="btn btn-primary btn-block">
                    <i class="fa fa-plus-circle"></i> Total Sales
                    <hr/>
                    {userData}
                  </button>
                </a>
              </div>
              <div class="col-md-4 bun">
                <a href="/totalProducts" className="nav-link">
                  <button class="btn btn-success btn-block">
                    <i class="fa fa-plus-circle"></i> Total Products
                    <hr/>
                    {userData}
                  </button>
                </a>
              </div>
              <div class="col-md-4 bun">
                <a href="/totalUsers" className="nav-link">
                  <button class="btn btn-warning btn-block">
                    <i class="fa fa-plus-circle"></i> Total Users
                    <hr/>
                    {userData}
                  </button>
                </a>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4 bun">
                <a href="/topProducts" className="nav-link">
                  <button class="btn btn-primary btn-block">
                    <i class="fa fa-plus-circle"></i> Top Selling Products
                    <hr/>
                    {userData}
                  </button>
                </a>
              </div>
              <div class="col-md-4 bun">
                <a href="/topState" className="nav-link">
                  <button class="btn btn-success btn-block">
                    <i class="fa fa-plus-circle"></i> Top Selling State
                    <hr/>
                    {userData}
                  </button>
                </a>
              </div>
              <div class="col-md-4 bun">
                <a href="/topCity" className="nav-link">
                  <button class="btn btn-warning btn-block">
                    <i class="fa fa-plus-circle"></i> Top Selling City
                    <hr/>
                    {userData}
                  </button>
                </a>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4 bun">
                <a href="/dailySales" className="nav-link">
                  <button class="btn btn-primary btn-block">
                    <i class="fa fa-plus-circle"></i> Daily Sales
                    <hr/>
                    {userData}
                  </button>
                </a>
              </div>
              <div class="col-md-4 bun">
                <a href="/weeklySales" className="nav-link">
                  <button class="btn btn-success btn-block">
                    <i class="fa fa-plus-circle"></i> Weekly Sales
                    <hr/>
                    {userData}
                  </button>
                </a>
              </div>
              <div class="col-md-4 bun">
                <a href="/monthlySales" className="nav-link">
                  <button class="btn btn-warning btn-block">
                    <i class="fa fa-plus-circle"></i> Monthly Sales
                    <hr/>
                    {userData}
                  </button>
                </a>
              </div>
            </div>

        </div>
      </section>




      <br/><br/>
        <div className="container">
        <table className="MainTable text-center">
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No.</th>          
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Pin</th>
          </tr>


                {usersData.map((val)=>{
                    return <>

                        <tr>
                            <td>{val.uid}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.mobile}</td>
                            <td>{val.add1}</td>
                            <td>{val.city}</td>
                            <td>{val.state}</td>
                            <td>{val.pin}</td>
                        </tr>
                        
                    </>
                })}


        </table><br/>
      </div>

<br/><br/>
    </>
  );
}

export default TotalUsers;
