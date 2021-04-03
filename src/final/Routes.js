import React from 'react';
import {Switch,Route,Redirect,BrowserRouter} from 'react-router-dom';

//----------------------------------------pages for routing---------------------------------

import Home from './Home';

import Register from './Register';
import Login from './Login';
import Cart from './Cart';
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
import MainNavBar from './MainNavBar';
import MidContent from './MidContent';
import Footer from './Footer';
import MainLogin from './MainLogin';

import Page from './Page';

const Routes=()=>{

	const auth = false;
	
	return (
		<>
			<div className="nav"> 
				<BrowserRouter>
				<Switch>
					{ auth == true ?
          				<>
            				<Heading/>
            				<MainNavBar/>
            				<Route path="/" component={MidContent}/>
            				<Footer/>
            			</>
            		:
          				<>
            				<Heading/>
            				<MainLogin/>
            				<Route path="/login" component={MidContent}/>
            				<Footer/> 
          				</>
          			}
				</Switch>
				</BrowserRouter>
			</div>
		</>
	);
};

export default Routes;