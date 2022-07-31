import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../context/UserAuthContext";

const ProtectedRoutes = () => {
  const { user, loggedIn } = UserAuth();
  // const [login,isLogin] = useState();
  console.log(loggedIn);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
