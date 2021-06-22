import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />

      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkhYVocW3Ux23hw3ZHahyXSGuCvM0QJdkwPg&usqp=CAU"
            alt=""
          />
          <div className="profileScreen__details">
            <h2> {user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <p>Renewal Date:</p>
              <p>
                Netflix Standard <span>1080p</span>
              </p>
            </div>
            <button
              onClick={() => auth.signOut()}
              className="profileScreen__signOut"
            >
              {" "}
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
