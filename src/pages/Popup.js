// import React from "react";
import Popup from "../components/Popup.js";
// import { useState, useEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";

function PopupApp() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setTimedPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <div className="myDiv">
        <h1>React app!</h1>
        <br />
        <br />
        <button onClick={() => setButtonPopup(true)}>open popup</button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h2>My popup</h2>
          <p>This is my button triggerd poupup</p>
        </Popup>
        <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
          <h2>My timed popup</h2>
          <p>This is my time triggerd poupup</p>
        </Popup>
      </div>
    </div>
  );
}

export default PopupApp;
