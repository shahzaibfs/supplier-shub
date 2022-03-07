import React from 'react'

import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Index = () => {
  const user = useSelector(store=>store.authReducer) 
  if(!user.isLogin){
    return <Navigate to={"/login"} />
  }
  else{
      return <Outlet />
  }
  
  
}

export default Index