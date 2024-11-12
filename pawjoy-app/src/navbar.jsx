import React,{useState} from "react";
import './App.css';
function navBar(){
    return(
        <>
        <nav className="announcementBar" role="banner" > 
        <div className="navbar-container">       
      <a class="links" href="/Homepagelink" target="_blank">Home Page </a>
       <a class= "links" href="/Aboutuslink" target="_blank">About Us </a>
       <a class="links" href="/offerlink" target="_blank">Offer</a>
      
        <a class="links" href="/bloglink.jsx" target="_blank">Blog</a>
        <a class="links" href="/contactuslink" target="_blank">Contact Us</a>
        </div>
        </nav>
        </>
    )

}
export default navBar;