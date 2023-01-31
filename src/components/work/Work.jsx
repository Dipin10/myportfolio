import React, { useState } from "react";
import "./work.scss"


export default function Work() {
  const data=[
    {
      id: "1",
      // icon:"./assets/uml.png",
      title: "Software Engineer ",
      desc:"Worked as a Software Engineer at Evolve Private Limited . Execute full software development life cycle (SDLC) in Agile environment Write full-designed, efficient, and testable code Provide ongoing maintenance, support, and enhancements in existing software platforms Collaborate with different teams to achieve elegant solutions Provide recommendations for continuous improvements Work alongside other engineers to elevate technology and consistently apply best practices",
      img:"./assets/programmer.png",
    },
      {
        id: "2",
        // icon:"./assets/uml.png",
        title: "GhareluApp",
        desc:"It is a web application that will help the general users to find the right kind of manpower they need to do household related tasks like construction and maintenance. It also allows the administrator to upload the information regarding the available manpower using Javascript, PHP, MYSQL for Software Engineering 4th semester course.",
        img:"./assets/webdeveloper.png",
      },
      {
        id: "3",
        desc:"It is an application most useful for Nepal Electricity Authority it helps administrator to upload the information regarding the work of available manpower. To provide facilities for online payment to the users. It provides users news about NEA reasons why there is no electricity in their area and updates when the problem will be solved. It will be an easier and convenient, fast, reliable medium for the users to get the services provided by the Nepal Electricity Authority using React-native framework for software engineering 6th semester project.",
        title: "Batti",
        img:"./assets/battiUI.jpeg",
        links:"https://github.com/Dipin10/ghareluapp"
      },
      {
        id: "4",
        desc:"Room Decor is a mobile application where objects that reside in the real world are enhanced by computer- generated perceptual information. It helps on providing services for users who are having problems with different interior decoration. It uses Augmented reality technology. It allows users to drag and drop different virtual 3D objects in a real environment and helps user to choose different sizes of the same object. Room Decor is a simple straight forward and easy way of service. With the help of this application, it will be easy for different users for decoration using Unity for Software Engineering 8th semester project. ",
       title: "Room Decor",
        img:"./assets/roomdecor.png",
      },
    
  ];
  const [currentSlide,setCurrentSlide]=useState(0);
  

  const handleClick=(way)=>{
    way==="left" ? setCurrentSlide(currentSlide> 0 ? currentSlide-1:2):
    setCurrentSlide(currentSlide<data.length-1 ? currentSlide+1:0 );
  };
    return (
      <div className="work" id="work">
        
        <div 
        className="slider"
        
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
          { data.map((d) => (
          <div className="container">
            <div className="item">
              
              <div className="left">
                <div className="leftContainer">
               
                  <div className="imgContainer">
                  <h2>{d.title}</h2>
                  
                  
                  <img src={d.img} alt=""/>

                  
                  
                    {/* <img src={d.img} alt=""></img> */}
                  </div>
                  
                  {/* <span>{d.desc}</span> */}
                  {/* <span>It is a web application that will help the general users to find the right kind of manpower they need to do household related tasks like construction and maintenance. It also allows the administrator to upload the information regarding the available manpower</span> */}
                </div>
              </div>
              <div className="right">
              {/* <img src={d.img} alt=""/> */}
              <span>{d.desc}</span>
                {/* <span>It is a web application that will help the general users to find the right kind of manpower they need to do household related tasks like construction and maintenance. It also allows the administrator to upload the information regarding the available manpower</span> */}
             
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


