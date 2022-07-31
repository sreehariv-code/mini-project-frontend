import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../context/UserAuthContext";

const ProtectedRoutes = () => {
  const { user } = UserAuth();
  // const [login,isLogin] = useState();
  // console.log(user.uid);
  return user.uid === "" ? <Navigate to="/login" /> : <Outlet />;
};

export default ProtectedRoutes;
