import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Cart.css';
import k3 from './k3.jpg';
import k2 from './k2.jpg';

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, cartincrement, cartdecrement} from './cart/actions';

const  Cart = () => {


	const item = useSelector(state => state.AddItemReducer);
    const count = useSelector(state => state.AddToCartReducer);
    const dispatch = useDispatch();


  return (
    <>
        <div className="container">
    		<h1 className="text-center">Cart</h1>
    		<hr/>
    		<table className="MainTable text-center">
    			<tr>
    				<th>SNO.</th>
    				<th>Name</th>
    				<th>Image</th>
    				<th>Price</th>
    				<th>Quantity</th>
    				<th>Total Price</th>
                    <th>Delete</th>
    			</tr>
    			<tr>
    				<td>1</td>
    				<td>Orange</td>
    				<td><img src={k2} className="pppcart" alt="k2"/></td>
    				<td>225</td>
    				<td><button onClick={()=>dispatch(increment())}>+</button>{count}<button onClick={()=>dispatch(decrement())}>-</button></td>
    				<td>{225*count}</td>
                    <td>Remove</td>
    			</tr>
    			<tr>
    				<td>2</td>
    				<td>Apple</td>
    				<td><img src={k3} className="pppcart" alt="k3"/></td>
    				<td>355</td>
    				<td><button onClick={()=>dispatch(increment())}>+</button>{count}<button onClick={()=>dispatch(decrement())}>-</button></td>
    				<td>{225*count}</td>
                    <td>Remove</td>    			
    			</tr>
    			<tr>
    				<td>3</td>
    				<td>Orange</td>
    				<td><img src={k2} className="pppcart" alt="k2"/></td>
    				<td>225</td>
    				<td><button onClick={()=>dispatch(increment())}>+</button>{count}<button onClick={()=>dispatch(decrement())}>-</button></td>
    				<td>{225*count}</td>
                    <td>Remove</td>
    			</tr>
    			<tr>
    				<td>4</td>
    				<td>Apple</td>
    				<td><img src={k3} className="pppcart" alt="k3"/></td>
    				<td>355</td>
    				<td><button onClick={()=>dispatch(increment())}>+</button>{count}<button onClick={()=>dispatch(decrement())}>-</button></td>
    				<td>{255*count}</td>
                    <td>Remove</td>    			
    			</tr>
    			<tr>
    				<td>5</td>
    				<td>Orange</td>
    				<td><img src={k2} className="pppcart" alt="k2"/></td>
    				<td>225</td>
    				<td><button onClick={()=>dispatch(increment())}>+</button>{count}<button onClick={()=>dispatch(decrement())}>-</button></td>
    				<td>{225*count}</td>
                    <td>Remove</td>
    			</tr>
    			<tr>
    				<td>6</td>
    				<td>Apple</td>
    				<td><img src={k3} className="pppcart" alt="k3"/></td>
    				<td>355</td>
    				<td><button onClick={()=>dispatch(increment())}>+</button>{count}<button onClick={()=>dispatch(decrement())}>-</button></td>
    				<td>{255*count}</td>
                    <td>Remove</td>    			
    			</tr>
    		</table><br/><br/>
    		<div className="text-center"><button className="text-center"> Order Now </button></div>
    	</div>
    </>
  );
}

export default Cart;
