  import React from "react";
  import '../Components/homepage.css'
  import animation from '../images/animation.mp4'
  import Button from '@mui/material/Button';
  import img from '../servicespics/servicesallday.mp4';
import ViewAppointment from "../Doctor/viewAppointment";

  function HomePage() {
  
      return ( 

          <>
          <div className="splitscreen">
          <div className="toppane">
          <h1 className="h1">"Welcome to Our Hospital Website"</h1>

  <h2 className="h2">At Hospital, we are committed to providing exceptional healthcare services to our community. 
    With a team of highly skilled medical professionals and state-of-the-art facilities, 
    we offer a wide range of medical specialties and treatments to meet the diverse needs of our patients.</h2>
    <div className="getstarted">
    <Button variant="contained" color="success" className="homebutton" >
          Get Started 
        </Button>

    </div>
          </div>
          <div className="bottompane">
          <video className='videoTag' autoPlay loop muted>
            <source src={animation} type='video/mp4' />
        </video>
          </div>
        </div>
        <div className="flex-box">
          <div className="hr-line"></div></div>
        <div className="split">
        <div className="left">
          <video className='videoTag' autoPlay loop muted>
            <source src={img} type='video/mp4' />
        </video>
          </div>
          <div className="right">
          <h1 className="h1">"Find the Best Services"</h1>

  <h2 className="h2">Our hospital offers a comprehensive range of healthcare services to meet the needs of our patients.
  Our highly skilled medical team provides specialized care in various departments, including cardiology, neurology, orthopedics, oncology, and obstetrics. 
  We offer state-of-the-art diagnostic facilities, advanced surgical procedures, and personalized treatment plans. </h2>

    </div>
          </div>
          <>
          </>
          <ViewAppointment/>
          </>
      );
  }

  export default HomePage;