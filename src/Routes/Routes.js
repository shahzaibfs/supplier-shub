import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import { HomeLayout, Home } from "../Pages";
import Loader from "../Components/Loader/Loader";

const Login = React.lazy(() => import("../Pages/Login"));
const Signup = React.lazy(() => import("../Pages/Signup"));
const Catalog = React.lazy(() => import("../Pages/Catalog"));
const Product = React.lazy(() => import("../Pages/Product"));
const Cart = React.lazy(() => import("../Pages/Cart"));
const Checkout = React.lazy(() => import("../Pages/Checkout"));

const Routes = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Switch>
        {/* ----------Home Routing-----------  */
        /* ----------Home Routing-----------  */
        /* ----------Home Routing-----------  */
        /* ----------Home Routing-----------  */}
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />

          <Route path="products/:productCategory" element={<Catalog />} />
          <Route path="products/:productCategory/:id" element={<Product />} />
          {/* ----------Private Routes-----------  */
          /* ----------Private Routes-----------  */
          /* ----------Private Routes-----------  */
          /* ----------Private Routes-----------  */}
          <Route path="checkout" element={<Checkout />} />
        </Route>
        {/* ----------Auth Routing-----------  */
        /* ----------Auth Routing-----------  */
        /* ----------Auth Routing-----------  */
        /* ----------Auth Routing-----------  */}
        <Route path="/login" element={<Login />} />
        <Route path="/404Error" element={<h1>Error 404</h1>} />
        <Route path="/signup" element={<Signup />} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
