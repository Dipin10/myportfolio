import React, { useState } from "react";
import "./aboutme.scss"


export default function Aboutme() {
  const data=[
    
      {
        id: "1",
        icon:"./assets/uml.png",
        title: "About Me",
        desc:"An ambitious communicator with major aspirations to be a skilled software architect, worked on web and mobile application projects",
        img:"./assets/dipinpic.JPG",
      },
      {
        id: "2",
        icon:"./assets/java.png",
        title: "My Skills",
       
        
        desc:"C-programming Java(Spring,SpringBoot) Javascript MYSQL Unity Unified MOdeling Language ReactJS NodeJS",
      
        
        
        img:"./assets/roomdecor.jpg",
      },
      {
        id: "3",
        icon:"./assets/react.png",
        

        title: "Other Skills",
        desc:"Enthusiast and self-learner HTML5, CSS Basic knowledge of software testing and quality assurance process, Cloud Computing, Analysis and design of Algorithms, Enterprise Application Development",
        img:"./assets/programmer1.png",
      },
      {
        id: "4",
        icon:"./assets/react.png",
          title: "Hobbies",
          desc:"I love travelling and exploring new places, reading books and articles, listening music.",
          img:"./assets/webdeveloper.png",
      },
  ];
  const [currentSlide,setCurrentSlide]=useState(0);
  

  const handleClick=(way)=>{
    way==="left" ? setCurrentSlide(currentSlide> 0 ? currentSlide-1:2):
    setCurrentSlide(currentSlide<data.length-1 ? currentSlide+1:0 );
  };
    return (
      <div className="aboutme" id="aboutme">
        <h1>AboutMe</h1>
        <div 
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          { data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    {/* <img src={d.img} alt=""></img> */}
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Always Learner</span>
                </div>
              </div>
              <div className="right">
              <img src={d.img} alt=""/>
                 <h1></h1>

              </div>
            </div>
            </div>
            )
            )}
          </div>
        
     
        
 <img src="assets/rightarrow.png" className="arrow left"alt="hello"onClick={()=>handleClick("left")}></img>
 <img src="assets/rightarrow.png" className="arrow right"onClick={()=>handleClick("")}></img>
  </div>


    );
  }


