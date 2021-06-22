import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Nav.css";

function Nav() {
  const history = useHistory();
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    // we mean than whenever we scroll we are a listening to that event and then we triger the transitionNavBar function
    window.addEventListener("scroll", transitionNavBar);

    //when the component is mounted we need to clean up so
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    //${show &&'nav__blue'} this means that only add the nav__blue class if the show is true
    <div className={`nav ${show && "nav__blue"}`}>
      <div className="nav_content">
        <img
          onClick={() => history.push("/")}
          className="nav_logo"
          src="https://img.pngio.com/netflix-logo-transparent-png-stickpng-netflix-logo-transparent-background-2560_1440.png"
          alt=""
        />

        <img
          onClick={() => history.push("/profile")}
          className="nav_avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkhYVocW3Ux23hw3ZHahyXSGuCvM0QJdkwPg&usqp=CAU"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
