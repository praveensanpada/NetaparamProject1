import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

import k4 from './cart.jpg';
import k6 from './search.jpg';
import k5 from './organic.jpg';

import './Heading.css';


import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, cartincrement, cartdecrement} from './cart/actions';



const  LoginHeading = () => {


    const item = useSelector(state => state.AddItemReducer);
    const count = useSelector(state => state.AddToCartReducer);
    const dispatch = useDispatch();


        const uid= localStorage.getItem('uid');
        const id1 = uid;
        const id2 = uid;

        const [userData, setUserData] = useState([]);

        useEffect(()=> {    
            Axios.post("http://localhost:8089/cart/getcount",{id1:id1, id2:id2}).then((response)=>{
                console.log(response.data);
                setUserData(response.data.lll)
                //alert(response.data.lll)
            })
        },[]);


  return (
    <>
        <div className="container"><br/>
    		<div className="fl t">
    			<a href="/home"><img src={k5} className="pppl" alt="k2"/></a>
    		</div>

    		<div className="rl t">
    			<a href="/lcart"><img src={k4} className="pppc" alt="k3"/>
    			({parseInt(userData)+parseInt(item)}) My Cart</a>
    		</div>

    		<div className="mll t">
    			<input type="text" placeholder="Search Products" className="mt-3 search"/>
    			<button><img src={k6}  className="ppt" alt="k3"/></button>
    		</div>
            <br/><br/>
    	</div>
    </>
  );
}

export default LoginHeading;
