import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import k4 from './cart.jpg';
import k6 from './search.jpg';
import k5 from './organic.jpg';

import './Heading.css';


import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, cartincrement, cartdecrement} from './cart/actions';



const  Heading = () => {


    const item = useSelector(state => state.AddItemReducer);
    const count = useSelector(state => state.AddToCartReducer);
    const dispatch = useDispatch();


  return (
    <>
        <div className="container"><br/>
    		<div className="fl t">
    			<a href="/"><img src={k5} className="pppl" alt="k2"/></a>
    		</div>

    		<div className="rl t">
    			<a href="/cart"><img src={k4} className="pppc" alt="k3"/>
    			({item}) My Cart</a>
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

export default Heading;
