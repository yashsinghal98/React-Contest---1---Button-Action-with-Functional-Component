import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [click,setclick]=React.useState(false);
  let handleclick=()=>{
    let val=click;
    val=true;
    setclick(val);
  }
  return (
    <div id="main">
      <button id="click" onClick={()=>handleclick()}></button>
      {click&&(<pre id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</pre>)}
    </div>
  );
}


export default App;
