import React, { useState } from "react";
import ".//App.css";

export default function App() {
  const [on, setOff] = useState();
  const [darkMode, setDarkMode] = useState(true);

  const style = {
    color: "white",
    backround: "black",
  };

  const darkModeHandler = () => {
    if (darkMode) {
      setDarkMode(false);
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setDarkMode(true);
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <button className="setoficon" onClick={() => darkModeHandler()}>
        {darkMode ? (
          <img
            src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
            width={30}
          />
        ) : (
          <img
            src="https://png.pngtree.com/element_our/20190529/ourmid/pngtree-night-icon-image_1198543.jpg"
            width={30}
          />
        )}
      </button>
      <div>
        <h1 style={{ opacity: "0.5", fontFamily: "fantasy" }}>Bulb On-Off</h1>
      </div>
      {on ? (
        <div>
          <img
            src="https://freepngimg.com/save/31669-bulb-off-transparent-image/500x500"
            width={500}
          />
        </div>
      ) : (
        <div>
          <img
            src="https://i.ibb.co/2WV9gxD/onbulb-removebg-preview.png"
            width={500}
          />
        </div>
      )}
      <button onClick={() => setOff(!on)}>{on ? "On" : "Off"}</button>
      &nbsp;&nbsp;&nbsp;
    </>
  );
}
