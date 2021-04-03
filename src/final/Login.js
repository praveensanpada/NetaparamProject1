import React, { useEffect  , useState} from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";

function Log() {

	const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  const[loginStatus, setLoginStatus]=useState("");

  const history = useHistory();

  	const Login = () =>{
   		Axios.post("http://localhost:8089/user/login",{email: email, password: password}).then((response)=>{
      if(response.data.message){
           setLoginStatus(response.data.message);
        }else{
            console.log(response.data)
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('uid',response.data.uid);
            history.push("/home");
          }
      })
   	} 

  return (
    <div className="container">
		 	<h2>Login</h2>
  			<form>
    		<div className="form-group">
     	 	<label for="email">Email:</label>
      		<input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>{
             setEmail(e.target.value);}}/>
    		</div>
    		<div className="form-group">
      		<label for="pwd">Password:</label><br/>
      		<input type="password" className="form-control" placeholder="Enter Password" onChange={(e)=>{
             setPassword(e.target.value);}}/>
    		</div>
    		<button type="submit" className="btn btn-primary" onClick={Login}>Login</button>
  			</form>

        {email}
        <hr/>
        {password}
	   </div>
  );
}

export default Log;
