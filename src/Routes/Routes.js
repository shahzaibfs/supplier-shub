import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import { HomeLayout, Home } from "../Pages";
import Loader from "../Components/Loader/Loader";

const Login = React.lazy(() => import("../Pages/Login"));
const Signup = React.lazy(() => import("../Pages/Signup"));
const Category = React.lazy(() => import("../Pages/Category"));
const Product = React.lazy(() => import("../Pages/Product"));
const Cart = React.lazy(() => import("../Pages/Cart"));
const Checkout = React.lazy(() => import("../Pages/Checkout"));
const Dashboard = React.lazy(() => import("../Pages/Dashboard"));

const CustomerDashboard = React.lazy(() => import("../Pages/Dashboard/CustomerDashboard"));
const SupplierDashboard = React.lazy(() => import("../Pages/Dashboard/SupplierDashboard"));


const Routes = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Switch>
      
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<Home />} />                                 
          <Route path="cart" element={<Cart />} />                             

          <Route path="products/:productCategory" element={<Category />} />    
          <Route path="products/:productCategory/:id" element={<Product />} />   
        
          <Route path="checkout" element={<Checkout />} />                       
          <Route path="dashboard" element={<Dashboard />} >
            
          <Route path="customer" element={<CustomerDashboard />} />   
          <Route path="supplier" element={<SupplierDashboard />} />    

            </Route>                   

        </Route>
     
        <Route path="/login" element={<Login />} />                            
        <Route path="/404Error" element={<h1>Error 404</h1>} />                
        <Route path="/signup" element={<Signup />} />                          
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
