 
import React, { useState } from "react";
import ".//App.css";

export default function App() {
  const [on, setOff] = useState();

  
  return (
    <>
      <div>
        <h1 style={{opacity : "0.5",fontFamily :"fantasy"}}>Bulb On-Off</h1>
      </div>
      {on ? (
        <div>
          <img src="https://freepngimg.com/save/31669-bulb-off-transparent-image/500x500" width={500} />
        </div>
      ) : (
        <div>
          <img src="https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-320-80.jpg" width={375}/>
        </div>
      )}
    <button onClick={()=>setOff(!on)}>{on? "On" : "Off"}</button>
    </>
  );
}
