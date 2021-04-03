import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

import './Cart.css';
import k3 from './k3.jpg';
import k2 from './k2.jpg';

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, cartincrement, cartdecrement} from './cart/actions';

const  LCart = () => {

    const mycount = 0;

        const uid= localStorage.getItem('uid');
        //const uid=5
        const id1 = uid;
        const id2 = uid;

    const [userData, setUserData] = useState([]);

    useEffect(()=> {    
        Axios.post("http://localhost:8089/cart/get",{id1:id1, id2:id2}).then((response)=>{
            console.log(response.data);
            setUserData(response.data)
        })
    },[]);


	const item = useSelector(state => state.AddItemReducer);
    const count = useSelector(state => state.AddToCartReducer);
    const dispatch = useDispatch();

    /*function REM(id){

        const id1 = id;
        const id2 = id;

        Axios.post("http://localhost:8089/cart/delete",{id1:id1, id2:id2}).then((response)=>{
          console.log("Done");
        })
        
    }
    */


  return (
    <>
        <div className="container">
    		<h1 className="text-center">Cart</h1>
    		<hr/>
    		<table className="MainTable text-center">
    			<tr>
    				<th>OID</th>
    				<th>Name</th>
    				<th>Image</th>
    				<th>Price</th>
    				<th>Quantity</th>
    				<th>Total Price</th>
                    <th>Delete</th>
    			</tr>

                {userData.map((val)=>{
                    return <>

                        <tr>
                            <td>{val.cid}</td>
                            <td>{val.name}</td>
                            <td><img src={val.imgurl} className="pppcart" alt="k2"/></td>
                            <td>{val.price}</td>
                            <td><button onClick={()=>dispatch(increment())}>+</button>({parseInt(val.quantity)+parseInt(count)})<button onClick={()=>dispatch(decrement())}>-</button></td>
                            <td>{(parseInt(val.quantity)+parseInt(count))*(parseInt(val.price))}</td>
                            <td> <button>Remove</button> </td>
                        </tr>
                        
                    </>
                })}

    		</table><br/><br/>
    		<div className="text-center"><button className="text-center"> Order Now </button></div>
    	</div>
    </>
  );
}

export default LCart;
