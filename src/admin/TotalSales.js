import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

const  TotalSales = () => {

  const [userData, setUserData] = useState([]);

  const [odersData, setOrdersData] = useState([]);

  useEffect(()=> {    
        Axios.get("http://localhost:8089/admin/count").then((response)=>{
            console.log(response.data);
            setUserData(response.data.count)
        })
    },[]);

  useEffect(()=> {    
        Axios.get("http://localhost:8089/order/getadmin").then((response)=>{
            console.log(response.data);
            setOrdersData(response.data)
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
                    <br/><br/>
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
<hr/>



      <br/><br/>
        <div className="container">
        <table className="MainTable text-center">
          <tr>
            <th>Order Id</th>
            <th>Product Id</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Address</th>
          </tr>


                {odersData.map((val)=>{
                    return <>

                        <tr>
                            <td>{val.oid}</td>
                            <td>176</td>
                            <td>{val.name}</td>
                            <td><img src={val.imagurl} className="pppcart" alt="k2"/></td>
                            <td>{val.price}</td>
                            <td>{val.quantity}</td>
                            <td>Order Done</td>
                            <td>Jaipur</td>
                        </tr>
                        
                    </>
                })}


        </table><br/>
      </div>

<br/><br/>

    </>
  );
}

export default TotalSales;
