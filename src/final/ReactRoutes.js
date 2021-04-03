import React from 'react';
import {Switch,Route,Redirect,BrowserRouter} from 'react-router-dom';

//----------------------------------------pages for routing---------------------------------

import Home from './Home';

import Register from './Register';
import Login from './Login';
import Cart from './Cart';
import LCart from './LCart';
import Logout from './Logout';
import Product1 from './Product1';
import Product2 from './Product2';
import Product3 from './Product3';
import Product4 from './Product4';
import Products from './Products';
import MyOrder from './MyOrder';
import MyWallet from './MyWallet';
import MyProfile from './MyProfile';
import UpdateAccount from './UpdateAccount';
import DeleteAccount from './DeleteAccount';

import Heading from './Heading';
import LoginHeading from './LoginHeading';
import MainNavBar from './MainNavBar';
import MidContent from './MidContent';
import Footer from './Footer';
import MainLogin from './MainLogin';

import Page from './Page';


const ReactRoutes=()=>{

	//<Route exact path="/page/" component={Page} />
	//<Redirect to="/page" />

	//const auth = true
	//const auth = false

	const xauth= localStorage.getItem('token');


	return (
		<>
			<div className="nav">
				
				<BrowserRouter>
				<Switch>


					{ xauth !== null && xauth !== undefined && xauth !== ''?
          				<>
          				
          					<LoginHeading/>
          					<MainLogin/>
            				<Route exact path="/myorder/" component={MyOrder} />
							<Route exact path="/mywallet/" component={MyWallet} />
							<Route exact path="/myprofile/" component={MyProfile} />
							<Route exact path="/updateaccount/" component={UpdateAccount} />
							<Route exact path="/deleteaccount/" component={DeleteAccount} />
							<Route exact path="/logout/" component={Logout} /> 

							<Route exact path="/login/" component={MidContent} />
							<Route exact path="/home/" component={MidContent} />
							<Route exact path="/lcart/" component={LCart} />
							<Route exact path="/product1/" component={Product1} />
							<Route exact path="/product2/" component={Product2} />
							<Route exact path="/product3/" component={Product3} />
							<Route exact path="/product4/" component={Product4} />
							<Route exact path="/products/" component={Products} />

            			</>
            		:
          				<>	

          					<Heading/>
          					<MainNavBar/>
            				<Route exact path="/register/" component={Register} />
							<Route exact path="/login/" component={Login} />

							<Route exact path="/" component={MidContent} />
							<Route exact path="/cart/" component={Cart} />
							<Route exact path="/product1/" component={Product1} />
							<Route exact path="/product2/" component={Product2} />
							<Route exact path="/product3/" component={Product3} />
							<Route exact path="/product4/" component={Product4} />
							<Route exact path="/products/" component={Products} />

          				</>
          			}


				</Switch>
				</BrowserRouter>
				<br/>
				<Footer/>
			</div>
		</>
		);
};

export default ReactRoutes;