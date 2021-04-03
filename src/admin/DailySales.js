import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

const  DailySales = () => {

  const [userData, setUserData] = useState([]);

  useEffect(()=> {    
        Axios.get("http://localhost:8089/admin/count").then((response)=>{
            console.log(response.data);
            setUserData(response.data.count)
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


      <hr/>
<h3 className="text-center">Daily Sales {userData}</h3>
      <hr/>
    </>
  );
}

export default DailySales;
