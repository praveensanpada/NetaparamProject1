import React from 'react';
import ReactDOM from 'react-dom';

//import App from './App';
//import Head from './Head'
//import Nav from './Nav';
//import Slider from './Slider';
//import Footer from './Footer'
//import Main from './Main';
//import Prod from './Prod';
//import Reg from './Reg';
//import Log from './Log';
//import Contact from './Contact';
//import PassData from './PassData';
//import Test from './ECOM/Test';
//import Header from './ECOM/Header';
//import App from './ECOM/App';
//import P4 from './ECOM/P4'
//import App from './ECOM/MainHome'

//import CartHead from './cart/CartHead'

//import App from './final/App'
//import MyOrder from './final/MyOrder'

//import Cart from './final/Cart'

//import Routes from './final/Routes';

import ReactRoutes from './final/ReactRoutes';

//import MainLogin from './final/MainLogin';

//import LoginaNav from './ECOM/Login';

//import Products from './final/Products'

//import MainLHome from './final/MainLHome'


//import NitAPI from './NitAPI'

//import App from './newsweb/App'

//import App from './admin/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import AllReducers from './cart/reducers/Combine.js';

const store = createStore(AllReducers);


ReactDOM.render(
    <Provider store={store}>
    	<ReactRoutes/>
    </Provider>
    ,document.getElementById('root')
    );

