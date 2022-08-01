import React from "react";
import Wrapper from "../../components/Wrapper";
import { UserAuth } from "../../context/UserAuthContext";
import "./Profile.css";

const ProfilePage = () => {
  const {
    user: { name, email },
  } = UserAuth();

  return (
    <Wrapper>
      <div className="profile-container">
        <div className="profile-card">
          <div className="banner"></div>
          <div className="content">
            <div className="profile-img">
              <img
                src="./images/avatar.jpg"
                alt="avatar"
                className="demo-img"
              />
            </div>
            <div className="about">
              <h1>{name}</h1>
              <br />
              <p>Email: {email}</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProfilePage;
