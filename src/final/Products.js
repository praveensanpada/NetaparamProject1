import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import './Prod.css';

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, cartincrement, cartdecrement} from './cart/actions';

function Products() {


	function $_GET(q,s) {
    s = (s) ? s : window.location.search;
    var re = new RegExp('&amp;'+q+'=([^&amp;]*)','i');
    return (s=s.replace(/^\?/,'&amp;').match(re)) ?s=s[1] :s='';
	}

	var pid1 = $_GET("pid");

  const [userData, setUserData] = useState([]);

		const id1 = pid1;
		const id2 = pid1;
 			useEffect(()=> {    
      			Axios.post('http://localhost:8089/product',{id1:id1,id2:id2}).then((response)=>{
      				console.log(response.data);
					setUserData(response.data)
       				console.log(userData)
    			})
    		},[]);

    const item = useSelector(state => state.AddItemReducer);
    const count = useSelector(state => state.AddToCartReducer);
    const dispatch = useDispatch();

  return (
    <div className="container">
		<div className="row">
		{userData.map((val)=>{
          	return <>
				<div className="col-sm-6 text-center">
					<img src={val.imgurl} alt="photo" className="prod-img"/>
				</div>
				<div className="col-sm-6 text-center">
					<br/><br/><br/>
					<p>Name:- {val.name}</p>
					<p>Price:- Rs. {val.price}</p>
					<p>Rating:- {val.rating}</p>
					<p>Description:- {val.description}</p>
					<button onClick={()=>dispatch(cartincrement())}> Add To Cart </button>&nbsp;<button onClick={()=>dispatch(increment())}>+</button>({count})<button onClick={()=>dispatch(decrement())}>-</button>
				</div>
			</>
        })}
		</div>
	</div>
  );
}

export default Products;
