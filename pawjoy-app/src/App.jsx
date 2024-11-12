import React from 'react';
import { Component } from 'react';
import './App.css';
import Navigation from "./navbar.jsx";
import Aboutdisply from "./Aboutuslink.jsx";
import Blogdisply from "./bloglink.jsx";
import Contactdisply from "./contactuslink.jsx";
import Homedisply from "./Homepagelink.jsx";
import Offerdisply from "./offerlink.jsx";
//import Pricedisply from "./pricelinelist.jsx";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component{
  handleClick = () => {
    alert("you clicked button");
  };
  render(){
    return(
      <>
      <div class="background">
        <Router>
        <Navigation/>
        <Routes>
          <Route path='/Homepagelink' exact='/Homepagelink' element={<Homedisply />} ></Route>
          <Route path='/Aboutuslink' exact='/Aboutuslink' element={<Aboutdisply/>}></Route>
          <Route path='/offerlink' exact='/offerlink' element={<Offerdisply/>}></Route>
          
          <Route path='/bloglink' exact='/bloglink' element={<Blogdisply/>}></Route>
          <Route path='/contactuslink' exact='/contactuslink' element={<Contactdisply/>}></Route>
        </Routes>
        </Router>
        <div className='Intro'>
          <h1> PawJoy: Pet Paradise</h1></div>
          <div className="caption">
          <p>Welcome to PawJoy: Where pets thrive and owners connect for a healthier, happier community.</p>
          </div>
      
          <button class="button button1" onClick={this.handleClick}>Check Offer!</button>


     </div>
     <Aboutdisply/>


    </>
    )
  }

}

export default App;