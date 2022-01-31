import React from "react";
import { Route,Routes as Switch } from "react-router-dom";

import {Home} from "../Pages";
import Loader from "../Components/Loader/Loader";
const Login = React.lazy(() => import('../Pages/Login'));
const Signup = React.lazy(() => import('../Pages/Login'));


const Routes = () => {
  return (
    <React.Suspense fallback={<Loader />}>
    <Switch>
      {
      /* ----------Home Routing-----------  */
      /* ----------Home Routing-----------  */
      /* ----------Home Routing-----------  */
      /* ----------Home Routing-----------  */
      }
      <Route  path="/" element={<Home />}/>
      {
      /* ----------Auth Routing-----------  */
      /* ----------Auth Routing-----------  */
      /* ----------Auth Routing-----------  */
      /* ----------Auth Routing-----------  */
      }
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {
      /* ----------Private Routes-----------  */
      /* ----------Private Routes-----------  */
      /* ----------Private Routes-----------  */
      /* ----------Private Routes-----------  */
      }
    </Switch>
    </React.Suspense>
  );
};

export default Routes;
