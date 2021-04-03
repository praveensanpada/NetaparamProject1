import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

const  DeleteProduct = () => {

  const [userData, setUserData] = useState([]);

  const [id1, setId1] = useState([]);
  const [id2, setId2] = useState([]);


  useEffect(()=> {    
        Axios.get("http://localhost:8089/admin/count").then((response)=>{
            console.log(response.data);
            setUserData(response.data.count)
        })
    },[]);

  const DelP = () => {
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




      <div className="container">
          <br/><br/>
            <form>

                <div className="form-group">
                  <label for="inputCity">Product Id</label>
                    <input type="text" className="form-control" id="inputCity" onChange={(e)=>{
                      setId1(e.target.value);
                    }}/>
                </div>   
              
            <button type="submit" className="btn btn-primary" onClick={DelP}>Delete Product</button>
          </form>
        </div>
    </>
  );
}

export default DeleteProduct;
