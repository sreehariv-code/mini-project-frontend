import React from "react";
import Wrapper from "../../components/Wrapper";
import { UserAuth } from "../../context/UserAuthContext";

const ProfilePage = () => {
  const {
    user: { name, email },
  } = UserAuth();

  return (
    <Wrapper>
      <p>Username: {name}</p>
      <p>Email: {email}</p>
    </Wrapper>
  );
};

export default ProfilePage;
