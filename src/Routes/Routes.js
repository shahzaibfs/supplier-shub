import React from "react";
import { Navigate, Route, Routes as Switch } from "react-router-dom";

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

//customer dashboard
const CustomerProfile = React.lazy(() => import("../Pages/Dashboard/CustomerDashboard/Settings/ViewProfile"));
const CustomerShippingInfo = React.lazy(() => import("../Pages/Dashboard/CustomerDashboard/Settings/CustomerShippingInfo"));
const CustomerTrackOrders = React.lazy(() => import("../Pages/Dashboard/CustomerDashboard/Orders/TrackOrders"));
const CustomerPreviousOrders = React.lazy(() => import("../Pages/Dashboard/CustomerDashboard/Orders/PreviousOrder"));
const CustomerViewReports = React.lazy(() => import("../Pages/Dashboard/CustomerDashboard/Reports/ViewReports"));


//Supplier dashboard routes 
const SupplierProfile = React.lazy(() => import("../Pages/Dashboard/SupplierDashboard/settings/Profile"));
const SupplierAddresses = React.lazy(() => import("../Pages/Dashboard/SupplierDashboard/settings/SupplierAddresses"));
const SupplierTrackOrders = React.lazy(() => import("../Pages/Dashboard/SupplierDashboard/orders/TrackOrders"));
const SupplierCompletedOrders = React.lazy(() => import("../Pages/Dashboard/SupplierDashboard/orders/CompletedOrders"));
const SupplierAllPRoducts = React.lazy(() => import("../Pages/Dashboard/SupplierDashboard/products/AllProducts"));
const SupplierViewReports = React.lazy(() => import("../Pages/Dashboard/SupplierDashboard/reports/Report"));
const SupplierOutOfStockProducts = React.lazy(() => import("../Pages/Dashboard/SupplierDashboard/products/OutOfStock"));
const SupplierAddProduct = React.lazy(() => import("../Pages/Dashboard/SupplierDashboard/products/AddProduct"));


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

            <Route path="customer" element={<CustomerDashboard />} >
              <Route path="" element={<Navigate to={"settings/view-profile"} />} />
              <Route path="settings/view-profile" element={<CustomerProfile />} />
              <Route path="settings/shipping-info" element={<CustomerShippingInfo />} />
              <Route path="orders/track-orders" element={<CustomerTrackOrders />} />
              <Route path="orders/previous-orders" element={<CustomerPreviousOrders />} />
              <Route path="reports/view-reports" element={<CustomerViewReports />} />



            </Route>
            <Route path="supplier" element={<SupplierDashboard />} >


            <Route path="" element={<Navigate to={"settings/view-profile"} />} />
            <Route path="settings/view-profile" element={<SupplierProfile />} />
            <Route path="settings/addresses" element={<SupplierAddresses />} />
            <Route path="orders/track-orders" element={<SupplierTrackOrders />} />
            <Route path="orders/completed-orders" element={<SupplierCompletedOrders />} />
            <Route path="reports/view-reports" element={<SupplierViewReports />} />
            <Route path="products/all-products" element={<SupplierAllPRoducts />} />
            <Route path="products/add-product" element={<SupplierAddProduct />} />

            <Route path="products/out-of-stock" element={<SupplierOutOfStockProducts />} />
</Route>

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
