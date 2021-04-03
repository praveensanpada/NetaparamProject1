import React, { useEffect  , useState} from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const  App = () => {

  const [userData, setUserData] = useState([]);

  useEffect(()=> {    
      Axios.get("http://localhost:8089/fetch").then((response)=>{
        console.log(response.data);

       setUserData(response.data)
      // alert(response.data.id)
       console.log(userData)
       
      })
    },[]);

  return (
    <>
      <div className="list-data container">
      <h2>List</h2><hr/>
      <div className="row">
        {userData.map((val)=>{
          	return <>
				
					   <div classname="col-md-4 pp">
                  <p>{val.id}</p>
          				<img src={val.image} alt="photo"/>
          				<p>{val.name}</p>
          				<p>Price: {val.price}</p>
          				<p>Rating: {val.rating}</p>
                  <button>Add to Cart</button>
       				</div>
        	</>
        })}
        </div>	
        <hr/>
        <p>Cdac@123.com</p>
    </div>

    </>
  );
}

export default App;
