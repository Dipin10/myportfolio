import React from "react";
import "./topbar.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
         <a href="#intro" className="logo">
         
            DipinAcharya
            </a>
         <div className="itemContainer">
            <LinkedInIcon className="icon"/>
            
            <span>Dipin Acharya</span>
            </div>
            <div className="itemContainer">
            <GitHubIcon className="icon" />
            <span>Dipin10</span>
         </div>
      </div>
      <div className="right">

        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
        </div>
      </div>
    </div>
    </div>
  );
}
