import React from "react";
import logo from "../assets/your-logo-here-black.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="Your logo Here" />
      </div>
      <h1 className="title">The best way to create your wealth!</h1>
      <p className="intro">
        An app built to help you manage your money. Click on the button bellow
        to explore the app.
      </p>
      <div>
        <button className="start-button">
          <Link to="/InitialInputs">Start</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
