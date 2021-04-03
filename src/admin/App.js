import React from 'react';
import {Switch,Route,Redirect,BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

import AdminLogin from './AdminLogin';
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';
import Profile from './Profile';

import Orders from './Orders';
import Products from './Products';
import Users from './Users';

import CurrentOrders from './CurrentOrders';
import NewOrders from './NewOrders';
import OldOrders from './OldOrders';

import AddProduct from './AddProduct';
import DeleteProduct from './DeleteProduct';
import UpdateProduct from './UpdateProduct';

import AddUser from './AddUser';
import DeleteUser from './DeleteUser';
import UpdateUser from './UpdateUser';

import TopCity from './TopCity';
import TopState from './TopState';
import TopProducts from './TopProducts';

import TotalProducts from './TotalProducts';
import TotalSales from './TotalSales';
import TotalUsers from './TotalUsers';

import DailySales from './DailySales';
import MonthlySales from './MonthlySales';
import WeeklySales from './WeeklySales';

//    adauth !== null && adauth !== undefined && adauth !== ''



const  App = () => {

   //const adauth = localStorage.getItem('token');
   const adauth = false;

  return (
    <>
      
        <BrowserRouter>
        <Switch>

          { adauth == false ?

              <>
                  
                <Navbar/>
                <Route exact path="/" component={Home} />

                <Route exact path="/changePassword" component={ChangePassword} />
                <Route exact path="/editProfile" component={EditProfile} />
                <Route exact path="/profile" component={Profile} />

                <Route exact path="/orders" component={Orders} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/users" component={Users} />

                <Route exact path="/currentOrders" component={CurrentOrders} />
                <Route exact path="/NewOrders" component={NewOrders} />
                <Route exact path="/oldOrders" component={OldOrders} />

                <Route exact path="/dailySales" component={DailySales} />
                <Route exact path="/monthlySales" component={MonthlySales} />
                <Route exact path="/weeklySales" component={WeeklySales} />

                <Route exact path="/addProduct" component={AddProduct} />
                <Route exact path="/deleteProduct" component={DeleteProduct} />
                <Route exact path="/updateProduct" component={UpdateProduct} />

                <Route exact path="/addUser" component={AddUser} />
                <Route exact path="/deleteUser" component={DeleteUser} />
                <Route exact path="/updateUser" component={UpdateUser} />

                <Route exact path="/topCity" component={TopCity} />
                <Route exact path="/topState" component={TopState} />
                <Route exact path="/topProducts" component={TopProducts} />

                <Route exact path="/totalUsers" component={TotalUsers} />
                <Route exact path="/totalSales" component={TotalSales} />
                <Route exact path="/totalProducts" component={TotalProducts} />

              </>

              :
                  
              <>  

                <Route exact path="/" component={AdminLogin} /> 

              </>
          }


        </Switch>
        </BrowserRouter>

        <Footer/>

    </>
  );
}

export default App;
