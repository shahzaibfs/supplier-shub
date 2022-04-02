import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import {useGetAuthenticatedUser} from "../../hooks/useGetAuthenticatedUser"



const Index = () => {
  const user = useGetAuthenticatedUser();
  if(!user.isLogin){
    return <Navigate to={"/login"} />
  }
  else{
      return <Outlet />
  }
  
  
}

export default Index