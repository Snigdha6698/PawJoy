import react from "react";
import {component} from "react";
import './insiderlinks.css';
function About() {
    return (
      <>
      <div class="aboutbackground">
        <div className='SplitAbout'></div>
        <div className="Abouthead">
          <h1>AboutUs</h1>
        </div>
        <div className="Aboutmessage">
          <p>Welcome to PawJoy, where we are dedicated to enhancing the lives of pets and their owners.</p>
          <p> Our web application offers a range of services to promote the health, happiness, and well-being of your furry friends. </p>
          <p> From managing health records and scheduling vet appointments to connecting with other pet owners for playdates.</p> 
          <p> PawJoy is your one-stop destination for all things pet-related. </p>
          <p>With features like lost pet tracking, community planning tools, and event management.</p>
          <p> we strive to create a supportive and cheerful environment for both pets and their owners.</p>
          <p> Join us in our mission to create a thriving pet-friendly community and experience the joy and companionship that comes with being a pet owner.</p>
        </div>
        </div>
        <div class="whyushead">
          <h1>Why Us?</h1>
          </div>
          <div className="whyimage">
            <div className="data1" >
            <h2>Comprehensive Range of Services</h2>
            <p>PawJoy offers a wide range of pet-related services, providing a convenient one-stop solution for pet owners.</p>
            </div>
            </div>

        

        </>
      );
    }
    
export default About;