import React from "react";
import { UserAuth } from "../../context/UserAuthContext";

const ProfilePage = () => {
  const { user } = UserAuth();
  console.log(user.uid);
  return (
    <div>
      ProfilePage
      <h1>Email: {user && user.email}</h1>
    </div>
  );
};

export default ProfilePage;