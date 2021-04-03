import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

const  UpdateProduct = () => {

  const [userData, setUserData] = useState([]);

  const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [ptype, setPtype] = useState("");
    const [qtype, setQtype] = useState("");
    const [description, setDescription] = useState("");
    const [imgurl, setImgurl] = useState("");



  useEffect(()=> {    
        Axios.get("http://localhost:8089/admin/count").then((response)=>{
            console.log(response.data);
            setUserData(response.data.count)
        })
    },[]);


  const UpdateP = () => {
       Axios.post("http://localhost:8089/ProductAdmin/Update",{name: name , price: price, rating: rating, ptype: ptype, qtype: qtype, description: description, imgurl: imgurl}).then((response)=>{
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
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Product Name</label>
                    <input type="text" className="form-control" id="inputEmail4" placeholder="Product Name" onChange={(e)=>{
                      setName(e.target.value);
                    }}/>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Price</label>
                    <input type="text" className="form-control" id="inputPassword4" placeholder="Price"  onChange={(e)=>{
                      setPrice(e.target.value);
                    }}/>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Rating</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Rating" onChange={(e)=>{
                      setRating(e.target.value);
                    }}/>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Product Type</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Product Type" onChange={(e)=>{
                      setPtype(e.target.value);
                    }}/>
                </div>
              </div>
              <div className="form-group">
                <label for="inputAddress">Quality Type</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="Quality Type" onChange={(e)=>{
                    setQtype(e.target.value);
                  }}/>
              </div>
              <div className="form-group">
                <label for="inputAddress2">Description</label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Description" onChange={(e)=>{
                    setDescription(e.target.value);
                  }}/>
              </div>
              
                <div className="form-group">
                  <label for="inputCity">Product Image</label>
                    <input type="file" className="form-control" id="inputCity" onChange={(e)=>{
                      setImgurl(e.target.value);
                    }}/>
                </div>   
              
            <button type="submit" className="btn btn-primary" onClick={UpdateP}>Update Product</button>
          </form>
        </div>
    </>
  );
}

export default UpdateProduct;
