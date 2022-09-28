import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../context/UserAuthContext";

const ProtectedRoutes = () => {
  const { user } = UserAuth();
  // const [login,isLogin] = useState();
  // console.log(loggedIn);
  console.log(user.uid);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
