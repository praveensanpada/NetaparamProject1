import React, { useEffect  , useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import pnc from './pnc.png';
import './Profile.css';

const  MyProfile = () => {

	const [userData, setUserData] = useState([]);

		const uid= localStorage.getItem('uid');
        const id1 = uid;
        const id2 = uid;
 			useEffect(()=> {    
      			Axios.post('http://localhost:8089/user/profile',{id1:id1,id2:id2}).then((response)=>{
					setUserData(response.data)
    			})
    		},[]);


    		console.log(userData)

  return (
    <>
        <div className="container">
        	<br/>
			<div className="text-center">
				<h4>My Profile</h4>
				<hr/>
				{userData.map((val)=>{
          			return <>
          				<img src={pnc} className="profile-img" alt="pnc"/>
          				<br/>
          				<br/>
				 		<p>{val.name}</p>
						<p>{val.email}</p>
						<p>{val.mobile}</p>
						<p>{val.add1}, {val.add2}</p>
						<p>City :- {val.city}, Zip :- {val.zip}</p>
					</>
        		})}
			</div>
			<br/>
		</div>
    </>
  );
}

export default MyProfile;
