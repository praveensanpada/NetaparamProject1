import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

import './home.css';

import h1 from './home1.jpg';
import h2 from './hom2.jpg';
import h3 from './home3.jpg';
import h4 from './home4.jpg';

const  Home = () => {

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

<br/><br/>

        <div className="container">

        <h1 className="text-center">Global demand for Indian Organic food products on constant increase</h1><br/><br/>
          <div className="mainPhoto">
              <div className="row text-center">
                <div className="col-sm-4 pp">
                  <img src={h1} className="homeImages" alt="h1"/>
                </div>

                <div className="col-sm-4 pp">
                  <img src={h3} className="homeImages" alt="h3"/>
                </div>

                <div className="col-sm-4 pp">
                  <img src={h2} className="homeImages" alt="h2"/>
                </div>
              </div>
              <br/><br/>
              <div className="row text-center">
                <div className="col-sm-4 pp">
                  <p>Switzerland was already one of the leading countries for organic consumption in Western Europe and the country has one of the largest per capita spending rates on organic products</p>
                </div>

                <div className="col-sm-4 pp">
                  <img src={h4} className="homeImages" alt="h4"/>
                </div>

                <div className="col-sm-4 pp">
                  <p>Switzerland was already one of the leading countries for organic consumption in Western Europe and the country has one of the largest per capita spending rates on organic products</p>
                </div>
              </div>
          </div>
<br/><br/>
</div>

    </>
  );
}

export default Home;
