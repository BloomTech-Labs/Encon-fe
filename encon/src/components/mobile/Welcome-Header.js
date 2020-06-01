import React from "react";
import "../../styles/mobile/Welcome-Header.scss";

export const WelcomeHeader = () => {
  return (
    <div className="welcomeHeader">
      <div className="userName">
        <h2>Hi "insert user's name here"</h2>
      </div>
      <div className="notUser">
        <p>
          (Not you?
          <br />
        </p>
        <a href="/register" className="newAccount">
          Sign up with your account)
        </a>
      </div>
    </div>
  );
};
