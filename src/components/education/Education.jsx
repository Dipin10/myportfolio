import React from "react";
import "./education.scss"


export default function education() {
  const data = [
    {
      id: 1,
      name: "Dipin Acharya",
      title: "School Leaving Certificate",
      img:
        "assets/dipin.png",
      icon: "assets/hat.png",
      desc:
        "School Leaving Certificate- Alpha Boarding School(2014)  ",
    },
    {
      id: 2,
      name: "Dipin Acharya",
      title: "Higher Secondary School",
      img:
      "assets/dipin.png",
      icon: "assets/hat.png",
      desc:
      "∙+2(Science)Pokhara Higher Secondary School (2016)",
      featured: true,
    },
    {
      id: 3,
      name: "Dipin Acharya",
      title: "Software Engineering",
      img:
      "assets/dipin.png",
            icon: "assets/hat.png",
      desc:
        "Gandaki College of Engineering and Science (2020)",
    },
  ];
  return (
    <div className="education" id="education">
      <h1>Education</h1>
      <div className="container">
        {data.map((d) => (
                 <div className={d.featured ? "card featured" : "card"}>

          <div className="top">
            <img src="assets/right-arrow.png"className="left"/>
           <img 
           className="user"
           src={d.img}
           alt=""/>
         <img className="right" src={d.icon} alt="" />

         </div>
<div className="center">
  {d.desc}
</div>
<div className="bottom">
  <h3>{d.name}</h3>
  <h4>{d.title}</h4>
  </div>       
 </div>
 ))}
      </div>
    </div>
  );
}
