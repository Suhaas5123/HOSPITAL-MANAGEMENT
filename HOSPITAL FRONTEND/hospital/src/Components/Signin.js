import { Link } from "react-router-dom";
import '../Components/button.css'
import hospital from '../images/hospital.jpg';
import Footer from "./footer";
import NavBar from "./navigationBar";
import Button from '@mui/material/Button';
function Signin() {
    return ( 
    <>
    <div>
        <NavBar/>
    </div>
    <div className="main">
        <div className="hospital">
        <img src={hospital} alt="hospital" height={500} width={750}/>
        </div>
        <div className="signin">
    <Button variant="contained" color="success" className="homebutton" >
    <Link to="/stafflogin" style={{textDecoration:"none",color:"white"}}>Staff Login</Link>
      </Button>
    <br/>
    <br/>
    <Button variant="contained" color="success" className="homebutton" >
    <Link to="/patientlogin" style={{textDecoration:"none",color:"white"}}>Patient Login</Link>
      </Button>
    </div>
    </div>
    <div>
        <Footer/>
    </div>
    </> 
    );
}

export default Signin;