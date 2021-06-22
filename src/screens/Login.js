import React, { useState } from "react";
import SignInScreen from "./SignInScreen";
import "./Login.css";

function Login() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo "
          src="https://img.pngio.com/netflix-logo-transparent-png-stickpng-netflix-logo-transparent-background-2560_1440.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          SignIn
        </button>

        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited films,TV programmes and more</h1>
            <h2>Watch anywhere . Cancel anytime</h2>
            <h3>
              Ready to watch? .Enter your email to create or restart your
              membership with us thank you!!
            </h3>
            <div className="loginScreen__input">
              <form action="">
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  {" "}
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
