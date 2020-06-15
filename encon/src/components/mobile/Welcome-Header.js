import React from "react";
import "../../styles/mobile/Welcome-Header.scss";

export const WelcomeHeader = (props) => {
  console.log('props',props)
  return (
    <div className="welcomeHeader">
      <div className="userName">
        <h2>Hi {props.name} </h2>
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
