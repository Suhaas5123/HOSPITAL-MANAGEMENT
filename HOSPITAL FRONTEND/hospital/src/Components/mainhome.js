import Nav from "../pages/login/navbar";
import Footer from "./footer";
import HomePage from "./homepage";

function MainHome() {
    return ( 
        <>

        <Nav/>
        <HomePage/>
        <div className="flex-box">
        <div className="hr-line"></div></div>
        <Footer/>
        </>
     );
}

export default MainHome;