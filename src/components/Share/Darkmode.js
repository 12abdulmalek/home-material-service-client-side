import React, { useState } from 'react';
import './menubar.css'
// import { BsFillMoonFill } from 'react-icons/Bs';
import {BsFillMoonStarsFill } from "react-icons/bs";
const Darkmode = () => {
    
    const darkmode = "darkMode";
    const lightmode = "lightMode";
    const projectBody = document.body;
    let theme;
    theme = localStorage.getItem("dark"); 
    if(theme===darkmode||theme===lightmode){
        projectBody.classList.add(theme);
    }
    else{
        projectBody.classList.add(theme);
    }
     const darksite = (e) =>{  
         if(theme==darkmode){
            console.log(theme);
            projectBody.classList.replace(darkmode,lightmode);
            projectBody.classList.remove(theme);
            localStorage.setItem("dark",lightmode);
            theme = lightmode;
          
         }
         else{
            console.log(theme);
            projectBody.classList.replace(lightmode,darkmode);
            projectBody.classList.remove(theme);
            localStorage.setItem("dark",darkmode);
            theme = darkmode;
    
         }
     }
   
    return (
        <div>
    <button onClick={(e)=>darksite(e)} className="darkButton"> <BsFillMoonStarsFill/></button>       
        </div>
    );
};

export default Darkmode;