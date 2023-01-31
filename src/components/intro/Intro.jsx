
import "./intro.scss";

import {init} from "ityped";
import React,{useEffect ,useRef } from "react";

export default function Intro() {
  const textRef =useRef();

  
    useEffect(()=>{
    init(textRef.current, {
      showCursor:false,
      strings: ["Software Developer","Software Engineer","Content Creater"],
    });

  },[]);
  return (
    <div className="intro" id="intro">
      <div className="left">
      <div className="imgContainer">
        <img src="assets/dipin.png" alt=""/>
        
      </div>
      </div>
      <div className="right">
      <div className="wrapper">
      <h2>Hi I am</h2>
      <h1>Dipin Acharya</h1>
      <h3>
        Freelance<span ref={textRef}></span>
        </h3>
</div>
    
    < a href="#work">
      <img src="assets/down.png"alt=""/>
    </a>
    </div>
    </div>
  );
 
}
