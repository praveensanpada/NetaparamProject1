import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

import './Cart.css';
import k3 from './k3.jpg';
import k2 from './k2.jpg';

const  MyOrder= () => {

    const mycount = 0;

        const uid= localStorage.getItem('uid');
        //const uid=5
        const id1 = uid;
        const id2 = uid;
        //alert(uid)

    const [userData, setUserData] = useState([]);

    useEffect(()=> {    
        Axios.post("http://localhost:8089/order/get",{id1:id1, id2:id2}).then((response)=>{
            console.log(response.data);
            setUserData(response.data)
            //alert(response.data)
        })
    },[]);

  return (
    <>
        <div className="container">
    		<h1 className="text-center">My Order</h1>
    		<hr/>
    		<table className="MainTable text-center">
    			<tr>
    				<th>SNO.</th>
    				<th>Name</th>
    				<th>Image</th>
    				<th>Price</th>
    				<th>Quantity</th>
    				<th>Total Price</th>
    			</tr>


                {userData.map((val)=>{
                    return <>

                        <tr>
                            <td>{val.oid}</td>
                            <td>{val.name}</td>
                            <td><img src={val.imagurl} className="pppcart" alt="k2"/></td>
                            <td>{val.price}</td>
                            <td>{val.quantity}</td>
                            <td>{val.price*val.quantity}</td>
                        </tr>
                        
                    </>
                })}


    		</table><br/>
    	</div>
    </>
  );
}

export default MyOrder;
