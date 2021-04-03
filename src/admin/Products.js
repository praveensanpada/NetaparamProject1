import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

import './Cart.css';

const  Products = () => {

  const [userData, setUserData] = useState([]);
  
  const [TotalProducts, setTotalProducts] = useState([]);

  useEffect(()=> {    
        Axios.get("http://localhost:8089/admin/count").then((response)=>{
            console.log(response.data);
            setUserData(response.data.count)
        })
    },[]);

  useEffect(()=> {    
        Axios.get("http://localhost:8089/products/fetch").then((response)=>{
            console.log(response.data);
            setTotalProducts(response.data)
        })
    },[]);

  return (
    <>
    	<section class="p-3 bg-light">
    		<div class="container">

      			<div class="row">
       				<div class="col-md-4 bun">
                <a href="/addProduct" className="nav-link">
          				<button class="btn btn-primary btn-block">
            				<i class="fa fa-plus-circle"></i> Add New Product
            				<hr/> 
            				{userData}
          				</button>
                </a>
        			</div>
        			<div class="col-md-4 bun">
                <a href="/updateProduct" className="nav-link">
          				<button class="btn btn-success btn-block">
            				<i class="fa fa-plus-circle"></i> Update Product
            				<hr/> 
            				{userData}
          				</button>
                </a>
        			</div>
        			<div class="col-md-4 bun">
                <a href="/deleteProduct" className="nav-link">
          				<button class="btn btn-warning btn-block">
            				<i class="fa fa-plus-circle"></i> Delete Product
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
            <th>SNO.</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Quality Type</th>
          </tr>


                {TotalProducts.map((val)=>{
                    return <>

                        <tr>
                            <td>{val.pid}</td>
                            <td>{val.name}</td>
                            <td><img src={val.imgurl} className="pppcart" alt="k2"/></td>
                            <td>{val.price}</td>
                            <td>{val.rating}</td>
                            <td>{val.qtype}</td>
                        </tr>
                        
                    </>
                })}


        </table><br/>
      </div><br/><br/>
    </>
  );
}

export default Products;
