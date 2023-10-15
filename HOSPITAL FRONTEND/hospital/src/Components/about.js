import React from "react";
import './homepage.css'
import img from '../pharmacy/about.jpg';
function About() {
  return (
    <>
    <div className="img_wrrap">
        </div>
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="aboutBottom">
        <h1 style={{color:'#00C1A2'}}> ABOUT OUR HOSPITAL</h1>
        <p className="Abt_cont">
        The mission of Our Hospital is to improve the health of the community and the world by setting the standard of excellence in medical education, research and clinical care.
        </p>
        <ul>
            <li>Educates medical students, scientists, health care professionals and the public</li>
            <li>Conducts biomedical research</li>
            <li>Provides patient-centered medicine to prevent, diagnose and treat human illness.</li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default About;