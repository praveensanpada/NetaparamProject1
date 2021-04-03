import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import './Product.css';



import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, cartincrement, cartdecrement} from './cart/actions';



const  Q4 = () => {

    const [userData, setUserData] = useState([]);

    useEffect(()=> {    
        Axios.get("http://localhost:8089/products/q4").then((response)=>{
            console.log(response.data);
            setUserData(response.data)
        })
    },[]);



    const item = useSelector(state => state.AddItemReducer);
    const count = useSelector(state => state.AddToCartReducer);
    const dispatch = useDispatch();




  return (
    <>
     <div className="container">
            <h2>New Products</h2>
            <p>At vero eos et accusamus et iusto odio dignissimos</p>

            <div className="row">
                
                {userData.map((val)=>{
                    return <>

                        <div className="col-sm-3 text-center padd">
                            <div className="p-border">
                                <a className="nav-link  products-style" href={"/products?pid="+val.pid}>
                                <img src={val.imgurl} alt="photo" className="imgset"/>
                                <p>Name:- {val.name}</p>
                                <p>Price:- Rs. {val.price}</p>
                                <p>Rating:- {val.rating}</p>
                                </a>
                                <button onClick={()=>dispatch(cartincrement())}> Add To Cart </button>&nbsp;<button onClick={()=>dispatch(increment())}>+</button>({count})<button onClick={()=>dispatch(decrement())}>-</button>
                            </div>
                        </div>
                    </>
                })}

            </div>

        </div>  
    </>
  );
}

export default Q4;
