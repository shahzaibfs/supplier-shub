import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetAuthenticatedUser } from "./hooks/useGetAuthenticatedUser";

import Routes from "./routes/Routes";
import { doCheckAuthenticatedUserFromAPi } from "./services/authMiddleWare";


function App() {
  const user = useGetAuthenticatedUser();
  const dispatch = useDispatch();
  useEffect(() => {

    if(user?.token !== ""&& !user.isLogin){
      dispatch(doCheckAuthenticatedUserFromAPi(user.token))
    }
     // eslint-disable-next-line 
  }, [])
  
  return <Routes />;
}

export default App;
