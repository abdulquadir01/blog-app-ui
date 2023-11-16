import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

import { isLoggedIn } from "../util/AuthUtil";



const InnerRoutes = () => {
  const [login, setLogin] = useState(isLoggedIn());


  const isUser = window.location.href;

  // console.log("is logged in: ", login);

  if (login && isUser.length > 23) {
    return <Outlet />;
  }
  
  return <Navigate to="/login" />;
  
};

export default InnerRoutes;
